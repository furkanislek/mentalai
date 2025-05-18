"use client";
import React, { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";

const technologyOptions = [
  "CBT Framework",
  "Emotion Detection",
  "Secure AI",
  "Behavioral Learning",
  "Language Understanding",
  "Mood Analysis",
  "Neural Feedback",
  "Mindfulness AI",
  "Stress Patterns",
  "Sleep Optimization",
  "Voice Analysis",
];

const Technology = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [selectedButton, setSelectedButton] = useState("Emotion Detection");

  // Fare sürükleme işlevselliği - memoized fonksiyon kullanımı
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  }, []);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging || !sliderRef.current) return;
      e.preventDefault();
      const x = e.pageX - sliderRef.current.offsetLeft;
      const walk = (x - startX) * 2;
      sliderRef.current.scrollLeft = scrollLeft - walk;
    },
    [isDragging, startX, scrollLeft]
  );

  const stopDragging = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleScroll = useCallback(() => {
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
  }, []);

  const handleButtonClick = useCallback(
    (buttonName: string) => {
      if (!isDragging) {
        setSelectedButton(buttonName);
      }
    },
    [isDragging]
  );

  // Olay dinleyicilerini ekle/kaldır
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
  }, [isDragging, handleMouseMove, stopDragging, handleScroll]);

  return (
    <section
      aria-label="Teknoloji özellikleri"
      className="relative w-full  h-full flex flex-col justify-between items-center overflow-hidden min-h-[100vh]"
    >
      <div className="flex flex-col mt-10 min-h-[15vh] justify-between items-center">
        <div>
          <p>✦ Technology ✦</p>
        </div>
        <h2 className="text-4xl text-center md:text-left md:text-5xl mb-6 tracking-tighter text-[#282828]">
          Cutting-Edge AI. Deep <br /> Emotional Insight.
        </h2>
      </div>

      <Image
        src="/photos/7.png"
        alt="Mental health AI technology visualization"
        width={400}
        height={400}
        className="rounded-lg z-10 max-w-[400px] md:max-w-[550px] mt-[-100px]"
        loading="eager"
        priority={true}
      />

      {/* Özellik butonları - Slider */}
      <div className="w-full relative">
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
            {technologyOptions.map((option) => (
              <button
                key={option}
                className={`whitespace-nowrap px-8 py-3 rounded-full border border-gray-300 transition flex-shrink-0 ${
                  selectedButton === option
                    ? "bg-[#3a4c39] text-white hover:bg-[#2c3c2b]"
                    : "bg-transparent text-[#282828] hover:bg-gray-100"
                }`}
                onClick={() => handleButtonClick(option)}
                aria-pressed={selectedButton === option}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="hidden md:flex flex-col absolute inset-0 items-center justify-center pointer-events-none overflow-hidden">
        <h1
          className="text-[12vw] md:text-[13vw] font-bold text-transparent whitespace-nowrap tracking-tighter opacity-50 transform scale-90 sm:scale-100 mb-[-4vw]"
          style={{ WebkitTextStroke: "1px #333" }}
          aria-hidden="true"
        >
          AI Mental Health
        </h1>
        <h1
          className="text-[12vw] md:text-[13vw] font-bold text-[#28302B] whitespace-nowrap tracking-tighter opacity-50 transform scale-90 sm:scale-100 mt-[-4vw]"
          aria-hidden="true"
        >
          AI Mental Health
        </h1>
      </div>
    </section>
  );
};

// Scroll çubuğunu gizlemek için CSS
const styles = `
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
`;

export default Technology;
