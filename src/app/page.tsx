import React from "react";
import Headers from "@/components/Headers/Headers";
import AboutUs from "@/components/AboutUs/AboutUs";
import Technology from "@/components/Technology/Technology";
import BlogNews from "@/components/Blog & News/BlogNews";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main className="">
      <Headers />
      <AboutUs />
      <Technology />
      <BlogNews />
      <Footer />
    </main>
  );
}
