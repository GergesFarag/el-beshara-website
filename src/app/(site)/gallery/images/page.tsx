// app/(site)/gallery/images/page.tsx
import ImagesLayout from "@/components/features/gallery/images/ImagesLayout";
import { getImagesServerAction } from "./actions";

// Next.js 15: searchParams is a Promise
interface PageProps {
  searchParams: Promise<{ page?: string }>;
}

export default async function ImagesPage({ searchParams }: PageProps) {
  // First await the searchParams Promise
  const params = await searchParams;
  const page = params.page ? Number(params.page) : 1;

  // استدعاء السرفر أكشن مباشرة
  const { data: images, meta } = await getImagesServerAction({ 
    page, 
    limit: 20 
  });

  return (
    <div className="">
      <ImagesLayout images={images} meta={meta} />
    </div>
  );
}