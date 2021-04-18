import { createReducer } from "@reduxjs/toolkit";

import {
  setMatrix,
  incrementValue,
  showPercentAction,
  showCloseAction,
  addRowAction,
  deleteRowAction,
} from "./action";

export const matrixReducer = createReducer([], {
  [setMatrix]: (state, { payload }) => payload,
  [incrementValue]: (state, { payload }) => payload,
  [showCloseAction]: (state, { payload }) => payload,
  [showPercentAction]: (state, { payload }) => payload,
  [addRowAction]: (state, { payload }) => payload,
  [deleteRowAction]: (state, { payload }) => payload,
});
