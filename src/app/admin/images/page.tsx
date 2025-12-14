"use client";
import DashboardHero from "@/components/shared/dashboard/DashboardHero";
import MasonryDashboard from "@/components/shared/dashboard/MasonaryDashboard";
import Pagination from "@/components/ui/Pagination";
import { images } from "@/data/images";
import { CldUploadButton, CldUploadWidget } from "next-cloudinary";

const page = () => {
  return (
    <div>
      <div className="space-y-10">
        <DashboardHero />

        {/* <CldUploadButton
          uploadPreset="<Upload Preset>"
          className="bg-primary! px-4 py-2! rounded-lg! text-primary-foreground cursor-pointer hover:bg-primary/90 transition-all duration-300 hover:scale-105!"
        /> */}

        <CldUploadWidget
          // uploadPreset="ElBeshara"
          signatureEndpoint="/api/cloudinary/signature"
          // options={{
          //   multiple:false
          // }}
          // onUpload={(result)=> console.log("uploaded result",result)}
        >
          {({ open }) => <button onClick={() => open()}>Upload Image</button>}
        </CldUploadWidget>

        <div className="bg-secondary/50 rounded-lg p-4">
          <div className="">
            <MasonryDashboard
              items={images}
              onSelectionChange={(ids) => console.log("Selected images:", ids)}
              onRemove={(id) => console.log("Remove img:", id)}
            />
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
