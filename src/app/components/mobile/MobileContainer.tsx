import React from 'react';

const MobileContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto max-w-[390px] px-[20px]">
      {children}
    </div>
  );
};

export default MobileContainer;
