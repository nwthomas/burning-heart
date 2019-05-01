import { signupReducer } from "./signupReducer";
import { loginReducer } from "./loginReducer";
import { donorReducer } from "./donorReducer";
import { combineReducers } from "redux";

export default combineReducers({
  loginReducer,
  signupReducer,
  donorReducer
});
