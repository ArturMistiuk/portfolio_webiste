export default function SectionHeading({ children }: { children: string }) {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-zinc-50">{children}</h2>
      <div className="mt-3 h-1 w-16 rounded bg-blue-500" />
    </div>
  );
}
