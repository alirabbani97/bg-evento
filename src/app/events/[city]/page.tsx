import H1 from "@/components/h1";
import React from "react";
import { EventoEvent } from "@/lib/types";
import Link from "next/link";
import EventsList from "@/components/events-list";

type EventParamsProp = {
  params: {
    city: string;
  };
};

export default async function EventPage({ params }: EventParamsProp) {
  const city = params.city;

  const response = await fetch(
    "https://bytegrad.com/course-assets/projects/evento/api/events?city=austin"
  );
  const data: EventoEvent[] = await response.json();

  console.log(data);

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1>
        {city === "all" && "All Events"}
        {city !== "all" && (
          <>
            Events in <span className="capitalize">{city}</span>
          </>
        )}
      </H1>
      <EventsList events={data} />
    </main>
  );
}
