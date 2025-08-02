"use client";
import DesktopTopbar from "./components/desktop/DesktopTopbar";
import DeskTopNavbar from "./components/desktop/DesktopNavbar";
import DesktopHeroSection from "./components/desktop/DesktopHeroSection";
import MobileTopbar from "./components/mobile/MobileTopbar";
import MobileHeroSection from "./components/mobile/MobileHeroSection";
import useResponsive from "@/hooks/useScreenSize";
import TabletHeroSection from "./components/tablet/TabletHeroSection";

export default function Home() {
  const { isMobile, isTablet, isDesktop } = useResponsive();

  return (
    <>
      {isMobile && (
        <>
          <MobileTopbar />
          <MobileHeroSection />
        </>
      )}

      {isTablet && (
        <>
          <MobileTopbar />
          <TabletHeroSection />
        </>
      )}

      {isDesktop && (
        <>
          <DesktopTopbar />
          <DeskTopNavbar />
          <DesktopHeroSection />
        </>
      )}
    </>
  );
}
