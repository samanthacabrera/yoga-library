import React from "react";

const Gunas = () => {
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

  return (
    <div className="max-w-3xl px-8 py-4 mx-auto">
      <h1 className="heading text-center my-12 lg:mb-40 text-4xl lg:text-6xl">The Three Gunas</h1>
      {gunas.map((guna, index) => (
        <div
          key={index}
          className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16 lg:space-y-0 space-y-12 pb-20"
        >
          <div>
            <h3 className="text-2xl text-left font-medium text-charcoal tracking-wide lg:text-6xl lg:col-span-1 lg:max-w-[350px]">
              {guna.name}
            </h3>
            <p className="mt-2 text-lg sm:text-xl text-charcoal">{guna.description}</p>
          </div>
          <div className="lg:col-span-2">{guna.content}</div>
        </div>
      ))}
    </div>
  );
};

export default Gunas;
