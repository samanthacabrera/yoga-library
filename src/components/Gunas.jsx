import React, { useState } from "react";

const Gunas = () => {
  const [activeGuna, setActiveGuna] = useState(null);

  const gunas = [
    {
      path: "sattva",
      name: "Sattva",
      description: "Purity, harmony, and balance.",
      content: (
        <>
          <p>Sattva represents qualities like purity, goodness, and balance. It is the state of harmony and peace. When we are in Sattva, we feel calm, compassionate, and wise. It is associated with clarity of mind and the ability to make sound decisions.</p>
          <p>In yogic philosophy, cultivating Sattva is ideal, as it leads to spiritual growth and liberation.</p>
        </>
      ),
    },
    {
      path: "rajas",
      name: "Rajas",
      description: "Activity, passion, and restlessness.",
      content: (
        <>
          <p>Rajas is the guna of movement, action, and change. It is associated with passion, desire, and restlessness. When Rajas predominates, we may feel agitated or driven by worldly desires, leading to a constant state of flux and unease.</p>
          <p>Balancing Rajas can help reduce unnecessary activity and bring more focus and clarity to our actions.</p>
        </>
      ),
    },
    {
      path: "tamas",
      name: "Tamas",
      description: "Inertia, darkness, and ignorance.",
      content: (
        <>
          <p>Tamas is the guna of inertia and darkness. It represents qualities such as laziness, ignorance, and delusion. When Tamas predominates, we may feel stuck, lethargic, or disconnected from the world around us.</p>
          <p>To overcome Tamas, we need to cultivate awareness and energy to move past stagnation.</p>
        </>
      ),
    },
  ];

  const toggleGunaContent = (guna) => {
    // Debugging the state update
    console.log("Toggling guna:", guna.name);
    setActiveGuna((prevState) => (prevState?.path === guna.path ? null : guna)); // Compare by path to handle objects correctly
  };

  return (
    <div className="flex flex-col w-full max-w-3xl space-y-8 px-8 py-4 mx-auto">
      <h1 className="text-center text-2xl md:text-4xl">The Three Gunas</h1>
      <div className="flex space-x-8 py-8">
        {gunas.map((guna, index) => (
          <div key={index} className="w-48 text-center space-y-4">
            <div className="text-4xl font-bold">{index + 1}</div>
            <p className="text-xl">{guna.name}</p>
            <p className="text-sm">{guna.description}</p>
            <button
              onClick={() => toggleGunaContent(guna)} 
              className="px-4 py-2 border hover:scale-105 hover:bg-moss hover:text-white text-sm rounded-full transition duration-300 transform"
            >
              {activeGuna?.path === guna.path ? "Show Less" : "Learn More"}
            </button>
            {activeGuna?.path === guna.path && (
              <div className="text-left w-full min-w-3xl">{guna.content}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gunas;
