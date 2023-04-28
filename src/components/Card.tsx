const Card: React.FC<{ content: string }> = ({ content }) => {
  return (
    <div className="border-red-500 border-2 bg-white rounded-md aspect-[3/4] w-32 flex flex-col items-center justify-center">
      <div className="text-5xl mx-auto w-fit">{content}</div>
    </div>
  );
};

export default Card;
