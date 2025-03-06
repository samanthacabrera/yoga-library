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
        <meta name="keywords" content="Yoga, Poses, Yoga Library" />
        <meta name="author" content="Sam Cabrera" />
        <meta property="og:title" content="Learn Yoga Online" />
        <meta
          property="og:description"
          content="Explore a wide variety of vinyasa yoga poses with clear instructions and detailed explanations."
        />
        <meta property="og:url" content="https://learnyoga.online" />
        <meta property="og:type" content="website" />
      </Helmet>
   
      <div className="max-w-4xl mx-12 md:mx-auto my-80 grid gap-y-40 md:gap-y-80 text-charcoal text-justify">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 1 }}
        >
          <div className="justify-center items-center">
            <h1 className="text-center text-4xl md:text-8xl mb-12">
              Learn Yoga Online
            </h1>
            <p>
              A simple, intuitive platform for deepening your yoga practice. Whether you're a beginner or an experienced yogi, explore essential poses with clear instructions and in-depth guidance.
            </p>
          </div>
        </motion.div>

        {/* https://unsplash.com/photos/woman-stretching-on-mountain-top-during-sunrise-I2YSmEUAgDY */}
        <Parallax 
          bgImage="bg1.jpg" 
          bgImageAlt="woman in tree pose on top of mountain" 
          strength={500} 
          className="w-full h-[100vh] hidden lg:block"
          bgImageStyle={{ objectFit: "cover", objectPosition: "center" }}
        >
        </Parallax>

        {/* About */}
        <motion.div
          initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 1 }}
        >
          <div className="justify-center items-center">
            <h2 className="text-center text-2xl md:text-6xl mb-24">About</h2>
            <div className="space-y-12">
              <p>
                This website began with a simple, personal journey. In 2020, life felt particularly overwhelming. The uncertainty and stress of daily life led me to seek something that could offer me a bit of peace. I turned to yoga, unsure of what to expect but hopeful it would help.
              </p>
              <p>
                Over time, yoga became not just a physical practice, but a path of personal growth. The more I practiced, the more I wanted to learn—about different styles, the philosophy behind yoga, and even how mindfulness could be integrated into my everyday life. As yoga had such a positive impact on my life, I wanted to offer a resource that could support others on their own journeys.
              </p>
              <p>
                This website is more than just a collection of yoga poses. It’s a reflection of my journey, and a way to share what yoga has given me. My goal was to create a space that’s simple and welcoming, where everyone can find valuable resources and support.
              </p>
              <p>
                As someone who loves to build and improve things, I’m always working to make this site better. If you have any feedback or suggestions, feel free to email {""}
                <a
                  href="mailto:samantha.n.cabrera@gmail.com"
                  className="italic opacity-80 hover:opacity-100 hover:cursor-pointer"
                >
                  samantha.n.cabrera@gmail.com
                </a>. Your input helps me make the site better for you and others.
              </p>
              <p>
                Thank you for being part of this community. I hope that this website can be a source of guidance on your own yoga journey.
              </p>
            </div>
          </div>
        </motion.div>

      {/* Deepen Your Understanding */}
        <motion.div
          initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 1 }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.3 } } }}
        >
          <motion.h2 
            variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 1 } } }}
            className="text-center text-2xl md:text-6xl mb-12"
          >
            Deepen Your Understanding
          </motion.h2>
          <motion.p 
            variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 1 } } }}
            className="text-center text-lg"
          >
            Check out these essential guides to explore the history and philosophy of yoga.
          </motion.p>
          
          <div className="grid md:grid-cols-2 gap-12 my-12">
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


      {/* Testimonials */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.3 } } }}>
        <div className="py-32 text-center">
          <motion.h2 
            variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 1 } } }}
            className="text-5xl md:text-7xl py-12"
          >
            What Others Are Saying
          </motion.h2>
          <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-4xl mx-12 lg:mx-auto">
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
                className="flex flex-col justify-between bg-transparent h-[500px] p-6 border border-moss text-left rounded-t-xl shadow"
              >
                <p className="mt-4 text-lg italic">"{testimonial.quote}"</p>
                <p className="mt-4 font-medium uppercase">— {testimonial.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

        {/* Featured Categories */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: false, amount: 0.2 }} 
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.3 } } }}
        > 
          <div className="grid md:grid-cols-2 gap-48 items-center py-48">
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 1 } } }}
              className="text-center md:text-left mx-12 md:mx-0"
            >
              <h2 className="text-5xl md:text-7xl py-12">
                Featured Categories
              </h2>
              <p className="mt-12 text-xl md:text-2xl tracking-wide">
                Check out this month's featured categores. Each offering guidance and inspiration for your journey this February.
              </p>
            </motion.div>

            <div className="flex flex-col items-center space-y-20 text-right">
              {[
                { link: "/poses/benefit/improve posture", text: "Improve Posture" },
                { link: "/poses/benefit/build strength", text: "Build Strength" },
                { link: "/poses/benefit/restore energy", text: "Restore Energy" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 1 } } }}
                >
                  <Link 
                    to={item.link} 
                    className="relative flex items-center justify-center w-[360px] h-[200px] text-lg font-medium uppercase tracking-wider rounded border border-moss transition-all duration-300 hover:scale-105 hover:bg-moss hover:text-white"
                  >
                    <span className="absolute inset-0 flex items-center justify-center">
                      {item.text}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Featured Poses */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: false, amount: 0.2 }} 
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.3 } } }}
        >
          <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-48 items-center py-48">
            <div className="space-y-20 text-left">
              {[
                { link: "/poses/Downward-Facing Dog", text: "Downward-Facing Dog" },
                { link: "/poses/Triangle Pose", text: "Triangle Pose" },
                { link: "/poses/Bridge Pose", text: "Bridge Pose" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 1 } } }}
                >
                  <Link 
                    to={item.link} 
                    className="relative flex items-center justify-center w-[360px] h-[200px] text-lg font-medium uppercase tracking-wider rounded border border-moss transition-all duration-300 hover:scale-105 hover:bg-moss hover:text-white"
                  >
                    <span className="absolute inset-0 flex items-center justify-center">
                      {item.text}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div 
              variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 1 } } }}
              className="text-center md:text-right mx-12 md:mx-0"
            >
              <h2 className="text-5xl md:text-7xl py-12">
                Featured Poses
              </h2>
              <p className="mt-12 text-xl md:text-2xl tracking-wide">
                This month's featured poses are here.
                Learn proper alignment and refine your practice with these foundational poses.
              </p>
            </motion.div>
          </div>
        </motion.div>


      {/* Newsletter */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: false, amount: 0.2 }} 
        transition={{ duration: 1 }}
        className="py-48 flex flex-col items-center text-center"
      >
        <h2 className="text-[5vw] leading-[1.1] tracking-tight uppercase max-w-4xl">
          Read Our Column
        </h2>

        <p className="mt-16 text-2xl max-w-3xl leading-relaxed tracking-wide opacity-80">
          Discover new insights, tips, and stories about yoga and mindfulness every month.
        </p>

        <p className="mt-4 text-lg max-w-xl leading-relaxed opacity-60">
        Read our latest articles and deepen your practice.
        </p>

        <div className="mt-20">
          <Link
            to="/newsletter" 
            className="flex items-center justify-center px-12 py-2 rounded font-medium uppercase tracking-wider border border-moss transition-all duration-300 hover:scale-105 hover:bg-moss hover:text-white"
          >
            <span>
              Read Now
            </span>
          </Link>
        </div>
        </motion.div>
        
                {/* Call To Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: false, amount: 0.2 }} 
          transition={{ duration: 1 }}
          className="relative py-40 text-center flex flex-col items-center"
        >
          <h2 className="text-5xl md:text-7xl py-12">
            Start Your Practice
          </h2>

          <p className="mt-10 text-xl md:text-2xl max-w-2xl text-opacity-80 tracking-wide italic">
            Strengthen your body. Still your mind. Move with purpose. 
          </p>

          <div className="mt-20 flex flex-col md:flex-row items-center justify-center gap-8">
            {[
              { link: "/poses", text: "Browse Poses" },
              { link: "/what-is-yoga/beginners-guide", text: "Learn More" },
            ].map((item, index) => (
              <Link 
                key={index}
                to={item.link} 
                className="relative flex items-center justify-center w-[300px] h-[100px] text-xl rounded font-medium uppercase tracking-wider border border-moss transition-all duration-300 hover:scale-105 hover:bg-moss hover:text-white"
              >
                <span className="absolute inset-0 flex items-center justify-center">
                  {item.text}
                </span>
              </Link>
            ))}
          </div>
        </motion.div>

      </div>
    </>
  );
};

export default Home;