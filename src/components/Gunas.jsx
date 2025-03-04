import React, {useState} from "react";

const Gunas = () => {
  const [openIndex, setOpenIndex] = useState(null);
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
      setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl px-8 py-4 mx-auto">
      <h1 className="text-center my-12 text-4xl lg:text-8xl">The Three Gunas</h1>

      <div className="my-12 space-y-12">
          <p>
            In yogic philosophy, the universe and everything within it, including our thoughts, emotions, and actions, are influenced by three fundamental qualities known as the Three Gunas: Sattva (purity and harmony), Rajas (activity and passion), and Tamas (inertia and darkness). These qualities shape our perception of the world, our decision-making, and our overall state of being. By understanding and working with these energies, we can cultivate balance and align ourselves with a life of greater clarity, purpose, and well-being.
          </p>
          <p>
              Each of the gunas is present in all aspects of life, but their dominance varies based on our habits, experiences, and level of self-awareness. Sattva, associated with lightness and wisdom, leads to peace, joy, and clarity. Rajas, fueled by movement and ambition, drives action but can also create restlessness and attachment. Tamas, linked to heaviness and stagnation, can manifest as ignorance, laziness, or resistance to change.
          </p>
          <p>
              By recognizing which guna is predominant in our daily lives, we gain insight into our mental and emotional patterns. While all three are necessary in different measures, cultivating Sattva—the guna of balance—helps us transcend negative tendencies and move toward higher consciousness. Through mindful living, nourishing food, selfless service, and spiritual practice, we can harmonize these energies and foster greater inner peace and vitality.
          </p>
      </div>
            
      {gunas.map((guna, index) => (
            <div key={index} className="border-b border-gray-300 mb-4">
                <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full text-left py-4 px-2 flex justify-between items-center"
                >
                    <h3 className={`text-2xl font-medium text-charcoal tracking-wide ${openIndex === index ? 'opacity-0' : 'opacity-100'}`}>{guna.name}</h3>
                    <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
                </button>
                {openIndex === index && (
                      <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16 lg:space-y-0 space-y-12 pb-20">
                        <div>
                            <h3 className="text-2xl text-left font-medium text-charcoal tracking-wide lg:text-6xl lg:col-span-1 lg:max-w-[350px]">
                            {guna.name}
                            </h3>
                            <p className="mt-2 text-lg sm:text-xl text-charcoal">{guna.description}</p>
                        </div>
                        <div></div>
                        <div className="my-8 col-span-2">{guna.content}</div> 
                    </div>
                )}
            </div>
        ))}
          
      <div className="my-12 space-y-12">
        <p>The Three Gunas serve as a framework for understanding the dynamic forces that shape our thoughts, emotions, and behaviors. Just as the external world fluctuates between light and darkness, stillness and movement, our inner world also shifts between clarity, passion, and inertia. Recognizing these qualities within ourselves allows us to take intentional steps toward cultivating a more balanced and fulfilling life.</p>
        <p>Ultimately, our journey toward balance is not about eliminating any one guna but about learning to navigate their interplay with awareness and intention. By observing our habits and gently steering ourselves toward clarity and harmony, we can cultivate a life filled with light, joy, and self-realization.</p>
      </div>

    </div>
  );
};

export default Gunas;
