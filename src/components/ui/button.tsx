import Image from "next/image";
import React from "react";

type PrimaryButtonProps = {
  text: string;
  onClick?: () => void;
  className?: string;
  showArrow?: boolean;
};

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  text,
  onClick,
  className = "",
  showArrow = true,
}) => {
  return (
    <button
      onClick={onClick}
      className={`self-stretch px-10 py-2 bg-rose-600 rounded-[10px] shadow-[2px_2px_10px_0px_rgba(0,231,249,1.00)] inline-flex justify-center items-center gap-2.5 ${className}`}
    >
      <span className="text-white text-xl font-bold font-['Figtree']">
        {text}
      </span>
      {showArrow && (
        <Image
          src="/arrowIcon.png"
          alt="left arrow"
          width={6}
          height={12}
          priority
          unoptimized
        />
      )}
    </button>
  );
};

export default PrimaryButton;
