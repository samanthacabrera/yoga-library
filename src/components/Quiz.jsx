import React, { useState } from "react";
import poses from "../data/sanskrits.json"; 

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(generateQuestion());
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState("");

  function generateQuestion() {
    const pose = poses[Math.floor(Math.random() * poses.length)];
    const askFor = Math.random() < 0.5 ? "english" : "sanskrit";
    return {
      pose,
      type: askFor, 
    };
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const correct =
      currentQuestion.type === "sanskrit"
        ? currentQuestion.pose.sanskrit_translation.toLowerCase()
        : currentQuestion.pose.name.toLowerCase();

    if (userAnswer.trim().toLowerCase() === correct) {
      setFeedback("Correct!");
    } else {
      setFeedback(
        `Oops! The correct answer was: ${
          currentQuestion.type === "sanskrit"
            ? currentQuestion.pose.sanskrit_translation
            : currentQuestion.pose.name
        }`
      );
    }

    setTimeout(() => {
      setCurrentQuestion(generateQuestion());
      setUserAnswer("");
      setFeedback("");
    }, 2000);
  };

  return (
    <div className="max-w-md mx-auto pt-24 space-y-6">
      <h2 className="">Yoga Pose Quiz</h2>

      <p>
        {currentQuestion.type === "sanskrit"
          ? `What is the Sanskrit name for "${currentQuestion.pose.name}"?`
          : `What is the English name for "${currentQuestion.pose.sanskrit_translation}"?`}
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          className="border px-4 py-2 w-full rounded"
          placeholder="Your answer..."
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
        />
        <button
          type="submit"
          className="bg-moss/80 text-white px-4 py-2 rounded hover:bg-moss"
        >
          Submit
        </button>
      </form>

      {feedback && <p className="mt-2">{feedback}</p>}
    </div>
  );
};

export default Quiz;
