import React from 'react';
import { Helmet } from 'react-helmet';
import { Parallax } from 'react-parallax';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {

  return (
    <>
      <Helmet>
        <title>Learn Yoga Online</title>
        <meta
          name="description"
          content="Explore a wide variety of yoga poses with clear instructions and detailed explanations."
        />
        <meta name="keywords" content="Yoga, Poses, Yoga Library, Vinyasa, Asanas, Yoga Online" />
        <meta name="author" content="Sam Cabrera" />
        <meta property="og:title" content="Learn Yoga Online" />
        <meta
          property="og:description"
          content="Explore a variety of beginner yoga poses with clear instructions and detailed explanations."
        />
      </Helmet>

      <div className="flex flex-col w-screen">
        {/* Hero */}
        <section className="relative min-h-[100vh] flex items-center justify-center bg-white overflow-hidden">
          <div className="absolute inset-0 flex flex-col">
   
            <div className="w-full h-full">
              <img
                src="/bg1.jpg"
                alt="Peaceful yoga practice"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1 }}
            className="relative z-10 -mt-24 md:-mt-64 flex flex-col items-center md:items-start max-w-3xl px-8 md:px-16 text-center md:text-left"
          >
            <h1 className="text-5xl md:text-7xl font-light text-moss drop-shadow-sm">
              Learn Yoga Online
            </h1>

            <p className="text-xl md:text-2xl max-w-xl font-light -mt-8">
              Discover resources designed to meet yogis wherever they are on their journey.
            </p>

            <div>
              <Link
                to="/poses"
                className="inline-block mt-4 px-8 py-2 text-lg font-medium text-white/80 bg-moss hover:bg-moss/90 rounded-full transition-all duration-300 focus:ring-4 focus:ring-moss/30 shadow-sm"
              >
                Explore Poses
              </Link>
            </div>
          </motion.div>
          <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-t from-white/10 via-white/20 to-transparent pointer-events-none" aria-hidden="true"></div>
        </section>

    <div className="max-w-3xl mx-12 md:mx-auto py-40 grid gap-y-20 md:gap-y-40 text-charcoal">

      {/* About */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 1.5 }}
        className="container"
      >

        <h2 className="text-2xl md:text-4xl font-light leading-loose text-moss mb-12 px-6 py-12 bg-moss/5 rounded-xl shadow-sm text-center">
          What makes Learn Yoga Online Different?
        </h2>

        <div className="space-y-6 text-xl text-charcoal tracking-wide leading-loose">
          <p>
          Learn Yoga Online focuses on chair and modified yoga, making it easier for people of all ages and mobility levels to start practicing.
          </p>
          
          <p>
          While we often use chairs in our teaching, we don’t label it as 'chair yoga.' It’s simply yoga that is adapted to support your body's needs. We believe yoga should meet you where you are, and our resources are designed to help you get started with confidence.         
          </p>
        </div>
      </motion.div>
      
      {/* Getting Started */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 1.5 }}
        className="container relative"
      >
        <h2 className="text-2xl md:text-4xl font-light leading-loose text-moss mb-12 px-6 py-12 bg-moss/5 rounded-xl shadow-sm text-center relative z-10">
          Getting Started with Learn Yoga Online
        </h2>

        <div className="space-y-12 md:space-y-24 pt-16 relative">
          <div className="relative flex items-center pl-16 md:pl-24">
            <span className="absolute left-0 text-[6rem] md:text-[8rem] font-extrabold text-moss/10 leading-none select-none pointer-events-none">
              1
            </span>
            <p className="text-lg md:text-xl">
              First, start with our 
              <Link to="/what-is-yoga/beginners-guide" className="border-b border-moss mx-1 py-1 hover:bg-moss/10 transition-all duration-300">
                Beginner’s Guide to Yoga.
              </Link> 
              This guide will help you understand yoga’s core principles, basic terminology, and how to approach your practice with mindfulness and awareness.
            </p>
          </div>

          <div className="relative flex items-center pl-16 md:pl-24">
            <span className="absolute left-0 text-[6rem] md:text-[8rem] font-extrabold text-moss/10 leading-none select-none pointer-events-none">
              2
            </span>
            <p className="text-lg md:text-xl">
              Next, we recommend going through all the philosophy of yoga lessons, starting with an 
              <Link to="/what-is-yoga/overview" className="border-b border-moss mx-1 py-1 hover:bg-moss/10 transition-all duration-300">
                Overview of Yoga.
              </Link>
              These lessons will introduce you to key concepts and the philosophy behind the practice, helping you cultivate a well-rounded understanding.
            </p>
          </div>

          <div className="relative flex items-center pl-16 md:pl-24">
            <span className="absolute left-0 text-[6rem] md:text-[8rem] font-extrabold text-moss/10 leading-none select-none pointer-events-none">
              3
            </span>
            <p className="text-lg md:text-xl">
              Then, begin exploring our 
              <Link to="/poses" className="border-b border-moss mx-1 py-1 hover:bg-moss/10 transition-all duration-300">
                library of essential poses.
              </Link> 
              Understanding the correct alignment, breathing techniques, and safety tips is key to building a strong base for any practice. 
            </p>
          </div>
        </div>
      </motion.div>
    
        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1 }}
          className="container my-12 flex flex-col items-center text-center"
        >
          <motion.h2
            className="text-2xl md:text-4xl font-light leading-loose text-moss mb-12 px-6 py-12 bg-moss/5 rounded-xl shadow-sm text-center"
          >
            What Others Are Saying About Learn Yoga Online
          </motion.h2>

          <div className="relative w-full max-w-6xl h-[500px] md:h-[400px] mx-auto">
            {(() => {
              const [activeIndex, setActiveIndex] = React.useState(null); 

              const testimonials = [
                { quote: "This site makes learning yoga inviting. The instructions are clear, the layout is simple, and it creates a welcoming space to grow my practice without feeling overwhelmed.", author: "Savanna L." },
                { quote: "After my stroke, I thought yoga was completely out of reach. This site helped me reconnect with my body and feel hopeful again.", author: "Bri H." },
                { quote: "Learn Yoga Online strikes the perfect balance of offering substance, while remaining accessible. It's evident that this site was designed with the user’s growth in mind.", author: "Sunny C." },
                { quote: "As someone completely new to yoga, this platform made learning the basics feel easy. The clear instructions and thoughtful guidance gave me the confidence to start my practice and keep improving.", author: "Darlene A." },
                { quote: "A standout tool for yoga practitioners at any level. The depth of instruction has significantly enhanced my understanding and appreciation for this practice.", author: "Wendy R." },
                { quote: "I never thought I’d feel confident doing yoga from my wheelchair. But with this platform’s help, I’ve developed a regular practice that keeps me active and grounded.", author: "Justin M." }
              ];

              return testimonials.map((testimonial, index) => {
                // Spread out semicircle
                const total = testimonials.length - 1;
                const spreadFactor = 1;
                const angle = (index / total - 0.5) * Math.PI * spreadFactor;
                const radius = 400;
                const x = radius * Math.sin(angle);
                const y = radius * (1 - Math.cos(angle));

                const isActive = activeIndex === index;

                return (
                  <motion.div
                    key={index}
                    className="absolute left-[30%] cursor-pointer"
                    onClick={() => setActiveIndex(isActive ? null : index)}
                    animate={
                      isActive
                        ? { scale: 1.05, zIndex: 50, y: y - 50 }
                        : { scale: 1, zIndex: 0, y: y }
                    }
                    style={{ x }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  >
                    <div className="bg-moss/5 backdrop-blur-sm w-64 md:w-72 h-72 md:h-80 p-6 rounded-3xl shadow-md transition-all duration-300 flex flex-col justify-between text-left border border-moss/10">
                      <p className="italic text-gray-800 text-sm md:text-base leading-relaxed">
                        "{testimonial.quote}"
                      </p>
                      <p className="uppercase text-xs md:text-sm tracking-wide text-gray-600">
                        — {testimonial.author}
                      </p>
                    </div>
                  </motion.div>
                );
              });
            })()}
          </div>
        </motion.div>
        </div>
      </div>
    </>
  );
};

export default Home;