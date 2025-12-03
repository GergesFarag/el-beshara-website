import HomeHeroLayout from "./hero/HomeHeroLayout";
import AboutHomeSectionLayout from "./aboutHome/AboutHomeSectionLayout";
import ServicesHomeLayout from "./servicesHome/ServicesHomeLayout";
import FixedHomeImgLayout from "./fixedHomeImg/FixedHomeImgLayout";
import GalleryHomeLayout from "./gallery/GalleryHomeLayout";

const HomeLayout = () => {
  return (
    <div>
      <HomeHeroLayout />
      <div className="space-y-20">
        <div className="w-myWidth mx-auto relative ">
          <AboutHomeSectionLayout />
        </div>
        <ServicesHomeLayout />
        <FixedHomeImgLayout />
        <div className="w-myWidth mx-auto relative ">
          <GalleryHomeLayout/>
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
