import PageHero from "@/components/shared/PageHero";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <PageHero />
      {children}
    </div>
  );
};

export default Layout;
