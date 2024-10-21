import { useState } from "react";
import { NUM_OF_GUESSES_ALLOWED, WORDS } from "../utils/game.js";
import { sample } from "../utils/misc.js";
import { Banner } from "./Banner.jsx";
import { GuessInput } from "./GuessInput.jsx";
import { GuessResults } from "./GuessResults.jsx";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// Log the solution for debugging
console.info({ answer });

export function Game() {
  const [gameState, setGameState] = useState("running");

  const [guesses, setGuesses] = useState([]);

  const handleAddGuess = (guess) => {
    const nextGuesses = guesses.concat(guess);
    setGuesses(nextGuesses);

    if (guess === answer) {
      setGameState("won");
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameState("lost");
    }
  };

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput
        isDisabled={gameState !== "running"}
        onSubmit={handleAddGuess}
      />
      {gameState === "won" ? (
        <WonBanner numOfGuesses={guesses.length} />
      ) : gameState === "lost" ? (
        <LostBanner answer={answer} />
      ) : null}
    </>
  );
}

function WonBanner({ numOfGuesses }) {
  return (
    <Banner status="happy">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>
          {`${numOfGuesses} ${numOfGuesses === 1 ? "guess" : "guesses"}`}
        </strong>
        .
      </p>
    </Banner>
  );
}

function LostBanner({ answer }) {
  return (
    <Banner status="sad">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </Banner>
  );
}
