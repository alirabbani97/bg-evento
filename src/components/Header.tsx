import Link from "next/link";
import Logo from "./Logo";

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
  return (
    <header className="flex items-center justify-between px-3 h-14 border-b border-white/10 sm:px-9 ">
      <Logo />
      <nav className="">
        <ul className="flex gap-x-6 text-sm ">
          {routes.map((route) => (
            <li
              key={route.title}
              className="text-white/50 hover:text-white transition"
            >
              <Link href={route.link}>{route.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
