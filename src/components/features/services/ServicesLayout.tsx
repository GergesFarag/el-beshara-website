import React from "react";
import ReserveLayout from "./reserveSection/ReserveLayout";
import RecordLayout from "./recordSection/RecordLayout";

const ServicesLayout = () => {
  return (
    <div className="w-[80%] mx-auto space-y-10 my-20">
      <div id="reserve">
        <ReserveLayout />
      </div>
      <div id="record">
        <RecordLayout/>
      </div>
    </div>
  );
};

export default ServicesLayout;
