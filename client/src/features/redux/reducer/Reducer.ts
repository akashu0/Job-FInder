import { combineReducers } from "redux";
import userLoginAuthSlice from "../slice/user/userLoginAuthSlice";

const rootReducer = combineReducers({
  userAuth: userLoginAuthSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
