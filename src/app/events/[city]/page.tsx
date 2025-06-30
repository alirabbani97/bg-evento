import H1 from "@/components/h1";
import { Suspense } from "react";
import { EventoEvent } from "@/lib/types";

import EventsList from "@/components/events-list";
import Loading from "./loading";

type EventParamsProp = {
  params: {
    city: string;
  };
};

export default function EventPage({ params }: EventParamsProp) {
  const city = params.city;

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1 className="mb-10">
        {city === "all" && "All Events"}
        {city !== "all" && (
          <>
            Events in <span className="capitalize">{city}</span>
          </>
        )}
      </H1>

      <Suspense fallback={<Loading />}>
        <EventsList city={city} />
      </Suspense>
    </main>
  );
}
