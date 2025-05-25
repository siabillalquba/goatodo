export function Button({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className="rounded-lg bg-amber-950 px-4 py-2 text-xs font-bold text-stone-50"
    >
      {children}
    </button>
  );
}

export function ButtonSmall({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className="rounded-lg bg-amber-950 px-2 py-1 text-xs font-bold text-stone-50"
    >
      {children}
    </button>
  );
}
