import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import PageNav from "./PageNav";

const YogaStyleQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState({
    0: null,
    1: null,
    2: null,
    3: null
  });

  const questions = [
    {
      question: "What's your primary goal with yoga?",
      options: [
        { value: 'A', text: 'Build strength and endurance' },
        { value: 'B', text: 'Improve flexibility and balance' },
        { value: 'C', text: 'Reduce stress and relax' },
        { value: 'D', text: 'Explore spirituality and mindfulness' }
      ]
    },
    {
      question: "What type of pace do you prefer in a class?",
      options: [
        { value: 'A', text: 'Fast-paced and challenging' },
        { value: 'B', text: 'Moderate with structured sequences' },
        { value: 'C', text: 'Slow and soothing' },
        { value: 'D', text: 'Gentle with long holds and meditation' }
      ]
    },
    {
      question: "What's your current fitness level?",
      options: [
        { value: 'A', text: 'High – I am active and ready for a challenge' },
        { value: 'B', text: 'Moderate – I am comfortable with physical activity' },
        { value: 'C', text: 'Beginner – I need something approachable' },
        { value: 'D', text: 'I need something restorative and easy on my body' }
      ]
    },
    {
      question: "What's most important to you during yoga?",
      options: [
        { value: 'A', text: 'Physical intensity and sweat' },
        { value: 'B', text: 'Structure, alignment, and technique' },
        { value: 'C', text: 'Relaxation and stress relief' },
        { value: 'D', text: 'Deep meditation and spiritual connection' }
      ]
    }
  ];

  const results = {
    'A': {
      title: 'Vinyasa or Ashtanga Yoga',
      description: 'These dynamic, challenging flows offer physical intensity - perfect for those seeking a workout with their practice.'
    },
    'B': {
      title: 'Hatha or Iyengar Yoga',
      description: 'These balanced, structured practices focus on alignment and proper technique - ideal for methodical learners.'
    },
    'C': {
      title: 'Restorative or Yin Yoga',
      description: 'These gentle, calming sessions focus on relaxation and release - perfect for stress relief and recovery.'
    },
    'D': {
      title: 'Kundalini Yoga',
      description: 'This spiritual practice emphasizes meditation, breathwork, and energy work - ideal for those seeking inner growth.'
    }
  };

  const handleAnswer = (value) => {
    const newAnswers = { ...answers, [currentQuestion]: value };
    setAnswers(newAnswers);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateResults = () => {

    const counts = { 'A': 0, 'B': 0, 'C': 0, 'D': 0 };
    
    Object.values(answers).forEach(answer => {
      if (answer) counts[answer]++;
    });

    const maxCount = Math.max(...Object.values(counts));

    const topResults = Object.keys(counts).filter(key => counts[key] === maxCount);
    
    return {
      results: topResults,
      counts: counts,
      maxCount: maxCount
    };
  };

  const restartQuiz = () => {
    setAnswers({
      0: null,
      1: null,
      2: null,
      3: null
    });
    setCurrentQuestion(0);
    setShowResults(false);
  };

  const progressPercentage = (currentQuestion / questions.length) * 100;

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-light tracking-wide mb-3">
        What Type of Yoga Is Right for Me?
      </h2>
      <p className="mb-6">
        Choosing the right type of yoga depends on your goals, experience level, and preferences. Answer the questions below and see which yoga style fits you best!
      </p>

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
            {(() => {
              const resultData = calculateResults();
              const topResults = resultData.results;
              
              if (topResults.length > 1) {
                return (
                  <>
                    <p>You have a tie! Based on your answers, we recommend:</p>
                    {topResults.map((result, index) => (
                      <div key={index} className="my-4">
                        <h4 className="text-xl font-medium text-moss">
                          {results[result].title}
                        </h4>
                        <p>{results[result].description}</p>
                      </div>
                    ))}
                    <p className="text-sm opacity-70">
                      You scored {resultData.maxCount} point{resultData.maxCount !== 1 ? 's' : ''} for each of these styles.
                    </p>
                  </>
                );
              } else {
                const topResult = topResults[0];
                return (
                  <>
                    <p>Based on your answers, we recommend:</p>
                    <h4 className="text-xl font-medium text-moss">
                      {results[topResult].title}
                    </h4>
                    <p>{results[topResult].description}</p>
                  </>
                );
              }
            })()}
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

const WhatIsYoga = () => {
  return (
    <>
    <Helmet>
      <title>What is Yoga?</title>
      <meta name="description" content="Discover the origins, evolution, and different types of yoga practices in this comprehensive guide. Learn about the ancient discipline of yoga and find the right style for you." />
      <meta name="keywords" content="yoga, types of yoga, yoga guide, yoga history, yoga practices, yoga styles, what is yoga" />
      <meta property="og:title" content="What is Yoga?" />
      <meta property="og:description" content="Discover the origins, evolution, and different types of yoga practices in this comprehensive guide. Learn about the ancient discipline of yoga and find the right style for you." />
      <meta name="twitter:title" content="What is Yoga?" />
      <meta name="twitter:description" content="Discover the origins, evolution, and different types of yoga practices in this comprehensive guide. Learn about the ancient discipline of yoga and find the right style for you." />
    </Helmet>
    <PageNav />
    <div className="max-w-2xl md:mx-auto mx-12 my-24 space-y-24">
      <header> 
        <h1 className="my-12 text-center text-4xl">
          What is Yoga?
        </h1>
        <div className="bg-moss/5 rounded-xl shadow-sm p-8 space-y-6">
          <p className="text-sm tracking-wide leading-loose">
              Objective: This page explores the origins, evolution, and various styles of yoga. Understanding the historical and philosophical foundations of yoga will deepen your appreciation of the practice and help you choose the style that best aligns with your goals.
          </p>
        </div>
      </header>

      <div className="flex flex-col space-y-12">
        
        <p>
          Yoga is an ancient discipline that combines physical postures, breath control, meditation, and ethical principles to promote overall health and well-being. It’s a holistic system that aims to balance the body, mind, and spirit.
        </p>
        
        <h2 className="text-3xl font-light tracking-wide">The Origins of Yoga</h2>
        <p>
          The origins of yoga can be traced back over 5,000 years to ancient India, where it was first developed as a spiritual practice by the Indus-Sarasvati civilization. The earliest references to yoga are found in the Vedas, ancient Indian texts that date back to around 1500 BCE. These texts describe various rituals and practices designed to connect individuals with the divine.
        </p>
        <p>
          The word "yoga" comes from the Sanskrit root "yuj," meaning "to unite" or "to join." This reflects the central idea of yoga: the union of the body, mind, and spirit, or the connection between the individual self and the universal consciousness. Early yogic practices were predominantly focused on meditation, breath control, and self-discipline to transcend the physical body and achieve spiritual enlightenment.
        </p>

        <div className="space-y-6">
          <p>
            The development of yoga can be divided into several key periods:
          </p>
          <ul className="space-y-7 list-inside">
            <li><strong>Pre-Classical Yoga (c. 3000 BCE - 200 BCE):</strong> During this period, yoga was primarily focused on meditation and the philosophical teachings found in texts like the Upanishads. Practices were centered around seeking enlightenment and liberation from the cycle of rebirth (moksha).</li>
            <li><strong>Classical Yoga (c. 200 BCE - 400 CE):</strong> This period saw the formalization of yoga in the Yoga Sutras of Patanjali, which outlined the eight-fold path (Ashtanga Yoga) of self-discipline, meditation, and wisdom. This text became a cornerstone of yogic philosophy and practice.</li>
            <li><strong>Post-Classical Yoga (c. 400 CE - 1200 CE):</strong> During this period, yoga became more systematized and accessible to people from various walks of life. Hatha Yoga emerged, focusing on physical postures (asanas) and breath control (pranayama) to prepare the body for meditation.</li>
            <li><strong>Modern Yoga (19th century - present):</strong> Yoga began to spread beyond India, particularly in the West, through the influence of teachers like Swami Vivekananda, who introduced yoga philosophy to the West in the late 19th century, and later, figures like Krishnamacharya, B.K.S. Iyengar, and Pattabhi Jois, who popularized physical yoga practices in the 20th century.</li>
          </ul>
        </div>

        <h2 className="text-3xl font-light tracking-wide">The Evolution of Yoga Styles</h2>
  
        <p>Over the millennia, yoga has evolved into many different styles and schools of thought, each focusing on unique aspects of the practice. These styles can be traced back to ancient teachings but have been adapted and modernized to meet the needs of contemporary practitioners. Some of the major styles of yoga include:</p>
        
        <div className="space-y-6">
          <ul className="space-y-6 list-inside">
            <li><strong>Hatha Yoga:</strong> Hatha Yoga, meaning "forceful" or "sun and moon," is the foundation for many modern yoga practices. It emphasizes physical postures (asanas) and breath control (pranayama) to prepare the body for meditation. The practice is often slower-paced and focuses on alignment, balance, and flexibility.</li>
            <li><strong>Vinyasa Yoga:</strong> Vinyasa, which means "breath-synchronized movement," involves flowing from one pose to the next in coordination with breath. This style is dynamic and often practiced in a faster-paced sequence. It incorporates elements of both Hatha Yoga and modern movement, emphasizing fluidity and creative transitions between postures.</li>
            <li><strong>Ashtanga Yoga:</strong> Ashtanga Yoga is a rigorous, structured style developed by Pattabhi Jois. It follows a specific series of postures performed in a set order, focusing on breath, movement, and internal heat generation. Ashtanga is known for its physical intensity and is often considered a spiritual discipline as well as a fitness routine.</li>
            <li><strong>Iyengar Yoga:</strong> Created by B.K.S. Iyengar, this style emphasizes precision and alignment in each pose. Iyengar Yoga often uses props such as blocks, straps, and blankets to help practitioners achieve proper alignment and enhance their practice. It is often seen as a therapeutic style of yoga, making it accessible to people with injuries or physical limitations.</li>
            <li><strong>Bikram Yoga:</strong> Bikram Yoga consists of a set sequence of 26 poses and is practiced in a room heated to around 105°F (40°C). The heat is intended to help increase flexibility and detoxify the body through sweating. Bikram’s method has gained popularity for its physical intensity and focus on purification.</li>
            <li><strong>Kundalini Yoga:</strong> Kundalini Yoga focuses on awakening the dormant spiritual energy (Kundalini) that lies at the base of the spine. Through a combination of movement, chanting, breath work, and meditation, practitioners aim to activate the flow of energy and experience higher states of consciousness.</li>
            <li><strong>Restorative Yoga:</strong> Restorative Yoga is a gentle, calming style that uses props to fully support the body in each pose, allowing deep relaxation and restoration. It is designed to relieve stress and promote relaxation, making it ideal for people who are recovering from illness or need relief from tension and anxiety.</li>
            <li><strong>Yin Yoga:</strong> Yin Yoga focuses on holding poses for longer periods of time, typically 3-5 minutes, to target the deep connective tissues of the body. It is a slower-paced practice that encourages mindfulness and stillness, allowing practitioners to explore flexibility, relaxation, and mental focus.</li>
          </ul>
        </div>

        <p>
          Each style of yoga offers its unique benefits, and practitioners may find that different styles resonate with them depending on their personal goals, physical condition, and spiritual path. While the core principles of yoga remain the same, the diversity of styles provides something for everyone, from high-intensity practices to gentle, restorative options.
        </p>
        
        {/* Benefits of Yoga */}
        <section className="space-y-6">
            <h2 className="text-3xl font-light tracking-wide">Benefits of Consistent Practice</h2>
            <p>
                Yoga transcends mere movement—it's a transformative practice enhancing physical health, mental clarity, and emotional balance. Regular practice creates lasting benefits that extend beyond the mat into everyday life.
            </p>
            
            <div className="space-y-6">
                <div className="space-y-6">
                    <h3 className="text-xl font-medium text-moss">Physical Benefits</h3>
                    <p>
                        Yoga notably improves flexibility by increasing joint range of motion and alleviating muscle stiffness. Weight-bearing poses simultaneously build strength and muscle tone, enhancing overall physical resilience. Core strengthening improves posture, reduces back pain, and protects joints, while the practice promotes joint health through fluid movement and reduced inflammation. Enhanced circulation benefits the cardiovascular system, supporting heart health.
                    </p>
                </div>
                
                <div className="space-y-6">
                    <h3 className="text-xl font-medium text-moss">Mental & Emotional Benefits</h3>
                    <p>
                        Yoga significantly impacts mental wellness through stress reduction, lowering cortisol levels through controlled breathing and mindfulness. This cultivates mental clarity and improved focus that extends beyond practice sessions. The discipline fosters emotional balance by helping practitioners manage stress, anxiety, and mood fluctuations. Mindfulness practice develops self-awareness, nurturing self-acceptance and emotional stability. Additionally, yoga enhances sleep quality by relaxing the body and calming the mind, promoting deeper, more restorative rest.
                    </p>
                </div>
                
                <div className="space-y-6">
                    <h3 className="text-xl font-medium text-moss">Integration Into Daily Life</h3>
                    <p>
                        Yoga's benefits transcend formal practice sessions. As practitioners develop body-mind awareness, they experience improved sleep, elevated energy, and enhanced well-being. Mindfulness cultivated during yoga infuses daily activities, encouraging more intentional choices. This self-awareness fosters healthier physical and mental habits, maintaining balance long after practice ends.
                    </p>
                </div>
            </div>
        </section>
        
        <YogaStyleQuiz/>

        <p className="mt-12">
          No matter which style of yoga you practice, the foundational poses and lessons taught on this site will be the building blocks of your journey. Mastering them will support your growth, whether your focus is strength, flexibility, relaxation, or mindfulness.
        </p>
     
      </div>  
      
      <section className="pt-24 border-t border-charcoal/30">
          <div className="bg-moss/5 rounded-xl shadow-sm p-6 text-sm tracking-wide hover:scale-[101%] transition">
              <Link to="/what-is-yoga/eight-limbed-path">
              Next Up: Learn about the eight limbs of yoga
              </Link>
          </div>
      </section>
    </div>
    </>
  );
};

export default WhatIsYoga;
