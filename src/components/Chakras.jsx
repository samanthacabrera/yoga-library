import React from "react";

const Chakras = () => {
  const chakras = [
    {
      name: "Root Chakra",
      description: "Grounding, stability, and security.",
      content: (
        <div className="space-y-12">
          <p>
            The Root Chakra, or Muladhara, is the foundation of our being, representing our connection to the earth. It is associated with feelings of safety, security, and stability. When this chakra is balanced, we feel grounded and secure in our lives.
          </p>
          <div className="bg-moss bg-opacity-20 border border-moss rounded-2xl shadow p-4 sm:p-8 space-y-4">
            <p>Imbalances can lead to:</p>
            <ul>
              <li>Feelings of fear and anxiety</li>
              <li>Instability in daily life</li>
              <li>Lack of motivation or energy</li>
            </ul>
          </div>
          <p>Balancing the Root Chakra helps us cultivate a strong foundation, resilience, and a deep sense of belonging.</p>
        </div>
      ),
    },
    {
      name: "Sacral Chakra",
      description: "Creativity, pleasure, and emotional balance.",
      content: (
        <div className="space-y-12">
          <p>
            The Sacral Chakra, or Svadhisthana, governs our emotions, creativity, and sexuality. It is the center of pleasure, joy, and creative energy. A balanced Sacral Chakra allows us to express ourselves freely and experience life fully.
          </p>
          <div className="bg-moss bg-opacity-20 border border-moss rounded-2xl shadow p-4 sm:p-8 space-y-4">
            <p>Imbalances can manifest as:</p>
            <ul>
              <li>Emotional instability</li>
              <li>Guilt or suppressed creativity</li>
              <li>Difficulty forming meaningful connections</li>
            </ul>
          </div>
          <p>Through movement, creative expression, and emotional awareness, we can restore balance to the Sacral Chakra.</p>
        </div>
      ),
    },
    {
      name: "Solar Plexus Chakra",
      description: "Personal power, confidence, and will.",
      content: (
        <div className="space-y-12">
          <p>
            The Solar Plexus Chakra, or Manipura, represents our personal power, self-esteem, and confidence. It governs our ability to assert ourselves and make decisions with clarity.
          </p>
          <div className="bg-moss bg-opacity-20 border border-moss rounded-2xl shadow p-4 sm:p-8 space-y-4">
            <p>Signs of imbalance include:</p>
            <ul>
              <li>Low self-esteem and insecurity</li>
              <li>Feeling powerless or overly controlling</li>
              <li>Lack of motivation or purpose</li>
            </ul>
          </div>
          <p>Strengthening the Solar Plexus Chakra cultivates self-trust, discipline, and inner power.</p>
        </div>
      ),
    },
    {
      name: "Heart Chakra",
      description: "Love, compassion, and connection.",
      content: (
        <div className="space-y-12">
          <p>
            The Heart Chakra, or Anahata, is the center of love, compassion, and emotional connection. It allows us to experience deep relationships and self-acceptance.
          </p>
          <div className="bg-moss bg-opacity-20 border border-moss rounded-2xl shadow p-4 sm:p-8 space-y-4">
            <p>When blocked, it can result in:</p>
            <ul>
              <li>Fear of intimacy or vulnerability</li>
              <li>Holding onto grudges or resentment</li>
              <li>Feeling emotionally disconnected from others</li>
            </ul>
          </div>
          <p>By opening the Heart Chakra, we create space for love, empathy, and harmonious relationships.</p>
        </div>
      ),
    },
    {
      name: "Throat Chakra",
      description: "Communication, expression, and truth.",
      content: (
        <div className="space-y-12">
          <p>
            The Throat Chakra, or Vishuddha, governs our ability to communicate and express ourselves authentically. It encourages honesty, clarity, and confident self-expression.
          </p>
          <div className="bg-moss bg-opacity-20 border border-moss rounded-2xl shadow p-4 sm:p-8 space-y-4">
            <p>Imbalances may lead to:</p>
            <ul>
              <li>Fear of speaking one's truth</li>
              <li>Difficulty expressing thoughts and emotions</li>
              <li>Over-talking or dishonesty</li>
            </ul>
          </div>
          <p>Practicing mindful speech and creative expression helps restore balance to the Throat Chakra.</p>
        </div>
      ),
    },
    {
      name: "Third Eye Chakra",
      description: "Intuition, perception, and wisdom.",
      content: (
        <div className="space-y-12">
          <p>
            The Third Eye Chakra, or Ajna, is the center of intuition, perception, and wisdom. It enhances our ability to see beyond the physical world and trust our inner knowing.
          </p>
          <div className="bg-moss bg-opacity-20 border border-moss rounded-2xl shadow p-4 sm:p-8 space-y-4">
            <p>Signs of imbalance include:</p>
            <ul>
              <li>Confusion and lack of clarity</li>
              <li>Ignoring intuition</li>
              <li>Over-reliance on logic without spiritual insight</li>
            </ul>
          </div>
          <p>By cultivating mindfulness and meditation, we strengthen the Third Eye Chakra and deepen our intuitive abilities.</p>
        </div>
      ),
    },
    {
      name: "Crown Chakra",
      description: "Spiritual connection, consciousness, and enlightenment.",
      content: (
        <div className="space-y-12">
          <p>
            The Crown Chakra, or Sahasrara, represents our connection to higher consciousness and divine wisdom. It allows us to experience spiritual awakening and inner peace.
          </p>
          <div className="bg-moss bg-opacity-20 border border-moss rounded-2xl shadow p-4 sm:p-8 space-y-4">
            <p>Blockages may cause:</p>
            <ul>
              <li>Feelings of disconnection or isolation</li>
              <li>Resistance to spiritual growth</li>
              <li>Lack of purpose or direction</li>
            </ul>
          </div>
          <p>By nurturing the Crown Chakra, we open ourselves to enlightenment and deep inner wisdom.</p>
        </div>
      ),
    },
  ];

  return (
    <div className="max-w-3xl px-8 py-4 mx-auto">
      <h1 className="heading my-12 lg:mb-40 text-4xl lg:text-6xl">The Seven Chakras</h1>
      {chakras.map((chakra, index) => (
        <div
          key={index}
          className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16 lg:space-y-0 space-y-12 pb-20"
        >
          <div>
            <h3 className="text-2xl text-left font-medium text-charcoal tracking-wide lg:text-6xl lg:col-span-1 lg:max-w-[350px]">
              {chakra.name}
            </h3>
            <p className="mt-2 text-lg sm:text-xl text-charcoal">{chakra.description}</p>
          </div>
          <div className="lg:col-span-2">{chakra.content}</div>
        </div>
      ))}
    </div>
  );
};

export default Chakras;
