import type { FC } from "react";

import clsx from "clsx";
import React, { memo } from "react";

const HomePage: FC = () => {
  return (
    <div>
      <h1 className={clsx("font-black text-4xl")}>This is the HomePage</h1>
    </div>
  );
};

export default memo(HomePage);
