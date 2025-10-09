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

const Guide = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 text-gray-900 font-sans">
      <header className="mb-12 border-b border-gray-200 pb-12">
        <h1 className="text-5xl md:text-6xl font-light text-moss text-left tracking-wide mb-8">
          Beginner’s Guide to Yoga
        </h1>
        <div className="flex items-center text-sm text-gray-500 mb-6">
          <span>By Sam Cabrera</span>
          <span className="mx-2">•</span>
          <span>Last Edited: October 7, 2025</span>
        </div>
        <p className="text-lg md:text-xl leading-relaxed">
          Yoga is for every body. You don’t need to be flexible, strong, or young to begin. 
          In this guide, you’ll learn the basics of yoga while using a chair for support. 
        </p>
      </header>

      <Section 
        title="How Yoga Helps"
        paragraphs={[
          "Yoga isn’t just about stretching — it’s about awareness. Even simple movements can help reduce stiffness, ease joint pain, improve circulation, and make everyday tasks like walking, reaching, or standing easier. Breathing slowly and deeply can also lower stress, ease anxiety, and help you sleep better.",
          "Many people notice better posture and balance after just a few weeks of consistent practice. You may feel more calm, more alert, and more at ease in your body."
        ]}
      />

      <Section 
        title="What You'll Need"
        paragraphs={[
          "A stable chair: Make sure it doesn’t roll or tip. Avoid soft or low seats. Your feet should touch the floor comfortably.",
          "Comfortable clothing: Wear something you can stretch and breathe in. Loose shirts, leggings, sweatpants, or shorts are all fine.",
          "Room to move: Have a little space around your chair so you can reach your arms out or bend forward without bumping into anything."
        ]}
      />

      <Section 
        title="Why Use a Chair?"
        paragraphs={[
          "A chair gives you support so you can focus on breathing, posture, and gentle movement without worrying about balance. It helps you stay grounded. Many people find it easier to relax and pay attention to their body when they feel stable.",
          "You can do many traditional yoga movements while sitting or holding onto a chair. It doesn’t mean you’re doing “less” yoga — it means you’re working smarter, not harder. It’s a safe and smart way to begin."
        ]}
      />

      <Section 
        title="What to Expect"
        paragraphs={[
          "You’ll start with very simple movements — things like lifting your arms, turning your head, or leaning gently side to side. You’ll also pay close attention to your breath. You don’t need to memorize anything or move quickly. This isn’t a workout. It’s a way to check in with your body and feel more connected.",
          "If something doesn’t feel right, skip it. There’s no rush and no judgment. Every practice is different, and even a few minutes can make a big difference."
        ]}
      />
    </div>
  );
};

export default Guide;
