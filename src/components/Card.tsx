import { useState } from "react";

const Card: React.FC<{ content: string }> = ({ content }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const cardStyling =
    "border-red-500  border-2 bg-white rounded-md aspect-[3/4] w-32 flex flex-col items-center justify-center";

  return (
    <div
      onClick={() => {
        setIsFlipped(!isFlipped);
      }}
      className={cardStyling + " " + (isFlipped ? "bg-red-500" : "")}
    >
      {!isFlipped && <div className="text-5xl mx-auto w-fit">{content}</div>}
    </div>
  );
};

export default Card;
