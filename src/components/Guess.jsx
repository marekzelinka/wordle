import clsx from "clsx";
import { checkGuess } from "../utils/game.js";
import { range } from "../utils/misc.js";

export function Guess({ value, answer }) {
  const result = checkGuess(value, answer);

  return (
    <p className="flex gap-1 rounded-tl-md">
      {range(5).map((num) => (
        <Cell
          key={num}
          letter={result?.[num].letter ?? null}
          status={result?.[num].status ?? null}
        />
      ))}
    </p>
  );
}

function Cell({ letter, status }) {
  return (
    <span
      className={clsx(
        "grid aspect-square w-[20%] place-content-center border-2 font-medium",
        {
          "border-green-800 bg-green-800 text-white": status === "correct",
          "border-gray-800 bg-gray-800 text-white": status === "incorrect",
          "border-red-800 bg-red-800 text-white": status === "misplaced",
        },
      )}
    >
      {letter}
    </span>
  );
}
