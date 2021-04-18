import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { setMatrixParams } from "../../redux/matrixParams";
import { setMatrix } from "../../redux/matrix";
import { createTable } from "../../utils/matrixUtils";
import { Label, SubmitButton } from "./";

const Wrap = styled.div`
  display: flex;
  justify-content: center;
`;

const FormStyled = styled.form`
  padding: 10px;
  margin-bottom: 10px;
  font-size: 30px;
  background-color: orange;
  border-radius: 10px;
  label {
    margin-bottom: 10px;
  }
`;

export const Form = () => {
  const [row, setRow] = useState("");
  const [column, setColumn] = useState("");
  const [roundingCells, setRoundingCells] = useState("");
  const dispatch = useDispatch();

  const onSubmitForm = (e) => {
    e.preventDefault();
    const matrix = createTable(row, column);
    dispatch(setMatrixParams({ row, column, roundingCells }));
    dispatch(setMatrix(matrix));
    setRow("");
    setColumn("");
    setRoundingCells("");
  };

  return (
    <Wrap>
      <FormStyled onSubmit={onSubmitForm}>
        <Label name={"Set row"} setValue={setRow} value={row} />
        <Label name={"Set column"} setValue={setColumn} value={column} />
        <Label
          name={"Set rounding cells"}
          setValue={setRoundingCells}
          value={roundingCells}
        />
        <SubmitButton>create matrix</SubmitButton>
      </FormStyled>
    </Wrap>
  );
};
