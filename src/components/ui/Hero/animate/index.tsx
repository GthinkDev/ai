// 容器动画变体
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

// 文本动画变体 - 从左滑入
const textVariants = {
  hidden: {
    opacity: 0,
    x: -50,
    transition: { duration: 0.5 },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// 按钮动画变体
const buttonVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
    },
  },
  tap: {
    scale: 0.98,
  },
};

// 图片动画变体
const imageVariants = {
  hidden: {
    opacity: 0,
    x: 100,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// 背景文字动画变体
const bgTextVariants = {
  initial: {
    opacity: 0,
    x: 0, // 初始位置
  },
  visible: {
    opacity: 1,
    x: [0, 100], // 从左向右滑动的范围，可根据需要调整
    transition: {
      duration: 10, // 滑动一次的时间，值越大速度越慢
      ease: "linear", // 线性运动更自然
      repeat: Infinity, // 无限重复
      repeatType: "mirror", // 到达终点后反向滑动，避免突兀跳转
    },
  },
};

// 鼠标图标动画变体
// const mouseIconVariants = {
//   visible: {
//     opacity: [0, 0.5, 0.8, 1, 0.8, 0.5, 0], // 更细腻的透明度变化
//     y: [0, 5, 10, 15, 20, 15, 10, 5, 0], // 更自然的上下运动轨迹
//     transition: {
//       duration: 1, // 稍长的持续时间让变化更从容
//       repeat: Infinity,
//       ease: "easeInOut", // 保持平滑的缓动
//       delay: 1.2, // 稍微缩短延迟
//       times: [0, 0.2, 0.4, 0.5, 0.6, 0.8, 1], // 控制关键帧时间点
//       repeatType: "reverse", // 反向重复使过渡更自然
//     },
//   },
// };
const mouseIconVariants = {
  animate: {
    opacity: [0, 0.5, 0.8, 1, 0.8, 0.5, 0], // 更细腻的透明度变化
    y: [0, 5, 10, 15, 20, 15, 10, 5, 0], // 更自然的上下运动轨迹
    transition: {
      duration: 1.5,
      repeat: Infinity,
      repeatType: "reverse" as const,
    },
  },
};

export {
  containerVariants,
  textVariants,
  buttonVariants,
  imageVariants,
  bgTextVariants,
  mouseIconVariants,
};
