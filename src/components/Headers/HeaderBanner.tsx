"use client";
import React from "react";
import Image from "next/image";

const HeaderBanner = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-center px-[5%] overflow-hidden">
      {/* Arka plan görseli - sadece mobilde görünecek */}
      <div className="absolute inset-0 z-0 md:hidden">
        <Image
          src="/photos/1.jpg"
          alt="Background"
          fill
          className="object-cover opacity-10"
          priority
        />
      </div>

      {/* Masaüstü düzeni */}
      <div className="max-w-[1400px] mx-auto hidden md:grid md:grid-cols-3 md:gap-12 md:items-center relative">
        {/* Sol Bölüm */}
        <div className="z-10 mb-0">
          <h2 className="text-5xl md:text-6xl font-bold mb-16 md:mb-25 tracking-tighter text-[#282828]">
            Struggling
            <br />
            Stress?
          </h2>
          <div className="mt-24 md:mt-25 min-h-[50px] md:min-h-[100px] mb-10 md:mb-25"></div>
          <p className="text-[#444444] pt-36 max-w-[280px] text-sm">
            Lorem ipsum dolor sit amet, consecur adiscing elit, sed do eiusmod
            tempor incididunt ut
          </p>
          <button className="bg-[#3a4c39] mt-6 text-white px-8 py-3 hover:bg-[#2c3c2b] transition">
            Get Started
          </button>
        </div>

        {/* Orta Bölüm - Resim */}
        <div className="relative z-10 mx-auto w-full max-w-[350px]">
          <div className="rounded-3xl overflow-hidden">
            <Image
              src="/photos/1.jpg"
              alt="Mental health illustration"
              width={800}
              height={800}
              className="object-cover w-full h-[500px]"
              priority
            />
          </div>
        </div>

        {/* Sağ Bölüm */}
        <div className="z-10 text-right">
          <div className="mb-12">
            <h3 className="text-5xl text-[#282828]">399+</h3>
            <p className="text-[#444444]">Lorem Ipsum</p>
          </div>

          <div className="mb-70">
            <h3 className="text-5xl text-[#282828]">65K</h3>
            <p className="text-[#444444]">Lorem Ipsum</p>
          </div>

          <div>
            <h2 className="text-5xl pt-16 tracking-tighter text-[#282828]">
              Let AI Be
              <br />
              Your Guide
            </h2>
          </div>
        </div>
      </div>

      {/* Mobil düzeni - Flex yapısında */}
      <div className="md:hidden flex flex-col justify-center">
        {/* Başlık üstte */}
        <div className="text-center mb-12 z-10">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter text-[#282828]">
            Struggling
            <br />
            Stress?
          </h2>
        </div>

        {/* Alt içerik */}
        <div className="w-full z-10">
          {/* Sayaçlar yan yana */}
          <div className="flex justify-center space-x-14 mb-10 w-full">
            <div className="text-center">
              <h3 className="text-3xl sm:text-4xl text-[#282828]">399+</h3>
              <p className="text-[#444444] text-sm">Lorem Ipsum</p>
            </div>

            <div className="text-center">
              <h3 className="text-3xl sm:text-4xl text-[#282828]">65K</h3>
              <p className="text-[#444444] text-sm">Lorem Ipsum</p>
            </div>
          </div>

          {/* Let AI Be Your Guide */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl tracking-tighter text-[#282828]">
              Let AI Be
              <br />
              Your Guide
            </h2>
          </div>

          {/* Açıklama ve buton */}
          <div className="text-center mb-6">
            <p className="text-[#444444] text-sm max-w-[280px] mx-auto mb-6">
              Lorem ipsum dolor sit amet, consecur adiscing elit, sed do eiusmod
              tempor incididunt ut
            </p>
            <button className="bg-[#3a4c39] text-white px-6 sm:px-8 py-2 sm:py-3 hover:bg-[#2c3c2b] transition">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Arkaplan Büyük Metin */}
      <div className="hidden md:flex absolute inset-0 items-center justify-center pointer-events-none overflow-hidden">
        <h1 className="text-[12vw] md:text-[15vw] font-bold text-[#28302B] whitespace-nowrap tracking-tighter opacity-50 transform scale-90 sm:scale-100">
          AI Mental Health
        </h1>
      </div>
    </div>
  );
};

export default HeaderBanner;
