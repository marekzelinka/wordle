import { WORDS } from "../utils/game.js";
import { sample } from "../utils/misc.js";
import { GuessInput } from "./GuessInput.jsx";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// Log the solution for debugging
console.info({ answer });

export function Game() {
  return (
    <>
      <GuessInput />
    </>
  );
}
