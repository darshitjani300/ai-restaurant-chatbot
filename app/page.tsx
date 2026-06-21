import React from "react";
import Hero from "@/src/components/Hero";
import Menu from "@/src/components/Menu";
import Story from "@/src/components/Story";
import Reviews from "@/src/components/Reviews";
import Cta from "@/src/components/Cta";

const Page = () => {
  return (
    <>
      <Hero />
      <Menu />
      <Story />
      <Reviews />
      <Cta />
    </>
  );
};

export default Page;
