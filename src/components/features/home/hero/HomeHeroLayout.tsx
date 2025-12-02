import Image from "next/image";
import Link from "next/link";

const HomeHeroLayout = () => {
  return (
    <div className=" h-screen relative">
      <div className=" clip-wave absolute inset-0 z-0  bg-primary sm:h-[85%] h-[95%]"></div>
      <div className="h-[90%] sm:h-[80%] w-full p-4 md:p-10 z-10 relative clip-wave flex justify-center items-center md:justify-between ">
        <Image
          src="/home/hero.jpg"
          alt="hero"
          width={900}
          height={900}
          className="object-cover w-full h-full absolute inset-0 -z-1 -scale-x-[1]"
        />
        <div className="clip-wave overflow-hidden absolute bg-secondary/20 backdrop-blur-[6px] inset-0 w-full h-full z-10"></div>
        <div className="clip-wave overflow-hidden absolute bg-primary/10 backdrop-blur-[6px] inset-0 w-full h-full z-10"></div>
        {/* content */}
        <div className="flex h-fit p-10 max-w-2xl  rounded-lg flex-col items-center justify-center relative z-20 text-primary-foreground gap-5">
          <div className="flex flex-col justify-center gap-2">
            <p className="text-primary-foreground sm:text-2xl text-lg">welcome to</p>
            <h1 className="sm:text-7xl text-5xl font-extrabold">El-Beshara Office</h1>
            <p className="text-sm md:text-lg text-light/80">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil cum minus, et magnam soluta odit molestiae dignissimos omnis quam </p>
          </div>
          <div className="flex text-center justify-evenly flex-col sm:flex-row gap-5 w-full">
            <Link href={"/services"} className="bg-light hover:scale-105 transition duration-300 cursor-pointer text-light-foreground w-full sm:w-1/2  rounded-md font-bold p-2 px-4">Our Services</Link>
            <Link href={"/contact"} className="border-2 hover:scale-105 transition duration-300 cursor-pointer w-full sm:w-1/2 rounded-md border-light text-light font-bold p-2 px-4">contact us</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeroLayout;
