import { createSlice } from '@reduxjs/toolkit'

export const styleSlice = createSlice({
  name: 'styles',
  initialState: {
    textColor: "text-light",
    bgColor: "bg-dark",
  },
  reducers: {
    changeMode: (state) => {
      state.textColor = state.textColor === "text-light" ? "text-dark" : "text-light";
      state.bgColor = state.bgColor === "bg-light" ? "bg-dark" : "bg-light";
    }
  },
})

export const { changeMode } = styleSlice.actions

export default styleSlice.reducer
