import { redirect } from "next/navigation";
import React from "react";

const page = () => {
  redirect("/admin/images");
  return <div></div>;
};

export default page;
