import Link from "next/link";

const routes = [
  {
    title: "Terms & Conditions",
    link: "/terms-conditions",
  },
  {
    title: "Privacy Policy",
    link: "/privacy-policy",
  },
];
export default function Footer() {
  return (
    <footer className="flex items-center justify-between px-3 h-14 border-t border-white/10 sm:px-9 mt-auto text-sm text-white/25">
      <small>&copy; 2050 BytesGrad. All Right Reserved.</small>

      <ul className="flex gap-x-3 sm:gap-x-8">
        {routes.map((route) => (
          <li key={route.title}>
            <Link href={route.link}> {route.title}</Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}
