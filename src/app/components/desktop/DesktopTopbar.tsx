import React from 'react';

const Topbar = () => {
    return (
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-48 py-2.5 bg-gradient-to-r from-rose-600 to-cyan-400 inline-flex justify-center items-center gap-2.5">
            <div className="justify-center text-center">
                <span className="text-cyan-400 text-sm sm:text-base md:text-lg lg:text-xl font-extrabold font-['Figtree']">
                    🚀 FRESH BEGINNINGS SALE:
                </span>
                <span className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-semibold font-['Figtree']">
                    {" "}
                </span>
                <span className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-bold font-['Figtree']">
                    Extra 25% OFF, Limited Spots - start your journey today!
                </span>
            </div>
        </div>
    );
};

export default Topbar;