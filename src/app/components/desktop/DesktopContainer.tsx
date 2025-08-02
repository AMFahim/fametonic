import React from 'react';

const ResponsiveContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[211px]">
      {children}
    </div>
  );
};

export default ResponsiveContainer;