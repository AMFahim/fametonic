import React from "react";

const MobileTopbar = () => {
  return (
    <div>
      <div className="w-full mx-auto p-5 bg-gradient-to-r from-rose-600 to-cyan-400 inline-flex justify-center items-center gap-2.5">
        <div className="flex-1 text-center justify-center">
          <span className="text-cyan-400 text-base font-extrabold font-family-figtree">
            🚀 FRESH BEGINNINGS SALE:
          </span>
          <span className="text-white text-base font-semibold font-family-figtree">
            {" "}
          </span>
          <span className="text-white text-sm font-bold font-family-figtree">
            Extra 25% OFF, Limited Spots - start your journey today!
          </span>
        </div>
      </div>
    </div>
  );
};

export default MobileTopbar;
