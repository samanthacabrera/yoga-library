import { Parallax } from 'react-parallax';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
// Photo by <a href="https://unsplash.com/@nkuutz?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Eneko Uruñuela</a> on <a href="https://unsplash.com/photos/woman-stretching-on-mountain-top-during-sunrise-I2YSmEUAgDY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
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
   
      <div className="min-h-screen max-w-4xl mx-4 md:mx-auto grid gap-y-20 text-charcoal">
        {/* Hero */}
        <div className="grid md:grid-cols-2 h-[80vh] items-center pb-12 text-center md:text-left">
          <div>
            <h1 className="heading text-4xl md:text-8xl">
              Learn <br className="hidden md:block" /> Yoga <br className="hidden md:block" /> Online
            </h1>
            <p className="mt-8 mx-8 md:mx-0 text-lg md:text-xl tracking-wide">
                A simple, intuitive platform for deepening your yoga practice. Whether you're a beginner or an experienced yogi, explore essential poses with clear instructions and in-depth guidance.
            </p>
          </div>
          <div className="hidden md:block"></div>
        </div>

        
        {/* https://unsplash.com/photos/woman-stretching-on-mountain-top-during-sunrise-I2YSmEUAgDY */}
        <Parallax 
          bgImage="bg1.jpg" 
          bgImageAlt="woman in tree pose on top of mountain" 
          strength={500} 
          className="w-full h-[100vh]"
          bgImageStyle={{ objectFit: "cover", objectPosition: "center" }}
        >
        </Parallax>

        {/* About */}
        <div className="grid md:grid-cols-2 items-start pt-24 text-center md:text-right pb-52">
          <div className="hidden md:block"></div>
          <div>
            <h2 className="heading text-3xl md:text-5xl">
              About
            </h2>
            <div className="mt-8 mx-8 md:mx-0 space-y-12 text-lg md:text-xl tracking-wide">
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
                As someone who loves to build and improve things, I’m always working to make this site better. If you have any feedback or suggestions, feel free to email <span className="italic">samantha.n.cabrera@gmail.com</span>. Your input helps me make the site better for you and others.
              </p>
              <p>
                Thank you for being part of this community. I hope that this website can be a source of guidance on your own yoga journey.
              </p>
            </div>
          </div>
        </div>

        {/* Photo by <a href="https://unsplash.com/@jeremybishop?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Jeremy Bishop</a> on <a href="https://unsplash.com/photos/calm-water-QtIXL7C4bB0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a> */}
        <Parallax 
          bgImage="bg2.jpg" 
          bgImageAlt="zoomed in photo of ocean waves at sunset" 
          strength={500} 
          className="w-full h-[100vh]"
          bgImageStyle={{ objectFit: "cover", objectPosition: "center" }}
        >
        </Parallax>

        {/* Call To Action */}
        <div className="py-32 text-center">
          <h2 className="heading text-3xl md:text-5xl">
            Start Your Practice
          </h2>
          <p className="mt-8 text-lg md:text-xl max-w-lg mx-auto tracking-wider">
            Strengthen your body. Still your mind. Move with purpose. 
          </p>
          <p className="mt-4 text-lg md:text-xl max-w-lg mx-auto tracking-wide">Your yoga journey starts now.</p>
          <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6">
            <a 
              href="/poses" 
              className="px-6 py-2 bg-moss bg-opacity-20 hover:bg-opacity-30 hover:shadow transition-all duration-300 border border-moss rounded-2xl"
            >
              Browse Poses
            </a>
            <a 
              href="/what-is-yoga/beginners-guide" 
              className="px-6 py-2 bg-moss bg-opacity-20 hover:bg-opacity-30 hover:shadow transition-all duration-300 border border-moss rounded-2xl"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Photo by <a href="https://unsplash.com/@jhonkasalo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Joakim Honkasalo</a> on <a href="https://unsplash.com/photos/sunset-over-the-horizon-ufQ-HKgShCo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a> */}
        <Parallax 
          bgImage="bg3.avif" 
          bgImageAlt="photo of sunrise behind mountains" 
          strength={500} 
          className="w-full h-[100vh]"
          bgImageStyle={{ objectFit: "cover", objectPosition: "center" }}
        >
        </Parallax>

        {/* Featured Categories */}
        <div className="grid md:grid-cols-2 gap-32 items-center py-32">
          <div className="text-center md:text-left">
            <h2 className="heading text-3xl md:text-5xl">Featured Categories</h2>
            <p className="mt-6 md:text-xl mx-12 md:mx-0">
              These curated selections offer guidance and inspiration for your journey this February.
            </p>
          </div>
          <div className="space-y-12 text-center">
            <Link to="/poses/benefit/improve posture" className="block w-64 mx-auto p-4 bg-moss bg-opacity-20 hover:bg-opacity-30 hover:shadow transition-all duration-300 border border-moss rounded-2xl">
              <h3>Improve Posture</h3>
            </Link>
            <Link to="/poses/benefit/build strength" className="block w-64 mx-auto p-4 bg-moss bg-opacity-20 hover:bg-opacity-30 hover:shadow transition-all duration-300 border border-moss rounded-2xl">
              <h3>Build Strength</h3>
            </Link>
            <Link to="/poses/benefit/restore energy" className="block w-64 mx-auto p-4 bg-moss bg-opacity-20 hover:bg-opacity-30 hover:shadow transition-all duration-300 border border-moss rounded-2xl">
              <h3>Restore Energy</h3>
            </Link>
          </div>
        </div>

        {/* Featured Poses */}
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-32 items-center py-32">
          <div className="space-y-12 text-center">
            <Link to="/poses/Downward-Facing Dog" className="block w-64 mx-auto p-4 bg-moss bg-opacity-20 hover:bg-opacity-30 hover:shadow transition-all duration-300 border border-moss rounded-2xl">
              <h3>Downward-Facing Dog</h3>
            </Link>
            <Link to="/poses/Triangle Pose" className="block w-64 mx-auto p-4 bg-moss bg-opacity-20 hover:bg-opacity-30 hover:shadow transition-all duration-300 border border-moss rounded-2xl">
              <h3>Triangle Pose</h3>
            </Link>
            <Link to="/poses/warrior-ii" className="block w-64 mx-auto p-4 bg-moss bg-opacity-20 hover:bg-opacity-30 hover:shadow transition-all duration-300 border border-moss rounded-2xl">
              <h3>Bridge Pose</h3>
            </Link>
          </div>
          <div className="text-center md:text-right">
            <h2 className="heading text-3xl md:text-5xl">Featured Poses</h2>
            <p className="mt-6 text-lg md:text-xl mx-12 md:mx-0">
              This month's featured poses are here. <br/> Learn proper alignment, deepen your awareness, and refine your practice with these foundational poses.
            </p>
          </div>
        </div>

        {/* Learn More */}
        <div className="border-t-8 border-moss py-32 text-center">
          <h2 className="heading text-3xl md:text-5xl">
          Deepen Your Understanding
          </h2>
          <p className="mt-6 text-lg md:text-xl max-w-lg mx-auto tracking-wide">
            Dive deeper into the history and philosophy of yoga with these essential guides.
          </p>

          <div className="mt-12 grid md:grid-cols-2 gap-12 max-w-4xl mx-auto text-left">
            <Link to="/what-is-yoga/beginners-guide" className="block p-6 bg-moss bg-opacity-20 hover:bg-opacity-30 hover:shadow transition-all duration-300 border border-moss rounded-2xl">
              <h3 className="text-xl font-medium">Start Here: Beginner’s Guide</h3>
              <p className="mt-2 text-sm">
                New to yoga? This guide covers the fundamentals—what yoga is, how to begin, and key concepts to help you get started.
              </p>
            </Link>

            <Link to="/what-is-yoga/overview" className="block p-6 bg-moss bg-opacity-20 hover:bg-opacity-30 hover:shadow transition-all duration-300 border border-moss rounded-2xl">
              <h3 className="text-xl font-medium">What Is Yoga?</h3>
              <p className="mt-2 text-sm">
                Discover the history, philosophy, and purpose of yoga. Learn how this ancient practice continues to evolve today.
              </p>
            </Link>

            <Link to="/what-is-yoga/eight-limbed-path" className="block p-6 bg-moss bg-opacity-20 hover:bg-opacity-30 hover:shadow transition-all duration-300 border border-moss rounded-2xl">
              <h3 className="text-xl font-medium">The 8-Limbed Path</h3>
              <p className="mt-2 text-sm">
                Explore the eight limbs of yoga, from ethical principles and breath control to meditation and self-realization.
              </p>
            </Link>

            <Link to="/what-is-yoga/seven-chakras" className="block p-6 bg-moss bg-opacity-20 hover:bg-opacity-30 hover:shadow transition-all duration-300 border border-moss rounded-2xl">
              <h3 className="text-xl font-medium">The 7 Chakras</h3>
              <p className="mt-2 text-sm">
                Understand the seven energy centers of the body and how they influence your physical, emotional, and spiritual well-being.
              </p>
            </Link>

            <Link to="/what-is-yoga/three-gunas" className="block p-6 bg-moss bg-opacity-20 hover:bg-opacity-30 hover:shadow transition-all duration-300 border border-moss rounded-2xl">
              <h3 className="text-xl font-medium">The 3 Gunas</h3>
              <p className="mt-2 text-sm">
                Learn about the three fundamental qualities of nature—Sattva, Rajas, and Tamas—and how they shape your actions and mindset.
              </p>
            </Link>

            <Link to="/resources" className="block p-6 bg-moss bg-opacity-20 hover:bg-opacity-30 hover:shadow transition-all duration-300 border border-moss rounded-2xl">
              <h3 className="text-xl font-medium">Resources</h3>
              <p className="mt-2 text-sm">
                Find recommended books, tools, and external guides to deepen your yoga knowledge and practice.
              </p>
            </Link>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t-8 border-moss py-32 text-center">
          <h2 className="heading text-3xl md:text-5xl">Stay Connected</h2>
          <p className="mt-8 text-lg md:text-xl max-w-lg mx-auto tracking-wider">
            Discover new insights, tips, and stories about yoga and mindfulness every month. 
          </p>
          <p className="mt-4 text-lg md:text-xl max-w-lg mx-auto tracking-wide">
            Read our latest articles and deepen your practice.
          </p>
          <div className="mt-12">
            <Link
              to="/newsletter" 
              className="px-6 py-2 bg-moss bg-opacity-20 hover:bg-opacity-30 hover:shadow transition-all duration-300 border border-moss rounded-2xl"
            >
              Read Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;


      