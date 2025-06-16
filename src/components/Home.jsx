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
      mainText: "We know starting yoga can feel overwhelming with so many poses, terms, and techniques to learn. That's why we keep our instruction simple, structured, and approachable. Every pose is explained step by step with careful attention to alignment and safety. We provide modifications for different body types and experience levels, allowing you to practice comfortably at your own pace while gradually building strength and flexibility."
    },
    {
      number: '02',
      title: "Holistic",
      mainText: "The physical poses are just one part of yoga. We also cover breathing techniques, meditation, and key concepts that enhance your practice. These elements are presented in clear, everyday language with practical examples of how they can benefit your wellbeing. Understanding these aspects helps create a more complete and rewarding yoga experience."
    },
    {
      number: '03',
      title: "Authentic",
      mainText: "Yoga comes from a rich tradition that spans thousands of years. We research each topic thoroughly and check multiple sources to ensure the information we share is accurate. You'll find references throughout our content if you want to learn more about specific topics. This helps you build your practice on solid, trustworthy foundations."
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
            Learn Yoga Online is a simple, intuitive platform made just for beginner yogis. You'll find clear, step-by-step instructions for essential yoga poses—no experience needed.          
          </p>
          
          <p>
            You will also have the opportunity to explore the deeper aspects of yoga that connect mind, body, and spirit. This holistic approach goes beyond physical postures, incorporating breathwork, meditation, and mindfulness practices to cultivate inner balance and awareness. You will gain insights into the philosophical foundations of yoga, such as the Eight Limbs of Yoga and the principles of self-discipline, compassion, and inner peace.        
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
          <p>
            Whether you’re attending solo classes, joining a group session, or practicing online or in person, Learn Yoga Online is designed to help you establish a solid foundation for your yoga journey.
          </p>
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
          <p>
            Use Learn Yoga Online to review what you’ve learned in class, gain confidence, and enhance your flexibility and strength. By supplementing your yoga practice with this resource, you’ll feel more prepared and grounded, no matter what type of class or style you choose to practice.
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
      <h2 className="mb-24">
        Our Approach
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
              <span className="text-4xl text-neutral-300 mr-6 group-hover:text-moss/80 transition-colors duration-300">
                {approach.number}
              </span>
              <h3 className="group-hover:text-moss/90 transition-colors duration-300">
                {approach.title}
              </h3>
            </div>
            <p>
              {approach.mainText}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
    
          {/* Yoga For Every Need  */}
          <motion.div
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: false, amount: 0.2 }} 
            transition={{ duration: 1 }}
            className="container my-20"
          >
           
            <h2 className="text-lg lg:text-2xl tracking-widest mb-12">Yoga For Every Need</h2>
           
            <p>Don't worry about touching your toes or holding perfect form on day one—yoga meets you at your current level and grows with you as you build your practice.</p>
            
            <div className="py-20 space-y-6">
              {/* Flexibility */}
              <div className="card grid grid-cols-1 md:grid-cols-3 gap-6">
                <h3>
                  Flexibility
                </h3>
                <div className="md:col-span-2">
                  <p>
                    Yoga offers a gentle yet effective way to improve flexibility.
                  </p>
               
                  <a 
                    href="/poses/benefit/improve-flexibility" 
                    className="group flex items-center"
                  >
                    View poses
                    <svg 
                      className="ml-2 w-4 h-4 transition-all duration-300 group-hover:translate-x-1 group-hover:text-moss"
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

              {/* Strength */}
              <div className="card grid grid-cols-1 md:grid-cols-3 gap-6">
                <h3>
                  Strength
                </h3>
                <div className="md:col-span-2">
                  <p>
                    Yoga builds functional strength using your own body weight as resistance.
                  </p>
                  <a 
                    href="/poses/benefit/build-strength" 
                    className="group flex items-center"
                  >
                    View poses
                    <svg 
                      className="ml-2 w-4 h-4 transition-all duration-300 group-hover:translate-x-1 group-hover:text-moss"
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

              {/* Balance */}
              <div className="card grid grid-cols-1 md:grid-cols-3 gap-6">
                <h3>
                  Balance
                </h3>
                <div className="md:col-span-2">
                  <p>
                    Balance in yoga cultivates equilibrium mind and body.
                  </p>
                  <a 
                    href="/poses/benefit/improve-balance" 
                    className="group flex items-center"
                  >
                    View poses
                     <svg 
                      className="ml-2 w-4 h-4 transition-all duration-300 group-hover:translate-x-1 group-hover:text-moss"
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
            </div>
          </motion.div>

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