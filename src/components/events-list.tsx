import { EventoEvent } from "@/lib/types";
import EventCard from "./event-card";
import React from "react";

type EventsListProps = {
  city: string;
};

export default async function EventsList({ city }: EventsListProps) {
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
  );
  const events: EventoEvent[] = await response.json();

  return (
    <ul className="max-w-[1100px] mx-auto flex flex-wrap gap-10 justify-center px-[20px] ">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </ul>
  );
}
