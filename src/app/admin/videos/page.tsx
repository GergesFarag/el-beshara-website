"use client";
import DashboardHero from "@/components/shared/dashboard/DashboardHero";
import MasonryDashboard from "@/components/shared/dashboard/MasonaryDashboard";
import MyBtn from "@/components/ui/MyBtn";
import Pagination from "@/components/ui/Pagination";
import { IImage } from "@/lib/Interfaces/ImgInterface";
import { AppDispatch } from "@/redux/slices/Store";
import {
  AddVideoAction,
  getVideosAction,
  videoSelector,
} from "@/redux/slices/VideoSlice";
import { CldUploadWidget } from "next-cloudinary";
import React, { useCallback, useEffect } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";

const Page = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { videos, meta } = useSelector(videoSelector);
  const handleAddVideo = (data) => {
    const { public_id, secure_url } = data;
    const video: IImage = {
      url: secure_url,
      public_id,
      type: "video",
    };
    dispatch(AddVideoAction(video));
  };

  const fetchVideos = useCallback(
    (page: number) => {
      dispatch(getVideosAction({ page, limit: 20 }));
    },
    [dispatch]
  );

  useEffect(() => {
    fetchVideos(meta.page);
  }, [fetchVideos, meta.page]);
  console.log(videos);
  return (
    <div>
      <div className="space-y-10">
        <DashboardHero />
        {/* actions */}

        <div className="flex gap-5">
          <CldUploadWidget
            signatureEndpoint="/api/cloudinary/signature"
            onSuccess={(result) => {
              handleAddVideo(result.info);
            }}
            onError={(err) => console.log("Error:", err)}
          >
            {({ open }) => (
              <MyBtn variant="primary" className="gap-2" onClick={() => open()}>
                <IoMdAddCircleOutline />
                Upload Video
              </MyBtn>
            )}
          </CldUploadWidget>
          {/* {selectedImages.length > 0 && (
            <MyBtn outline className="gap-2" onClick={handleDeleteAll}>
              <GrTrash />
              {`remove ${selectedImages.length}`}
            </MyBtn>
          )} */}
        </div>
        <div className="bg-secondary/50 rounded-lg p-4">
          <div className="">
            <MasonryDashboard
              items={videos}
              // onSelectionChange={handleSelect}
              // onRemove={handleDelete}
            />
            <Pagination
              totalPages={meta.totalPages}
              currentPage={meta.page}
              onPageChange={fetchVideos}
            />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
