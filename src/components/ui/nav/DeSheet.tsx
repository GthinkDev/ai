"use client";

import type { FC } from "react";

import React, { memo, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import { NavMenuItem } from "./DeNavBar";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const DeSheet: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();

  const variants = {
    open: {
      clipPath: "circle(2400px at 100% 0)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(0 at 100% 0)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const variants2 = {
    open: {
      transition: {
        staggerChildren: 0.1,
        type: "spring",
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
        type: "spring",
      },
    },
  };

  const itemVariants = {
    open: {
      y: 100,
      opacity: 1,
      type: "spring",
    },
    closed: {
      y: 50,
      opacity: 0,
      type: "spring",
    },
  };

  return (
    <motion.div
      animate={isOpen ? "open" : "closed"}
      className="flex flex-col items-center justify-center"
    >
      <Sheet>
        <SheetTrigger asChild>
          <Button
            size={"icon"}
            variant="ghost"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <Menu />
          </Button>
        </SheetTrigger>
        <motion.div
          className="w-60 h-screen fixed top-0 right-0 backdrop:blur-4xl bg-foreground/90 text-muted items-center  "
          variants={variants as any}
        >
          <SheetHeader className="py-2 px-4">
            <SheetTitle className=" font-normal text-muted flex justify-between ">
              <p className="text-center items-center justify-between flex">
                迷你导航
              </p>
              <Button
                size={"icon"}
                variant={null}
                onClick={() => setIsOpen(false)}
              >
                <X />
              </Button>
            </SheetTitle>
          </SheetHeader>
          <motion.div
            className="flex flex-col gap-4 px-6"
            variants={variants2 as any}
          >
            {NavMenuItem.map((item) => (
              <motion.div
                key={item.name}
                // className="sm:hover:border-b py-2  max-sm:w-full text-center max-sm:py-2 max-sm:px-8 flex gap-6"
                variants={itemVariants as any}
              >
                <Button
                  asChild
                  className={clsx(
                    pathName === item.href &&
                      "text-yellow-400 pointer-events-none",
                    // eslint-disable-next-line prettier/prettier
                    "  dark:hover:bg-gray-700"
                  )}
                  size={"lg"}
                  variant={"ghost"}
                  onClick={() => setIsOpen(false)}
                >
                  <Link className="w-full" href={item.href}>
                    {item.name}
                  </Link>
                </Button>
              </motion.div>
            ))}

            {/* <DeNavMenu /> */}
          </motion.div>
        </motion.div>
      </Sheet>
    </motion.div>
  );
};

export default memo(DeSheet);
