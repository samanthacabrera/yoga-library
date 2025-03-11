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
      <div className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="bg1.jpg" 
            alt="Women in tree pose on a mountain at sunset"
            className="object-cover w-full h-full transition-all duration-1000"
          />
          <div className="absolute inset-0"></div>
        </div>
        
        <div className="relative h-full flex flex-col items-center justify-center -translate-y-[9rem]">
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
      </div>
        
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

          {/* What makes this site different */}
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
                <ul className="pl-6 list-disc space-y-4">
                  <li>Beginner-Focused: We know starting yoga can feel overwhelming, so we keep things simple, structured, and approachable. Every pose is explained step by step, with modifications to help you practice at your own pace.</li>
                  <li>Thorough & Accurate: Yoga is a tradition with deep roots, and we respect that by ensuring all of our content is accurate and well-researched. We provide sources for further exploration so you can feel confident in the information you’re learning.</li>
                  <li>A Holistic Approach: Yoga is more than just poses. We introduce key philosophical and mindfulness concepts in an accessible way, helping you connect with yoga beyond the mat.</li>
                </ul>
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
            className="py-24 space-y-24"
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
                  className="border-t border-moss/30 pt-6"
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
          <div className="grid gap-12 my-24">
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
                  className="block w-full h-[280px] md:h-[300px] p-8 border border-moss rounded-xl transition-all duration-300 hover:scale-[1.03] hover:bg-moss hover:text-white flex flex-col justify-center"
                >
                  <h3 className="text-2xl font-medium mb-2">{item.title}</h3>
                  <p className="text-lg opacity-70">{item.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 1 }}
          className="flex flex-col justify-center items-center text-center space-y-12"
        >
        <h2 className="text-2xl md:text-4xl text-center tracking-wider">
          Read My Column
        </h2>

        <p className="text-lg">
          Discover new insights, tips, and stories about yoga and mindfulness every month.<br />
          Read our latest articles and deepen your practice.
        </p>
        <Link
          to="/newsletter" 
          className="flex items-center justify-center w-fit px-4 py-2 rounded font-medium uppercase tracking-wider border border-moss transition-all duration-300 hover:scale-105 hover:bg-moss hover:text-white"
        >
          <span>
            Read Now
          </span>
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
                className="flex flex-col justify-between bg-transparent h-[400px] p-6 border border-moss text-left rounded-t-xl shadow"
              >
                <p className="mt-4 text-lg italic">"{testimonial.quote}"</p>
                <p className="mt-4 font-medium uppercase">— {testimonial.author}</p>
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