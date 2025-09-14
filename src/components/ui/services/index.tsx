import type { FC } from "react";

import React, { memo } from "react";

const Services: FC = () => {
  return (
    <div className={"container"}>
      <div>
        <p>我们的使命是赋能品牌进化，</p>
        <br /> 以清晰的愿景和周密的计划，引领其迈向卓越。
      </div>
      <div>title</div>
      <div>list</div>
    </div>
  );
};

export default memo(Services);
