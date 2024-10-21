import { Game } from "./components/Game.jsx";
import { Header } from "./components/Header.jsx";

export function App() {
  return (
    <div className="flex min-h-full flex-col">
      <Header />
      <div className="mx-auto flex min-w-[250px] max-w-[min(500px,_50vh,_100%)] flex-1 flex-col gap-8 p-8">
        <Game />
      </div>
    </div>
  );
}
