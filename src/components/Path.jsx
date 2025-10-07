import { Helmet } from "react-helmet";

const Section = ({ title, paragraphs }) => (
  <section className="mb-12">
    <h2 className="text-left text-2xl md:text-3xl font-light text-moss mb-4">{title}</h2>
    <div className="space-y-4 text-base leading-relaxed">
      {paragraphs.map((text, idx) => (
        <p key={idx}>{text}</p>
      ))}
    </div>
  </section>
);

const Path = () => {
  const limbs = [
    {
      name: "Yama",
      description: "Ethical disciplines and moral restraints.",
      paragraphs: [
        "The first limb of yoga, Yama, focuses on ethical disciplines or practices related to how we interact with the world around us. While yoga can enhance physical strength, flexibility, and mental calm, its true value extends beyond the physical practice, influencing how we live and behave in everyday life.",
        "There are five Yamas: Ahimsa (non-violence), Satya (truthfulness), Asteya (non-stealing), Brahmacharya (moderation), and Aparigraha (non-hoarding).",
        "Yoga aims to transform all aspects of life, not just the time spent on the mat. By practicing kindness, truthfulness, and responsible energy use, individuals can positively impact both themselves and those around them."
      ]
    },
    {
      name: "Niyama",
      description: "Personal observances for self-discipline.",
      paragraphs: [
        "The second limb of yoga, Niyama, refers to personal observances or disciplines that guide our relationship with ourselves. While Yamas focus on our interactions with others, Niyamas emphasize the internal practices that help foster a healthy, balanced, and mindful life.",
        "The five Niyamas are: Shaucha (cleanliness), Santosha (contentment), Tapas (austerity), Svadhyaya (self-study), and Ishvara Pranidhana (devotion to a higher power).",
        "By incorporating the Niyamas, we can develop a deeper sense of mindfulness, contentment, and spiritual alignment, which extends beyond the yoga mat into everyday life."
      ]
    },
    {
      name: "Asana",
      description: "Physical postures for health and meditation.",
      paragraphs: [
        "The third limb of yoga, Asana, refers to the physical postures or poses practiced in yoga. Asana is perhaps the most well-known limb, as it forms the foundation of what many people think of as 'yoga.'",
        "Asana helps cultivate strength, flexibility, and stability in both body and mind. The key is to focus on the breath and maintain an open, non-judgmental attitude.",
        "It also prepares practitioners for the deeper practices of yoga by fostering physical and mental resilience."
      ]
    },
    {
      name: "Pranayama",
      description: "Control of breath to regulate energy.",
      paragraphs: [
        "The fourth limb of yoga, Pranayama, refers to the regulation of breath to harness life force energy, or prana. It is not just passive breathing; it involves active control.",
        "A complete Pranayama cycle includes: Rechaka (exhalation), Bahya Kumbhaka (pause after exhalation), Puraka (inhalation), and Antara Kumbhaka (pause after inhalation).",
        "Regular practice synchronizes breath with movement, promoting mental clarity, emotional stability, and a deeper connection with oneself."
      ]
    },
    {
      name: "Pratyahara",
      description: "Withdrawal of senses to focus inward.",
      paragraphs: [
        "The fifth limb, Pratyahara, focuses on withdrawing the senses from external distractions to cultivate inward awareness.",
        "Techniques include focusing on the breath, body scanning, or silent meditation to disengage from sensory stimuli.",
        "Pratyahara acts as a bridge to deeper practices such as Dharana, Dhyana, and Samadhi, preparing the mind to concentrate without distraction."
      ]
    },
    {
      name: "Dharana",
      description: "Concentration on a single point or object.",
      paragraphs: [
        "Dharana is the sixth limb, training the mind to concentrate on a single point or object, which is the foundation of meditation.",
        "Through sustained focus, Dharana cultivates a clear, steady mind, preparing practitioners for deeper states of meditation and inner peace."
      ]
    },
    {
      name: "Dhyana",
      description: "Meditation for clarity and mindfulness.",
      paragraphs: [
        "Dhyana is the seventh limb, involving sustained, uninterrupted meditation. It emerges naturally from Dharana.",
        "Key aspects include effortless flow, heightened awareness, and absence of mental chatter.",
        "It allows the practitioner to access higher consciousness, inner clarity, and a sense of profound peace."
      ]
    },
    {
      name: "Samadhi",
      description: "Union with the self, ultimate absorption.",
      paragraphs: [
        "The eighth limb, Samadhi, represents the ultimate state of absorption, union, and bliss.",
        "It arises naturally through the practice of the previous limbs, allowing the mind to become calmer, purer, and focused.",
        "Samadhi is a profound shift in perception, uniting body, mind, and spirit, and revealing the interconnectedness of all things."
      ]
    }
  ];

  return (
    <div className="max-w-3xl mx-auto px-6 py-12 text-gray-900 font-sans">
      <header className="mb-12 border-b border-gray-200 pb-12">
        <h1 className="text-5xl md:text-6xl font-light text-moss text-left tracking-wide mb-8">
          The Eight-Limbed Path of Yoga
        </h1>
        <div className="flex items-center text-sm text-gray-500 mb-6">
          <span>By Sam Cabrera</span>
          <span className="mx-2">•</span>
          <span>Last Edited: October 7, 2025</span>
        </div>
        <p className="text-lg md:text-xl leading-relaxed">
          Yoga is a holistic practice that integrates ethical principles, physical postures, breath control, and meditation. 
          The Eight-Limbed Path provides a framework to guide personal growth, mindfulness, and spiritual development.
        </p>
      </header>

      {limbs.map((limb, idx) => (
        <Section key={idx} title={`${limb.name}`} paragraphs={limb.paragraphs} />
      ))}
    </div>
  );
};

export default Path;
