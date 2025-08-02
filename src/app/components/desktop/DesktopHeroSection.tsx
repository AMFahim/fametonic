import PrimaryButton from "@/components/ui/button";
import React from "react";

const DesktopHeroSection = () => {
  return (
    <div className="relative max-w-[1440px] mx-auto pl-[211px] pr-[110px] h-[650px] overflow-hidden ">
      <div className="flex flex-col h-full z-10 relative mt-[57px] max-w-[45%]">
        <h1 className="self-stretch justify-center text-white text-4xl font-bold font-family-urbanist">
          Want to Turn Social Media Into a Profitable Career?{" "}
        </h1>
        <h1 className="self-stretch justify-center text-cyan-400 text-4xl font-bold font-family-urbanist [text-shadow:_0px_4px_4px_rgb(252_0_78_/_1.00)]">
          Discover your way to success with Fametonic:
        </h1>
        <p className="self-stretch justify-center text-white text-base font-semibold font-family-figtree leading-snug mt-4">
          ✨ Start growing your influence right away—no waiting required!
        </p>
        <p className="self-stretch justify-center text-white text-base font-semibold font-family-figtree leading-snug mt-3">
          ✨ Create viral TikToks and Reels step by step with easy-to-follow
          lessons
        </p>
        <p className="self-stretch justify-center text-white text-base font-semibold font-family-figtree leading-snug mt-3">
          ✨ Use a Personal AI Worker to boost your content
        </p>
        <p className="self-stretch justify-center text-white text-base font-semibold font-family-figtree leading-snug mt-3">
          ✨ Learn from expert-led courses designed for aspiring influencers
        </p>

        <div className="w-[313px]">
          <PrimaryButton text="GET STARTED" className="w-[313px] mt-[30px]" />
          <p className="self-stretch text-center justify-center text-white text-xs font-normal font-figtree leading-none mt-[10px]">
            1-minute quiz for personalized Insights
          </p>
        </div>
        <p className="self-stretch justify-center text-neutral-400 text-xs font-medium font-family-figtree mt-[30px]">
          By clicking &quot;Get Started&quot;, you agree with Terms and
          Conditions, Privacy Policy, Subscription Terms
        </p>
        <p className=" justify-center text-neutral-400 text-[10px] font-medium font-family-figtree mt-3">
          Fametonic 2025 ©All Rights Reserved.
        </p>
      </div>

      <div
        className="absolute top-0 right-20 w-1/2 h-full bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: "url('/mockup.png')",
        }}
      />
    </div>
  );
};

export default DesktopHeroSection;
