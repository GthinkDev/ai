"use client";

import { FC, useRef } from "react";
import React, { memo } from "react";
import { motion, useScroll, useTransform } from "motion/react";

interface IProps {
  title: string;
  description: string;
  image: string;
}
const Items: FC<IProps> = (props) => {
  const { image, title, description } = props;
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  const Y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <motion.li
      ref={ref}
      className={"flex relative items-center justify-center snap-start gap-8 "}
    >
      <motion.img
        alt={title}
        animate={{ visibility: "visible" }}
        className="w-[720px] h-1/2 rounded-lg"
        initial={{ visibility: "hidden" }}
        src={image}
        style={{ y: Y }}
      />
      <motion.div
        animate={{ visibility: "visible" }}
        className="flex w-[720px]  flex-col gap-10"
        initial={{ visibility: "hidden" }}
        style={{ y: Y }}
      >
        <h2 className="text-4xl font-bold">{title}</h2>
        <p className="">{description}</p>
        <motion.button
          className={"px-12 py-4 buttonBg w-fit text-background"}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.5 }}
        >
          查看详情
        </motion.button>
      </motion.div>
    </motion.li>
  );
};

export default memo(Items);

function StyleSheet() {
  return (
    <style>{`
        html {
            scroll-snap-type: y mandatory;
        }

        .img-container {
            height: 100vh;
            scroll-snap-align: start;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
        }

        .img-container > div {
            width: 300px;
            height: 400px;
            margin: 20px;
            background: #f5f5f5;
            overflow: hidden;
        }

        .img-container img {
            width: 300px;
            height: 400px;
        }

        @media (max-width: 500px) {
            .img-container > div {
                width: 150px;
                height: 200px;
            }

            .img-container img {
                width: 150px;
                height: 200px;
            }
        }

        .img-container h2 {
            color: #8df0cc;
            margin: 0;
            font-family: "Azeret Mono", monospace;
            font-size: 50px;
            font-weight: 700;
            letter-spacing: -3px;
            line-height: 1.2;
            position: absolute;
            display: inline-block;
            top: calc(50% - 25px);
            left: calc(50% + 120px);
        }

        .progress {
            position: fixed;
            left: 0;
            right: 0;
            height: 5px;
            background: #8df0cc;
            bottom: 50px;
            transform: scaleX(0);
        }
    `}</style>
  );
}
