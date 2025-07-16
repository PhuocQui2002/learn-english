import { createSlice } from "@reduxjs/toolkit";

const historySlice = createSlice({
  name: "history",
  initialState: {
    courseHistory: [],
  },
  reducers: {
    // actions
    setCourseHistory: (state, action) => {
      state.courseHistory = action.payload;
    },
  },
});
export const { setCourseHistory } = historySlice.actions;
export default historySlice.reducer;
