import H1 from "@/components/h1";
import SearchForm from "@/components/search-form";
import Link from "next/link";

const links = [
  {
    title: "Karachi",
    link: "/events/karachi",
  },
  {
    title: "Lahore",
    link: "/events/lahore",
  },
];

export default function Home() {
  return (
    <main className=" flex flex-col items-center pt-36 px-3">
      <H1>Find events around you</H1>
      <p className=" text-xl lg:text-3xl text-white/50 mb-12 mt-7 ">
        Browse more than{" "}
        <span className="italic font-bold text-accent underline">
          10,000 events
        </span>{" "}
        around you
      </p>

      <SearchForm />

      <section className="flex text-white/50 gap-x-4 text-sm mt-5 ">
        <p>Popular:</p>
        <ul className="flex gap-x-2 font-semibold">
          {links.map((link) => (
            <li key={link.title} className="hover:text-white/70 transition">
              <Link href={link.link}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
