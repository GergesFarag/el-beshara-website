"use client";
import DashboardHero from "@/components/shared/dashboard/DashboardHero";
import MasonryDashboard from "@/components/shared/dashboard/MasonaryDashboard";
// import MyBtn from "@/components/ui/MyBtn";
import Pagination from "@/components/ui/Pagination";
import { Spinner } from "@/components/ui/spinner";
// import { images } from "@/data/images";
import { IImage } from "@/lib/Interfaces/ImgInterface";
import {
  AddImageAction,
  getImagesAction,
  imgSelector,
} from "@/redux/slices/ImagesSlice";
import { AppDispatch } from "@/redux/slices/Store";
import { CldUploadWidget } from "next-cloudinary";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Page = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { images, meta, isLoading } = useSelector(imgSelector);

  const fetchImages = useCallback(
    (page: number) => {
      dispatch(getImagesAction({ page, limit: 20 }));
    },
    [dispatch]
  );

  useEffect(() => {
    fetchImages(meta.page);
  }, [fetchImages, meta.page]);

  const handleAddImg = (data) => {
    const { public_id, secure_url } = data;
    const img: IImage = {
      url: secure_url,
      public_id,
      type: "image",
    };
    dispatch(AddImageAction(img));
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Spinner className="w-20 h-20" />
      </div>
    );
  }
  return (
    <div>
      <div className="space-y-10">
        <DashboardHero />

        <CldUploadWidget
          signatureEndpoint="/api/cloudinary/signature"
          onSuccess={(result) => {
            handleAddImg(result.info);
          }}
          onError={(err) => console.log("Error:", err)}
        >
          {({ open }) => <button onClick={() => open()}>Upload Image</button>}
        </CldUploadWidget>

        <div className="bg-secondary/50 rounded-lg p-4">
          <div className="min-h-screen">
            <MasonryDashboard
              items={images}
              onSelectionChange={(ids) => console.log("Selected images:", ids)}
              onRemove={(id) => console.log("Remove img:", id)}
            />
            <Pagination
              totalPages={meta.totalPages}
              currentPage={meta.page}
              onPageChange={fetchImages}
            />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
