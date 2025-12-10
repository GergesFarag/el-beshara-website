"use client";

import MyBtn from "@/components/ui/MyBtn";
import { usePathname } from "next/navigation";
import { IoIosAddCircle } from "react-icons/io";

const DashboardHero = () => {
  const pathname = usePathname();
  const page = pathname.split("/").pop();

  return (
    <div className="w-full p-5 flex flex-col gap-5  justify-between   rounded-lg">
      <div
        className={`w-full flex flex-col md:flex-row justify-between items-center gap-5`}
      >
        <h1 className="text-primary  capitalize md:text-4xl text-2xl font-bold underline underline-offset-6 ">
          {page}
        </h1>
        {page !== "admins" && (
          <MyBtn
            text={`add ${page}`}
            variant="primary"
            icon={<IoIosAddCircle />}
          />
        )}
        {page === "admins" && (
          <div>
            <p className="text-lg md:text-2xl text-foreground/80">
              test@test.com
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardHero;
