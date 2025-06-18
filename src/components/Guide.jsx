const Section = ({ title, children }) => (
  <section>
    <h2>{title}</h2>
    <div className="space-y-3 text-base">{children}</div>
  </section>
);

const ListItem = ({ children, strong }) => (
  <div className="flex">
    {strong && <strong className="mr-1 font-medium">{strong}:</strong>}
    <span>{children}</span>
  </div>
);

const Guide = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 text-black bg-white font-sans">
      <header className="mb-12 border-b border-black pb-8">
        <h1>Beginner’s Guide to Yoga</h1>
        <p className="text-lg leading-relaxed">
          Yoga is for every body. You don’t need to be flexible, strong, or young to begin. 
          In this guide, you’ll learn the basics of yoga while using a chair for support. 
          This is perfect if you’re brand new to yoga, recovering from injury, or just looking for a gentler start.
        </p>
      </header>

      <article className="mb-12">
        <h2>How Yoga Helps</h2>
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

      <article className="my-12">
        <h2>Why Use a Chair?</h2>
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
        <h2>What to Expect</h2>
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

      <footer>
        <button className="mt-4">
          Next: Learn about the origins of yoga →
        </button>
      </footer>
    </div>
  );
};

export default Guide;
