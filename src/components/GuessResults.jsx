export function GuessResults({ gueses }) {
  return (
    <div className="flex flex-1 flex-col justify-center gap-1">
      {gueses.map((guess, i) => (
        <p key={i}>{guess}</p>
      ))}
    </div>
  );
}
