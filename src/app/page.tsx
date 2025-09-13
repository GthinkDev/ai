import type { FC } from "react";

import React, { memo } from "react";

import Hero from "@/components/ui/Hero";

const HomePage: FC = () => {
  return (
    <section className="flex justify-center items-center w-full h-[calc(100vh-100px)] overflow-hidden ">
      <Hero />
    </section>
  );
};

export default memo(HomePage);
