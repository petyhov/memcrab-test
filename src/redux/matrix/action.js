import { createAction } from "@reduxjs/toolkit";

import {
  SET_MATRIX,
  INCREMENT_VALUE,
  SHOW_PERCENT_ACTION,
  SHOW_CLOSE_ACTION,
  ADD_ROW_ACTION,
  DELETE_ROW_ACTION,
} from "./types";

export const setMatrix = createAction(SET_MATRIX);
export const incrementValue = createAction(INCREMENT_VALUE);
export const showPercentAction = createAction(SHOW_PERCENT_ACTION);
export const showCloseAction = createAction(SHOW_CLOSE_ACTION);
export const addRowAction = createAction(ADD_ROW_ACTION);
export const deleteRowAction = createAction(DELETE_ROW_ACTION);
