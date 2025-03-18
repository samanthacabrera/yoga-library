import React, { useState } from "react";
import PageNav from "./PageNav";

const Chakras = () => {
  const [openIndexes, setOpenIndexes] = useState([]);

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
      <h1 className="text-center text-4xl">The Seven Chakras</h1>
        <p>
            The human body is not just a physical structure—it is an intricate network of energy, emotions, and consciousness. At the core of this energetic system lie the seven chakras, powerful centers that govern different aspects of our well-being. Rooted in ancient yogic traditions, chakras are believed to regulate the flow of life force energy, or prana, throughout our body. When these energy centers are open and balanced, we experience physical health, emotional harmony, and spiritual connection. However, when blockages or imbalances occur, they can manifest as stress, emotional struggles, or even physical ailments.
        </p>
        <p>
            Each chakra holds a unique vibration and purpose, influencing everything from our sense of security and self-expression to our intuition and spiritual growth. Understanding these chakras allows us to take an active role in our personal well-being by fostering balance through mindful practices such as meditation, yoga, breathwork, and self-reflection. Whether you’re seeking greater confidence, deeper relationships, or spiritual clarity, exploring the chakras can provide profound insights into your journey of self-discovery and transformation.
        </p>
        <p>
            This guide will introduce you to each of the seven chakras, detailing their qualities, signs of imbalance, and ways to restore harmony. By learning to cultivate the energy flow within, you open the door to greater awareness, empowerment, and inner peace.
        </p>

        {chakras.map((chakra, index) => (
          <div key={index} className="border-b border-gray-300 mb-4">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full text-left py-4 px-2 flex justify-between items-center"
            >
              <h2 className={`text-2xl font-medium text-charcoal tracking-wide ${openIndexes.includes(index) ? 'opacity-0' : 'opacity-100'}`}>
                {chakra.name}
              </h2>
              <span className="text-xl">{openIndexes.includes(index) ? "−" : "+"}</span>
            </button>
            {openIndexes.includes(index) && (
              <div className="flex flex-col space-y-12 pb-20">
                <div>
                  <h2 className="text-2xl text-left font-medium text-charcoal tracking-wide">
                    {chakra.name}
                  </h2>
                  <p className="mt-2 text-lg sm:text-xl text-charcoal">{chakra.description}</p>
                </div>
                <div className="my-8 col-span-2">{chakra.content}</div>
              </div>
            )}
          </div>
        ))}

        <p>The chakras serve as an essential blueprint for our holistic well-being, influencing our physical, emotional, and spiritual health. When in balance, they allow us to experience stability, creativity, confidence, love, clear communication, insight, and enlightenment. However, modern life often disrupts this energy flow, leading to imbalances that impact our mood, mindset, and vitality. Recognizing these signs and working toward alignment helps us live with greater purpose and awareness.</p>
        <p>As you explore and work with your chakras, remember that healing and balance are ongoing processes. Every step you take toward greater awareness brings you closer to inner peace, self-acceptance, and a more vibrant, connected life.</p>

        <section className="pt-24 border-t border-charcoal/30">
              <div className="bg-moss/5 rounded-xl shadow-sm p-6">
                  <p className="text-sm tracking-wide">
                  Next Up: Learn about the three gunas
                  </p>
              </div>
        </section>
      </div>
    </>
  );
};

export default Chakras;
