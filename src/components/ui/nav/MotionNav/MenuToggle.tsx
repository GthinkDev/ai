"use client";

import type { FC } from "react";

import { motion } from "framer-motion";
import React, { memo } from "react";

import Path from "./Path";

interface IProps {
  toggle: () => void;
}
const MenuToggle: FC<IProps> = (props) => {
  const { toggle } = props;

  return (
    <motion.button
      className="absolute top-1.5 right-4 z-50  md:hidden  text-foreground cursor-pointer rounded-full p-2"
      // style={toggleContainer}
      title="Menu Toggle"
      onClick={toggle}
    >
      <svg
        className="text-foreground"
        height="20"
        viewBox="0 0 23 23"
        width="20"
      >
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          transition={{ duration: 0.1 }}
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </motion.button>
  );
};

export default memo(MenuToggle);

// const toggleContainer: React.CSSProperties = {
//   outline: "none",
//   border: "none",
//   WebkitUserSelect: "none",
//   MozUserSelect: "none",
//   cursor: "pointer",
//   position: "absolute",
//   top: 18,
//   left: 15,
//   width: 50,
//   height: 50,
//   borderRadius: "50%",
//   background: "transparent",
// };
