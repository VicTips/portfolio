import { createSlice } from '@reduxjs/toolkit'

export const styleSlice = createSlice({
  name: 'styles',
  initialState: {
    textColor: localStorage.getItem("textColor") ? JSON.parse(localStorage.getItem("textColor")) : "text-light-va",
    bgColor: localStorage.getItem("bgColor") ? JSON.parse(localStorage.getItem("bgColor")) : "bg-dark-va",
  },
  reducers: {
    changeMode: (state) => {
      state.textColor = state.textColor === "text-light-va" ? "text-dark-va" : "text-light-va";
      state.bgColor = state.bgColor === "bg-light-va" ? "bg-dark-va" : "bg-light-va";

      localStorage.setItem("textColor", JSON.stringify(state.textColor))
      localStorage.setItem("bgColor", JSON.stringify(state.bgColor))
    }
  },
})

export const { changeMode } = styleSlice.actions

export default styleSlice.reducer
