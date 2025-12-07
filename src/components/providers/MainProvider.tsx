import React from "react";
import { ThemeProvider } from "./ThemeProvider";
import { Toaster } from "react-hot-toast";
import StoreProvider from "./StoreProvider";

const MainProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Toaster position="top-center" reverseOrder={false} />
        {children}
      </ThemeProvider>
    </StoreProvider>
  );
};

export default MainProvider;
