import Image from "next/image";
import React from "react";
import DesktopContainer from "./DesktopContainer";

const Navbar = () => {
  return (
    <DesktopContainer>
      <div className="flex justify-between mt-[35px]">
        <Image src="/logo.png" alt="Logo" width={173.2} height={74} />
        <div className="flex gap-10">
          <span className="w-20 text-center justify-center text-neutral-400 text-lg font-semibold font-family-figtree">
            About us
          </span>
          <span className="w-20 text-center justify-center text-neutral-400 text-lg font-semibold font-family-figtree">
            Contact
          </span>
        </div>
      </div>
    </DesktopContainer>
  );
};

export default Navbar;
