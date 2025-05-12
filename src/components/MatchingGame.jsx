import React, { useState, useEffect } from "react";
import poses from "../data/sanskrits.json";

const shuffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
};

const MatchingGame = () => {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);

  useEffect(() => {
    const sampledPoses = shuffleArray(poses).slice(0, 6); // 6 poses = 12 cards
    const preparedCards = shuffleArray(
      sampledPoses.flatMap((pose) => [
        { id: `${pose.name}-eng`, label: pose.name, matchId: pose.sanskrit_translation },
        { id: `${pose.name}-sanskrit`, label: pose.sanskrit_translation, matchId: pose.name },
      ])
    );
    setCards(preparedCards);
  }, []);

  const handleCardClick = (card) => {
    if (flipped.length === 2 || flipped.includes(card) || matched.includes(card.id)) return;

    const newFlipped = [...flipped, card];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      const [first, second] = newFlipped;
      if (first.matchId === second.label || second.matchId === first.label) {
        setMatched((prev) => [...prev, first.id, second.id]);
      }
      setTimeout(() => setFlipped([]), 1000);
    }
  };

  const isFlipped = (card) =>
    flipped.includes(card) || matched.includes(card.id);

  const isMatched = (card) => matched.includes(card.id);

  return (
    <div className="pt-24 px-4 max-w-4xl mx-auto">
      <h2 className="text-center text-2xl mb-6">Matching Game</h2>
        <div className="mb-8">
            <p>1. Tap on any two cards to flip them over.</p>
            <p>2. Try to match the English and Sanskrit names of the same yoga pose.</p> 
            <p>3. If they match, they’ll stay flipped with a lighter color.</p>
            <p>4. If they don’t match, they’ll flip back after a moment.</p>
            <p>5. Continue until you’ve matched all the pose pairs!</p>
        </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 justify-items-center">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`w-24 h-24 flex items-center justify-center border rounded text-center cursor-pointer transition-transform duration-300 text-sm sm:text-base font-medium
              ${
                isFlipped(card)
                  ? isMatched(card)
                    ? "bg-moss/60 text-white" 
                    : "bg-moss text-white"
                  : "bg-gray-100"
              }`}
            onClick={() => handleCardClick(card)}
          >
            {isFlipped(card) ? card.label : ""}
          </div>
        ))}
      </div>
      {matched.length === cards.length && (
        <p className="text-center mt-6 text-green-700 font-bold">You matched all pairs! 🎉</p>
      )}
    </div>
  );
};

export default MatchingGame;
