import React, { useState } from "react";
import { Link } from "react-router-dom";

const ResourceLink = ({ to, title, description }) => (
  <li className="mb-4">
    <Link
      to={to}
      target="_blank"
      rel="noopener noreferrer"
      className="text-moss font-medium hover:underline"
      aria-label={`Visit ${title}`}
    >
      {title}
    </Link>
    {description && (
      <p className="text-gray-700 text-sm mt-1 leading-relaxed">{description}</p>
    )}
  </li>
);

const ResourceSection = ({ title, links }) => (
  <section className="w-full max-w-3xl mx-auto mb-12">
    <h2 className="text-2xl sm:text-3xl text-left mb-6">{title}</h2>
    <ul className="list-none pl-0">
      {links.map((link, index) => (
        <ResourceLink key={index} {...link} />
      ))}
    </ul>
  </section>
);

const Resources = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const resourceCategories = [
    {
      id: "tutorials",
      title: "Yoga Tutorials",
      links: [
        {
          to: "https://www.youtube.com/c/yogawithadriene",
          title: "Yoga with Adriene",
          description: "Inclusive, beginner-friendly practices for every level.",
        },
        {
          to: "https://www.youtube.com/@LEAPService",
          title: "LEAPService",
          description: "Team of professionals sharing simple, chair yoga routines.",
        },
      ],
    },
    {
      id: "meditation",
      title: "Meditation Guides",
      links: [
        {
          to: "https://www.calm.com/",
          title: "Calm",
          description: "Meditations, sleep stories, and breathing exercises to promote relaxation.",
        },
        {
          to: "https://insighttimer.com/",
          title: "Insight Timer",
          description: "Free guided meditations from experienced teachers around the world.",
        },
      ],
    },
    {
      id: "books",
      title: "Books",
      links: [
        {
          to: "https://www.amazon.com/Chair-Yoga-Seniors-Over-Intermediate/dp/B0CHL1CF47/ref=sr_1_2_sspa?crid=2LFWVAKHJ5U8P&dib=eyJ2IjoiMSJ9.icQhsAhhszTIRK-wqR6WXKQdkKf1Lt7dAIZgqjQZ9ma3gb_9h593P37pxzofllApVcS0-DYH3R9JsVP-to_pJHH077NbWAWE_G57fimlEDb6qeGfoGKBoJxQBgu3Luz-udB0desAyRofHplZsY9cU6U2WIzXbmDbd8q95sLBjpSitrItFfgImfrAvooHBqbPDVMpIhRnjX5hgjS19kxv8PewEwCJDYanhiTW8I7k5jL4mlAvpW4Eax3u75EHOxphrGU2aiUtodxTJ1c7jL5pZclTeThS80rDtVm-ICIyzAI.GRbwbeElFmp5Ype62nI7xeUDXKvEFaVkrbeZtWqIzF8&dib_tag=se&keywords=chair+yoga&qid=1760003285&s=books&sprefix=chair+yoga%2Cstripbooks%2C227&sr=1-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
          title: "Chair Yoga For Seniors Over 60: 28-Day Challenge by Robert H. Warren",
          description: "Gentle, safe yoga sequences for older adults.",
        },
        {
          to: "https://www.amazon.com/Chair-Yoga-Accessible-Sequences-Flexibility/dp/B09XRGHQNT/ref=sr_1_5?crid=2LFWVAKHJ5U8P&dib=eyJ2IjoiMSJ9.icQhsAhhszTIRK-wqR6WXKQdkKf1Lt7dAIZgqjQZ9ma3gb_9h593P37pxzofllApVcS0-DYH3R9JsVP-to_pJHH077NbWAWE_G57fimlEDb6qeGfoGKBoJxQBgu3Luz-udB0desAyRofHplZsY9cU6U2WIzXbmDbd8q95sLBjpSitrItFfgImfrAvooHBqbPDVMpIhRnjX5hgjS19kxv8PewEwCJDYanhiTW8I7k5jL4mlAvpW4Eax3u75EHOxphrGU2aiUtodxTJ1c7jL5pZclTeThS80rDtVm-ICIyzAI.GRbwbeElFmp5Ype62nI7xeUDXKvEFaVkrbeZtWqIzF8&dib_tag=se&keywords=chair+yoga&qid=1760003285&s=books&sprefix=chair+yoga%2Cstripbooks%2C227&sr=1-5",
          title: "Chair Yoga: Accessible Sequences to Build Strength, Flexibility, and Inner Calm by Christina D'Arrigo",
          description: "Step-by-step guidance for accessible chair yoga.",
        },
      ],
    },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveCategory(id);
    }
  };

  return (
    <div className="flex flex-col min-h-screen w-full max-w-4xl px-6 sm:px-12 py-12 mx-auto text-black">

      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl mb-4">Resources</h1>

        {/* Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {resourceCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => scrollToSection(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                activeCategory === category.id
                  ? "bg-moss text-white"
                  : "bg-gray-100 text-black hover:bg-gray-200"
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>
      </div>

      {/* Resource Sections */}
      <div className="space-y-16">
        {resourceCategories.map((category, index) => (
          <div key={index} id={category.id} className="scroll-mt-20">
            <ResourceSection {...category} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;
