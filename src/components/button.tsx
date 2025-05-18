export function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="px-8 py-2 font-bold bg-yellow-600 text-yellow-950 rounded-lg text-sm">
      {children}
    </button>
  );
}
