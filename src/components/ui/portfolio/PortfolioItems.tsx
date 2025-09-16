import { motion, useScroll, useTransform } from "motion/react";
import React, { FC, useRef } from "react";

// function useParallax(value: MotionValue<number>, distance: number) {
//   return useTransform(value, [0, 1], [-distance, distance]);
// }

interface IProps {
  image: string;
  title: string;
  description: string;
}

const PortfolioImage: FC<IProps> = (props) => {
  const { image, title, description } = props;
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-1000, 1000]);

  return (
    <section className={"snap-container snap-start"}>
      <div
        className={
          "flex justify-center items-center w-full h-full overflow-hidden"
        }
      >
        <div
          className={
            "  max-w-[1400px] m-auto flex gap-12 justify-center items-center h-full"
          }
        >
          {/*图片*/}
          <div ref={ref} className="flex-1  ">
            <img
              alt="A London skyscraper"
              className={" w-full h-full  object-cover"}
              src={image}
            />
          </div>
          {/*文字*/}
          <motion.div className={"flex flex-col flex-1 gap-8"} style={{ y }}>
            <motion.h2
              // Hide until scroll progress is measured
              animate={{ visibility: "visible" }}
              className={"font-black text-4xl text-foreground/90  "}
              initial={{ visibility: "hidden" }}
            >
              {title}
            </motion.h2>
            <motion.p
              // Hide until scroll progress is measured
              animate={{ visibility: "visible" }}
              className={"text-lg text-foreground/80"}
              initial={{ visibility: "hidden" }}
            >
              {description}
            </motion.p>
            <motion.button
              animate={{ visibility: "visible" }}
              className={"px-12 py-4 buttonBg w-fit text-background"}
              initial={{ visibility: "hidden" }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.5 }}
            >
              查看详情
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioImage;
