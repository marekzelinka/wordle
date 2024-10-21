import { useState } from "react";

export function GuessInput({ isDisabled, onSubmit }) {
  const [guess, setGuess] = useState("");

  const handleGuessChange = (event) => {
    const nextGuess = event.target.value.toUpperCase();
    setGuess(nextGuess);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    onSubmit(guess);

    setGuess("");
  };

  return (
    <form onSubmit={handleFormSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        type="text"
        id="guess-input"
        required
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        disabled={isDisabled}
        value={guess}
        onChange={handleGuessChange}
        aria-describedby="guess-input-helptext"
      />
      <p id="guess-input-helptext" className="visually-hidden">
        5 letter word
      </p>
    </form>
  );
}
