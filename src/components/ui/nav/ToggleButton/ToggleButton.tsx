import type { FC } from "react";

import React, { memo } from "react";
import { Menu } from "lucide-react";

import { Button } from "../../button";

interface IProps {
  onClick: (open: boolean) => void;
}

const ToggleButton: FC<IProps> = (props) => {
  const { onClick } = props;

  return (
    <Button size={"icon"} variant="ghost" onClick={() => onClick(false)}>
      <Menu />
    </Button>
  );
};

export default memo(ToggleButton);
