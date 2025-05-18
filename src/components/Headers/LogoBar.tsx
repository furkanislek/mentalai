import React from "react";
import Image from "next/image";

const LogoBar = () => {
  return (
    <div className="w-full bg-[#3b4b3a] py-4 px-[5%]">
      <div className="max-w-[1400px] mx-auto flex flex-wrap justify-center md:justify-between items-center gap-8">
        <div className="w-24 h-10 relative flex items-center opacity-80">
          <div className="flex items-center space-x-1 text-white">
            <div className="w-6 h-6 relative flex items-center justify-center">
              <img
                src="/globe.svg"
                alt="Earth 2.0"
                className="w-5 h-5 brightness-0 invert"
              />
            </div>
            <span className="text-white text-sm font-medium">EARTH2.0</span>
          </div>
        </div>

        <div className="w-24 h-10 relative flex items-center opacity-80">
          <div className="flex items-center space-x-1">
            <div className="w-6 h-6 relative flex items-center justify-center">
              <img
                src="/svgs/aven.svg"
                alt="Aven"
                className="w-5 h-5 brightness-0 invert"
              />
            </div>
            <span className="text-white text-sm font-medium">aven.</span>
          </div>
        </div>

        <div className="w-24 h-10 relative flex items-center opacity-80">
          <div className="flex items-center space-x-1">
            <div className="w-6 h-6 relative flex items-center justify-center">
              <img
                src="/svgs/acme.svg"
                alt="Acme"
                className="w-5 h-5 brightness-0 invert"
              />
            </div>
            <span className="text-white text-sm font-medium">acme</span>
          </div>
        </div>

        <div className="w-24 h-10 relative flex items-center opacity-80">
          <div className="flex items-center space-x-1">
            <div className="w-6 h-6 relative flex items-center justify-center">
              <img
                src="/svgs/codelab.svg"
                alt="CodeLab"
                className="w-5 h-5 brightness-0 invert"
              />
            </div>
            <span className="text-white text-sm font-medium">CodeLab</span>
          </div>
        </div>

        <div className="w-24 h-10 relative flex items-center opacity-80">
          <div className="flex items-center space-x-1">
            <div className="w-6 h-6 relative flex items-center justify-center">
              <img
                src="/svgs/fox.svg"
                alt="FoxHub"
                className="w-5 h-5 brightness-0 invert"
              />
            </div>
            <span className="text-white text-sm font-medium">FOX HUB</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoBar;
