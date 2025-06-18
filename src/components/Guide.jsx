import { useState } from "react";

const Section = ({ title, children, alwaysOpen = false }) => {
  const [open, setOpen] = useState(alwaysOpen);

  return (
    <div>
      {!alwaysOpen && (
        <button onClick={() => setOpen(!open)}>
          <h2>{title} {open ? "−" : "+"}</h2>
        </button>
      )}
      {(open || alwaysOpen) && (
        <div>
          {alwaysOpen && <h2>{title}</h2>}
          {children}
        </div>
      )}
    </div>
  );
};

const ListItem = ({ children, strong }) => (
  <div>
    {strong && <strong>{strong}:</strong>} {children}
  </div>
);

const Guide = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <header>
        <h1>Beginner’s Guide to Yoga</h1>
        <p>
          Yoga is for every body. You don’t need to be flexible, strong, or young to begin. 
          In this guide, you’ll learn the basics of yoga while using a chair for support. 
          This is perfect if you’re brand new to yoga, recovering from injury, or just looking for a gentler start.
        </p>
      </header>

      <article>
        <h2>How Yoga Helps</h2>
        <p>
          Yoga isn’t just about stretching — it’s about awareness. Even simple movements can help reduce stiffness, 
          ease joint pain, improve circulation, and make everyday tasks like walking, reaching, or standing easier. 
          Breathing slowly and deeply can also lower stress, ease anxiety, and help you sleep better.
        </p>
        <p>
          Many people notice better posture and balance after just a few weeks of consistent practice. 
          You may feel more calm, more alert, and more at ease in your body.
        </p>
      </article>

      <Section title="What You'll Need" alwaysOpen={true}>
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

      <article>
        <h2>Why Use a Chair?</h2>
        <p>
          A chair gives you support so you can focus on breathing, posture, and gentle movement without worrying about balance. 
          It helps you stay grounded. Many people find it easier to relax and pay attention to their body when they feel stable.
        </p>
        <p>
          You can do many traditional yoga movements while sitting or holding onto a chair. It doesn’t mean you’re doing “less” yoga — 
          it means you’re working smarter, not harder. It’s a safe and smart way to begin.
        </p>
      </article>

      <article>
        <h2>What to Expect</h2>
        <p>
          You’ll start with very simple movements — things like lifting your arms, turning your head, 
          or leaning gently side to side. You’ll also pay close attention to your breath. 
          You don’t need to memorize anything or move quickly. This isn’t a workout. 
          It’s a way to check in with your body and feel more connected.
        </p>
        <p>
          If something doesn’t feel right, skip it. There’s no rush and no judgment. 
          Every practice is different, and even a few minutes can make a big difference.
        </p>
      </article>

      <footer className="my-12">
        <button>Next: Learn about the origins of yoga →</button>
      </footer>
    </div>
  );
};

export default Guide;
