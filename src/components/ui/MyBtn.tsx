import Link from "next/link";
import React from "react";

type IBtnVariant = "primary" | "secondary" | "light" | "dark";

interface IBtn {
  text: string;
  onClick?: () => void;
  href: string;
  variant: IBtnVariant;
  icon?: React.ReactNode;
  className?: string;
}

const CheckVariant = (variant?: IBtnVariant) => {
  switch (variant) {
    case "primary":
      return "bg-primary text-primary-foreground hover:bg-primary/80";
    case "secondary":
      return "bg-secondary text-secondary-foreground hover:bg-secondary/80";
    case "light":
      return "bg-light text-light-foreground hover:bg-light/80";
    case "dark":
      return "bg-dark text-dark-foreground hover:bg-dark/80";
    default:
      return "bg-primary text-primary-foreground hover:bg-primary/80";
  }
};
const MyBtn = ({
  text,
  onClick,
  href = "#",
  variant = "primary",
  icon,
  className,
}: IBtn) => {
  return (
    <Link
      href={href}
      className={` ${CheckVariant(
        variant
      )} ${className} flex justify-center items-center gap-2 rounded-md font-semibold px-4 py-2 hover:scale-105 transition duration-300 cursor-pointer capitalize group `}
      onClick={onClick}
    >
      {text}
      <span className="group-hover:translate-x-3 transition duration-500">{icon}</span>
    </Link>
  );
};

export default MyBtn;
