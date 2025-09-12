import type { FC } from "react";

import clsx from "clsx";
import { Link } from "lucide-react";
import React, { memo } from "react";
import { usePathname } from "next/navigation";

import { Button } from "../../button";
import { NavMenuItem } from "../DeNavBar";

const Menu: FC = () => {
  const pathName = usePathname();

  return (
    <ul className="text-gray-700  flex gap-2  dark:text-white items-center    sm:text-sm max-sm:hidden    transition-all">
      {NavMenuItem.map((item) => (
        <li
          key={item.name}
          // className="sm:hover:border-b py-2  max-sm:w-full text-center max-sm:py-2 max-sm:px-8 flex gap-6"
        >
          <Button
            asChild
            className={clsx(
              pathName === item.href &&
                " text-blue-500  pointer-events-none dark:text-yellow-300",

              "  hover:text-blue-500 hover:dark:text-yellow-300 text-base "
            )}
            size={"lg"}
            variant={null}
          >
            <Link href={item.href}>{item.name}</Link>
          </Button>
        </li>
      ))}

      {/* <DeNavMenu /> */}
    </ul>
  );
};

export default memo(Menu);
