import React from 'react';
import { Helmet } from 'react-helmet';

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

      <div className="min-h-screen max-w-4xl mx-auto grid gap-y-20 text-charcoal">
        {/* Hero Section */}
        <div className="grid md:grid-cols-2 h-[80vh] items-center border-b-8 border-moss pb-12 text-center md:text-left">
          <div>
            <h1 className="heading text-4xl md:text-8xl">
              Learn <br className="hidden md:block" /> Yoga <br className="hidden md:block" /> Online
            </h1>
            <p className="mt-8 mx-8 md:mx-0 text-lg md:text-xl tracking-wide">
                Our mission is to offer an easy-to-use platform for anyone wanting to deepen their yoga practice. Whether you're just starting out or have years of experience, our site is designed to guide you through essential yoga poses, providing clear instructions and comprehensive explanations.
            </p>
          </div>
          <div className="hidden md:block"></div>
        </div>

        {/* About Section */}
        <div className="grid md:grid-cols-2 items-start pt-12 text-center md:text-right">
          <div className="hidden md:block"></div>
          <div>
            <h2 className="heading text-3xl md:text-5xl">
              About Us
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
      </div>
    </>
  );
};

export default Hero;
