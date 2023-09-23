import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TokenState {
  recruiterToken: string | null;
}

const loadTokenFromLocalStorage = (): string | null => {
  try {
    const token = localStorage.getItem("RecruiterToken");
    return token ? token : null;
  } catch (error) {
    console.log("Error loading token from local storage:", error);
    return null;
  }
};

const initialState: TokenState = {
  recruiterToken: loadTokenFromLocalStorage(),
};

const employerTokenSlice = createSlice({
  name: "employerToken",
  initialState,
  reducers: {
    setRecruiterToken: (state, action: PayloadAction<string>) => {
      state.recruiterToken = action.payload;
      try {
        localStorage.setItem("RecruiterToken", action.payload);
      } catch (error) {
        console.log("Error storing token in local storage:", error);
      }
    },
    clearRecruiterToken: (state) => {
      state.recruiterToken = null;
      try {
        localStorage.removeItem("RecruiterToken");
      } catch (error) {
        console.log("Error removing token from local storage:", error);
      }
    },
  },
});

export const { setRecruiterToken, clearRecruiterToken } =
  employerTokenSlice.actions;
export default employerTokenSlice.reducer;
