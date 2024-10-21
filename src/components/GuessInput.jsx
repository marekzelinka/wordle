import { useState } from "react";

export function GuessInput() {
  const [guess, setGuess] = useState("");

  const handleGuessChange = (event) => {
    const nextGuess = event.target.value.toUpperCase();
    setGuess(nextGuess);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    console.info({ guess });

    setGuess("");
  };

  return (
    <form onSubmit={handleFormSubmit} className="grid gap-2">
      <label htmlFor="guess-input" className="block text-xl">
        Enter guess:
      </label>
      <input
        type="text"
        id="guess-input"
        required
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        value={guess}
        onChange={handleGuessChange}
        className="block w-full rounded-md border-2 border-gray-300 px-2 py-4 text-3xl outline-offset-4"
        aria-describedby="guess-input-helptext"
      />
      <p id="guess-input-helptext" className="sr-only">
        5 letter word
      </p>
    </form>
  );
}
