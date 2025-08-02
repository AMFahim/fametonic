import Image from "next/image";
import React from "react";
import MobileContainer from "./MobileContainer";
import PrimaryButton from "@/components/ui/button";

const MobileHeroSection = () => {
  return (
    <MobileContainer>
      <div className="flex justify-between pl-[120px] mt-4 items-center">
        <Image
          src="/smLogo.png"
          alt="logo"
          width={108}
          height={46} 
          className="h-[46px] w-auto"
        />
        <Image
          src="/menu.png"
          alt="menu"
          width={20}
          height={12}
          className="h-[12px] w-auto"
        />
      </div>
      <Image
        src="/smMockup.png"
        alt="hero"
        width={384}
        height={384}
        className="w-full h-[384px] object-cover mt-4"
      />
      <h1 className="self-stretch text-center justify-center text-white text-2xl font-extrabold font-family-urbanist">
        Want to Turn Social Media Into a Profitable Career?{" "}
      </h1>
      <h1 className="self-stretch text-center justify-center text-cyan-400 text-2xl font-extrabold font-['Urbanist'] [text-shadow:_0px_4px_4px_rgb(252_0_78_/_1.00)]">
        Discover your way to success with Fametonic:
      </h1>
      <p className="self-stretch justify-center text-white text-base font-medium font-family-figtree leading-snug mt-[22px]">
        ✨ Start growing your influence right away—no waiting required!
      </p>
      <p className="self-stretch justify-center text-white text-base font-medium font-family-figtree leading-snug mt-[10px]">
        ✨ Create viral TikToks and Reels step by step with easy-to-follow
        lessons
      </p>
      <p className="self-stretch justify-center text-white text-base font-medium font-family-figtree leading-snug mt-[10px]">
      ✨  Use a Personal AI Worker to boost your content{" "}
      </p>
      <p className="self-stretch justify-center text-white text-base font-medium font-family-figtree leading-snug mt-[10px]">
       ✨ Learn from expert-led courses designed for aspiring influencers{" "}
      </p>
      <div className="w-[281px] text-center mx-auto">
        <p className="self-stretch text-center justify-center text-neutral-400 text-xs font-medium font-family-figtree mt-[22px]">
          By clicking &quot;Get Started&quot;, you agree with Terms and Conditions,
          Privacy Policy, Subscription Terms
        </p>
        <p className="self-stretch text-center justify-center text-neutral-400 text-[10px] font-medium font-['Nunito'] mt-[19px]">
          Fametonic 2025 ©All Rights Reserved.
        </p>
      </div>
      <div>
        <PrimaryButton text="GET STARTED" className="w-full mt-10" />
        <div className="self-stretch text-center justify-center text-white text-xs font-normal font-family-figtree leading-none mt-[10px] mb-10">1-minute quiz for personalized Insights</div>
      </div>
    </MobileContainer>
  );
};

export default MobileHeroSection;
