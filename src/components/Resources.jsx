import React from "react";
import { Link } from "react-router-dom";

const Resources = () => {
    return (
        <div className="flex flex-col min-h-screen w-full max-w-3xl space-y-12 px-8 py-4 mx-auto">
            <div className="mb-8">
                <h1 className="heading text-2xl lg:text-4xl">Resources</h1>
                <p className="tracking-wide">
                    Handpicked tutorials and articles to deepen your yoga journey. Whether you're refining your technique, discovering new practices, or finding the perfect gear, our resources are here to support and inspire your growth every step of the way.
                </p>
            </div>
            
            <div className="w-full max-w-2xl">
                <h2 className="text-2xl tracking-wide">Yoga Tutorials</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                    <Link to="https://www.youtube.com/c/yogawithadriene" target="_blank" rel="noopener noreferrer" className="bg-white border border-moss rounded-lg shadow-lg p-4 hover:bg-gray-50 transition-all duration-300">
                        <div className="font-medium">Yoga with Adriene</div>
                        <p className="text-sm">Inclusive, beginner-friendly practices for every level.</p>
                    </Link>
                    <Link to="https://www.youtube.com/c/breatheandflow" target="_blank" rel="noopener noreferrer" className="bg-white border border-moss rounded-lg shadow-lg p-4 hover:bg-gray-50 transition-all duration-300">
                        <div className="font-medium">Breathe and Flow</div>
                        <p className="text-sm">Dynamic flows and strength-building sequences.</p>
                    </Link>
                </div>
            </div>

            <div className="w-full max-w-2xl">
                <h2 className="text-2xl tracking-wide">Articles & Blogs</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                    <Link to="https://www.yogajournal.com/" target="_blank" rel="noopener noreferrer" className="bg-white border border-moss rounded-lg shadow-lg p-4 hover:bg-gray-50 transition-all duration-300">
                        <div className="font-medium">Yoga Journal</div>
                        <p className="text-sm">In-depth insights into yoga philosophy, poses, and lifestyle.</p>
                    </Link>
                    <Link to="https://www.ekhartyoga.com/articles/browse_all" target="_blank" rel="noopener noreferrer" className="bg-white border border-moss rounded-lg shadow-lg p-4 hover:bg-gray-50 transition-all duration-300">
                        <div className="font-medium">EkhartYoga</div>
                        <p className="text-sm">Guides and resources on meditation, wellbeing, and more.</p>
                    </Link>
                </div>
            </div>

            <div className="w-full max-w-2xl">
                <h2 className="text-2xl tracking-wide">Meditation Guides</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                    <Link to="https://www.calm.com/" target="_blank" rel="noopener noreferrer" className="bg-white border border-moss rounded-lg shadow-lg p-4 hover:bg-gray-50 transition-all duration-300">
                        <div className="font-medium">Calm</div>
                        <p className="text-sm">Meditations, sleep stories, and breathing exercises to promote relaxation.</p>
                    </Link>
                    <Link to="https://insighttimer.com/" target="_blank" rel="noopener noreferrer" className="bg-white border border-moss rounded-lg shadow-lg p-4 hover:bg-gray-50 transition-all duration-300">
                        <div className="font-medium">Insight Timer</div>
                        <p className="text-sm">Free guided meditations from experienced teachers around the world.</p>
                    </Link>
                </div>
            </div>

            <div className="w-full max-w-2xl">
                <h2 className="text-2xl tracking-wide">Yoga Accessories</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                    <Link to="https://www.aloyoga.com/products/warrior-mat" target="_blank" rel="noopener noreferrer" className="bg-white border border-moss rounded-lg shadow-lg p-4 hover:bg-gray-50 transition-all duration-300">
                        <div className="font-medium">Alo Yoga Warrior Mat</div>
                        <p className="text-sm">Durable, non-slip, eco-friendly mat with a smooth, supportive surface.</p>
                    </Link>
                    <Link to="https://www.manduka.com/collections/yoga-mats-pro-series/products/prolite-yoga-mat" target="_blank" rel="noopener noreferrer" className="bg-white border border-moss rounded-lg shadow-lg p-4 hover:bg-gray-50 transition-all duration-300">
                        <div className="font-medium">Manduka ProLite Mat</div>
                        <p className="text-sm">High-performance, eco-conscious mat built to last.</p>
                    </Link>
                    <Link to="https://www.liforme.com/" target="_blank" rel="noopener noreferrer" className="bg-white border border-moss rounded-lg shadow-lg p-4 hover:bg-gray-50 transition-all duration-300">
                        <div className="font-medium">Liforme Yoga Mat</div>
                        <p className="text-sm">Eco-friendly, non-toxic mats with great grip and cushion.</p>
                    </Link>
                    <Link to="https://www.manduka.com/collections/equa-yoga-towels/products/equa-yoga-hand-towel" target="_blank" rel="noopener noreferrer" className="bg-white border border-moss rounded-lg shadow-lg p-4 hover:bg-gray-50 transition-all duration-300">
                        <div className="font-medium">eQua Yoga Hand Towel</div>
                        <p className="text-sm">Lightweight, quick-drying yoga towels that enhance your practice.</p>
                    </Link>
                    <Link to="https://yogo.net/?srsltid=AfmBOooZUmrXT8Nv6gQXNSTFF7Nh47w9J_l32GTyh8v0V39-n_Ln_Cy_" target="_blank" rel="noopener noreferrer" className="bg-white border border-moss rounded-lg shadow-lg p-4 hover:bg-gray-50 transition-all duration-300">
                        <div className="font-medium">Yogo Travel Mat</div>
                        <p className="text-sm">Portable, foldable yoga mat for on-the-go practice.</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Resources;
