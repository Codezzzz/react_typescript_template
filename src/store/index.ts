import { combineReducers } from "redux";
import * as modules from "store/modules";

const rootReducer = combineReducers({
  ...modules,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
