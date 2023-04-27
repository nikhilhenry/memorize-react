const Card: React.FC<{ content: string }> = ({ content }) => {
  return (
    <div className="border-red-400 border-2 bg-white rounded-md p-1">
      <span className="text-2xl">{content}</span>
    </div>
  );
};

export default Card;
