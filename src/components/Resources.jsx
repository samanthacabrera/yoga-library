import React from "react";
import { Link } from "react-router-dom";


const ResourceCard = ({ to, title, description }) => (
    <Link to={to} target="_blank" rel="noopener noreferrer" className="bg-transparent h-fit md:h-[150px] p-6 border border-moss text-left rounded-t-xl shadow hover:scale-105 transition duration-500 ease-in-out">
        <div className="font-medium tracking-wider">{title}</div>
        <p className="text-sm leading-loose">{description}</p>
    </Link>
);

const ResourceSection = ({ title, links }) => (
    <div className="w-full max-w-2xl">
        <h2 className="text-2xl text-charcoal tracking-wider font-medium">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-8">
            {links.map((link, index) => (
                <ResourceCard key={index} {...link} />
            ))}
        </div>
    </div>
);

const Resources = () => {

    const resourceCategories = [
        {
            title: "Yoga Tutorials",
            links: [
                { to: "https://www.youtube.com/c/yogawithadriene", title: "Yoga with Adriene", description: "Inclusive, beginner-friendly practices for every level." },
                { to: "https://www.youtube.com/c/breatheandflow", title: "Breathe and Flow", description: "Dynamic flows and strength-building sequences." }
            ]
        },
        {
            title: "Articles & Blogs",
            links: [
                { to: "https://www.yogajournal.com/", title: "Yoga Journal", description: "In-depth insights into yoga philosophy, poses, and lifestyle." },
                { to: "https://www.ekhartyoga.com/articles/browse_all", title: "EkhartYoga", description: "Guides and resources on meditation, wellbeing, and more." }
            ]
        },
        {
            title: "Meditation Guides",
            links: [
                { to: "https://www.calm.com/", title: "Calm", description: "Meditations, sleep stories, and breathing exercises to promote relaxation." },
                { to: "https://insighttimer.com/", title: "Insight Timer", description: "Free guided meditations from experienced teachers around the world." }
            ]
        },
        {
            title: "Yoga Accessories",
            links: [
                { to: "https://www.aloyoga.com/products/warrior-mat", title: "Alo Yoga Warrior Mat", description: "Durable, non-slip, eco-friendly mat with a smooth, supportive surface." },
                { to: "https://www.manduka.com/collections/yoga-mats-pro-series/products/prolite-yoga-mat", title: "Manduka ProLite Mat", description: "High-performance, eco-conscious mat built to last." },
                { to: "https://www.manduka.com/collections/equa-yoga-towels/products/equa-yoga-hand-towel", title: "Manduka eQua Yoga Hand Towel", description: "Lightweight, quick-drying yoga towels that enhance your practice." },
                { to: "https://www.manduka.com/collections/yoga-mat-bags-carriers/products/go-play-4-0-mat-carrier?variant=23736530960442", title: "Manduka Go Play Mat Carrier", description: "A lightweight yoga mat sling with external storage pockets for practice essentials." },
                { to: "https://yogo.net/?srsltid=AfmBOooZUmrXT8Nv6gQXNSTFF7Nh47w9J_l32GTyh8v0V39-n_Ln_Cy_", title: "Yogo Travel Mat", description: "Portable, foldable yoga mat for on-the-go practice." }
            ]
        }
    ];

    return (
        <div className="flex flex-col min-h-screen w-full max-w-3xl space-y-12 px-8 py-4 mx-auto">
            <div className="mb-8">
                <h1 className="heading text-center my-12 lg:mb-20 text-4xl lg:text-8xl">Resources</h1>
                <p className="tracking-wide">
                    Handpicked tutorials and articles to deepen your yoga journey. Whether you're refining your technique, discovering new practices, or finding the perfect gear, our resources are here to support and inspire your growth every step of the way.
                </p>
            </div>

            {resourceCategories.map((category, index) => (
                <ResourceSection key={index} {...category} />
            ))}
        </div>
    );
};

export default Resources;
