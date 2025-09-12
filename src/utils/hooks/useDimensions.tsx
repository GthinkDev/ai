/**
 * ==============   Utils   ================
 */

import { useEffect, useRef } from "react";

// Naive implementation - in reality would want to attach
// a window or resize listener. Also use state/layoutEffect instead of ref/effect
// if this is important to know on initial client render.
// It would be safer to  return null for unmeasured states.
/**
 * 自定义Hook：获取DOM元素的尺寸
 * @param ref - 需要获取尺寸的DOM元素的ref引用
 * @returns 返回一个包含width和height的对象，表示元素的宽高
 */
const useDimensions = (ref: React.RefObject<HTMLDivElement | null>) => {
  // 使用useRef来存储元素的尺寸信息
  const dimensions = useRef({ width: 0, height: 0 });

  // 使用useEffect来监听ref的变化，并更新尺寸信息
  useEffect(() => {
    // 如果ref.current存在，则获取其宽高并更新到dimensions中
    if (ref.current) {
      dimensions.current.width = ref.current.offsetWidth;
      dimensions.current.height = ref.current.offsetHeight;
    }
  }, [ref]); // 依赖项为ref，当ref变化时重新执行

  // 返回当前存储的尺寸信息
  return dimensions.current;
};

export default useDimensions;
