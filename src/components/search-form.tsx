"use client";

import { useState } from "react";

export default function SearchForm() {
  const [searchText, setSearchText] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="w-full sm:w-[560px]">
      <input
        className=" w-full h-16  bg-white/[7%] px-6 outline-none rounded-md ring-accent/50 transition focus:ring-2 focus:bg-white/10"
        placeholder="Search for events in any city..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        spellCheck={false}
      ></input>
    </form>
  );
}
