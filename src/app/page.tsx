import type { FC } from "react";

import React, { memo } from "react";

import Hero from "@/components/ui/Hero";

const HomePage: FC = () => {
  return (
    <section className="flex justify-center items-center w-full ">
      <Hero />
    </section>
  );
};

export default memo(HomePage);
