import { createReducer, current } from "@reduxjs/toolkit";

import { setMatrixParams } from "./action";
import { addRowAction, deleteRowAction } from "../matrix";

export const matrixParametersReducer = createReducer(
  {},
  {
    [setMatrixParams]: (state, { payload }) => ({ ...payload }),
    [addRowAction]: (state, action) => {
      let { row } = current(state);
      let newRow = Number(row) + 1;
      return { ...state, row: `${newRow}` };
    },
    [deleteRowAction]: (state, action) => {
      let { row } = current(state);
      let newRow = Number(row) - 1;
      return { ...state, row: `${newRow}` };
    },
  }
);
