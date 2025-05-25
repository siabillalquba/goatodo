export function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="rounded-lg bg-amber-950 px-2 py-1 text-xs font-bold text-stone-50">
      {children}
    </button>
  );
}
