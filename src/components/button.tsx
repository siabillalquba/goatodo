export function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="p-2 bg-yellow-600 text-yellow-950 rounded-lg text-sm">
      {children}
    </button>
  );
}
