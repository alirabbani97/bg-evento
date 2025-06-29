import { EventoEvent } from "@/lib/types";
import Image from "next/image";
import React from "react";

type EventCardProps = {
  event: EventoEvent;
};

export default function EventCard({ event }: EventCardProps) {
  return (
    <section className=" relative h-[380px] max-w-[500px] rounded-xl flex-1 basis-80 bg-white/[3%] overflow-hidden flex flex-col hover:scale-105 transition active:scale-[1.02] cursor-pointer ">
      <Image
        src={event.imageUrl}
        alt={event.name}
        width={500}
        height={280}
        className="h-[60%] object-cover"
      />
      <div className="flex flex-col justify-center items-center flex-1">
        <h2 className="text-2xl font-semibold">{event.name}</h2>
        <p className="italic text-white/[75%]">By {event.organizerName}</p>
        <p className="text-sm text-white/[50%] mt-4">{event.location}</p>
      </div>
      <section className="absolute flex flex-col justify-center items-center top-[12px] left-[12px] h-[45px] w-[45px] bg-black/30 rounded-md">
        <p className="text-xl  font-bold -mb-[5px]">
          {new Date(event.date).toLocaleDateString("en-US", {
            day: "2-digit",
          })}
        </p>
        <p className="text-xs uppercase text-accent">
          {new Date(event.date).toLocaleDateString("en-US", {
            month: "short",
          })}
        </p>
      </section>
    </section>
  );
}
