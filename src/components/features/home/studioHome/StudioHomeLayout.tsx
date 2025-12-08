import React from "react";
import GalleryHomeLeft from "./StudioHomeLeft";
import GalleryHomeRight from "./StudioHomeRight";
import Animate from "@/components/ui/Animate";

const GalleryHomeLayout = () => {
  return (
    <div className="flex flex-col md:flex-row md:gap-x-20 lg:gap-x-30 gap-5 justify-center items-center ">
      <Animate className="w-full md:w-1/2">
        <GalleryHomeRight className="w-full " />
      </Animate>
      <Animate className="w-[80%] mx-auto md:w-1/2" delay={0.5}>
        <GalleryHomeLeft className="w-full " />
      </Animate>
    </div>
  );
};

export default GalleryHomeLayout;
