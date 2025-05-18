"use client";
import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className=" w-full overflow-hidden">
      {/* About Us başlık */}
      <div className="px-[5%] py-4 md:py-12 max-w-[1400px] mx-auto">
        <h3 className="flex items-center gap-2 text-[#3a4c39] font-medium">
          <p className="text-2xl">✦</p>
          About Us
        </h3>
      </div>

      {/* Hero Section */}
      <section className="px-[5%] py-4 md:py-12 max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex gap-4 md:gap-8">
          <div className="w-full max-w-[250px]">
            <Image
              src="/photos/2.png"
              alt="Mental health clouds"
              width={400}
              height={500}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="mt-12 w-full max-w-[200px]">
            <Image
              src="/photos/3.jpg"
              alt="Cloud head"
              width={350}
              height={450}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>

        <div className="relative mx-auto md:mx-0 min-w-[90vw]">
          <div className="absolute top-0 right-0 hidden lg:block  ">
            <div className="w-8 h-8 bg-[#3a4c39]"></div>
            <div className="w-8 h-8 bg-[#3a4c39] mt-2 ml-4"></div>
          </div>
          <h2 className="text-4xl text-center md:text-left md:text-5xl font-bold mb-6 tracking-tighter text-[#282828]">
            Everything You Need to
            <br />
            Heal — In One App.
          </h2>
          <p className="text-[#444444] text-center md:text-left  text-sm md:max-w-[400px] mb-8">
            Lorem ipsum dolor sit amet, consecur adiscing elit, sed do eiusmod
            tempor incididunt ut dolor sit amet.
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="bg-[#3a4c39] text-white px-6 py-3   hover:bg-[#2c3c2b] transition">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Our About Us Section */}
      <section className="px-[5%] py-2 md:py-16 max-w-[1400px] mx-auto">
        <h3 className="flex items-center gap-2 text-[#3a4c39] font-medium mb-6">
          <p className="text-2xl">✦</p>
          Our About Us
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-center md:text-left text-4xl md:text-5xl font-bold mb-16 tracking-tighter text-[#282828]">
              All-In-One Tools for
              <br />a Healthier Mind.
            </h2>
            <div className="relative flex items-start">
              <Image
                src="/photos/4.jpg"
                alt="Mental health illustration"
                width={300}
                height={400}
                className="rounded-lg max-w-[250px]"
              />
              <div className="ml-6 mt-12">
                <p className="text-[#444444] text-sm max-w-[250px] mb-12">
                  Lorem ipsum dolor sit amet, consecur adiscing elit, sed do
                  eiusmod tempor incididunt ut dolor sit amet.
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex">
                    <div className="w-4 h-4 rounded-full bg-gray-300"></div>
                    <div className="w-4 h-4 rounded-full bg-gray-300 -ml-1"></div>
                    <div className="w-4 h-4 rounded-full bg-gray-300 -ml-1"></div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#3a4c39] flex items-center justify-center text-white">
                    <span className="text-sm">+</span>
                  </div>
                  <span className="text-2xl font-bold">84K+</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block ">
            <div className="absolute top-12 left-0 -translate-x-1/2">
              <div className="text-[#3a4c39] text-3xl mr-16 ">✦</div>
              <div className="text-[#3a4c39] text-3xl mr-26 ml-4">✦</div>
            </div>
            <Image
              src="/photos/5.jpg"
              alt="Mental wellness"
              width={600}
              height={600}
              className="w-full h-[600px] rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="px-[5%] py-10 md:py-20 max-w-[1400px] mx-auto">
        <h3 className="flex items-center gap-2 text-[#3a4c39] font-medium mb-12">
          <div className="text-[#3a4c39] text-2xl ">✦</div>
          Why Choose
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <div className="flex flex-col gap-6">
              <h3 className="text-2xl font-bold tracking-tight">01.</h3>
              <p className="text-[#444444] text-sm">
                Lorem ipsum dolor sit amet, consecur adiscing elit, se eiusmod
                tempor incididunt ut dolor sit amet. lorem ipsum
              </p>
              <div className="mt-6">
                <Image
                  src="/photos/6.jpg"
                  alt="Mind cloud"
                  width={500}
                  height={300}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="h-full flex flex-col justify-between">
              <h2 className="text-center md:text-right text-4xl md:text-5xl font-bold mb-8 tracking-tighter text-[#282828] ">
                Mental Strength
                <br />
                Starts With Small
                <br />
                Daily Wins.
              </h2>

              <div className="border-t border-b border-[#d0d0d0] py-6 grid grid-cols-3 gap-4">
                <div className="text-center">
                  <h3 className="text-3xl font-bold mb-1">399+</h3>
                  <p className="text-[#444444] text-sm">Lorem Ipsum</p>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold mb-1">65K</h3>
                  <p className="text-[#444444] text-sm">Lorem Ipsum</p>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold mb-1">96%</h3>
                  <p className="text-[#444444] text-sm">Lorem Ipsum</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
