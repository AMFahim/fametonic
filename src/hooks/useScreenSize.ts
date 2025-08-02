import { useEffect, useState } from "react";

export default function useResponsive() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mobileQuery = window.matchMedia("(max-width: 767px)");
    const tabletQuery = window.matchMedia("(min-width: 768px) and (max-width: 1023px)");
    const desktopQuery = window.matchMedia("(min-width: 1024px)");

    const handleResize = () => {
      setIsMobile(mobileQuery.matches);
      setIsTablet(tabletQuery.matches);
      setIsDesktop(desktopQuery.matches);
    };

    handleResize();

    mobileQuery.addEventListener("change", handleResize);
    tabletQuery.addEventListener("change", handleResize);
    desktopQuery.addEventListener("change", handleResize);

    return () => {
      mobileQuery.removeEventListener("change", handleResize);
      tabletQuery.removeEventListener("change", handleResize);
      desktopQuery.removeEventListener("change", handleResize);
    };
  }, []);

  return { isMobile, isTablet, isDesktop };
}
