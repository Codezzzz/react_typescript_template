import { createSlice } from "@reduxjs/toolkit";

export interface RootState {
  loading: boolean;
}

const initialState: RootState = {
  loading: false,
};

const rootSlice = createSlice({
  name: "root",
  initialState,
  reducers: {
    getRootRequest(state: RootState, action) {
      state.loading = true;
    },
    getRootSuccess(state: RootState, action) {
      state.loading = false;
    },
    getRootFailure(state: RootState, action) {
      state.loading = false;
    },
  },
});

const { reducer, actions } = rootSlice;

export const { getRootRequest, getRootSuccess, getRootFailure } = actions;

export default reducer;
