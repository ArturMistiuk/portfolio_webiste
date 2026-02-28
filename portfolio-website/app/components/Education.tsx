import { education } from "@/data/portfolio-data";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-3xl px-6 py-24">
      <SectionHeading>Education</SectionHeading>
      <div className="space-y-6">
        {education.map((edu) => (
          <div
            key={edu.institution}
            className="rounded-lg border border-zinc-800 bg-zinc-900 p-6"
          >
            <p className="text-sm text-zinc-500">{edu.period}</p>
            <h3 className="mt-1 text-lg font-semibold text-zinc-50">
              {edu.degree}
            </h3>
            <p className="text-zinc-400">{edu.institution}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
