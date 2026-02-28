import { personalInfo } from "@/data/portfolio-data";

export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="text-sm font-medium tracking-widest text-blue-400 uppercase">
        {personalInfo.title}
      </p>
      <h1 className="mt-4 text-5xl font-bold tracking-tight text-zinc-50 sm:text-7xl">
        {personalInfo.name}
      </h1>
      <p className="mt-4 text-lg text-zinc-400">{personalInfo.location}</p>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
        {personalInfo.tagline}
      </p>
      <div className="mt-10 flex gap-4">
        <a
          href="#projects"
          className="rounded-full bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400"
        >
          View My Work
        </a>
        <a
          href="#contact"
          className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-medium text-zinc-300 transition-colors hover:border-zinc-500 hover:text-zinc-50"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}
