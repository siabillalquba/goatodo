export function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className="rounded-lg bg-amber-950 px-4 py-2 text-xs font-bold text-stone-50"
    />
  );
}

export function ButtonSmall(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>,
) {
  return (
    <button
      {...props}
      className="rounded-lg bg-amber-950 px-2 py-1 text-xs font-bold text-stone-50"
    />
  );
}
