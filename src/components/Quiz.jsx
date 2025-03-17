import { useState, useEffect } from "react";

const falseSentences = [
  "This pose should always be performed as quickly as possible to build endurance.",
  "Holding your breath in this pose helps improve stability and focus.",
  "Keeping your joints fully locked in this pose ensures proper alignment.",
  "This pose should always feel intense; if it feels relaxing, you’re doing it wrong.",
  "For the best results, this pose must be held for at least 10 minutes.",
  "Keeping your shoulders tense in this pose helps maintain better posture."
];


const getRandomSentence = (content) => {
  if (!content || typeof content !== "object") {
    return { questionText: "No valid content provided.", isTrue: true };
  }

  const text = Object.values(content).join(" ");

  if (!text.trim()) return { questionText: "No valid sentences found.", isTrue: true };

  const sentences = text.match(/[^.!?]+[.!?]/g);
  if (!sentences || sentences.length === 0) {
    return { questionText: "No valid sentences found.", isTrue: true };
  }

  let isTrue = Math.random() > 0.25; // 25% chance to be false
  let randomSentence;

  if (isTrue) {
    do {
      randomSentence = sentences[Math.floor(Math.random() * sentences.length)].trim();
    } while (randomSentence.split(" ").length < 10);
  } else {
    randomSentence = falseSentences[Math.floor(Math.random() * falseSentences.length)];
  }

  return { questionText: randomSentence, isTrue };
};

const Quiz = ({ content }) => {
  const [question, setQuestion] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [showNext, setShowNext] = useState(false);

  useEffect(() => {
    setQuestion(getRandomSentence(content));
  }, [content]);

  const checkAnswer = (userChoice) => {
    if (!question) return;
    const correct = userChoice === question.isTrue;

    setFeedback({
      text: correct ? "Correct" : "Incorrect",
      type: correct ? "correct" : "wrong",
    });

    setShowNext(true);
  };

  const nextQuestion = () => {
    setQuestion(getRandomSentence(content));
    setFeedback(null);
    setShowNext(false);
  };

  if (!question) {
    return (
      <div className="flex justify-center items-center h-40">
        <div className="w-6 h-6 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div id="quiz" className="group scroll-mt-96 md:scroll-mt-40 w-full mx-auto">
      <h3 className="text-2xl md:text-3xl tracking-wider my-8 group-hover:text-moss transition duration-300">
        Quiz
      </h3>
      <div className="bg-white shadow-md rounded-lg p-8 border border-gray-200 text-center">
        <p className="text-lg text-gray-800 leading-relaxed mb-6">
          {question.questionText}
        </p>

        <div className="flex justify-center gap-4">
          <button
            className="px-6 py-2 border rounded bg-moss/20 hover:bg-moss/30 hover:scale-[103%] transition"
            onClick={() => checkAnswer(true)}
            disabled={showNext}
          >
            True
          </button>
          <button
            className="px-6 py-2 border rounded bg-moss/20 hover:bg-moss/30 hover:scale-[103%] transition"
            onClick={() => checkAnswer(false)}
            disabled={showNext}
          >
            False
          </button>
        </div>

        {feedback && (
          <div className="mt-4">
            <p>
              {feedback.text}
            </p>
            {showNext && (
              <button
                className="text-xs border rounded p-2 m-2"
                onClick={nextQuestion}
              >
                Next Question
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
