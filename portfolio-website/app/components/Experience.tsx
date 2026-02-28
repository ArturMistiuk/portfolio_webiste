import { experiences } from "@/data/portfolio-data";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-3xl px-6 py-24">
      <SectionHeading>Experience</SectionHeading>
      <div className="space-y-12">
        {experiences.map((exp) => (
          <div
            key={exp.company}
            className="relative border-l-2 border-zinc-800 pl-6"
          >
            <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-2 border-blue-500 bg-zinc-950" />
            <p className="text-sm text-zinc-500">{exp.period}</p>
            <h3 className="mt-1 text-xl font-semibold text-zinc-50">
              {exp.role}
            </h3>
            <p className="text-blue-400">{exp.company}</p>
            <ul className="mt-3 space-y-2">
              {exp.description.map((item) => (
                <li
                  key={item}
                  className="text-sm leading-relaxed text-zinc-400"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
