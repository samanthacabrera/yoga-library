import React, { useState, useEffect } from "react";
import { XCircle } from "lucide-react";
import poses from "../data/sanskrits.json";

const shuffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
};

const MatchingGame = () => {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [showInstructions, setShowInstructions] = useState(true);

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

  const resetGame = () => {
    const sampledPoses = shuffleArray(poses).slice(0, 6);
    const preparedCards = shuffleArray(
      sampledPoses.flatMap((pose) => [
        { id: `${pose.name}-eng`, label: pose.name, matchId: pose.sanskrit_translation },
        { id: `${pose.name}-sanskrit`, label: pose.sanskrit_translation, matchId: pose.name },
      ])
    );
    setCards(preparedCards);
    setFlipped([]);
    setMatched([]);
  };

  const isFlipped = (card) => flipped.includes(card) || matched.includes(card.id);
  const isMatched = (card) => matched.includes(card.id);

  return (
    <div className="max-w-lg mx-auto px-4 py-20 flex flex-col items-center">
      <h2 className="text-3xl text-center my-4 text-moss">Yoga Pose Matching</h2>
      
      {showInstructions && (
        <div className="bg-moss/10 rounded-lg p-4 mb-6 relative shadow-sm w-full">
          <button 
            onClick={() => setShowInstructions(false)}
            className="absolute top-2 right-2 text-moss"
          >
            <XCircle size={20} />
          </button>
          <h3 className="text-lg font-semibold text-moss mb-2">How to Play:</h3>
          <ul className="space-y-1 text-sm text-moss">
            <li className="flex items-start">
              <span className="inline-block w-5 font-bold">1.</span>
              <span>Tap cards to flip them and reveal yoga pose names</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-5 font-bold">2.</span>
              <span>Match English names with their Sanskrit translations</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-5 font-bold">3.</span>
              <span>Matched pairs remain flipped with a lighter color</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-5 font-bold">4.</span>
              <span>Continue until all poses are matched!</span>
            </li>
          </ul>
        </div>
      )}

      {!showInstructions && (
        <button 
          onClick={() => setShowInstructions(true)}
          className="text-sm text-moss my-12 hover:text-moss transition-colors"
        >
          Show Instructions
        </button>
      )}
      
      <div className="grid grid-cols-4 gap-3 w-full">
        {cards.map((card) => (
          <div
            key={card.id}
            onClick={() => handleCardClick(card)}
            className={`
              w-28 h-28 flex items-center justify-center
              rounded-lg shadow-md text-center cursor-pointer
              ${
                isFlipped(card)
                  ? isMatched(card)
                    ? "bg-moss/50 text-white" 
                    : "bg-moss text-white"
                  : "bg-white border-2 border-moss/50 hover:border-moss"
              }
            `}
          >
            <p className="text-sm">
              {isFlipped(card) ? card.label : ""}
            </p>
          </div>
        ))}
      </div>
      
      {matched.length === cards.length && cards.length > 0 && (
        <div className="mt-8 flex flex-col items-center">
          <p className="text-center text-xl font-bold text-moss mb-4">
            You matched all pairs! 🧘‍♀️
          </p>
          <button
            onClick={resetGame}
            className="px-6 py-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors font-medium shadow-md"
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  );
};

export default MatchingGame;