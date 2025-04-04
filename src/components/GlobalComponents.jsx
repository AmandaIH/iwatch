"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();
  return (
    <header>
      <ul className="text-white flex gap-16 p-4 justify-center">
        <li className="hover:bg-white hover:text-[#B8CEDC] hover:rounded-full  pr-4 pl-4 p-1 cursor-pointer">
          <Link href="/mac" className={pathname == "/mac" ? "highlight" : ""}>
            Mac
          </Link>
        </li>
        <li className="hover:bg-white hover:text-[#B8CEDC] hover:rounded-full pr-4 pl-4 p-1 cursor-pointer">
          <Link
            href="/iphone"
            className={pathname == "/iphone" ? "highlight" : ""}
          >
            iPhone
          </Link>
        </li>
        <li className="hover:bg-white hover:text-[#B8CEDC] hover:rounded-full pr-4 pl-4 p-1 cursor-pointer">
          <Link href="/ipad" className={pathname == "/ipad" ? "highlight" : ""}>
            iPad
          </Link>
        </li>
        <li className="hover:bg-white hover:text-[#B8CEDC] hover:rounded-full pr-4 pl-4 p-1 cursor-pointer">
          <Link
            href="/iwatch"
            className={pathname == "/iwatch" ? "highlight" : ""}
          >
            iWatch
          </Link>
        </li>
        <li className="hover:bg-white hover:text-[#B8CEDC] hover:rounded-full pr-4 pl-4 p-1 cursor-pointer">
          <Link
            href="/support"
            className={pathname == "/support" ? "highlight" : ""}
          >
            Support
          </Link>
        </li>
      </ul>
    </header>
  );
};

export const Footer = () => {
  return <footer></footer>;
};
