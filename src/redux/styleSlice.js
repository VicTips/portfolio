import { createSlice } from '@reduxjs/toolkit'

export const styleSlice = createSlice({
  name: 'styles',
  initialState: {
    textColor: "text-light-va",
    bgColor: "bg-dark-va",
  },
  reducers: {
    changeMode: (state) => {
      state.textColor = state.textColor === "text-light-va" ? "text-dark-va" : "text-light-va";
      state.bgColor = state.bgColor === "bg-light-va" ? "bg-dark-va" : "bg-light-va";
    }
  },
})

export const { changeMode } = styleSlice.actions

export default styleSlice.reducer
