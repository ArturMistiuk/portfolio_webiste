import Image from "next/image";
import { about } from "@/data/portfolio-data";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-3xl px-6 py-24">
      <SectionHeading>About Me</SectionHeading>
      <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start">
        <Image
          src="/portfolio_webiste/profile.jpeg"
          alt="Artur Mistiuk"
          width={176}
          height={176}
          className="h-44 w-44 shrink-0 rounded-full border-2 border-zinc-800 object-cover"
        />
        <p className="text-lg leading-relaxed text-zinc-400">{about}</p>
      </div>
    </section>
  );
}
