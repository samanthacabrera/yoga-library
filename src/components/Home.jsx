import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Parallax } from 'react-parallax';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageNav from './PageNav';

const Home = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [current, setCurrent] = useState(0);

  const carouselItems = [
    {
      image: "bg1.jpg",
      heading: "Learn Yoga Online",
      subheading: "",
      features: [
        "Explore the origins and meanings of each pose",
        "Discover the philosophy behind the practice",
        "Deepen your understanding with guided insights",
      ]
    },
    {
      image: "bg1.jpg",
      heading: "Learn Yoga Online",
      subheading: "",
      features: [
        "Enhance your practice with proper technique",
        "Learn the traditional names of essential yoga poses",
        "Understand the cues for proper alignment",
      ]
    },
    {
      image: "bg1.jpg",
      heading: "Learn Yoga Online",
      subheading: "",
      features: [
        "Deepen your connection between mind and body",
        "Synchronize breath with movement",
        "Cultivate present-moment awareness"
      ]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const approaches = [
    {
      title: "Accessible",
      mainText: "We know starting yoga can feel overwhelming with so many poses, terms, and techniques to learn. That's why we keep our instruction simple, structured, and approachable. Every pose is explained step by step with careful attention to alignment and safety. We provide modifications for different body types and experience levels, allowing you to practice comfortably at your own pace while gradually building strength and flexibility."
    },
    {
      title: "Holistic",
      mainText: "The physical poses are just one part of yoga. We also cover breathing techniques, meditation, and key concepts that enhance your practice. These elements are presented in clear, everyday language with practical examples of how they can benefit your wellbeing. Understanding these aspects helps create a more complete and rewarding yoga experience."
    },
    {
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
      <PageNav/>
      <div className="flex flex-col w-screen">
      
    <Parallax 
      bgImage={carouselItems[current].image} 
      strength={300} 
      bgImageStyle={{ objectFit: "cover", width: "100%", height: "100vh" }}
    >
      <div className="relative h-screen flex flex-col items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/70" />
        <motion.div 
          key={current}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="relative text-center max-w-4xl mx-auto space-y-12 z-10"
        >
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2.2, ease: "easeOut" }}
            className="text-4xl lg:text-8xl text-white"
          >
            {carouselItems[current].heading}
          </motion.h1>

          <div className="flex flex-col gap-y-8 text-white/80 text-xs uppercase tracking-wider max-w-3xl mx-auto">
            {carouselItems[current].features.map((text, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.2, duration: 1.2 }}
                className="border-b border-white/30 pb-2"
              >
                {text}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1.2 }}
            className="mt-6"
          >
            <Link
              to="/poses"
              className="inline-block px-10 py-4 border border-white/40 rounded-sm text-white hover:bg-white/10 hover:border-white/60 transition-all duration-500 tracking-wider uppercase text-sm font-light"
            >
              Begin Your Journey
            </Link>
          </motion.div>
        </motion.div>
        
        <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2 z-10">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === current 
                  ? "bg-white w-6" 
                  : "bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </Parallax>
        
    <div className="max-w-3xl mx-12 md:mx-auto py-40 grid gap-y-40 md:gap-y-80 text-charcoal">
      
      {/* About */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 1.5 }}
        className="mb-40"
      >
        <div className="flex items-center mt-24 py-12">
          <div className="w-16 h-px bg-moss"></div>
          <h3 className="ml-4 text-2xl font-light tracking-widest text-gray-800">WHAT IS LEARN YOGA ONLINE</h3>
        </div>

        <p className="text-sm uppercase tracking-widest text-moss mb-10">A HOLISTIC JOURNEY INTO YOGA</p>

        <div className="space-y-6 text-gray-700">
          <p className="text-base leading-relaxed">
            Learn Yoga Online is a simple, intuitive platform for deepening your yoga practice. Whether you're a beginner or an experienced yogi, explore essential poses with clear instructions and in-depth guidance.          
          </p>
          
          <p className="text-base leading-relaxed">
            Alongside the practice of physical poses, you'll also have the opportunity to explore the deeper aspects of yoga that connect mind, body, and spirit. This knowledge will help you integrate yoga into your daily life for greater well-being.         
          </p>
        </div>
      </motion.div>

      {/* What We Offer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 1.5 }}
          className="mt-40"
        >
          <div className="flex items-center mb-12">
            <div className="w-16 h-px bg-moss"></div>
            <h3 className="ml-4 text-2xl font-light tracking-widest text-gray-800">WHAT WE OFFER</h3>
          </div>

          <p className="text-sm uppercase tracking-widest text-moss mb-10">COMPREHENSIVE YOGA RESOURCES</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {[
              { title: "Extensive Pose Library", description: "Access detailed breakdowns of over 200 yoga poses, from foundational postures to advanced variations." },
              { title: "Progressive Learning Paths", description: "Follow structured sequences that gradually build your strength, flexibility, and understanding." },
              { title: "Live & On-Demand Classes", description: "Connect with expert instructors in real-time or practice at your own pace." },
              { title: "Personalized Feedback", description: "Upload videos of your practice and receive guidance from certified yoga teachers." },
              { title: "Meditation & Breathwork", description: "Explore techniques that calm the mind and enhance your overall wellbeing." },
              { title: "Philosophy & History", description: "Discover the rich traditions and ancient wisdom behind the physical practice." }
            ].map((item, index) => (
              <div key={index} className="border-l border-moss/30 pl-6 py-2">
                <h4 className="text-base font-medium text-gray-800 mb-2">{item.title}</h4>
                <p className="text-base text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

          {/* Approach */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 1.5 }}
            className="py-24"
          >
            <h2 className="text-2xl md:text-4xl mb-16 text-center tracking-wider">
              Our Unique Approach
            </h2>
            
            {/* Tab Navigation */}
            <div className="mb-12">
              <div className="flex flex-wrap justify-center gap-6">
                {approaches.map((approach, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className={`py-4 px-8 transition-all duration-300 focus:outline-none border shadow-sm text-xs md:text-sm tracking-wider ${
                      activeTab === index 
                        ? "bg-moss/80 text-white shadow-md border-transparent" 
                        : "bg-white text-charcoal hover:bg-moss/20 border-gray-200"
                    }`}
                  >
                    {approach.title}
                  </motion.button>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden min-h-[400px] bg-moss/[2%]">
              {approaches.map((approach, index) => (
                <motion.div
                  key={index}
                  initial={false}
                  animate={{ 
                    opacity: activeTab === index ? 1 : 0,
                    x: activeTab === index ? 0 : activeTab > index ? -100 : 100,
                    display: activeTab === index ? "block" : "none"
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0 p-10"
                >
                  <div className="flex flex-col h-full justify-center">
                    <p className="text-base leading-loose tracking-wide text-center">
                      {approach.mainText}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-6 flex justify-center">
              <div className="flex space-x-2">
                {approaches.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`transition-all duration-300 rounded-full ${
                      activeTab === index 
                        ? "w-8 h-2 bg-moss/80" 
                        : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>


          {/* Intro */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 1.5 }}
            className="space-y-40"
          >
          {/* Beginner's Mind */}
          <div className="">
            <div className="flex items-center mb-16">
              <div className="w-16 h-px bg-moss"></div>
              <h3 className="ml-4 text-2xl font-light tracking-widest text-gray-800">BEGINNER'S MIND</h3>
            </div>

            <p className="text-sm uppercase tracking-widest text-moss mb-16">YOUR GREATEST STRENGTH</p>
  
            <p className="text-base leading-relaxed mb-16 text-gray-700">
              In yoga philosophy, there's a concept called "beginner's mind" or <span className="font-normal">shoshin</span> that views your newcomer status not as a limitation, but as your greatest asset. Approaching yoga with fresh eyes allows you to:
            </p>

            <div className="space-y-8 mb-16">
              {[
                "Experience each pose without preconceptions",
                "Stay present with sensations rather than rushing",
                "Develop self-compassion for your practice",
                "Build awareness of subtle body connections",
                "Embrace the journey, not just destinations"
              ].map((item, index) => (
                <div key={index} className="pl-8 relative">
                  <span className="absolute left-0 top-2 text-xs text-moss">0{index + 1}</span>
                  <p className="text-base text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Yoga for Everyone */}
          <div className="">
            <div className="flex items-center mb-16">
              <div className="w-16 h-px bg-moss"></div>
              <h3 className="ml-4 text-2xl font-light tracking-widest text-gray-800">YOGA FOR EVERYONE</h3>
            </div>

            <p className="text-sm uppercase tracking-widest text-moss mb-16">INCLUSIVE & ACCESSIBLE PRACTICE</p>

            <p className="text-base leading-relaxed mb-16 text-gray-700">
              Yoga is for everybody, regardless of age, body type, or fitness level. It’s not about achieving the perfect pose but about cultivating a practice that supports your body, breath, and mind. The most rewarding yoga practice is one that feels safe, accessible, and empowering.
            </p>

            <div className="space-y-8 mb-16">
              {[
                "Honor your body’s needs and limitations without judgment",
                "Use props like blocks, straps, and blankets for added support",
                "Modify poses to suit your range of motion and comfort",
                "Embrace progress at your own pace—flexibility and strength develop over time",
                "Remember that yoga is about presence, not perfection"
              ].map((item, index) => (
                <div key={index} className="pl-8 relative">
                  <span className="absolute left-0 top-2 text-xs text-moss">0{index + 1}</span>
                  <p className="text-base text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Practicing Yoga with Disabilities */}
          <div className="">
            <div className="flex items-center mb-16">
              <div className="w-16 h-px bg-moss"></div>
              <h3 className="ml-4 text-2xl font-light tracking-widest text-gray-800">PRACTICING YOGA WITH DISABILITIES</h3>
            </div>

            <p className="text-sm uppercase tracking-widest text-moss mb-16">ADAPTABLE & EMPOWERING</p>

            <p className="text-base leading-relaxed mb-16 text-gray-700">
              Yoga is an adaptable practice that can be modified to fit every body. It’s not about conforming to a specific shape—it’s about exploring movement, breath, and stillness in a way that supports your individual needs.  
            </p>

            <div className="space-y-8 mb-16">
              {[
                "Chair yoga offers seated variations that provide stability and support",
                "Props like straps, bolsters, and blocks can enhance comfort and accessibility",
                "Wall-assisted or standing yoga can offer balance and security",
                "Breathwork and meditation are powerful practices accessible to everyone",
                "Adaptive yoga techniques ensure that movement is safe and supportive"
              ].map((item, index) => (
                <div key={index} className="pl-8 relative">
                  <span className="absolute left-0 top-2 text-xs text-moss">0{index + 1}</span>
                  <p className="text-base text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 border-l-2 border-moss/50">
            <h3 className="text-xl mb-6 font-light tracking-wide">Accessible Yoga for All</h3>
            <p className="text-lg leading-relaxed opacity-90">
              If you have mobility challenges, chronic pain, or other conditions, yoga can still be a meaningful and accessible practice. We are committed to expanding our content on adaptive yoga and creating resources that support every practitioner.
            </p>
          </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: false, amount: 0.2 }} 
            transition={{ duration: 1 }}
            className="py-32"
          >
            <div className="px-8">
              <motion.div 
                className="text-center mb-16"
                variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 1 } } }}
              >
                <div className="flex items-center justify-center mb-8">
                  <h2 className="text-3xl md:text-4xl tracking-wider">Deepen Your Understanding</h2>
                </div>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Explore these essential guides to discover the rich history and transformative philosophy of yoga.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
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
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="group"
                  >
                    <Link 
                      to={item.link} 
                      className="flex flex-col h-full overflow-hidden shadow-sm border border-moss/20 rounded-sm transition-all duration-300 hover:shadow-md hover:border-moss/30 group-hover:scale-[1.01]"
                    >
                      <div className="h-[1px] bg-moss/70 w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                      <div className="p-8 flex flex-col h-full">
                        <h3 className="text-xl font-light tracking-wide mb-4 text-gray-800 group-hover:text-moss transition-colors duration-300">{item.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{item.description}</p>
                        <div className="mt-6 border-gray-100 flex items-center text-moss opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                          <span className="text-sm uppercase tracking-wider">Explore</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
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
            className="py-24 max-w-4xl mx-auto px-6"
          >
            <h2 className="text-center my-24 text-3xl md:text-4xl tracking-wider">
              Yoga for Every Need
            </h2>
            
            <div className="space-y-16">
              {/* Flexibility */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-100 pt-8 hover:scale-[102%] transition ease-in-out duration-500">
                <h3 className="text-md font-light uppercase tracking-widest text-gray-500">
                  Flexibility
                </h3>
                <div className="md:col-span-2">
                  <p className="mb-6 text-sm leading-relaxed">
                    Yoga offers a gentle yet effective way to improve flexibility. Unlike forceful stretching, 
                    yoga teaches you to breathe into areas of tension and release them mindfully.
                  </p>
                  <a 
                    href="/poses/benefit/improve-flexibility" 
                    className="text-xs uppercase tracking-widest hover:text-moss transition duration-300"
                  >
                    View poses
                  </a>
                </div>
              </div>

              {/* Strength */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-100 pt-8 hover:scale-[102%] transition ease-in-out duration-500">
                <h3 className="text-md font-light uppercase tracking-widest text-gray-500">
                  Strength
                </h3>
                <div className="md:col-span-2">
                  <p className="mb-6 text-sm leading-relaxed">
                    Yoga builds functional strength using your own body weight as resistance, creating 
                    balanced muscle development that supports daily activities and prevents injuries.
                  </p>
                  <a 
                    href="/poses/benefit/build-strength" 
                    className="text-xs uppercase tracking-widest hover:text-moss transition duration-300"
                  >
                    View poses
                  </a>
                </div>
              </div>

              {/* Balance */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-100 pt-8 hover:scale-[102%] transition ease-in-out duration-500">
                <h3 className="text-md font-light uppercase tracking-widest text-gray-500">
                  Balance
                </h3>
                <div className="md:col-span-2">
                  <p className="mb-6 text-sm leading-relaxed">
                    Balance in yoga extends beyond physical steadiness—it cultivates equilibrium 
                    between effort and ease, strength and flexibility, and mind and body.
                  </p>
                  <a 
                    href="/poses/benefit/improve-balance" 
                    className="text-xs uppercase tracking-widest hover:text-moss transition duration-300"
                  >
                    View poses
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        
          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center items-center text-center space-y-8 py-20 px-6 md:px-12 lg:px-24 bg-moss/[2%]"
          >
            <h2 className="text-3xl md:text-5xl font-light text-center tracking-widest">
              Explore My Column
            </h2>

            <p className="max-w-xl text-lg text-charcoal/80 font-light">
              Monthly insights, tips, and stories to deepen your yoga practice.
            </p>
            
            <Link
              to="/newsletter" 
              className="mt-4 inline-flex items-center border-b border-moss/40 pb-1 text-lg tracking-wider text-charcoal/80 hover:text-moss hover:border-moss transition-all duration-300"
            >
              <span>Read Latest</span>
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </motion.div>
                
          {/* Testimonials */}
          <motion.div
              initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 1 }}
              className="justify-center items-center"
            >
              <motion.h2 
                variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 1 } } }}
                className="text-2xl md:text-4xl mb-8 text-center tracking-wider"
              >
                What Others Are Saying
              </motion.h2>
              <div className="grid md:grid-cols-2 gap-x-6 gap-y-12 my-24">
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
                    className="flex flex-col justify-between bg-moss/[2%] h-[400px] p-6 border border-moss/20 text-left rounded-t-xl hover:shadow-sm transition duration-300"
                  >
                    <p className="text-lg italic">"{testimonial.quote}"</p>
                    <p className="font-medium uppercase">— {testimonial.author}</p>
                  </motion.div>
                ))}
              </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 1.5 }}
            className="space-y-24 p-24 bg-moss/[2%]"
          >
          <div>
            <h2 className="text-2xl md:text-4xl mb-16 text-center tracking-wider">
              Transform Your Practice
            </h2>
            
            <div className="grid md:grid-cols-3 gap-x-12 gap-y-16">
              {[
                { number: "01", text: "Learn the names of essential yoga poses" },
                { number: "02", text: "Understand the cues for proper alignment" },
                { number: "03", text: "Explore the origins and meanings of each pose" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.1 }}
                  transition={{ duration: 1.5, delay: index * 0.3 }}
                  className="border-b border-moss/30 py-6"
                >
                  <div className="text-moss/70 text-sm mb-4">{item.number}</div>
                  <p className="text-lg opacity-90">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 1.5 }}
            className="flex justify-center pt-8"
          >
            <Link
              to="/poses"
              className="inline-flex flex-col items-center"
            >
              <span className="text-lg tracking-widest text-charcoal/80 hover:text-moss hover:scale-[103%] transition-all duration-300 uppercase">
                Begin
              </span>
            </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Home;