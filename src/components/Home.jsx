import { Helmet } from 'react-helmet';
import { Parallax } from 'react-parallax';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageNav from './PageNav';

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
      
        {/* Hero */}
        <Parallax bgImage="bg1.jpg" strength={300}>
          <div className="relative h-screen flex flex-col items-center justify-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.8, ease: "easeOut" }}
              className="text-center px-4 max-w-4xl mx-auto space-y-6"
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl text-white opacity-80 tracking-wide">
                Learn Yoga Online
              </h1>
              
              <p className="text-lg text-white opacity-80 tracking-wide">
                A mindful approach to developing your yoga practice
              </p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1.2 }}
              >
                <Link
                  to="/poses"
                  className="inline-block mt-12 px-8 py-3 border border-white/50 rounded-sm text-white opacity-80 hover:scale-[103%] transition-all duration-500 tracking-wide uppercase text-sm"
                >
                  Explore
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </Parallax>
        
        <div className="max-w-3xl mx-12 md:mx-auto py-40 grid gap-y-40 md:gap-y-80 text-charcoal">
          {/* About */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 1.5 }}
            className="space-y-28"
          >
            <div>
              <h2 className="text-2xl md:text-4xl mb-16 text-center tracking-wider">
                What is Learn Yoga Online
              </h2>
              
              <div className="grid grid-cols-1 gap-y-16 text-lg leading-relaxed opacity-90">
                <p>Learn Yoga Online is a simple, intuitive platform for deepening your yoga practice. Whether you're a beginner or an experienced yogi, explore essential poses with clear instructions and in-depth guidance.</p>
                
                <p>Alongside the practice of physical poses, you'll also have the opportunity to explore the deeper aspects of yoga that connect mind, body, and spirit. This knowledge will help you integrate yoga into your daily life for greater well-being.</p>
              </div>
            </div>
          </motion.div>

          {/* Approach */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 1.5 }}
            className="space-y-28"
          >
            <div>
              <h2 className="text-2xl md:text-4xl mb-16 text-center tracking-wider">
                Our Unique Approach
              </h2>
              
              <div className="grid grid-cols-1 gap-y-16 text-lg leading-relaxed opacity-90">
                <p>At Learn Yoga Online, we’re dedicated to creating a welcoming and accessible space for everyone, especially absolute beginners. Our approach is designed to help you build confidence in your yoga journey with clear, well-researched guidance.</p>
                <p>We know starting yoga can feel overwhelming with so many poses, terms, and techniques to learn. That's why we keep our instruction simple, structured, and approachable. Every pose is explained step by step with careful attention to alignment and safety. We provide modifications for different body types and experience levels, allowing you to practice comfortably at your own pace while gradually building strength and flexibility.</p>
                <p>The physical poses are just one part of yoga. We also cover breathing techniques, meditation, and key concepts that enhance your practice. These elements are presented in clear, everyday language with practical examples of how they can benefit your wellbeing. Understanding these aspects helps create a more complete and rewarding yoga experience.</p>
                <p>Yoga comes from a rich tradition that spans thousands of years. We research each topic thoroughly and check multiple sources to ensure the information we share is accurate. You'll find references throughout our content if you want to learn more about specific topics. This helps you build your practice on solid, trustworthy foundations.</p>
                <p>Wherever you are in your yoga journey, we’re here to support you with clear, reliable, and beginner-friendly resources designed to help you grow with confidence.</p>
              </div>
            </div>
          </motion.div>

          {/* Intro */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 1.5 }}
            className="space-y-24"
          >
  
          <div className="p-8 border-l-2 border-moss/50">
            <h3 className="text-xl mb-6 font-light tracking-wide">The Beginner's Mind: Your Greatest Strength</h3>
            <p className="text-lg leading-relaxed mb-8 opacity-90">
              In yoga philosophy, there's a concept called "beginner's mind" or <span className="italic">shoshin</span> that views your newcomer status not as a limitation, but as your greatest asset. Approaching yoga with fresh eyes allows you to:
            </p>
            <ul className="text-lg leading-relaxed space-y-4 opacity-90">
              <li className="flex items-start">
                <span className="inline-block w-1 h-1 rounded-full bg-moss/70 mt-3 mr-3"></span>
                Experience each pose without preconceptions or expectations
              </li>
              <li className="flex items-start">
                <span className="inline-block w-1 h-1 rounded-full bg-moss/70 mt-3 mr-3"></span>
                Stay present with sensations rather than rushing toward goals
              </li>
              <li className="flex items-start">
                <span className="inline-block w-1 h-1 rounded-full bg-moss/70 mt-3 mr-3"></span>
                Develop self-compassion that will serve your practice for years to come
              </li>
              <li className="flex items-start">
                <span className="inline-block w-1 h-1 rounded-full bg-moss/70 mt-3 mr-3"></span>
                Build awareness of subtle energies and connections within your body
              </li>
              <li className="flex items-start">
                <span className="inline-block w-1 h-1 rounded-full bg-moss/70 mt-3 mr-3"></span>
                Embrace the journey rather than focusing solely on destinations
              </li>
            </ul>
            <p className="text-lg leading-relaxed mt-8 opacity-90">
              Yoga is not about perfection but presence. The ancient yogic texts remind us that yoga is the practice of stilling the fluctuations of the mind. As you begin, remember that even the most advanced practitioners continually return to these fundamental principles.
            </p>
          </div>

          <div className="p-8 border-l-2 border-moss/50">
            <h3 className="text-xl mb-6 font-light tracking-wide">Yoga for Every Body</h3>
            <p className="text-lg leading-relaxed opacity-90">
              Yoga is for everyone, regardless of age, body type, or fitness level. It is not about achieving a particular look or executing the most advanced poses—it’s about tuning in to your body, breath, and mind. Your practice should never cause pain or discomfort; instead, it should foster ease, strength, and awareness.
            </p>
            <ul className="text-lg leading-relaxed space-y-4 opacity-90 mt-6">
              <li className="flex items-start">
                <span className="inline-block w-1 h-1 rounded-full bg-moss/70 mt-3 mr-3"></span>
                Listen to your body: Every day is different, and some poses may feel accessible one day and challenging the next. Honor where you are.
              </li>
              <li className="flex items-start">
                <span className="inline-block w-1 h-1 rounded-full bg-moss/70 mt-3 mr-3"></span>
                Modify as needed: There is no "right" way for a pose to look—only what feels good and safe for you. Props like blocks, straps, and blankets can support your practice.
              </li>
              <li className="flex items-start">
                <span className="inline-block w-1 h-1 rounded-full bg-moss/70 mt-3 mr-3"></span>
                Be patient with progress: Flexibility and strength develop over time. Yoga is not a race; it’s a lifelong journey.
              </li>
            </ul>
            <p className="text-lg leading-relaxed mt-6 opacity-90">
              If you have any medical conditions, injuries, or concerns, check in with a healthcare professional before beginning. Most importantly, remember that the most advanced yogi isn’t the one who can perform the deepest backbend—it’s the one who practices with mindfulness, respect, and care for their body’s needs.
            </p>
          </div>

          <div className="p-8 border-l-2 border-moss/50">
            <h3 className="text-xl mb-6 font-light tracking-wide">Practicing Yoga with Disabilities</h3>
            <p className="text-lg leading-relaxed opacity-90">
              Yoga is an adaptable practice that can be modified to suit every body, including those with disabilities or limited mobility. It’s not about fitting into a specific mold—it’s about exploring movement, breath, and stillness in a way that works for you.
            </p>
            <ul className="text-lg leading-relaxed space-y-4 opacity-90 mt-6">
              <li className="flex items-start">
                <span className="inline-block w-1 h-1 rounded-full bg-moss/70 mt-3 mr-3"></span>
                Chair Yoga: Seated variations can offer all the benefits of traditional yoga while providing stability and support.
              </li>
              <li className="flex items-start">
                <span className="inline-block w-1 h-1 rounded-full bg-moss/70 mt-3 mr-3"></span>
                Prop-supported Poses: Using straps, bolsters, or blocks can help make postures more accessible and comfortable.
              </li>
              <li className="flex items-start">
                <span className="inline-block w-1 h-1 rounded-full bg-moss/70 mt-3 mr-3"></span>
                Wall-assisted or standing yoga: If getting up and down from the floor is difficult, standing sequences or using a wall for support can provide a safe and effective practice.
              </li>
            </ul>
            <p className="text-lg leading-relaxed mt-6 opacity-90">
              We are actively working on expanding our content on accessible yoga.
            </p>
          </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 1.5 }}
            className="space-y-24 p-24 bg-moss/5"
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
          
          {/* CTA */}
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


        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 1 }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.3 } } }}
        >
          <motion.h2 
            variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 1 } } }}
            className="text-2xl md:text-4xl mb-8 text-center tracking-wider"
          >
            Deepen Your Understanding
          </motion.h2>
          <motion.p 
            variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 1 } } }}
            className="text-center text-lg"
          >
            Check out these essential guides to explore the history and philosophy of yoga.
          </motion.p>
          <div className="grid gap-12 my-12">
            {[
              { link: "/what-is-yoga/beginners-guide", title: "Start Here: Beginner’s Guide", description: "New to yoga? This guide covers the fundamentals—what yoga is, how to begin, and key concepts to help you get started." },
              { link: "/what-is-yoga/overview", title: "What Is Yoga?", description: "Discover the history, philosophy, and purpose of yoga. Learn how this ancient practice continues to evolve today." },
              { link: "/what-is-yoga/eight-limbed-path", title: "The 8-Limbed Path", description: "Explore the eight limbs of yoga, from ethical principles and breath control to meditation and self-realization." },
              { link: "/what-is-yoga/seven-chakras", title: "The 7 Chakras", description: "Understand the seven energy centers of the body and how they influence your physical, emotional, and spiritual well-being." },
              { link: "/what-is-yoga/three-gunas", title: "The 3 Gunas", description: "Learn about the three fundamental qualities of nature—Sattva, Rajas, and Tamas—and how they shape your actions and mindset." },
              { link: "/resources", title: "Resources", description: "Find recommended books, tools, and external guides to deepen your yoga knowledge and practice." },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
                }}
              >
                <Link 
                  to={item.link} 
                  className="block w-full p-8 border border-moss/50 transition-all duration-300 hover:scale-[1.01] hover:bg-moss/80 hover:text-white flex flex-col justify-center"
                >
                  <h3 className="text-xl mb-2">{item.title}</h3>
                  <p>{item.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Yoga For Every Need */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 1.5 }}
          className="space-y-28 py-24"
        >
          <div>
            <h2 className="text-2xl md:text-4xl mb-16 text-center tracking-wider">
              Yoga for Every Need
            </h2>
            
            <div className="flex flex-col space-y-12 max-w-6xl mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 1.5 }}
                className="flex flex-col p-8 border-l-2 border-moss/50 h-full"
              >
                <h3 className="text-xl mb-6 font-light tracking-wide">Yoga for Flexibility</h3>
                <p className="text-lg leading-relaxed opacity-90 mb-6">
                  Yoga offers a gentle yet effective way to improve flexibility throughout your body. Unlike forceful stretching, yoga teaches you to breathe into areas of tension and release them mindfully.
                </p>
                <ul className="text-lg leading-relaxed space-y-4 opacity-90 mb-8">
                  <li className="flex items-start">
                    <span className="inline-block w-1 h-1 rounded-full bg-moss/70 mt-3 mr-3"></span>
                    Gradually increases range of motion in joints
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1 h-1 rounded-full bg-moss/70 mt-3 mr-3"></span>
                    Lengthens muscles safely through breath-synchronized movement
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1 h-1 rounded-full bg-moss/70 mt-3 mr-3"></span>
                    Reduces tension and stiffness from sedentary lifestyles
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1 h-1 rounded-full bg-moss/70 mt-3 mr-3"></span>
                    Creates space in the body for improved circulation and energy flow
                  </li>
                </ul>
                <Link
                  to="/poses/benefit/improve%20flexibility"
                  className="mt-auto inline-block text-moss hover:text-moss/80 transition-colors duration-300 tracking-wide uppercase text-sm"
                >
                  Explore Flexibility Poses →
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 1.5, delay: 0.2 }}
                className="flex flex-col p-8 border-l-2 border-moss/50 h-full"
              >
                <h3 className="text-xl mb-6 font-light tracking-wide">Yoga for Strength</h3>
                <p className="text-lg leading-relaxed opacity-90 mb-6">
                  Yoga builds functional strength by using your own body weight as resistance. This creates balanced muscle development that supports daily activities and prevents injuries.
                </p>
                <ul className="text-lg leading-relaxed space-y-4 opacity-90 mb-8">
                  <li className="flex items-start">
                    <span className="inline-block w-1 h-1 rounded-full bg-moss/70 mt-3 mr-3"></span>
                    Develops core stability and postural muscles
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1 h-1 rounded-full bg-moss/70 mt-3 mr-3"></span>
                    Builds isometric strength through holding poses
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1 h-1 rounded-full bg-moss/70 mt-3 mr-3"></span>
                    Strengthens oft-neglected muscle groups for whole-body conditioning
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1 h-1 rounded-full bg-moss/70 mt-3 mr-3"></span>
                    Improves muscle endurance through flowing sequences
                  </li>
                </ul>
                <Link
                  to="/poses/benefit/build%20strength"
                  className="mt-auto inline-block text-moss hover:text-moss/80 transition-colors duration-300 tracking-wide uppercase text-sm"
                >
                  Explore Strength Poses →
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 1.5, delay: 0.4 }}
                className="flex flex-col p-8 border-l-2 border-moss/50 h-full"
              >
                <h3 className="text-xl mb-6 font-light tracking-wide">Yoga for Balance</h3>
                <p className="text-lg leading-relaxed opacity-90 mb-6">
                  Balance in yoga extends beyond physical steadiness—it cultivates equilibrium between effort and ease, strength and flexibility, and mind and body.
                </p>
                <ul className="text-lg leading-relaxed space-y-4 opacity-90 mb-8">
                  <li className="flex items-start">
                    <span className="inline-block w-1 h-1 rounded-full bg-moss/70 mt-3 mr-3"></span>
                    Enhances proprioception and body awareness
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1 h-1 rounded-full bg-moss/70 mt-3 mr-3"></span>
                    Strengthens stabilizing muscles often underutilized in daily life
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1 h-1 rounded-full bg-moss/70 mt-3 mr-3"></span>
                    Improves focus and concentration through mindful practice
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1 h-1 rounded-full bg-moss/70 mt-3 mr-3"></span>
                    Creates a centered foundation for all other movement practices
                  </li>
                </ul>
                <Link
                  to="/poses/benefit/improve%20balance"
                  className="mt-auto inline-block text-moss hover:text-moss/80 transition-colors duration-300 tracking-wide uppercase text-sm"
                >
                  Explore Balance Poses →
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
        
        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 1 }}
          className="flex flex-col justify-center items-center text-center space-y-12 p-24 bg-moss/5"
        >
        <h2 className="text-2xl md:text-4xl text-center tracking-wider">
          Explore My Column
        </h2>

        <p>
          Monthly insights, tips, and stories to deepen your yoga practice.
        </p>
        <Link
          to="/newsletter" 
          className="text-lg tracking-wider text-charcoal/80 hover:text-moss hover:scale-[103%] transition-all duration-300 uppercase"
        >
          <span>
            Read Latest
          </span>
        </Link>
        </motion.div>
        
        {/* Paid Programs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 1.5 }}
          className="space-y-12 py-32"
        >
          <div className="max-w-5xl mx-auto px-6">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 1.5 }}
              className="text-2xl md:text-4xl mb-12 text-center tracking-wider"
            >
              Yoga Programs for Beginners
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 1.5, delay: 0.2 }}
              className="text-lg leading-relaxed opacity-90 text-center max-w-3xl mx-auto mb-16"
            >
              Transform your practice with our expertly crafted, step-by-step programs. Designed to build progressively, these guided journeys offer structure and accountability for lasting results.
            </motion.p>
            
            {/* Preview */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 1.5, delay: 0.4 }}
              className="border border-moss/30 mb-24 overflow-hidden"
            >
              <div className="p-8 bg-moss/10">
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-2xl tracking-wide">30-Day Yoga Journey</h3>
                  <span className="bg-moss/80 text-white px-4 py-1 text-sm uppercase tracking-wider">$49.99</span>
                </div>
                <p className="text-lg leading-relaxed opacity-90 mb-6">
                  A comprehensive month-long program that builds progressively to transform your practice and establish sustainable yoga habits for life.
                </p>
                <div className="flex items-center justify-between flex-wrap gap-6">
                  <div className="flex space-x-4">
                    <div className="flex items-center text-sm">
                      <span className="inline-block w-2 h-2 rounded-full bg-moss/70 mr-2"></span>
                      4 weeks
                    </div>
                    <div className="flex items-center text-sm">
                      <span className="inline-block w-2 h-2 rounded-full bg-moss/70 mr-2"></span>
                      30 guided sessions
                    </div>
                    <div className="flex items-center text-sm">
                      <span className="inline-block w-2 h-2 rounded-full bg-moss/70 mr-2"></span>
                      Downloadable materials
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Week 1 */}
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-px bg-moss/10">
                <div className="bg-white p-6">
                  <div className="text-moss text-sm uppercase tracking-wider mb-2">Week 1</div>
                  <h3 className="text-xl mb-4 font-light tracking-wide">Foundation</h3>
                  <p className="text-base leading-relaxed opacity-90 mb-4">Establish the fundamentals with basic poses and breathing techniques.</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-sm opacity-90">
                      <span className="inline-block w-1 h-1 rounded-full bg-moss/70 mt-0 mr-3"></span>
                      <span>Day 1: Gentle Introduction</span>
                    </li>
                    <li className="flex items-center text-sm opacity-90">
                      <span className="inline-block w-1 h-1 rounded-full bg-moss/70 mt-0 mr-3"></span>
                      <span>Day 2: Breath Awareness</span>
                    </li>
                    <li className="flex items-center text-sm opacity-90">
                      <span className="inline-block w-1 h-1 rounded-full bg-moss/70 mt-0 mr-3"></span>
                      <span>Day 3: Standing Basics</span>
                    </li>
                  </ul>
                  <div className="text-sm opacity-70 italic">And 4 more sessions...</div>
                </div>
                
                {/* Weeks 2-4 */}
                {[
                  { week: "Week 2", title: "Stability", teaser: "Develop strength and confidence in foundational poses." },
                  { week: "Week 3", title: "Expansion", teaser: "Explore more challenging variations and longer sequences." },
                  { week: "Week 4", title: "Integration", teaser: "Bring together all elements with more complex sequences." }
                ].map((week, index) => (
                  <div key={index} className="bg-white p-6 relative overflow-hidden">
                    <div className="filter blur-[2px] pointer-events-none">
                      <div className="text-moss text-sm uppercase tracking-wider mb-2">{week.week}</div>
                      <h3 className="text-xl mb-4 font-light tracking-wide">{week.title}</h3>
                      <p className="text-base leading-relaxed opacity-90">{week.teaser}</p>
                      <div className="mt-4 opacity-50">7 guided sessions</div>
                    </div>
                    <div className="absolute inset-0 bg-white/60 flex flex-col items-center justify-center">
                      <div className="bg-moss/10 p-3 rounded-full mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-moss/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </div>
                      <span className="text-sm text-charcoal/70">Unlock with purchase</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="p-8 flex justify-center">
                <Link
                  to="/"
                  className="cursor-not-allowed inline-block px-8 py-3 bg-moss text-white rounded-sm hover:bg-moss/80 transition-all duration-500 tracking-wide uppercase text-sm"
                >
                  Get Full Access
                </Link>
              </div>
            </motion.div>
          </div>
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
                className="flex flex-col justify-between bg-transparent h-[400px] p-6 border border-moss text-left rounded-t-xl shadow"
              >
                <p className="text-lg italic">"{testimonial.quote}"</p>
                <p className="font-medium uppercase">— {testimonial.author}</p>
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