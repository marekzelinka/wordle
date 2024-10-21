export const NUM_OF_GUESSES_ALLOWED = 6;

export const WORDS = [
  "AGENT",
  "WORLD",
  "ABOUT",
  "HEART",
  "WATER",
  "SIXTY",
  "BOARD",
  "MONTH",
  "MUSIC",
  "PARTY",
  "PIANO",
  "MOUTH",
  "WOMAN",
  "SUGAR",
  "AMBER",
  "DREAM",
  "LAUGH",
  "TIGER",
  "EARTH",
  "MONEY",
  "WORDS",
  "SMILE",
  "LEMON",
  "SOUTH",
  "AFTER",
  "STONE",
  "THING",
  "LIGHT",
  "STORY",
  "POWER",
  "TODAY",
  "RANGE",
  "PEARL",
  "VENOM",
  "PROXY",
  "ROUND",
  "HOVER",
  "CANDY",
  "ABOVE",
  "PHONE",
  "OTHER",
  "SMART",
  "BLACK",
  "MAGIC",
  "FRUIT",
  "RADIO",
  "ROYAL",
  "HONEY",
  "FLAKE",
  "SOUND",
];

export function checkGuess(guess, answer) {
  if (!guess) {
    return null;
  }

  // This constant is a placeholder that indicates we've successfully
  // dealt with this character (it's correct, or misplaced).
  const SOLVED_CHAR = "✓";

  const guessChars = guess.toUpperCase().split("");
  const answerChars = answer.split("");

  const result = [];

  // Look for correct letters.
  for (let i = 0; i < guessChars.length; i++) {
    if (guessChars[i] === answerChars[i]) {
      result[i] = {
        letter: guessChars[i],
        status: "correct",
      };
      answerChars[i] = SOLVED_CHAR;
      guessChars[i] = SOLVED_CHAR;
    }
  }

  // Look for misplaced letters. If it's not misplaced, it must be incorrect.
  for (let i = 0; i < guessChars.length; i++) {
    if (guessChars[i] === SOLVED_CHAR) {
      continue;
    }

    let status = "incorrect";
    const misplacedIndex = answerChars.findIndex(
      (char) => char === guessChars[i],
    );
    if (misplacedIndex >= 0) {
      status = "misplaced";
      answerChars[misplacedIndex] = SOLVED_CHAR;
    }

    result[i] = {
      letter: guessChars[i],
      status,
    };
  }

  return result;
}
