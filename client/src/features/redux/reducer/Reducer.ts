import { combineReducers } from "redux";
import userLoginAuthSlice from "../slice/user/userLoginAuthSlice";
import tokenReducer from "../slice/user/tokenSlice";
import userDetailsSlice from "../slice/user/userDetailsSlice";
import jobDetailsSlice from "../slice/user/jobDetailsSlice";
import allJobReducer from "../slice/user/getAllJobsSlice";
import recruiterDetailsReducer from "../slice/recruiter/recruiterDetailsSlice";
import recruiterTokenReducer from "../slice/recruiter/recruiterTokenSlice";

const rootReducer = combineReducers({
  userAuth: userLoginAuthSlice,
  token: tokenReducer,
  userDetails: userDetailsSlice,
  jobDetails: jobDetailsSlice,
  allJobs: allJobReducer,
  recruiterDetails: recruiterDetailsReducer,
  recruiterToken: recruiterTokenReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
