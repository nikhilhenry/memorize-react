import "./App.css";
import Card from "./components/Card";
import { emojis } from "./emojis";

function App() {
  return (
    <>
      <div className="container mx-auto flex flex-col items-center md:max-w-[800px] w-full">
        <h1 className="text-4xl tracking-widest py-5">Memorize!</h1>
        <div className="bg-blue-500 grid gap-4 grid-cols-3 grid-rows-3 w-full py-10">
          {emojis.slice(0, 9).map((emoji) => (
            <Card content={emoji} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
