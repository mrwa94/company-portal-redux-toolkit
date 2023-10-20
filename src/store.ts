import {configureStore } from "@reduxjs/toolkit";
import CompaniesSlice from "./features/CompaniesSlice";

export const store = configureStore({
  reducer: {companiesReducer : CompaniesSlice}
})

export default store 