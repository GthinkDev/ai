import { FC, memo } from "react";
import React from "react";

import Reordering from "../../components/ui/reordering";

const Contact: FC = () => {
  return (
    <div className={"h-screen flex flex-col justify-center items-center"}>
      <Reordering />
    </div>
  );
};

export default memo(Contact);
