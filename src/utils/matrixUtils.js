const randomNumber = () => {
  return Math.floor(Math.random() * 1000);
};

let id = 0;

export const createRow = (column) => {
  const row = [];
  for (let i = 0; i < column; i++) {
    row.push({
      value: randomNumber(),
      id,
      showPercent: false,
      showClose: false,
    });
    id += 1;
  }
  return row;
};

export const createTable = (rowValue, columnValue) => {
  const table = [];
  for (let i = 0; i < rowValue; i += 1) {
    table.push(createRow(columnValue));
  }
  return table;
};

export const calculateFooter = (matrix) => {
  const matrixFooter = [];
  for (let i = 0; i < matrix[0].length; i += 1) {
    let columnSum = 0;
    for (let j = 0; j < matrix.length; j += 1) {
      columnSum += matrix[j][i].value;
    }
    matrixFooter.push(Math.round(columnSum / matrix.length));
  }
  return matrixFooter;
};

export const calculateCellsSum = (row) =>
  row.reduce((acumulator, cell) => acumulator + cell.value, 0);

export const calculetePercent = (row, value) => {
  const sum = calculateCellsSum(row);
  return Math.round((value / sum) * 100);
};

export const findCloseIndexArr = (matrix, cell, roundingNumber) => {
  const currentValue = cell.value;
  let difference = 0;
  const differenceArr = matrix
    .flat()
    .map((cell) => {
      difference = Math.abs(cell.value - currentValue);
      return { ...cell, difference };
    })
    .sort((a, b) => a.difference - b.difference);
  differenceArr.splice(0, 1);
  if (differenceArr.length > roundingNumber) {
    differenceArr.length = roundingNumber;
  }
  return differenceArr.map((cell) => cell.id);
};

export const calculateIncrement = (matrix, rowId, cellId) => {
  const newMatrix = [...matrix];
  newMatrix[rowId] = matrix[rowId].map((item) => {
    if (item.id === cellId) {
      let { value } = item;
      value += 1;
      return { ...item, value };
    }
    return item;
  });
  return newMatrix;
};

export const switchCloseFlag = (matrix, cell, roundingNumber, isShow) => {
  const newMatrix = [...matrix];
  if (isShow) {
    const closeIdArr = findCloseIndexArr(matrix, cell, roundingNumber);
    return newMatrix.map((row) =>
      row.map((cell) => {
        if (closeIdArr.includes(cell.id)) {
          return { ...cell, showClose: true };
        }
        return cell;
      })
    );
  }
  return newMatrix.map((row) =>
    row.map((cell) => {
      if (cell.showClose) {
        return { ...cell, showClose: false };
      }
      return cell;
    })
  );
};

export const switchPercentFlag = (matrix, rowIndex, isShowValue) => {
  const newMatrix = [...matrix];
  newMatrix[rowIndex] = matrix[rowIndex].map((item) => ({
    ...item,
    showPercent: isShowValue,
  }));
  return newMatrix;
};

export const addNewRow = (matrix) => {
  const newMatrix = [...matrix];
  const columnNumber = matrix[0].length;
  newMatrix.push(createRow(columnNumber));
  return newMatrix;
};

export const removeRow = (matrix, rowIndex) => {
  const newMatrix = [...matrix];
  newMatrix.splice(rowIndex, 1);
  return newMatrix;
};
