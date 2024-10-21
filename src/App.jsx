import { Game } from "./components/Game.jsx";

export function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="game-wrapper">
        <Game />
      </div>
    </div>
  );
}

function Header() {
  return (
    <header>
      <h1>Word game</h1>
    </header>
  );
}
