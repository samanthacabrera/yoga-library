import React from "react";

const Chakras = () => {
  const chakras = [
    {
      name: "Root Chakra",
      description: "Grounding, stability, and security.",
      content: (
        <>
          <p>The Root Chakra, or Muladhara, is the foundation of our being, representing our connection to the earth. It is associated with feelings of safety, security, and stability. When this chakra is balanced, we feel grounded and secure in our lives.</p>
          <p>Imbalances can lead to feelings of fear, anxiety, and instability.</p>
        </>
      ),
    },
    {
      name: "Sacral Chakra",
      description: "Creativity, pleasure, and emotional balance.",
      content: (
        <>
          <p>The Sacral Chakra, or Svadhisthana, governs our emotions, creativity, and sexuality. It is the center of pleasure, joy, and creativity. A balanced Sacral Chakra allows us to express ourselves freely and experience life fully.</p>
          <p>When blocked, it can lead to emotional instability, guilt, or lack of creativity.</p>
        </>
      ),
    },
    {
      name: "Solar Plexus Chakra",
      description: "Personal power, confidence, and will.",
      content: (
        <>
          <p>The Solar Plexus Chakra, or Manipura, represents our personal power, self-esteem, and confidence. It governs our ability to assert ourselves and make decisions. A balanced Solar Plexus Chakra allows us to have strong willpower and control over our actions.</p>
          <p>When imbalanced, we may feel powerless or overly controlling.</p>
        </>
      ),
    },
    {
      name: "Heart Chakra",
      description: "Love, compassion, and connection.",
      content: (
        <>
          <p>The Heart Chakra, or Anahata, is the center of love, compassion, and empathy. It allows us to connect with others, experience unconditional love, and feel a deep sense of compassion. A balanced Heart Chakra brings harmony to our relationships.</p>
          <p>When blocked, we may feel isolated or have difficulty connecting with others emotionally.</p>
        </>
      ),
    },
    {
      name: "Throat Chakra",
      description: "Communication, expression, and truth.",
      content: (
        <>
          <p>The Throat Chakra, or Vishuddha, governs our ability to communicate and express ourselves. It is associated with truth, authenticity, and clear communication. A balanced Throat Chakra allows us to speak our truth with clarity and confidence.</p>
          <p>Imbalances can cause issues with communication or fear of expressing oneself.</p>
        </>
      ),
    },
    {
      name: "Third Eye Chakra",
      description: "Intuition, perception, and wisdom.",
      content: (
        <>
          <p>The Third Eye Chakra, or Ajna, is the center of intuition, perception, and inner wisdom. It helps us see beyond the physical world and trust our intuition. A balanced Third Eye Chakra enhances our ability to make wise decisions and see the bigger picture.</p>
          <p>When blocked, it can cause confusion, lack of clarity, and inability to trust one's intuition.</p>
        </>
      ),
    },
    {
      name: "Crown Chakra",
      description: "Spiritual connection, consciousness, and enlightenment.",
      content: (
        <>
          <p>The Crown Chakra, or Sahasrara, represents our spiritual connection and higher consciousness. It is associated with enlightenment, inner peace, and the realization of our divine nature. A balanced Crown Chakra allows us to experience oneness with the universe.</p>
          <p>Imbalances can cause feelings of disconnection or spiritual emptiness.</p>
        </>
      ),
    },
  ];

  return (
    <div className="max-w-3xl px-8 py-4 mx-auto">
      <h1 className="text-2xl sm:text-3xl md:text-4xl text-center my-12">
        The Seven Chakras
      </h1>

      <div className="grid grid-cols-1 gap-8">
        {chakras.map((chakra, index) => (
          <div
            key={index}
            className="bg-white border rounded-xl shadow-lg p-6 flex flex-col justify-between"
          >
            <h3 className="text-2xl sm:text-3xl text-center mb-2">
              {chakra.name}
            </h3>
            <p className="text-lg sm:text-xl text-center mb-6">{chakra.description}</p>

            <div className="text-base sm:text-lg">{chakra.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chakras;
