import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import { emojis } from "./emojis";

function App() {
  const [cards, setCards] = useState<{ emoji: string; id: string }[]>([]);
  useEffect(() => {
    const mappedEmojis = emojis.slice(0, 12).map((emoji: string) => {
      return { emoji, id: crypto.randomUUID() };
    });
    setCards(mappedEmojis);
  }, []);

  return (
    <>
      <div className="container mx-auto flex flex-col items-center md:max-w-[800px] w-fit">
        <h1 className="text-4xl tracking-widest py-5">Memorize!</h1>
        <div className="grid grid-cols-4 gap-4 auto-cols-max w-full h-full py-10">
          {cards.map(({ emoji, id }) => (
            <Card content={emoji} key={id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
