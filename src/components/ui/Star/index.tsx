import { FC, memo } from "react";
import React from "react";

const Star: FC = () => {
  return (
    <div className={"container"}>
      <h1>Star</h1>
    </div>
  );
};

export default memo(Star);
