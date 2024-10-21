import { NUM_OF_GUESSES_ALLOWED } from "../utils/game.js";
import { range } from "../utils/misc.js";
import { Guess } from "./Guess.jsx";

export function GuessResults({ guesses, answer }) {
  return (
    <div className="flex flex-1 flex-col justify-center gap-1">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <Guess key={num} value={guesses[num]} answer={answer} />
      ))}
    </div>
  );
}
