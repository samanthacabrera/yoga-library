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
          {/* <div className="flex justify-center items-center relative">
            <div className="absolute bottom-0 w-full h-[30vh] bg-gradient-to-t from-white via-transparent to-transparent"></div>
            <div className="absolute bottom-0 w-full h-[20vh] bg-gradient-to-t from-white via-orange-400/20 to-transparent opacity-50"></div>
            <img src="/bg1.jpg" className="w-screen h-[65vh] lg:h-[70vh] object-cover object-center lg:object-[25%_70%]" />
          </div> */}
          <Parallax
            bgImage="/bg1.jpg"
            strength={300}
            className="mx-8 lg:mx-[20vw] mt-24 mb-6 h-[40vh] lg:h-[60vh]"
          >
          </Parallax>
        <div className="flex flex-col inline relative text-center space-y-4 my-6">
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-3xl"
          >
          Learn Yoga Online
          </motion.h1>
          <motion.p
            className="text-md lg:text-lg mx-8"
          >
          Explore helpful resources designed especially for <span className="italic">beginning</span> yogis
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
          <Link
            to="/poses"
            className="inline-block flex items-center justify-center w-fit mx-auto group text-center text-md lg:text-lg text-moss pl-6 pr-3 py-1 border border-moss/80 rounded hover:scale-[101%] transition-all duration-300 ease-in-out focus:outline-none"
          >
            Start Learning
            <svg 
              className="ml-2 w-4 h-4 transition-all duration-300 group-hover:translate-x-1 group-hover:text-moss"
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
            You will also have the opportunity to explore the deeper aspects of yoga that connect mind, body, and spirit. This knowledge will help you integrate yoga into your daily life for greater well-being.         
          </p>
          <p>
            It’s a great way to fill in the gaps from your yoga classes, reinforcing what you’ve learned and giving you more confidence in your practice.
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
          <h2 className="text-lg lg:text-2xl tracking-widest ml-4">How Can We Enhance Your Practice?</h2>
        </div>

        <h3 className="mb-6">Building a Strong Foundation</h3>

        <div className="space-y-6 text-charcoal tracking-wide leading-loose">
          <p>
            Whether you’re attending solo classes, joining a group session, or practicing online or in person, Learn Yoga Online is designed to help you establish a solid foundation for your yoga journey.
          </p>

          <p>
            Start by exploring our library of essential poses. Understanding the correct alignment, breathing techniques, and safety tips is key to building a strong base for any practice. As you go through the instructions, take your time and repeat poses to build familiarity and confidence.
          </p>
          <p>
            This platform is meant to complement your yoga practice, whether you're attending classes at a studio or practicing at home. The goal is not only to help you memorize poses but to deepen your understanding, creating a stronger connection between your body and mind.
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

      {/* What We Offer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 1.5 }}
        className="container my-20"
      >
        <div className="flex items-center mb-12">
          <div className="w-16 h-px bg-moss"></div>
          <h2 className="text-lg lg:text-2xl tracking-widest ml-4">
            What We Offer
          </h2>
        </div>
          
        <h3 className="mb-6">
          Comprehensive Yoga Resources
        </h3>
        
        <p>
          Elevate your yoga journey with curated resources designed to deepen your practice and understanding.
        </p>
  
          <div className="grid md:grid-cols-1 gap-8 py-12">
            {[
              { 
                title: "Pose Library", 
                link: "/poses", 
                description: "Explore detailed breakdowns of 50 foundational yoga poses.",
              },
              { 
                title: "Philosophy & History", 
                link: "/what-is-yoga/overview", 
                description: "Uncover the traditions and ancient wisdom behind yoga practice.",
              }
            ].map((item, index) => (
              <Link 
                key={index} 
                to={item.link} 
                className="group card"
              >                
                <div className="space-y-2">
                  <h3>
                    {item.title}
                  </h3>
                  <p>
                    {item.description}
                  </p>
                  <div className="inline-flex items-center text-moss">
                    <span className="mr-2">Explore</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-all">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 transform transition-transform group-hover:translate-x-1" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
      </motion.div>

      {/* Intro */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 1.5 }}
        className="container my-20 space-y-40"
      >
          {/* Beginner's Mind */}
          <div>
            <div className="flex items-center mb-12">
              <div className="w-16 h-px bg-moss"></div>
              <h2 className="text-lg lg:text-2xl tracking-widest ml-4">The Beginner's Mind</h2>
            </div>

            <h3 className="mb-6">Your Greatest Strength</h3>
  
            <p>
              In yoga philosophy, there's a concept called "beginner's mind" or <span className="font-normal">shoshin</span> that views your newcomer status not as a limitation, but as your greatest asset. Approaching yoga with fresh eyes allows you to:
            </p>

            <div className="space-y-6 my-12">
              {[
                "Experience each pose without preconceptions",
                "Stay present with sensations rather than rushing",
                "Develop self-compassion for your practice",
                "Build awareness of subtle body connections",
                "Embrace the journey, not just destinations"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <span className="text-moss">0{index + 1}</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Ahimsa */}
          <div>
            <div className="flex items-center mb-12">
              <div className="w-16 h-px bg-moss"></div>
              <h2 className="text-lg lg:text-2xl tracking-widest ml-4">The Practice of Kindness</h2>
            </div>

            <h3 className="mb-6">Ahimsa</h3>

            <p>
              In yoga philosophy, <span className="font-normal">ahimsa</span> means "non-harming" or "compassion."  
              It teaches us to approach ourselves and others with kindness, both on and off the mat.  
              Practicing ahimsa allows you to:
            </p>

            <div className="space-y-6 my-12">
              {[
                "Listen to your body and practice without force",
                "Let go of self-judgment and embrace patience",
                "Move with care rather than comparison",
                "Honor your own pace instead of rushing progress",
                "Extend kindness beyond the mat into daily life"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <span className="text-moss">0{index + 1}</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Yoga for Everyone */}
          <div>
            <div className="flex items-center mb-12">
              <div className="w-16 h-px bg-moss"></div>
              <h2 className="text-lg lg:text-2xl tracking-widest ml-4">A Path for Every Yogi</h2>
            </div>

            <h3 className="mb-6">Inclusive & Accessible Practice</h3>

            <p>
              Yoga is for everybody, regardless of age, body type, or fitness level. It’s not about achieving the perfect pose but about cultivating a practice that supports your body, breath, and mind. The most rewarding yoga practice is one that feels safe, accessible, and empowering.
            </p>

            <div className="space-y-6 my-12">
              {[
                "Honor your body’s needs and limitations without judgment",
                "Use props like blocks, straps, and blankets for added support",
                "Modify poses to suit your range of motion and comfort",
                "Embrace progress at your own pace—flexibility and strength develop over time",
                "Remember that yoga is about presence, not perfection"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <span className="text-moss">0{index + 1}</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 border-l border-moss/50">
            <h3 className="mb-6">Accessible Yoga for All</h3>
            <p>
              We are committed to expanding our content on adaptive yoga and creating resources that support every practitioner.
            </p>
          </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: false, amount: 0.2 }} 
            transition={{ duration: 1 }}
            className="container my-20"
          >
            <div>
              <motion.div 
                className="text-center mb-16"
                variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 1 } } }}
              >
                <h2 className="text-lg lg:text-2xl tracking-widest mb-12">Deepen Your Understanding</h2>
                <p>
                  Explore these essential guides to discover the rich history and transformative philosophy of yoga.
                </p>
              </motion.div>

              <div className="grid gap-8">
                {[
                  { link: "/what-is-yoga/beginners-guide", title: "Start Here: Beginner's Guide", description: "New to yoga? This guide covers the fundamentals—what yoga is, how to begin, and key concepts to help you get started." },
                  { link: "/what-is-yoga/overview", title: "What Is Yoga?", description: "Discover the history, philosophy, and purpose of yoga. Learn how this ancient practice continues to evolve today." },
                  { link: "/what-is-yoga/eight-limbed-path", title: "The 8-Limbed Path", description: "Explore the eight limbs of yoga, from ethical principles and breath control to meditation and self-realization." },
                  { link: "/what-is-yoga/seven-chakras", title: "The 7 Chakras", description: "Understand the seven energy centers of the body and how they influence your physical, emotional, and spiritual well-being." },
                  { link: "/what-is-yoga/three-gunas", title: "The 3 Gunas", description: "Learn about the three fundamental qualities of nature—Sattva, Rajas, and Tamas—and how they shape your actions and mindset." },
                  { link: "/resources", title: "Resources", description: "Find recommended books, tools, and external guides to deepen your yoga knowledge and practice." },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.1 }}
                    className="group card"
                  >
                    <Link 
                      to={item.link} 
                    >
                      <div className="flex flex-col space-y-2">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <div className="inline-flex items-center text-moss">
                          <span className="mr-2">Explore</span>
                          <span className="opacity-0 group-hover:opacity-100 transition-all">
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-5 w-5 transform transition-transform group-hover:translate-x-1" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        
          {/* Yoga For Every Need  */}
          <motion.div
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: false, amount: 0.2 }} 
            transition={{ duration: 1 }}
            className="container my-20"
          >
            <div className="flex items-center mb-12">
              <div className="w-16 h-px bg-moss"></div>
              <h2 className="text-lg lg:text-2xl tracking-widest ml-4">Yoga For Every Need</h2>
            </div>
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

        {/* Newsletter */}
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl mx-auto text-center space-y-6"
      >
        <h2>
        Read My Column
        </h2>
        <p className="max-w-2xl mx-auto">
          Each month, I reflect on how yoga has shaped my journey—going <span className="italic">beyond the mat</span> to explore the shifts in awareness, connection, and personal growth along the way.
        </p>
        <div className="flex justify-center items-center space-x-4">
          <Link
            to="/newsletter"
            className="group inline-flex items-center relative"
          >
            <span className="text-neutral-700 transition-colors duration-300 group-hover:text-neutral-900 relative">
              Explore Insights
            </span>
            <svg 
              className="ml-2 w-4 h-4 text-neutral-500 transition-all duration-300 group-hover:translate-x-1 group-hover:text-neutral-900"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
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