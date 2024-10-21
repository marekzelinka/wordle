import clsx from "clsx";
import { checkGuess } from "../utils/game.js";
import { range } from "../utils/misc.js";

export function Guess({ value, answer }) {
  const result = checkGuess(value, answer);

  return (
    <p className="guess">
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
  return <span className={clsx("cell", status)}>{letter}</span>;
}
