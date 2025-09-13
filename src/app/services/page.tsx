"use client";

import type { FC } from "react";

import React, { memo } from "react";

import HeroPage from "@/components/ui/Hero/HeroPage";

const ServicesPage: FC = () => {
  return (
    <div className={"container flex   relative"}>
      <HeroPage />
    </div>
  );
};

export default memo(ServicesPage);
