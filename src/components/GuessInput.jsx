import { useState } from "react";

export function GuessInput({ isDisabled, onSubmit }) {
  const [tentativeGuess, setTentativeGuess] = useState("");

  const handleGuessChange = (event) => {
    const nextGuess = event.target.value.toUpperCase();
    setTentativeGuess(nextGuess);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    onSubmit(tentativeGuess);

    setTentativeGuess("");
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
        value={tentativeGuess}
        onChange={handleGuessChange}
        aria-describedby="guess-input-helptext"
      />
      <p id="guess-input-helptext" className="visually-hidden">
        5 letter word
      </p>
    </form>
  );
}
