import { combineReducers } from "redux";
import userLoginAuthSlice from "../slice/user/userLoginAuthSlice";
import tokenReducer from "../slice/user/tokenSlice";
import userDetailsSlice from "../slice/user/userDetailsSlice";

const rootReducer = combineReducers({
  userAuth: userLoginAuthSlice,
  token: tokenReducer,
  userDetails: userDetailsSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
