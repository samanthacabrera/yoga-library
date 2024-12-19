import React from 'react';

const Hero = () => {
  return (
    <div className="flex flex-col space-y-80 w-full max-w-2xl">
      <div className="flex flex-col items-center h-screen lg:translate-x-1/2 space-y-4 pt-20">
          <p>Welcome to</p>
          <h1 className="text-2xl lg:text-4xl">Yoga Pose Library</h1>
          <p className="w-2/3 text-justify">Our goal is to provide a simple and accessible platform for anyone looking to deepen their understanding of yoga. Whether you're a beginner or an experienced practitioner, this website is designed to help you explore a wide variety of poses, each with clear instructions and detailed explanations. We believe yoga is more than just a physical practice—it's a journey of self-awareness, balance, and growth. We aim to make yoga practices easier to understand and incorporate into your life, fostering mindfulness, flexibility, and well-being for all who choose to embark on this path.</p>
      </div>

    <div className="flex flex-col items-center text-left lg:translate-x-1/2 space-y-12 pb-80">
        <h2 className="text-2xl">About Us</h2>
        <div className="w-2/3 text-justify space-y-12">
        <p>
          This website began with a simple, personal journey. In 2020, life felt particularly overwhelming. The uncertainty and stress of daily life led me to seek something that could offer me a bit of peace. I turned to yoga, unsure of what to expect but hopeful it would help. 
        </p>
        <p>
          Over time, yoga became not just a physical practice, but a path of personal growth. The more I practiced, the more I wanted to learn—about different styles, the philosophy behind yoga, and even how mindfulness could be integrated into my everyday life. As yoga had such a positive impact on my life, I wanted to offer a resource that could support others on their own journeys.
        </p>
        <p>
          This website is more than just a collection of yoga poses. It’s a reflection of my journey, and a way to share what yoga has given me. My goal was to create a space that’s simple and welcoming, where people—whether you’re just starting out or looking to deepen your practice—can find helpful resources and support. I’ve worked hard to ensure that the platform is easy to use, with the hope that it can be a helpful guide for anyone looking to explore yoga.
        </p>
        <p>
          As someone who loves to build and improve things, I’m always working to make this site better. If you have any feedback or suggestions, I’d love to hear from you. Your input will help me continue to improve and refine the website, so it can serve you and others in the best way possible.
        </p>
        <p>
          Thank you for being part of this community. I hope that this website can be a source of inspiration, support, and guidance on your own yoga journey.
        </p>
        </div>
      </div>



    </div>
  );
};

export default Hero;
