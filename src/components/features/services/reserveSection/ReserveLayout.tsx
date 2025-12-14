import React from "react";
import ReserveLeft from "./ReserveLeft";
import ReserveRight from "./ReserveRight";
import Animate from "@/components/ui/Animate";

const ReserveLayout = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-5 p-5">
      <Animate className="w-full md:w-1/2" amount={0}>
        <ReserveLeft className="w-full " />
      </Animate>
      <Animate className="w-full md:w-1/2" delay={0.5} amount={0}>
        <ReserveRight className="w-full" />
      </Animate>
    </div>
  );
};

export default ReserveLayout;
