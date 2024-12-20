import React from "react";

const HeroThree: React.FC = () => {
  return (
    <div id="blog" className="font-sans bg-white py-12 px-8 bg-gradient-to-r from-white via-[#E4FE66] to-[#55F5A3]">
      <div className="max-w-7xl max-md:max-w-md mx-auto max-md:text-center">
        <h2 className="text-gray-800 lg:text-6xl md:text-5xl text-3xl font-extrabold lg:!leading-[64px] md:max-w-4xl">
          The Most Modern Ai Resume Builder Platform for Follwers
        </h2>
        <div className="grid md:grid-cols-2 gap-12 mt-6">
          <div>
            <p className="text-gray-600 text-base leading-relaxed">
              Explore a curated collection of ready-to-use components and design blocks, empowering you to create
              stunning, responsive interfaces with ease. Streamline your workflow and discover the future of web
              development.
            </p>
            <div className="mt-12 flex gap-4 items-center flex-wrap max-md:justify-center">
              <a href="https://makecv-for-me.vercel.app/">
              <button
                type="button"
                className="bg-[#55F5A3] hover:bg-green-400 transition-all text-gray-800 font-bold text-sm rounded-full px-6 py-3"
              >
                Build Resume
              </button>
              </a>
              <a
                href="javascript:void(0)"
                className="text-gray-800 text-sm font-bold underline max-sm:block whitespace-nowrap"
              >
                API Documentation
              </a>
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
              <img
                src="https://readymadeui.com/google-logo.svg"
                className="w-28 mx-auto"
                alt="google-logo"
              />
              <img
                src="https://readymadeui.com/facebook-logo.svg"
                className="w-28 mx-auto"
                alt="facebook-logo"
              />
              <img
                src="https://readymadeui.com/linkedin-logo.svg"
                className="w-28 mx-auto"
                alt="linkedin-logo"
              />
              <img
                src="https://readymadeui.com/pinterest-logo.svg"
                className="w-28 mx-auto"
                alt="pinterest-logo"
              />
            </div>
          </div>
          <div>
            <img
              src="https://readymadeui.com/readymadeui_banner.webp"
              className="shrink-0 w-full h-full rounded-md object-contain"
              alt="Modern Card Platform"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroThree;
