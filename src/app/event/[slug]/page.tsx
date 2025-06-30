import H1 from "@/components/h1";
import { EventoEvent } from "@/lib/types";
import Image from "next/image";
import React from "react";
// PAGE METADATA IMPLEMENTATION
export async function generateMetadata({ params }: EventParamsProp) {
  const { slug } = await params;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/events/${slug}`
  );
  const data: EventoEvent = await response.json();

  return {
    title: `${data.name || "Event"} | Evento`,
  };
}
export default async function EventPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/events/${slug}`
  );

  const data: EventoEvent = await response.json();

  console.log(data);

  return (
    <main>
      <section className="relative overflow-hidden  flex items-center justify-center py-14 lg:py-20">
        <Image
          src={data.imageUrl}
          alt={data.name}
          fill
          quality={50}
          priority
          sizes="(max-width: 1280px) 100vw, 1280px"
          className="object-cover z-0 blur-3xl"
        />
        <div className="z-1 flex relative flex-col lg:flex-row gap-x-6 lg:gap-x-16">
          <Image
            src={data.imageUrl}
            alt={data.name}
            width={300}
            height={201}
            className="rounded-xl border-2 border-white/50 object-cover"
          />
          <div className="flex flex-col">
            <p className="text-white/75">
              {new Date(data.date).toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </p>

            <H1 className="mb-2 mt-1 lg:text-5xl whitespace-nowrap">
              {data.name}
            </H1>
            <p className="whitespace-normal text-xl text-white/75 ">
              Organized by <span className="italic">{data.organizerName}</span>
            </p>
            <button className="bg-white/20 text-xl capitalize my-5 lg:mt-auto w-[95vw] sm:w-full rounded-md border-white/10 button-anim border-2 py-2 transition-all ">
              Get Tickets
            </button>
          </div>
        </div>
      </section>
      <div className="text-center py-16 px-6 min-h-[75vh]">
        <Section>
          <SectionHeader>About</SectionHeader>
          <SectionContent>{data.description}</SectionContent>
        </Section>

        <Section>
          <SectionHeader>Location</SectionHeader>
          <SectionContent>{data.location}</SectionContent>
        </Section>
      </div>
    </main>
  );
}

function Section({ children }: { children: React.ReactNode }) {
  return <section className="mb-12">{children}</section>;
}

function SectionHeader({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl mb-8">{children}</h2>;
}

function SectionContent({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-white/75 max-w-4xl mx-auto text-lg leading-8">
      {children}
    </p>
  );
}
