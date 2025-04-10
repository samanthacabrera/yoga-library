import React, { useState } from "react";
import { Link } from "react-router-dom";

const ResourceCard = ({ to, title, description }) => (
  <Link 
    to={to} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="group bg-moss/10 h-auto p-4 sm:p-6 text-left rounded-t-xl shadow hover:shadow-lg hover:scale-105 transition duration-500 ease-in-out flex flex-col justify-between"
    aria-label={`Visit ${title}`}
  >
    <div className="font-medium tracking-wider group-hover:text-moss transition-colors duration-300">{title}</div>
    <p className="text-sm leading-loose mt-2">{description}</p>
  </Link>
);

const ResourceSection = ({ title, links }) => (
  <div className="w-full max-w-2xl">
    <h2 className="text-xl sm:text-2xl text-charcoal tracking-wider">{title}</h2>
    <div className="grid grid-cols-1 gap-4 sm:gap-6 my-4 sm:my-8">
      {links.map((link, index) => (
        <ResourceCard key={index} {...link} />
      ))}
    </div>
  </div>
);

const Resources = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const resourceCategories = [
    {
      id: "tutorials",
      title: "Yoga Tutorials",
      links: [
        { to: "https://www.youtube.com/c/yogawithadriene", title: "Yoga with Adriene", description: "Inclusive, beginner-friendly practices for every level." },
        { to: "https://www.youtube.com/c/breatheandflow", title: "Breathe and Flow", description: "Dynamic flows and strength-building sequences." }
      ]
    },
    {
      id: "articles",
      title: "Articles & Blogs",
      links: [
        { to: "https://www.yogajournal.com/", title: "Yoga Journal", description: "In-depth insights into yoga philosophy, poses, and lifestyle." },
        { to: "https://www.ekhartyoga.com/articles/browse_all", title: "EkhartYoga", description: "Guides and resources on meditation, wellbeing, and more." }
      ]
    },
    {
      id: "meditation",
      title: "Meditation Guides",
      links: [
        { to: "https://www.calm.com/", title: "Calm", description: "Meditations, sleep stories, and breathing exercises to promote relaxation." },
        { to: "https://insighttimer.com/", title: "Insight Timer", description: "Free guided meditations from experienced teachers around the world." }
      ]
    },
    {
      id: "accessories",
      title: "Yoga Accessories",
      links: [
        { to: "https://yarnsara-samanthacabreras-projects.vercel.app/", title: "Yarnsara Mat Strap", description: "100% upcycled & handcrafted yoga accessories." },
        { to: "https://www.aloyoga.com/products/warrior-mat", title: "Alo Yoga Warrior Mat", description: "Durable, non-slip, eco-friendly mat with a smooth, supportive surface." },
        { to: "https://amzn.to/4iDdAFT", title: "Manduka PRO Yoga Mat", description: "High-performance, eco-conscious mat built to last." },
        { to: "https://amzn.to/4iJYnlP", title: "Manduka Yogitoes Yoga Towel", description: "Lightweight, quick-drying yoga towels that enhance your practice." },
        { to: "https://amzn.to/4bJXQhA", title: "Manduka Go Play 3.0 Yoga Mat Bag", description: "A lightweight yoga mat sling with external storage pockets for practice essentials." },
        { to: "https://amzn.to/4iJYyO1", title: "Yogo Ultralight Folding Travel Yoga Mat", description: "Portable, foldable yoga mat for on-the-go practice." }
      ]
    }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveCategory(id);
    }
  };

  return (
    <div className="flex flex-col min-h-screen w-full max-w-3xl px-4 sm:px-8 py-4 my-12 sm:my-24 mx-auto">
      <div className="mb-8 sm:mb-12">
        <h1 className="text-center my-8 sm:my-12 text-3xl sm:text-4xl tracking-wide">Resources</h1>
        <p className="tracking-wide text-center max-w-2xl mx-auto text-sm sm:text-base">
          Handpicked tutorials and articles to deepen your yoga journey. Whether you're refining your technique, discovering new practices, or finding the perfect gear, our resources are here to support and inspire your growth every step of the way.
        </p>
        
        {/* Nav */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-6 sm:mt-8">
          {resourceCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => scrollToSection(category.id)}
              className={`px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm transition-all duration-300 ${
                activeCategory === category.id 
                  ? "bg-moss text-white" 
                  : "bg-moss bg-opacity-10 hover:bg-opacity-40"
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-12 sm:space-y-16">
        {resourceCategories.map((category, index) => (
          <div key={index} id={category.id} className="scroll-mt-16 sm:scroll-mt-20">
            <ResourceSection {...category} />
          </div>
        ))}
          
        <p className="py-8 sm:py-12 text-xs text-center tracking-wide opacity-70">
          As an Amazon Associate, I earn from qualifying purchases. This helps support the site at no extra cost to you.
        </p>
      </div>
      
      <div className="mt-16 sm:mt-24 border-t border-moss border-opacity-20 pt-16 sm:pt-40 text-center">
        <p className="max-w-md mx-auto leading-relaxed text-charcoal text-opacity-80 text-sm sm:text-base">
          Have a suggestion for our collection? I'm always looking to expand these resources 
          with valuable recommendations for the yoga community. {" "}
          <a 
            href="mailto:samantha.n.cabrera@gmail.com?subject=Resource Suggestion for Learn Yoga Online" 
            className="inline-block font-medium text-moss hover:underline transition-all duration-300"
          >
            Contact me
          </a>{" "}
          with your ideas.
        </p>
      </div>
    </div>
  );
};

export default Resources;