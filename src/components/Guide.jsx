const Section = ({ title, children }) => (
  <section className="mb-12">
    <h2 className="text-2xl md:text-3xl font-light text-moss mb-4">{title}</h2>
    <div className="space-y-3 text-base leading-relaxed">{children}</div>
  </section>
);

const ListItem = ({ children, strong }) => (
  <div className="flex mb-2">
    <span className="font-semibold text-moss w-48">{strong}:</span>
    <span>{children}</span>
  </div>
);

const Guide = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 text-gray-900 font-sans">
      <header className="mb-12 border-b border-gray-200 pb-12">
        <h1 className="text-5xl md:text-6xl font-light text-moss tracking-wide mb-8">
          Beginner’s Guide to Yoga
        </h1>
        <div className="flex items-center text-sm text-gray-500 mb-6">
          <span>By Sam Cabrera</span>
          <span className="mx-2">•</span>
          <span>Last Edited: October 7, 2025</span>
        </div>
        <p className="text-lg md:text-xl leading-relaxed text-left">
          Yoga is for every body. You don’t need to be flexible, strong, or young to begin. 
          In this guide, you’ll learn the basics of yoga while using a chair for support. 
          This is perfect if you’re brand new to yoga, recovering from injury, or just looking for a gentler start.
        </p>
      </header>

      <article className="mb-12">
        <h2 className="text-2xl md:text-3xl font-light text-moss mb-4">How Yoga Helps</h2>
        <p className="mb-4 leading-relaxed">
          Yoga isn’t just about stretching — it’s about awareness. Even simple movements can help reduce stiffness, 
          ease joint pain, improve circulation, and make everyday tasks like walking, reaching, or standing easier. 
          Breathing slowly and deeply can also lower stress, ease anxiety, and help you sleep better.
        </p>
        <p className="leading-relaxed">
          Many people notice better posture and balance after just a few weeks of consistent practice. 
          You may feel more calm, more alert, and more at ease in your body.
        </p>
      </article>

      <Section title="What You'll Need">
        <ListItem strong="A stable chair">
          Make sure it doesn’t roll or tip. Avoid soft or low seats. Your feet should touch the floor comfortably.
        </ListItem>
        <ListItem strong="Comfortable clothing">
          Wear something you can stretch and breathe in. Loose shirts, leggings, sweatpants, or shorts are all fine.
        </ListItem>
        <ListItem strong="Room to move">
          Have a little space around your chair so you can reach your arms out or bend forward without bumping into anything.
        </ListItem>
      </Section>

      <article className="mb-12">
        <h2 className="text-2xl md:text-3xl font-light text-moss mb-4">Why Use a Chair?</h2>
        <p className="mb-4 leading-relaxed">
          A chair gives you support so you can focus on breathing, posture, and gentle movement without worrying about balance. 
          It helps you stay grounded. Many people find it easier to relax and pay attention to their body when they feel stable.
        </p>
        <p className="leading-relaxed">
          You can do many traditional yoga movements while sitting or holding onto a chair. It doesn’t mean you’re doing “less” yoga — 
          it means you’re working smarter, not harder. It’s a safe and smart way to begin.
        </p>
      </article>

      <article className="mb-12">
        <h2 className="text-2xl md:text-3xl font-light text-moss mb-4">What to Expect</h2>
        <p className="mb-4 leading-relaxed">
          You’ll start with very simple movements — things like lifting your arms, turning your head, 
          or leaning gently side to side. You’ll also pay close attention to your breath. 
          You don’t need to memorize anything or move quickly. This isn’t a workout. 
          It’s a way to check in with your body and feel more connected.
        </p>
        <p className="leading-relaxed">
          If something doesn’t feel right, skip it. There’s no rush and no judgment. 
          Every practice is different, and even a few minutes can make a big difference.
        </p>
      </article>
    </div>
  );
};

export default Guide;
