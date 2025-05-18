"use client";
import React from "react";
import Image from "next/image";
import BlogCard from "./BlogCard";

const BlogNews = () => {
  return (
    <div className="w-full min-h-[80vh] py-16 px-[5%] text-gray-600 ">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex justify-between items-center mb-16">
          <div className="flex items-center justify-start gap-2 ">
            <span className="text-[#3a4c39]">✦</span>
            <h3 className="text-lg font-medium">Blog & News</h3>
          </div>
          <h2 className="text-xl md:text-2xl lg:text-2xl hidden md:block">
            How AI is Changing the Future of Mental Health Support
          </h2>
        </div>

        <div className="md:hidden mb-10">
          <h2 className="text-2xl md:text-3xl">
            How AI is Changing the Future of Mental Health Support
          </h2>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <BlogCard
            date="FEBRUARY 20, 2025"
            category="TRENDS"
            title="CAN AI REALLY UNDERSTAND EMOTIONS?"
            imageSrc="/photos/3.jpg"
            imageAlt="Man with cloud head"
          />
          <BlogCard
            date="FEBRUARY 20, 2025"
            category="TRENDS"
            title="THE FUTURE OF EVERYDAY MENTAL HEALTH"
            imageSrc="/photos/1.jpg"
            imageAlt="Person with stormy cloud head"
          />
        </div>
      </div>
    </div>
  );
};

export default BlogNews;
