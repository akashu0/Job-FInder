import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TokenState {
  token: string | null;
}

const loadTokenFromLocalStorage = (): string | null => {
  try {
    const getToken = localStorage.getItem("token");
    return getToken ? getToken : null;
  } catch (error) {
    console.log("Error loading token from local storage:", error);
    return null;
  }
};

const initialState: TokenState = {
  token: loadTokenFromLocalStorage(),
};

const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      try {
        localStorage.setItem("token", action.payload);
      } catch (error) {
        console.log("Error storing token in local storage:", error);
      }
    },
  },
});

export const { setToken } = tokenSlice.actions;
export default tokenSlice.actions;
