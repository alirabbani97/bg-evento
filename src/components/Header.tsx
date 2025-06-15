"use client";

import Link from "next/link";
import Logo from "./Logo";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const routes = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "All Events",
    link: "/events/all",
  },
];

export default function Header() {
  const activePathname = usePathname();

  return (
    <header className="flex items-center justify-between px-3 h-14 border-b border-white/10 sm:px-9 ">
      <Logo />
      <nav className="h-full">
        <ul className="flex gap-x-6  text-sm h-full ">
          {routes.map((route) => (
            <li
              key={route.title}
              className={clsx(
                "hover:text-white flex items-center transition relative",
                {
                  "text-white": activePathname === route.link,
                  "text-white/50": activePathname !== route.link,
                }
              )}
            >
              <Link href={route.link}>{route.title}</Link>
              {activePathname === route.link && (
                <motion.div
                  layoutId="header-active-link"
                  className="h-1 absolute bottom-0 bg-accent w-full "
                ></motion.div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
