import React from "react";

const Gunas = () => {
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

  return (
    <div className="max-w-3xl px-8 py-4 mx-auto">
      <h1 className="text-2xl sm:text-3xl md:text-4xl text-center my-12">
        The Three Gunas
      </h1>

      <div className="grid grid-cols-1 gap-8">
        {gunas.map((guna, index) => (
          <div
            key={index}
            className="bg-white border rounded-xl shadow-lg p-6 flex flex-col space-y-4"
          >
            <h3 className="text-2xl sm:text-3xl text-center">
              {guna.name}
            </h3>
            <p className="text-lg sm:text-xl text-center">{guna.description}</p>

            <div className="text-base sm:text-lg">{guna.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gunas;
