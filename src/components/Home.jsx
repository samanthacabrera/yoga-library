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
          content="Explore a variety of beginner yoga poses with clear instructions and detailed explanations."
        />
      </Helmet>

      <div className="flex flex-col w-screen">
      <div className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-12 py-12 gap-10">
      <div className="flex-1 max-w-xl text-center md:text-left space-y-8">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:text-left"
        >
          Learn Yoga Online
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className=""
        >
          Discover resources designed to meet yogis wherever they are on their journey.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.4 }}
        >
          <Link
            to="/poses"
            className="inline-block px-6 py-3 text-base font-medium text-white bg-moss hover:bg-moss/90 rounded-full transition"
          >
            Explore Poses
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.3 }}
        className="flex-1 max-w-lg"
      >
        <img
          src="/bg1.jpg" 
          alt="Peaceful yoga practice"
          className="w-full rounded-2xl shadow-md object-cover"
        />
      </motion.div>
    </div>


    <div className="max-w-3xl mx-12 md:mx-auto py-40 grid gap-y-40 md:gap-y-80 text-charcoal">
      
      {/* About */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 1.5 }}
        className="container"
      >

        <h2 className="leading-relaxed">What makes Learn Yoga Online Different?</h2>

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
        className="container my-20"
      >
        <h2 className="leading-relaxed">Getting Started with Learn Yoga Online</h2>

        <div className="space-y-6">
          <p>First, start with our 
            <Link to="/what-is-yoga/beginners-guide" className="border-b border-moss mx-1 py-1 hover:bg-moss/10 transition-all duration-300">
              Beginner’s Guide to Yoga.
            </Link> This guide will help you understand yoga’s core principles, basic terminology, and how to approach your practice with mindfulness and awareness.
          </p>
          <p>
            Next, we recommend going through all the philosophy of yoga lessons, starting with an <Link to="/what-is-yoga/overview" className="border-b border-moss mx-1 py-1 hover:bg-moss/10 transition-all duration-300">
            Overview of Yoga.
            </Link>These lessons will introduce you to key concepts and the philosophy behind the practice, helping you cultivate a well-rounded understanding.
          </p>
          <p>Then, begin exploring our 
          <Link to="/poses" className="border-b border-moss mx-1 py-1 hover:bg-moss/10 transition-all duration-300">
            library of essential poses.</Link> Understanding the correct alignment, breathing techniques, and safety tips is key to building a strong base for any practice. 
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
          <h1>Our Philosophy</h1>    

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
                  <h2 className="group-hover:text-moss/90 transition-colors duration-300">
                    {approach.title}
                  </h2>
                </div>
                <p className="text-charcoal tracking-wide leading-loose">
                    {approach.mainText}
                </p>
              </motion.div>
            ))}
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
                { quote: "After my stroke, I thought yoga was completely out of reach. This site helped me reconnect with my body and feel hopeful again. ", author: "Bri H." },
                { quote: "Learn Yoga Online strikes the perfect balance of offering substance, while remaining accessible. It's evident that this site was designed with the user’s growth in mind.", author: "Sunny C." },
                { quote: "As someone completely new to yoga, this platform made learning the basics feel easy. The clear instructions and thoughtful guidance gave me the confidence to start my practice and keep improving.", author: "Darlene A." },
                { quote: "A standout tool for yoga practitioners at any level. The depth of instruction has significantly enhanced my understanding and appreciation for this practice.", author: "Wendy R." },
                { quote: "I never thought I’d feel confident doing yoga from my wheelchair. But with this platform’s help, I’ve developed a regular practice that keeps me active and grounded.", author: "Justin M." }
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