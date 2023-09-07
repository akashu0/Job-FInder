import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducer/Reducer";

const store = configureStore({
  reducer: rootReducer,
});

export default store;
