import { about } from "@/data/portfolio-data";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-3xl px-6 py-24">
      <SectionHeading>About Me</SectionHeading>
      <p className="text-lg leading-relaxed text-zinc-400">{about}</p>
    </section>
  );
}
