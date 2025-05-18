"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";

const Technology = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [selectedButton, setSelectedButton] = useState("Secure AI");

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  const handleScroll = () => {
    if (!sliderRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;

    if (scrollLeft + clientWidth >= scrollWidth - 10) {
      sliderRef.current.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    }

    if (scrollLeft <= 10) {
    }
  };

  const handleButtonClick = (buttonName: string) => {
    if (!isDragging) {
      setSelectedButton(buttonName);
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (isDragging && slider) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", stopDragging);
    }

    if (slider) {
      slider.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", stopDragging);

      if (slider) {
        slider.removeEventListener("scroll", handleScroll);
      }
    };
  }, [isDragging, startX, scrollLeft]);

  return (
    <div className="relative w-full bg-[#f2f2f2] h-full flex flex-col justify-between items-center  overflow-hidden min-h-[100vh]">
      <div className="flex flex-col mt-10  min-h-[15vh] justify-between items-center">
        <div className="text-gray-600">
          <p>✦ Technology ✦</p>
        </div>
        <h2 className="text-4xl text-center md:text-left md:text-5xl mb-6 tracking-tighter text-[#282828]">
          Cutting-Edge AI. Deep <br /> Emotional Insight.
        </h2>
      </div>

      <Image
        src="/photos/7.png"
        alt="Mental health illustration"
        width={400}
        height={400}
        className="rounded-lg z-10 max-w-[400px] md:max-w-[550px] mt-[-100px]"
      />

      <div className="w-full relative ">
        <div
          ref={sliderRef}
          className="w-[110%] md:w-full flex items-center py-6 overflow-x-auto scrollbar-hide cursor-grab mx-[-5%] md:mx-0"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
          onMouseDown={handleMouseDown}
          onMouseLeave={stopDragging}
          onTouchStart={() => setIsDragging(true)}
          onTouchEnd={() => setIsDragging(false)}
        >
          <div className="flex space-x-3 md:space-x-[4vw] w-max pl-2 md:pl-0">
            <button
              className={`whitespace-nowrap px-8 py-3 rounded-full border border-gray-300 transition flex-shrink-0 ${
                selectedButton === "CBT Framework"
                  ? "bg-[#3a4c39] text-white hover:bg-[#2c3c2b]"
                  : "bg-transparent text-[#282828] hover:bg-gray-100"
              }`}
              onClick={() => handleButtonClick("CBT Framework")}
            >
              CBT Framework
            </button>
            <button
              className={`whitespace-nowrap px-8 py-3 rounded-full border border-gray-300 transition flex-shrink-0 ${
                selectedButton === "Emotion Detection"
                  ? "bg-[#3a4c39] text-white hover:bg-[#2c3c2b]"
                  : "bg-transparent text-[#282828] hover:bg-gray-100"
              }`}
              onClick={() => handleButtonClick("Emotion Detection")}
            >
              Emotion Detection
            </button>
            <button
              className={`whitespace-nowrap px-8 py-3 rounded-full border border-gray-300 transition flex-shrink-0 ${
                selectedButton === "Secure AI"
                  ? "bg-[#3a4c39] text-white hover:bg-[#2c3c2b]"
                  : "bg-transparent text-[#282828] hover:bg-gray-100"
              }`}
              onClick={() => handleButtonClick("Secure AI")}
            >
              Secure AI
            </button>
            <button
              className={`whitespace-nowrap px-8 py-3 rounded-full border border-gray-300 transition flex-shrink-0 ${
                selectedButton === "Behavioral Learning"
                  ? "bg-[#3a4c39] text-white hover:bg-[#2c3c2b]"
                  : "bg-transparent text-[#282828] hover:bg-gray-100"
              }`}
              onClick={() => handleButtonClick("Behavioral Learning")}
            >
              Behavioral Learning
            </button>
            <button
              className={`whitespace-nowrap px-8 py-3 rounded-full border border-gray-300 transition flex-shrink-0 ${
                selectedButton === "Language Understanding"
                  ? "bg-[#3a4c39] text-white hover:bg-[#2c3c2b]"
                  : "bg-transparent text-[#282828] hover:bg-gray-100"
              }`}
              onClick={() => handleButtonClick("Language Understanding")}
            >
              Language Understanding
            </button>
            <button
              className={`whitespace-nowrap px-8 py-3 rounded-full border border-gray-300 transition flex-shrink-0 ${
                selectedButton === "Mood Analysis"
                  ? "bg-[#3a4c39] text-white hover:bg-[#2c3c2b]"
                  : "bg-transparent text-[#282828] hover:bg-gray-100"
              }`}
              onClick={() => handleButtonClick("Mood Analysis")}
            >
              Mood Analysis
            </button>
            <button
              className={`whitespace-nowrap px-8 py-3 rounded-full border border-gray-300 transition flex-shrink-0 ${
                selectedButton === "Neural Feedback"
                  ? "bg-[#3a4c39] text-white hover:bg-[#2c3c2b]"
                  : "bg-transparent text-[#282828] hover:bg-gray-100"
              }`}
              onClick={() => handleButtonClick("Neural Feedback")}
            >
              Neural Feedback
            </button>
            <button
              className={`whitespace-nowrap px-8 py-3 rounded-full border border-gray-300 transition flex-shrink-0 ${
                selectedButton === "Mindfulness AI"
                  ? "bg-[#3a4c39] text-white hover:bg-[#2c3c2b]"
                  : "bg-transparent text-[#282828] hover:bg-gray-100"
              }`}
              onClick={() => handleButtonClick("Mindfulness AI")}
            >
              Mindfulness AI
            </button>
            <button
              className={`whitespace-nowrap px-8 py-3 rounded-full border border-gray-300 transition flex-shrink-0 ${
                selectedButton === "Stress Patterns"
                  ? "bg-[#3a4c39] text-white hover:bg-[#2c3c2b]"
                  : "bg-transparent text-[#282828] hover:bg-gray-100"
              }`}
              onClick={() => handleButtonClick("Stress Patterns")}
            >
              Stress Patterns
            </button>
            <button
              className={`whitespace-nowrap px-8 py-3 rounded-full border border-gray-300 transition flex-shrink-0 ${
                selectedButton === "Sleep Optimization"
                  ? "bg-[#3a4c39] text-white hover:bg-[#2c3c2b]"
                  : "bg-transparent text-[#282828] hover:bg-gray-100"
              }`}
              onClick={() => handleButtonClick("Sleep Optimization")}
            >
              Sleep Optimization
            </button>
            <button
              className={`whitespace-nowrap px-8 py-3 rounded-full border border-gray-300 transition flex-shrink-0 ${
                selectedButton === "Voice Analysis"
                  ? "bg-[#3a4c39] text-white hover:bg-[#2c3c2b]"
                  : "bg-transparent text-[#282828] hover:bg-gray-100"
              }`}
              onClick={() => handleButtonClick("Voice Analysis")}
            >
              Voice Analysis
            </button>
          </div>
        </div>
      </div>

      <div className="hidden md:flex flex-col absolute inset-0 items-center justify-center pointer-events-none overflow-hidden">
        <h1
          className="text-[12vw] md:text-[13vw] font-bold text-transparent whitespace-nowrap tracking-tighter opacity-50 transform scale-90 sm:scale-100 mb-[-4vw]"
          style={{ WebkitTextStroke: "1px #333" }}
        >
          AI Mental Health
        </h1>
        <h1 className="text-[12vw] md:text-[13vw] font-bold text-[#28302B] whitespace-nowrap tracking-tighter opacity-50 transform scale-90 sm:scale-100 mt-[-4vw]">
          AI Mental Health
        </h1>
      </div>
    </div>
  );
};

// Scroll çubuğunu gizlemek için CSS
const styles = `
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
`;

export default Technology;
