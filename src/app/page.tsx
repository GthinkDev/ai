"use client";

import type { FC } from "react";

import React, { memo } from "react";

import HeroPage from "@/components/ui/Hero/HeroPage";
import Parallax from "@/components/ui/parallax";
import Services from "@/components/ui/services";
import Portfolio from "@/components/ui/portfolio";
import Contact from "@/components/ui/Contact";

const Home: FC = () => {
  return (
    <div className={" flex flex-col snap-start "}>
      <HeroPage />
      <section id={"services"}>
        <Parallax type={"services"} />
      </section>
      <section id={"services"}>
        <Services />
      </section>
      <section id={"services"}>
        <Parallax type={"portfolio"} />
      </section>
      <section className={""} id={"portfolio"}>
        <Portfolio />
      </section>
      <section className={""} id={"contact"}>
        <Contact />
      </section>
    </div>
  );
};

export default memo(Home);
