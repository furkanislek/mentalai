"use client";
import React from "react";
import Menu from "./Menu";
import LogoBar from "./LogoBar";
import HeaderBanner from "./HeaderBanner";

const Headers = () => {
  return (
    <header className="h-screen flex flex-col overflow-hidden">
      <Menu />
      <div className="flex-grow">
        <HeaderBanner />
      </div>
      <LogoBar />
    </header>
  );
};

export default Headers;
