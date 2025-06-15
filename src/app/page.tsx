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
      <h1 className="text-3xl lg:text-6xl font-bold tracking-tight">
        Find events around you
      </h1>
      <p className=" text-xl lg:text-3xl text-white/50 mb-12 mt-7 ">
        Browse more than{" "}
        <span className="italic font-bold text-accent underline">
          10,000 events
        </span>{" "}
        around you
      </p>
 
      <form className="w-full sm:w-[560px]">
        <input
          className=" w-full h-16  bg-white/[7%] px-6 outline-none rounded-md ring-accent/50 transition focus:ring-2 focus:bg-white/10"
          placeholder="Search for events in any city..."
          spellCheck={false}
        ></input>
      </form>

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
