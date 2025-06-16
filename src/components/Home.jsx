import React from 'react';
import { Helmet } from 'react-helmet';
import { Parallax } from 'react-parallax';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  const approaches = [
    {
      number: '01',
      title: "Accessible",
      mainText: "We believe that yoga is for everyone, regardless of age, ability, or experience. We’ve created an approach that welcomes people who practice in chairs, need more support, or are exploring movement later in life."
    },
    {
      number: '02',
      title: "Holistic",
      mainText: "Our practice goes beyond physical poses. We explore the full spectrum of practice, including breathwork, meditation, and inner awareness."
    },
    {
      number: '03',
      title: "Empowering",
      mainText: "We offer tools, not rules for how you can practice yoga. Encouraging you to explore yoga with agency and self-trust."
    },
  ];

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
          content="Explore a wide variety of vinyasa yoga poses with clear instructions and detailed explanations."
        />
        <meta property="og:url" content="https://learnyoga.online" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://learnyoga.online/assets/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Learn Yoga Online" />
        <meta
          name="twitter:description"
          content="Explore a wide variety of vinyasa yoga poses with clear instructions and detailed explanations."
        />
        <meta name="twitter:image" content="https://learnyoga.online/assets/twitter-image.jpg" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://learnyoga.online" />
      </Helmet>

      <div className="flex flex-col w-screen">
      {/* Hero */}
      <div className="relative flex flex-col">
        <Parallax
          bgImage="/bg1.jpg"
          strength={300}
          className="mx-auto w-full h-screen lg:h-[80vh] mt-20"
        >
        </Parallax>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white/50 backdrop-blur-sm p-4 md:p-8 max-w-lg mx-2 text-center">
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="text-2xl md:text-3xl text-neutral-600 tracking-wider"
            >
              Learn Yoga Online
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
              className="text-sm md:text-md font-light mt-4 mb-6"
            >
              Discover resources designed to support new yogis as they start their yoga journey
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.6 }}
            >
              <Link
                to="/poses"
                className="inline-block flex items-center justify-center w-fit mx-auto group text-center text-sm md:text-md text-white/90 font-medium bg-moss pl-6 pr-3 py-1 border border-moss/80 rounded-sm hover:scale-[101%] transition-all duration-300 ease-in-out focus:outline-none"
              >
                Start Learning
                <svg 
                  className="ml-2 w-4 h-4 transition-all duration-300 group-hover:translate-x-1"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

    <div className="max-w-3xl mx-12 md:mx-auto py-40 grid gap-y-40 md:gap-y-80 text-charcoal">
      
      {/* About */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 1.5 }}
        className="container my-20"
      >
        <div className="flex items-center mb-12">
          <div className="w-16 h-px bg-moss"></div>
          <h2 className="text-lg lg:text-2xl tracking-widest ml-4">What is Learn Yoga Online?</h2>
        </div>

        <h3 className="mb-6">A Holistic Journey Into Yoga</h3>

        <div className="space-y-6 text-charcoal tracking-wide leading-loose">
          <p>
            Learn Yoga Online is a simple, intuitive platform made just for beginner yogis. You’ll find clear, step-by-step instructions for accessible yoga poses that can be done entirely from a chair and no prior experience required.          
          </p>
          
          <p>
          In addition to gentle physical movement, you’ll be invited to explore the deeper, more holistic dimensions of yoga that nurture the mind, body, and spirit. This approach includes breathwork, seated meditation, and mindfulness practices that promote inner calm and body awareness.
          </p>
        </div>
      </motion.div>
      
      {/* Recommended Use */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 1.5 }}
        className="container my-20"
      >
        <div className="flex items-center mb-12">
          <div className="w-16 h-px bg-moss"></div>
          <h2 className="text-md lg:text-2xl tracking-widest ml-4">How to Use Learn Yoga Online?</h2>
        </div>

        <h3 className="mb-6">An Accessible Path to Yoga Mastery</h3>

        <div className="space-y-6 text-charcoal tracking-wide leading-loose">
          <p>First, start with our 
            <Link to="/what-is-yoga/beginners-guide" className="border-b border-moss mx-1 py-1 hover:bg-moss/10 transition-all duration-300">
              Beginner’s Guide to Yoga.
            </Link> This guide will help you understand yoga’s core principles, basic terminology, and how to approach your practice with mindfulness and awareness.
          </p>
          <p>
            Next, we recommend going through all the philosophy of yoga lessons, starting with an <Link to="/what-is-yoga/overview" className="border-b border-moss mx-1 py-1 hover:bg-moss/10 transition-all duration-300">
            Overview of Yoga.
            </Link>These lessons will introduce you to key concepts such as breathwork, meditation, and the deeper philosophy behind the practice, helping you cultivate a well-rounded understanding.
          </p>
          <p>Then, begin exploring our 
          <Link to="/poses" className="border-b border-moss mx-1 py-1 hover:bg-moss/10 transition-all duration-300">
            library of essential poses.</Link> Understanding the correct alignment, breathing techniques, and safety tips is key to building a strong base for any practice. As you go through the instructions, take your time and repeat poses to build familiarity.
          </p>
        </div>
      </motion.div>

        {/* Approach */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.8 }}
          className="container my-20"
        >
          <h2 className="text-8xl font-medium my-40">
            Our Philosophy 
          </h2>

          <div className="grid gap-8 md:gap-24">
            {approaches.map((approach) => (
              <motion.div
                key={approach.number}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="group"
              >
                <div className="flex items-center mb-4">
                  <span className="text-8xl text-neutral-300 mr-6 group-hover:text-moss/80 transition-colors duration-300">
                    {approach.number}
                  </span>
                  <h3 className="text-4xl group-hover:text-moss/90 transition-colors duration-300">
                    {approach.title}
                  </h3>
                </div>
                <p className="text-charcoal tracking-wide leading-loose">
                    {approach.mainText}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>
    
        {/* Yoga For Every Need */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1 }}
          className="container my-40"
        >
          <h2 className="text-8xl font-medium my-40">
            Yoga For Every Need
          </h2>

          <div className="grid gap-24">
            {/* Flexibility */}
            <div className="group">
              <div className="flex items-center mb-4">
                <h3 className="text-6xl group-hover:text-moss/90 transition-colors duration-300">
                  Flexibility
                </h3>
              </div>
              <a
                href="/poses/benefit/improve-flexibility"
                className="group inline-flex items-center text-xl text-charcoal hover:text-moss transition-colors"
              >
                View poses
                <svg
                  className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-moss"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>

            {/* Strength */}
            <div className="group">
              <div className="flex items-center mb-4">
                <h3 className="text-6xl group-hover:text-moss/90 transition-colors duration-300">
                  Strength
                </h3>
              </div>
              <a
                href="/poses/benefit/build-strength"
                className="group inline-flex items-center text-xl text-charcoal hover:text-moss transition-colors"
              >
                View poses
                <svg
                  className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-moss"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>

            {/* Balance */}
            <div className="group">
              <div className="flex items-center mb-4">
                <h3 className="text-6xl group-hover:text-moss/90 transition-colors duration-300">
                  Balance
                </h3>
              </div>
              <a
                href="/poses/benefit/improve-balance"
                className="group inline-flex items-center text-xl text-charcoal hover:text-moss transition-colors"
              >
                View poses
                <svg
                  className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-moss"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
          </div>
        </motion.section>

        {/* Testimonials */}
        <motion.div
            initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 1 }}
            className="container my-20"
          >
            <motion.h2 
              variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 1 } } }}
              className="mb-24"
            >
              What Others Are Saying
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-x-6 gap-y-12">
              {[
                { quote: "This site makes learning yoga inviting. The instructions are clear, the layout is simple, and it creates a welcoming space to grow my practice without feeling overwhelmed.", author: "Savanna L." },
                  { quote: "As someone who's been practicing yoga for years, I wasn’t sure if I’d find much value in another yoga site. But I was wrong. What I love here is the attention to detail — each pose breakdown is thoughtful, and it’s helped me refine my practice in ways I didn’t think I needed. ", author: "Bri H." },
                  { quote: "Learn Yoga Online strikes the perfect balance of offering substance, while remaining accessible. It's evident that this site was designed with the user’s growth in mind.", author: "Sunny C." },
                  { quote: "As someone completely new to yoga, this platform made learning the basics feel easy. The clear instructions and thoughtful guidance gave me the confidence to start my practice and keep improving.", author: "Darlene A." },
                  { quote: "A standout tool for yoga practitioners at any level. The depth of instruction has significantly enhanced my understanding and appreciation for this practice.", author: "Wendy R." },
                  { quote: "This site delivers clear, well-organized yoga instruction with a clean, minimalist design that keeps you focused. The guidance is easy to follow for any level, whether you're just starting out or building on your practice. If you're looking for a simple, reliable yoga resource, this is definitely worth trying.", author: "Justin M." }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
                  }}
                  className="flex flex-col justify-between bg-moss/5 h-[400px] p-8 text-left rounded-t-2xl hover:shadow-sm transition duration-300"
                >
                  <p className="italic">"{testimonial.quote}"</p>
                  <p className="uppercase">— {testimonial.author}</p>
                </motion.div>
              ))}
            </div>
        </motion.div>
        </div>
      </div>
    </>
  );
};

export default Home;