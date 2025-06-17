import { useState } from "react";

const Section = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white rounded-xl border border-gray-200 transition-all duration-300 overflow-hidden w-full">
      <button
        onClick={() => setOpen(!open)}
        className="w-full px-8 py-6 flex justify-between items-center text-left hover:bg-gray-50 transition-colors duration-150"
      >
        <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
        <span className="text-gray-500 text-xl font-medium ml-4">
          {open ? "−" : "+"}
        </span>
      </button>
      {open && (
        <div className="px-8 py-6 border-t border-gray-100 transition-all duration-300">
          <div className="text-xl leading-relaxed text-gray-700 space-y-4">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

const ListItem = ({ children, strong }) => (
  <div className="flex items-start gap-3 py-1">
    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-3 flex-shrink-0"></div>
    <div className="text-xl leading-relaxed">
      {strong && <strong className="font-semibold text-gray-900">{strong}:</strong>} {children}
    </div>
  </div>
);

const Guide = () => {
  return (
    <div className="flex flex-col items-center w-full min-h-screen px-4 bg-white">
      <div className="my-[10vh] w-full max-w-screen-md">

        <header className="text-center my-16">
          <h1 className="text-7xl font-medium text-gray-900 mb-6 tracking-tight">
            Beginner's Guide to Yoga
          </h1>
        </header>
        
        <div className="space-y-6">
    
          
          <Section title="What You'll Need">
            <div className="space-y-3">
              <ListItem strong="Chair">
                Choose a sturdy chair that doesn't roll or swivel. The seat should allow your feet to rest flat on the floor. Kitchen or dining chairs work perfectly. Avoid soft armchairs as they don't provide enough support for movement.
              </ListItem>
              <ListItem strong="Space around you">
                You'll need about arm's length of space on all sides of your chair. This ensures you can stretch safely without hitting anything.
              </ListItem>
              <ListItem strong="Comfortable clothing">
                Wear clothes that stretch and move with you. Avoid anything too tight around your waist or shoulders. Comfortable shoes with good grip, or practice barefoot if you prefer.
              </ListItem>
            </div>
          </Section>

          <Section title="Key Terms to Know">
            <div className="space-y-3">
              <ListItem strong="Asana">
                The Sanskrit word for a yoga pose. Each asana is designed to benefit your body in a specific way.
              </ListItem>
              <ListItem strong="Pranayama">
                The practice of controlling your breathing to calm your mind and energize your body. In chair yoga, we use simple breathing techniques that anyone can do.
              </ListItem>
              <ListItem strong="Sankalpa">
                A positive focus or goal you set before starting your practice. It could be as simple as "I want to feel more relaxed" or "I'm taking care of my body today."
              </ListItem>
            </div>
          </Section>
        </div>

        <div className="mt-16 text-center">
          <button className="bg-moss text-white text-xl font-medium px-8 py-4 rounded-lg hover:bg-moss/90 transition-colors duration-150">
            Next: Learn about the origins of yoga →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Guide;
