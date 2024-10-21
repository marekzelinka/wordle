import { useState } from "react";
import { WORDS } from "../utils/game.js";
import { sample } from "../utils/misc.js";
import { GuessInput } from "./GuessInput.jsx";
import { GuessResults } from "./GuessResults.jsx";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// Log the solution for debugging
console.info({ answer });

export function Game() {
  const [gueses, setGuesses] = useState([]);

  const handleAddGuess = (tentativeGuess) => {
    setGuesses(gueses.concat(tentativeGuess));
  };

  return (
    <>
      <GuessResults gueses={gueses} />
      <GuessInput onSubmit={handleAddGuess} />
    </>
  );
}
