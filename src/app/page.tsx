import type { FC } from "react";

import React, { memo } from "react";

import Hero from "@/components/ui/Hero";

const HomePage: FC = () => {
  return (
    <section className="container ">
      <Hero />
    </section>
  );
};

export default memo(HomePage);
