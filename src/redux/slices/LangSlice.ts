import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./Store";

interface IState {
  lang: "ar" | "en";
}

const getInitialLang = () => {
  if (typeof document !== "undefined") {
    const match = document.cookie.match(/locale=(ar|en)/);
    return match ? match[1] : "en";
  }
  return "en";
};

const initialState: IState = {
  lang: getInitialLang() as "ar" | "en",
};
const langSlice = createSlice({
  name: "lang",
  initialState,
  reducers: {
    toggleLang(state) {
      state.lang = state.lang === "ar" ? "en" : "ar";
      document.cookie = `locale=${state.lang}; path=/`;
      window.location.reload();
    },
  },
});

export const { toggleLang } = langSlice.actions;
export const langSelector = (state: RootState) => state.lang;
export default langSlice.reducer;
