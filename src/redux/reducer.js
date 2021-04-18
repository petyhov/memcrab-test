import { combineReducers } from "redux";

import { matrixParametersReducer } from "./matrixParams";
import { matrixReducer } from "./matrix";

export const rootReducer = combineReducers({
  matrixParameters: matrixParametersReducer,
  matrix: matrixReducer,
});
