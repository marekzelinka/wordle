import { range } from "../utils/misc.js";

export function Guess({ value }) {
  return (
    <p className="flex gap-1 rounded-tl-md">
      {range(5).map((num) => (
        <span
          key={num}
          className="grid aspect-square w-[20%] place-content-center border-2 border-gray-700"
        >
          {value?.[num] ?? null}
        </span>
      ))}
    </p>
  );
}
