import PrimaryButton from "@/components/ui/button";

const TabletHeroSection = () => {
  return (
    <div className="relative max-w-full mx-auto px-8 h-[550px] overflow-hidden">
      <div className="flex flex-col h-full z-10 relative mt-8 max-w-[55%]">
        <h1 className="text-white text-3xl font-bold font-family-urbanist leading-tight">
          Want to Turn Social Media Into a Profitable Career?{" "}
        </h1>
        <h1 className="text-cyan-400 text-3xl font-bold font-family-urbanist [text-shadow:_0px_4px_4px_rgb(252_0_78_/_1.00)] mt-2">
          Discover your way to success with Fametonic:
        </h1>
        <p className="text-white text-sm font-semibold font-family-figtree leading-snug mt-4">
          ✨ Start growing your influence right away—no waiting required!
        </p>
        <p className="text-white text-sm font-semibold font-family-figtree leading-snug mt-2">
          ✨ Create viral TikToks and Reels step by step with easy-to-follow
          lessons
        </p>
        <p className="text-white text-sm font-semibold font-family-figtree leading-snug mt-2">
          ✨ Use a Personal AI Worker to boost your content
        </p>
        <p className="text-white text-sm font-semibold font-family-figtree leading-snug mt-2">
          ✨ Learn from expert-led courses designed for aspiring influencers
        </p>

        <div className="w-[280px]">
          <PrimaryButton text="GET STARTED" className="w-[280px] mt-6" />
          <p className="text-center text-white text-xs font-normal font-figtree leading-none mt-2">
            1-minute quiz for personalized Insights
          </p>
        </div>
        <p className="text-neutral-400 text-xs font-medium font-family-figtree mt-6">By clicking &quot;Get Started&quot;, you agree with Terms and Conditions, Privacy Policy, Subscription Terms</p>
        <p className="text-neutral-400 text-[10px] font-medium font-family-figtree mt-2">Fametonic 2025 ©All Rights Reserved.</p>
      </div>

      <div
        className="absolute top-0 right-4 w-[45%] h-full bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: "url('/mockup.png')",
        }}
      />
    </div>
  );
};

export default TabletHeroSection;
