import { createSlice } from "@reduxjs/toolkit";

const favorieSlice = createSlice({
  name: "favories",
  initialState: {
    courseFa: [],
  },
  reducers: {
    // actions
    setCourseFa: (state, action) => {
      state.courseFa = action.payload;
    },
  },
});
export const { setCourseFa } = favorieSlice.actions;
export default favorieSlice.reducer;
