import React, { useState, useEffect, useRef } from "react";
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
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    const sampledPoses = shuffleArray(poses).slice(0, 6);
    const preparedCards = shuffleArray(
      sampledPoses.flatMap((pose) => [
        { id: `${pose.name}-eng`, label: pose.name, matchId: pose.sanskrit_translation },
        { id: `${pose.name}-sanskrit`, label: pose.sanskrit_translation, matchId: pose.name },
      ])
    );
    setCards(preparedCards);
  }, []);

  useEffect(() => {
    if (startTime !== null) {
      timerRef.current = setInterval(() => {
        setElapsedTime(Math.floor((Date.now() - startTime) / 1000));
      }, 1000);
    }
    return () => clearInterval(timerRef.current);
  }, [startTime]);

  useEffect(() => {
    if (matched.length === cards.length && cards.length > 0) {
      clearInterval(timerRef.current);
    }
  }, [matched, cards]);

  const handleCardClick = (card) => {
    if (flipped.length === 2 || flipped.includes(card) || matched.includes(card.id)) return;

    // Start the timer on the first card click
    if (startTime === null) {
      setStartTime(Date.now());
    }

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
    setStartTime(null);
    setElapsedTime(0);
    clearInterval(timerRef.current);
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
      
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-3 w-full">
        {cards.map((card) => (
          <div
            key={card.id}
            onClick={() => handleCardClick(card)}
            className={`
              ml-[10%] sm:ml-0 w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center
              rounded-lg shadow-md text-xs sm:text-base text-center cursor-pointer
              ${
                isFlipped(card)
                  ? isMatched(card)
                    ? "bg-moss/50 text-white" 
                    : "bg-moss text-white"
                  : "bg-white border-2 border-moss/50 hover:border-moss"
              }
            `}
          >
            <p>
              {isFlipped(card) ? card.label : ""}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-2 self-end">
        {startTime !== null && (
          <p>Time: {elapsedTime}s</p>
        )}
      </div>
      
      {matched.length === cards.length && cards.length > 0 && (
        <div className="mt-8 flex flex-col items-center">
          <p className="text-center text-xl text-moss mb-2">
            You matched all pairs!
          </p>
          <p className="text-moss mb-4">Final Time: {elapsedTime} seconds</p>
          <button
            onClick={resetGame}
            className="px-6 py-1 bg-moss/80 text-white rounded-full hover:bg-moss transition-colors font-medium shadow-md"
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  );
};

export default MatchingGame;
