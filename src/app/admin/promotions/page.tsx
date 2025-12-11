import AddPromotionForm from "@/components/features/dashboard/promotions/AddPromotionForm";
import PromotionSection from "@/components/features/dashboard/promotions/PromotionSection";
import DashboardHero from "@/components/shared/dashboard/DashboardHero";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IoIosAddCircle } from "react-icons/io";
import { TbRosetteDiscountFilled } from "react-icons/tb";

const page = () => {
  return (
    <div>
      <div className="space-y-10">
        <DashboardHero />
        <Tabs defaultValue="promotions">
          <TabsList className="mb-10 w-fit mx-auto flex gap-10">
            <TabsTrigger value="promotions" className="flex items-center gap-2">
              <TbRosetteDiscountFilled />
              Promotions
            </TabsTrigger>
            <TabsTrigger value="form" className="flex items-center gap-2">
              <IoIosAddCircle />
              Add Promotion
            </TabsTrigger>
          </TabsList>
          <TabsContent value="promotions">
            <PromotionSection />
          </TabsContent>
          <TabsContent value="form">
            <AddPromotionForm />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default page;
