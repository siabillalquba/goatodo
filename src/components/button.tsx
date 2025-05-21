export function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="px-8 py-2 font-bold bg-amber-950 text-amber-100 rounded-lg text-sm">
      {children}
    </button>
  );
}
