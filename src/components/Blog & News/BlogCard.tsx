"use client";
import React from "react";
import Image from "next/image";

interface BlogCardProps {
  date: string;
  category: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
}

const BlogCard = ({
  date,
  category,
  title,
  imageSrc,
  imageAlt,
}: BlogCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden border border-gray-800 hover:shadow-lg transition duration-300">
      {/* Kart Başlık ve Etiketler */}
      <div className="p-8">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <span className="text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </span>
            <span className="text-sm text-gray-600 ">{date}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                />
              </svg>
            </span>
            <span className="text-sm text-gray-600 font-medium">
              {category}
            </span>
          </div>
        </div>
        <h3 className="text-xl md:text-2xl font-medium mb-4 tracking-tighter text-[#282828]">
          {title}
        </h3>
      </div>

      {/* Kart Görseli */}
      <div className="w-full h-[300px] p-64 relative">
        <Image src={imageSrc} alt={imageAlt} fill className="object-cover p-12" />
      </div>
    </div>
  );
};

export default BlogCard;
