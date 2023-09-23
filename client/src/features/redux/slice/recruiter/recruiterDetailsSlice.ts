import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { recruiterData } from "../../../axios/api/recruiter/recruiterDetails";

export const fetchRecruiter = createAsyncThunk(
  "recruiter/fetchRecruiter",
  async () => {
    const response = await recruiterData();
    return response;
  }
);

interface RecruiterDeatilsState {
  recruiterEmail: string | null;
  recruiterDetails: any;
  error: string | null;
  status: string;
  isLoggedIn: boolean;
}

const initialState: RecruiterDeatilsState = {
  recruiterEmail: null,
  recruiterDetails: null,
  error: null,
  status: "idle",
  isLoggedIn: false,
};

const recruiterDetailsSlice = createSlice({
  name: "recruiterDetails",
  initialState,
  reducers: {
    clearRecruiterDeatils: (state) => {
      state.recruiterDetails = null;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    recruiterLoginSuccess: (state) => {
      state.isLoggedIn = true;
    },
    recruiterLogout: (state) => {
      state.isLoggedIn = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecruiter.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchRecruiter.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.status = "success";
          state.recruiterDetails = action.payload;
        }
      )
      .addCase(fetchRecruiter.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      });
  },
});

export const {
  clearRecruiterDeatils,
  setError,
  recruiterLoginSuccess,
  recruiterLogout,
} = recruiterDetailsSlice.actions;

export default recruiterDetailsSlice.reducer;
