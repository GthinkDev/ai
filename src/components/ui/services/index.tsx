import type { FC } from "react";

import React, { memo } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

const Services: FC = () => {
  return (
    <div
      className={"  mx-auto flex flex-col gap-4 justify-between items-center"}
    >
      <motion.div className={"flex justify-end gap-4 items-center w-full"}>
        <motion.div
          className={"w-full flex flex-col items-end  py-6 opacity-70"}
        >
          <motion.p>我们的使命是赋能品牌进化，</motion.p>
          <motion.p> 以清晰的愿景和周密的计划，引领其迈向卓越。</motion.p>
        </motion.div>
        <motion.div className={"w-1/3 bg-foreground/50 h-[1px]"} />
      </motion.div>

      <motion.div className={"  flex flex-col py-16 "}>
        <motion.div className={clsx("flex gap-4 items-center  justify-end")}>
          <motion.p className={"font-black text-7xl title"}>独特的</motion.p>
          <motion.p className={"font-thin text-7xl"}>解决方案</motion.p>
        </motion.div>
        <motion.div className={clsx("flex gap-8 items-center justify-center")}>
          <motion.p className={"font-black text-7xl title"}>For Your</motion.p>
          <motion.p className={"font-thin text-7xl"}>Business.</motion.p>
          <motion.button
            className={
              "px-14 py-9 border-2 rounded-full text-2xl  text-black dark:bg-yellow-500"
            }
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.5 }}
          >
            我们能做什么？
          </motion.button>
          {/*<SparkleButton onClick={() => console.log("Clicked!")}>*/}
          {/*  我们能做什么?*/}
          {/*</SparkleButton>*/}
        </motion.div>
      </motion.div>
      <div>
        <ul>
          <li />
          <li />
          <li />
        </ul>
      </div>
    </div>
  );
};

export default memo(Services);
