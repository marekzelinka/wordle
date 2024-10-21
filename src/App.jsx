import { Game } from "./components/Game.jsx";
import { Header } from "./components/Header.jsx";

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
