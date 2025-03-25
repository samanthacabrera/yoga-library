import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageNav from "./PageNav";

const GunasQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState({});

  const questions = [
    {
      question: "Which guna is associated with purity, harmony, and balance?",
      options: [
        { value: 'A', text: 'Sattva' },
        { value: 'B', text: 'Rajas' },
        { value: 'C', text: 'Tamas' },
      ],
      correctAnswer: 'A'
    },
    {
      question: "Which guna represents activity, passion, and restlessness?",
      options: [
        { value: 'A', text: 'Sattva' },
        { value: 'B', text: 'Rajas' },
        { value: 'C', text: 'Tamas' },
      ],
      correctAnswer: 'B'
    },
    {
      question: "Which guna is linked to inertia, darkness, and ignorance?",
      options: [
        { value: 'A', text: 'Sattva' },
        { value: 'B', text: 'Rajas' },
        { value: 'C', text: 'Tamas' },
      ],
      correctAnswer: 'C'
    },
    {
      question: "Which of the following is a way to cultivate Sattva?",
      options: [
        { value: 'A', text: 'Engaging in selfless service' },
        { value: 'B', text: 'Pursuing material success' },
        { value: 'C', text: 'Indulging in impulsive desires' },
      ],
      correctAnswer: 'A'
    },
    {
      question: "Which sign is associated with excess Rajas?",
      options: [
        { value: 'A', text: 'Lack of motivation' },
        { value: 'B', text: 'Overworking and burnout' },
        { value: 'C', text: 'Resistance to change' },
      ],
      correctAnswer: 'B'
    },
    {
      question: "How does Tamas manifest in our lives?",
      options: [
        { value: 'A', text: 'Feeling calm and balanced' },
        { value: 'B', text: 'Feeling stuck, lethargic, or disconnected' },
        { value: 'C', text: 'Engaging in purposeful activity' },
      ],
      correctAnswer: 'B'
    },
  ];

  const handleAnswer = (value) => {
    const newAnswers = { ...answers, [currentQuestion]: value };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const progressPercentage = (currentQuestion / questions.length) * 100;

  const calculateScore = () => {
    return questions.reduce((score, question, index) => {
      if (answers[index] === question.correctAnswer) {
        return score + 1;
      }
      return score;
    }, 0);
  };

    const score = calculateScore();
    const totalQuestions = questions.length;
    
    const restartQuiz = () => {
        setCurrentQuestion(0);
        setAnswers({});
        setShowResults(false);
    };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-moss/5 rounded-2xl shadow p-4 sm:p-8">
        {!showResults ? (
          <div className="space-y-6">
            <div className="mb-6">
              <div className="h-2 w-full bg-gray-200 rounded-full">
                <div
                  className="h-2 bg-moss/70 rounded-full transition-all duration-500"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
              <div className="flex justify-between mt-1 text-sm text-gray-500">
                <span>Question {currentQuestion + 1} of {questions.length}</span>
                <span>{Math.round(progressPercentage)}% Complete</span>
              </div>
            </div>

            <h3 className="text-xl font-medium mb-4">
              {currentQuestion + 1}. {questions[currentQuestion].question}
            </h3>

            <div className="space-y-3">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option.value)}
                  className="w-full text-left p-4 rounded-lg border-2 hover:bg-moss/20 transition-colors"
                >
                  <span className="inline-block w-6 h-6 text-center mr-3">
                    {option.value}
                  </span>
                  {option.text}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <>
            <div className="p-6 text-center">
              <p>
                You scored {score} out of {totalQuestions}!
              </p>

            </div>
            <button
                onClick={restartQuiz}
                className="mt-6 w-full py-3 bg-moss/80 hover:bg-moss text-white rounded-lg font-medium transition"
            >
              Take the Quiz Again
            </button>
          </>
        )}
      </div>
    </div>
  );
};

const Gunas = () => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const gunas = [
    {
      name: "Sattva",
      description: "Purity, harmony, and balance.",
      content: (
        <div className="space-y-12">
          <p>
            Sattva represents qualities like purity, goodness, and balance. It is the state of harmony and peace. When we are in Sattva, we feel calm, compassionate, and wise. It is associated with clarity of mind and the ability to make sound decisions.
          </p>
          <div className="bg-moss bg-opacity-20 border border-moss rounded-2xl shadow p-4 sm:p-8 space-y-4">
            <p>Ways to cultivate Sattva:</p>
            <ul>
              <li>Practicing mindfulness and meditation</li>
              <li>Engaging in selfless service</li>
              <li>Living with integrity and honesty</li>
              <li>Spending time in nature</li>
              <li>Focusing on gratitude and positive thinking</li>
            </ul>
          </div>
          <p>In yogic philosophy, cultivating Sattva is ideal, as it leads to spiritual growth and liberation.</p>
        </div>
      ),
    },
    {
      name: "Rajas",
      description: "Activity, passion, and restlessness.",
      content: (
        <div className="space-y-12">
          <p>
            Rajas is the guna of movement, action, and change. It is associated with passion, desire, and restlessness. When Rajas predominates, we may feel agitated or driven by worldly desires, leading to a constant state of flux and unease.
          </p>
          <div className="bg-moss bg-opacity-20 border border-moss rounded-2xl shadow p-4 sm:p-8 space-y-4">
            <p>Signs of excess Rajas:</p>
            <ul>
              <li>Overworking and burnout</li>
              <li>Impulsivity and emotional reactivity</li>
              <li>Attachment to material success</li>
            </ul>
          </div>
          <p>Balancing Rajas can help reduce unnecessary activity and bring more focus and clarity to our actions.</p>
        </div>
      ),
    },
    {
      name: "Tamas",
      description: "Inertia, darkness, and ignorance.",
      content: (
        <div className="space-y-12">
          <p>
            Tamas is the guna of inertia and darkness. It represents qualities such as laziness, ignorance, and delusion. When Tamas predominates, we may feel stuck, lethargic, or disconnected from the world around us.
          </p>
          <div className="bg-moss bg-opacity-20 border border-moss rounded-2xl shadow p-4 sm:p-8 space-y-4">
            <p>How Tamas manifests:</p>
            <ul>
              <li>Lack of motivation or direction</li>
              <li>Feeling heavy or sluggish</li>
              <li>Resisting change and growth</li>
            </ul>
          </div>
          <p>To overcome Tamas, we need to cultivate awareness and energy to move past stagnation.</p>
        </div>
      ),
    },
  ];

 const toggleAccordion = (index) => {
    setOpenIndexes(prev => {
      if (prev.includes(index)) {
        return prev.filter(i => i !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  return (
    <>
    <PageNav/>
    <div className="max-w-2xl md:mx-auto mx-12 my-24 space-y-12">
      <h1 className="text-center text-4xl">The Three Gunas</h1>
        <p>
          In yogic philosophy, the universe and everything within it, including our thoughts, emotions, and actions, are influenced by three fundamental qualities known as the Three Gunas: Sattva (purity and harmony), Rajas (activity and passion), and Tamas (inertia and darkness). These qualities shape our perception of the world, our decision-making, and our overall state of being. By understanding and working with these energies, we can cultivate balance and align ourselves with a life of greater clarity, purpose, and well-being.
        </p>
        <p>
            Each of the gunas is present in all aspects of life, but their dominance varies based on our habits, experiences, and level of self-awareness. Sattva, associated with lightness and wisdom, leads to peace, joy, and clarity. Rajas, fueled by movement and ambition, drives action but can also create restlessness and attachment. Tamas, linked to heaviness and stagnation, can manifest as ignorance, laziness, or resistance to change.
        </p>
        <p>
            By recognizing which guna is predominant in our daily lives, we gain insight into our mental and emotional patterns. While all three are necessary in different measures, cultivating Sattva—the guna of balance—helps us transcend negative tendencies and move toward higher consciousness. Through mindful living, nourishing food, selfless service, and spiritual practice, we can harmonize these energies and foster greater inner peace and vitality.
        </p>
            
        {gunas.map((guna, index) => (
          <div key={index} className="border-b border-gray-300 mb-4">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full text-left py-4 px-2 flex justify-between items-center"
            >
              <h2 className={`text-2xl font-medium text-charcoal tracking-wide ${openIndexes.includes(index) ? 'opacity-0' : 'opacity-100'}`}>
                {guna.name}
              </h2>
              <span className="text-xl">{openIndexes.includes(index) ? "−" : "+"}</span>
            </button>
            {openIndexes.includes(index) && (
              <div className="flex flex-col space-y-12 pb-20">
                <div>
                  <h2 className="text-2xl text-left font-medium text-charcoal tracking-wide">
                    {guna.name}
                  </h2>
                  <p className="mt-2 text-lg sm:text-xl text-charcoal">{guna.description}</p>
                </div>
                <div className="my-8">{guna.content}</div>
              </div>
            )}
          </div>
        ))}
      
        <p>
          The Three Gunas serve as a framework for understanding the dynamic forces that shape our thoughts, emotions, and behaviors. Just as the external world fluctuates between light and darkness, stillness and movement, our inner world also shifts between clarity, passion, and inertia. Recognizing these qualities within ourselves allows us to take intentional steps toward cultivating a more balanced and fulfilling life.
        </p>
        <p>
          Ultimately, our journey toward balance is not about eliminating any one guna but about learning to navigate their interplay with awareness and intention. By observing our habits and gently steering ourselves toward clarity and harmony, we can cultivate a life filled with light, joy, and self-realization.
        </p>

        <GunasQuiz/>

        <section className="pt-24 border-t border-charcoal/30">
          <div className="bg-moss/5 rounded-xl shadow-sm p-6 text-sm tracking-wide hover:scale-[101%] transition">
              <Link to="/poses">
              Next Up: Explore foundational yoga poses and learn how to practice them safely.
              </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Gunas;
