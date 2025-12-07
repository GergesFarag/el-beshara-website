import { configureStore } from "@reduxjs/toolkit";
import DashboardViewSlice from "./DashboardViewSlice";

export const store = configureStore({
  reducer: {
    dashView: DashboardViewSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
