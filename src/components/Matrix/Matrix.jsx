import { connect, useDispatch } from "react-redux";

import { getMatrixParams } from "../../redux/matrixParams";
import {
  getMatrix,
  incrementValue,
  showPercentAction,
  showCloseAction,
  addRowAction,
  deleteRowAction,
} from "../../redux/matrix";

import {
  Table,
  ValueCell,
  SumCell,
  FooterCell,
  ProcentColumn,
  RemoveButton,
  AddButton,
} from "./";
import { MinusIcon, PlusIcon } from "../icons";

import {
  calculateFooter,
  calculateCellsSum,
  calculetePercent,
  calculateIncrement,
  switchCloseFlag,
  switchPercentFlag,
  addNewRow,
  removeRow,
} from "../../utils/matrixUtils";

const Component = ({ matrixParams, matrix }) => {
  const dispatch = useDispatch();
  const { row, roundingCells: roundingNumber } = matrixParams;

  let matrixFooter;
  if (row > 0) {
    matrixFooter = calculateFooter(matrix);
  }

  const incrementCell = (rowId, cellId) => () => {
    const newMatrix = calculateIncrement(matrix, rowId, cellId);
    return dispatch(incrementValue(newMatrix));
  };

  const showCloseToggle = (cell, isShow) => () => {
    const newMatrix = switchCloseFlag(matrix, cell, roundingNumber, isShow);
    return dispatch(showCloseAction(newMatrix));
  };

  const showPercentToggle = (rowIndex, isShowValue) => () => {
    const newMatrix = switchPercentFlag(matrix, rowIndex, isShowValue);
    return dispatch(showPercentAction(newMatrix));
  };

  const addRowFunction = () => {
    const newMatrix = addNewRow(matrix);
    return dispatch(addRowAction(newMatrix));
  };

  const removeRowFunction = (rowIndex) => () => {
    const newMatrix = removeRow(matrix, rowIndex);
    return dispatch(deleteRowAction(newMatrix));
  };

  return (
    <>
      {matrix.length > 0 && (
        <Table>
          <tbody>
            {matrix.map((row, rowIndex) => (
              <tr key={`row${rowIndex}`}>
                {row.map((cell) => (
                  <ValueCell
                    key={cell.id}
                    isShowPercent={cell.showPercent}
                    isShowClose={cell.showClose}
                    onMouseEnter={showCloseToggle(cell, true)}
                    onMouseLeave={showCloseToggle(cell, false)}
                    onClick={incrementCell(rowIndex, cell.id)}
                  >
                    {cell.showPercent ? (
                      <ProcentColumn
                        value={calculetePercent(row, cell.value)}
                      />
                    ) : (
                      cell.value
                    )}
                  </ValueCell>
                ))}
                <SumCell
                  onMouseEnter={showPercentToggle(rowIndex, true)}
                  onMouseLeave={showPercentToggle(rowIndex, false)}
                >
                  {calculateCellsSum(row)}
                </SumCell>
                <td>
                  <RemoveButton onClick={removeRowFunction(rowIndex)}>
                    <MinusIcon />
                  </RemoveButton>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              {matrixFooter.map((cell, columnIndex) => (
                <FooterCell key={`column${columnIndex}`}>{cell}</FooterCell>
              ))}
              <td>
                <AddButton onClick={addRowFunction}>
                  <PlusIcon />
                </AddButton>
              </td>
            </tr>
          </tfoot>
        </Table>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  matrixParams: getMatrixParams(state),
  matrix: getMatrix(state),
});

export const Matrix = connect(mapStateToProps)(Component);
