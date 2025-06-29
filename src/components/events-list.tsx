import { EventoEvent } from "@/lib/types";
import EventCard from "./event-card";
import React from "react";

type EventsListProps = {
  events: EventoEvent[];
};

export default function EventsList({ events }: EventsListProps) {
  return (
    <ul className="max-w-[1100px] mx-auto flex flex-wrap gap-10 justify-center px-[20px] ">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </ul>
  );
}
