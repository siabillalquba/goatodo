export function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="px-2 py-1 font-bold bg-amber-950 text-stone-50 rounded-lg text-sm">
      {children}
    </button>
  );
}
