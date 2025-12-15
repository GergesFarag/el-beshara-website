// "use client";
// import Masonry from "@/components/Masonry";
// import Pagination from "@/components/ui/Pagination";
// import { Spinner } from "@/components/ui/spinner";
// import { getImagesAction, imgSelector } from "@/redux/slices/ImagesSlice";
// import { AppDispatch } from "@/redux/slices/Store";
// import { useCallback, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// const ImagesLayout = () => {
//   const dispatch = useDispatch<AppDispatch>();
//   const { images, isLoading, meta } = useSelector(imgSelector);

//   const fetchImages = useCallback(
//     (page: number) => {
//       dispatch(getImagesAction({ page, limit: 20 }));
//     },
//     [dispatch]
//   );

 

//   useEffect(() => {
//     fetchImages(meta.page);
//   }, [fetchImages, meta.page]);

//   if (isLoading) {
//     return (
//       <div className="flex items-center justify-center min-h-[400px]">
//         <Spinner className="w-20 h-20" />
//       </div>
//     );
//   }
//   return (
//     <div>
//       <Masonry items={images} />
//       <Pagination
//         totalPages={meta.totalPages}
//         currentPage={meta.page}
//         onPageChange={fetchImages}
//       />
//     </div>
//   );
// };

// export default ImagesLayout;


'use client';

import { useState } from "react";
import Masonry from "@/components/Masonry";
import Pagination from "@/components/ui/Pagination";
import { Spinner } from "@/components/ui/spinner";

interface ImagesLayoutProps {
  images: any[];
  meta: {
    page: number;
    totalPages: number;
  };
}

const ImagesLayout = ({ images: initialImages, meta: initialMeta }: ImagesLayoutProps) => {
  const [images, setImages] = useState(initialImages);
  const [meta, setMeta] = useState(initialMeta);
  const [loading, setLoading] = useState(false);

  const fetchPage = async (page: number) => {
    setLoading(true);
    try {
      // استدعاء Server Action من Client Component
      const res = await fetch(`/api/get-images?page=${page}&limit=20`);
      const result = await res.json();

      setImages(result.data);
      setMeta(result.meta);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Spinner className="w-20 h-20" />
      </div>
    );
  }

  return (
    <div>
      <Masonry items={images} />
      <Pagination
        totalPages={meta.totalPages}
        currentPage={meta.page}
        onPageChange={fetchPage}
      />
    </div>
  );
};

export default ImagesLayout;
