import { combineReducers } from "redux";
import userLoginAuthSlice from "../slice/user/userLoginAuthSlice";
import tokenReducer from "../slice/user/tokenSlice";
import userDetailsSlice from "../slice/user/userDetailsSlice";
import jobDetailsSlice from "../slice/user/jobDetailsSlice";
import allJobReducer from "../slice/user/getAllJobsSlice";

const rootReducer = combineReducers({
  userAuth: userLoginAuthSlice,
  token: tokenReducer,
  userDetails: userDetailsSlice,
  jobDetails: jobDetailsSlice,
  allJobs: allJobReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
