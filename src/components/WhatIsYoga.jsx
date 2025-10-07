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

const WhatIsYoga = () => {
  return (
    <>
      <Helmet>
        <title>What is Yoga?</title>
        <meta
          name="description"
          content="Discover the origins, evolution, and different types of yoga practices in this comprehensive guide. Learn about the ancient discipline of yoga and find the right style for you."
        />
        <meta
          name="keywords"
          content="yoga, types of yoga, yoga guide, yoga history, yoga practices, yoga styles, what is yoga"
        />
        <meta property="og:title" content="What is Yoga?" />
        <meta
          property="og:description"
          content="Discover the origins, evolution, and different types of yoga practices in this comprehensive guide. Learn about the ancient discipline of yoga and find the right style for you."
        />
        <meta name="twitter:title" content="What is Yoga?" />
        <meta
          name="twitter:description"
          content="Discover the origins, evolution, and different types of yoga practices in this comprehensive guide. Learn about the ancient discipline of yoga and find the right style for you."
        />
      </Helmet>

      <div className="max-w-3xl mx-auto px-6 py-12 text-gray-900 font-sans">
        <header className="mb-12 border-b border-gray-200 pb-12">
          <h1 className="text-5xl md:text-6xl font-light text-moss text-left tracking-wide mb-8">
            What is Yoga?
          </h1>
          <div className="flex items-center text-sm text-gray-500 mb-6">
            <span>By Sam Cabrera</span>
            <span className="mx-2">•</span>
            <span>Last Edited: October 7, 2025</span>
          </div>
          <p className="text-lg md:text-xl leading-relaxed">
            Yoga is an ancient discipline that combines physical postures, breath control, meditation, and ethical principles to promote overall health and well-being. 
            It’s a holistic system that aims to balance the body, mind, and spirit.
          </p>
        </header>

        <Section
          title="The Origins of Yoga"
          paragraphs={[
            "The origins of yoga can be traced back over 5,000 years to ancient India, where it was first developed as a spiritual practice by the Indus-Sarasvati civilization. The earliest references to yoga are found in the Vedas, ancient Indian texts that date back to around 1500 BCE. These texts describe various rituals and practices designed to connect individuals with the divine.",
            "The word 'yoga' comes from the Sanskrit root 'yuj,' meaning 'to unite' or 'to join.' This reflects the central idea of yoga: the union of the body, mind, and spirit, or the connection between the individual self and the universal consciousness. Early yogic practices were predominantly focused on meditation, breath control, and self-discipline to transcend the physical body and achieve spiritual enlightenment.",
            "The development of yoga can be divided into several key periods: Pre-Classical Yoga focused on meditation and philosophy; Classical Yoga saw the formalization of the Yoga Sutras; Post-Classical Yoga emphasized physical postures and breath control; Modern Yoga spread globally, blending ancient practices with contemporary methods."
          ]}
        />

        <Section
          title="The Evolution of Yoga Styles"
          paragraphs={[
            "Over the millennia, yoga has evolved into many different styles and schools of thought, each focusing on unique aspects of the practice. These styles can be traced back to ancient teachings but have been adapted and modernized to meet the needs of contemporary practitioners.",
            "Hatha Yoga emphasizes physical postures and breath control, laying the foundation for modern practices. Vinyasa Yoga flows dynamically between poses synchronized with breath. Ashtanga Yoga follows a structured sequence focusing on strength and endurance. Iyengar Yoga prioritizes precision and uses props for alignment. Bikram Yoga is performed in heated rooms to increase flexibility and detoxification. Kundalini Yoga focuses on awakening spiritual energy through movement, breath, and meditation. Restorative Yoga uses props for full support and deep relaxation. Yin Yoga encourages holding poses longer to target deep connective tissues.",
            "Each style of yoga offers unique benefits, and practitioners may find that different styles resonate with them depending on their goals, physical condition, and spiritual path. While the core principles of yoga remain the same, the diversity of styles provides something for everyone, from high-intensity practices to gentle, restorative options.",
            "No matter which style of yoga you practice, the foundational poses and lessons taught on this site will be the building blocks of your journey. Mastering them will support your growth, whether your focus is strength, flexibility, relaxation, or mindfulness."
          ]}
        />
      </div>
    </>
  );
};

export default WhatIsYoga;
