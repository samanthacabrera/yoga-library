import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Hero = () => {
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
        {/* Hero Section */}
        <div className="grid md:grid-cols-2 h-[80vh] items-center border-b-8 border-moss pb-12 text-center md:text-left">
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

        {/* About Section */}
        <div className="grid md:grid-cols-2 items-start pt-24 text-center md:text-right border-b-8 border-moss pb-52">
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

        {/* Featured Categories */}
        <div className="grid md:grid-cols-2 gap-32 items-center py-32">
          <div>
            <h2 className="heading text-3xl md:text-5xl">Featured Categories</h2>
            <p className="mt-6 text-lg md:text-xl max-w-md">
              These curated selections offer guidance and inspiration for your journey this February.
            </p>
          </div>
          <div className="space-y-12">
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
        <div className="grid md:grid-cols-2 gap-32 items-center py-32 text-right">
          <div className="space-y-12">
            <Link to="/poses/gate-pose" className="block w-64 mx-auto p-4 bg-moss bg-opacity-20 hover:bg-opacity-30 hover:shadow transition-all duration-300 border border-moss rounded-2xl">
              <h3>Gate Pose</h3>
            </Link>
            <Link to="/poses/tree-pose" className="block w-64 mx-auto p-4 bg-moss bg-opacity-20 hover:bg-opacity-30 hover:shadow transition-all duration-300 border border-moss rounded-2xl">
              <h3>Tree Pose</h3>
            </Link>
            <Link to="/poses/warrior-ii" className="block w-64 mx-auto p-4 bg-moss bg-opacity-20 hover:bg-opacity-30 hover:shadow transition-all duration-300 border border-moss rounded-2xl">
              <h3>Warrior II</h3>
            </Link>
          </div>
          <div>
            <h2 className="heading text-3xl md:text-5xl text-right">Featured Poses</h2>
            <p className="mt-6 text-lg md:text-xl max-w-md ml-auto text-right">
              These essential poses offer a strong foundation for your yoga journey. Learn proper alignment, deepen your awareness, and refine your practice.
            </p>
          </div>
        </div>

      {/* Call To Action */}
      <div className="border-t-8 border-moss py-32 text-center">
        <h2 className="heading text-3xl md:text-5xl uppercase tracking-tight">
          Start Your Practice
        </h2>
        <p className="mt-8 text-lg md:text-xl max-w-lg mx-auto leading-relaxed">
          Build strength. Find balance. Move with intention. 
          <br /> Your yoga journey begins here.
        </p>
        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6">
          <a 
            href="/poses" 
            className="px-6 py-3 border border-charcoal rounded text-charcoal text-lg lowercase tracking-wide transition hover:bg-moss hover:text-white"
          >
            Browse Poses
          </a>
          <a 
            href="/what-is-yoga/beginners-guide" 
            className="px-6 py-3 border border-charcoal rounded text-charcoal text-lg lowercase tracking-wide transition hover:bg-moss hover:text-white"
          >
            Learn More
          </a>
        </div>
      </div>

      </div>
    </>
  );
};

export default Hero;
