import type { FC } from "react";

import React, { memo } from "react";

const page: FC = () => {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      page
    </div>
  );
};

export default memo(page);
