import MyBtn from "@/components/ui/MyBtn";
import DynamicIcon from "@/hooks/DynamicIconHook";
import { IService } from "@/lib/Interfaces/ServiceInterface";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { cookies } from "next/headers";
import React from "react";

const ReserveRight = async ({ className }: { className: string }) => {
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE")?.value || "en";
  const t = await getTranslations({ locale: lang, namespace: "ourServices" });
  const reserveData = t.raw("servicesData.reserve") as IService;

  return (
    <div
      className={`${className} group flex flex-col gap-5 items-center justify-center  rounded-lg lg:p-8 md:p-6 p-2 min-h-[600px]`}
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      {/* title */}
      <div className="w-full">
        <h2 className="text-3xl  w-fit font-bold text-primary capitalize relative animated-underline  mb-4">
          {reserveData.title}
        </h2>
        <p className="text-foreground">{reserveData.subtitle}</p>
      </div>

      {/* statistics section */}
      <div className="flex flex-col md:flex-row justify-evenly items-center gap-2 bg-primary p-2 w-full rounded-lg">
        {reserveData.statistics.map((item, index) => (
          <div
            key={index}
            className="flex flex-col text-center items-center justify-evenly gap-1 text-primary-foreground "
          >
            <p className="text-xl font-bold">{item.value}</p>
            <p className="text-sm ">{item.label}</p>
          </div>
        ))}
      </div>

      {/* points list */}
      <div className="grid grid-cols-1  grid-rows-4 md:gap-3">
        {reserveData.points &&
          typeof reserveData.points[0] === "object" &&
          reserveData.points.map((point, index) => (
            <div
              key={index}
              className={` text-foreground p-2 rounded-lg flex justify-start gap-2 items-center ${
                index === 0 ? " bg-secondary " : ""
              }
               ${index === 2 ? " bg-secondary " : ""}
              `}
            >
              <p className="bg-primary text-primary-foreground p-2 rounded-full">
                <DynamicIcon
                  iconName={
                    typeof point.icon === "string"
                      ? point.icon
                      : point.icon.toString()
                  }
                />{" "}
              </p>

              <p>{point.label}</p>
            </div>
          ))}
      </div>

      {/* call to action */}
      <MyBtn text={reserveData.toContact} href={"/contact"} width="full" />
    </div>
  );
};

export default ReserveRight;
