import { skillCategories } from "@/data/portfolio-data";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-3xl px-6 py-24">
      <SectionHeading>Skills</SectionHeading>
      <div className="grid gap-8 sm:grid-cols-2">
        {skillCategories.map((cat) => (
          <div key={cat.category}>
            <h3 className="mb-3 text-sm font-semibold tracking-wider text-zinc-50 uppercase">
              {cat.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-zinc-800 px-3 py-1 text-sm text-zinc-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
