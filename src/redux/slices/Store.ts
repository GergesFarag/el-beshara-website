import { configureStore } from "@reduxjs/toolkit";
import langReducer from "./LangSlice";
import adminsSelector from "./AdminsSlice";
export const store = configureStore({
  reducer: {
    lang: langReducer,
    admins: adminsSelector,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
