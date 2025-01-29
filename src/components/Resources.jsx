import React from "react";

const Resources = () => {
    return (
        <div className="flex flex-col min-h-screen w-full max-w-3xl space-y-12 px-8 py-4 mx-auto">
            <div className="mb-8">
                <h1 className="text-2xl sm:text-3xl md:text-4xl text-center my-12">Resources</h1>
                <p>
                    Handpicked tutorials and articles to deepen your yoga journey. Whether you're refining your technique, discovering new practices, or finding the perfect gear, our resources are here to support and inspire your growth every step of the way.
                </p>
            </div>
            
            <div className="w-full max-w-2xl">
                <h2 className="text-2xl tracking-wide">Yoga Tutorials</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                    <div className="bg-white border border-moss rounded-lg shadow-lg p-4 hover:bg-gray-50 transition-all duration-300">
                        <a href="https://www.youtube.com/c/yogawithadriene" target="_blank" rel="noopener noreferrer" className="font-medium">
                            Yoga with Adriene
                        </a>
                        <p className="text-sm">Inclusive, beginner-friendly practices for every level.</p>
                    </div>
                    <div className="bg-white border border-moss rounded-lg shadow-lg p-4 hover:bg-gray-50 transition-all duration-300">
                        <a href="https://www.youtube.com/c/breatheandflow" target="_blank" rel="noopener noreferrer" className="font-medium">
                            Breathe and Flow
                        </a>
                        <p className="text-sm">Dynamic flows and strength-building sequences.</p>
                    </div>
                </div>
            </div>

            <div className="w-full max-w-2xl">
                <h2 className="text-2xl tracking-wide">Articles & Blogs</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                    <div className="bg-white border border-moss rounded-lg shadow-lg p-4 hover:bg-gray-50 transition-all duration-300">
                        <a href="https://www.yogajournal.com/" target="_blank" rel="noopener noreferrer" className="font-medium">
                            Yoga Journal
                        </a>
                        <p className="text-sm">In-depth insights into yoga philosophy, poses, and lifestyle.</p>
                    </div>
                    <div className="bg-white border border-moss rounded-lg shadow-lg p-4 hover:bg-gray-50 transition-all duration-300">
                        <a href="https://www.ekhartyoga.com/articles/browse_all" target="_blank" rel="noopener noreferrer" className="font-medium">
                            EkhartYoga
                        </a>
                        <p className="text-sm">Guides and resources on meditation, wellbeing, and more.</p>
                    </div>
                </div>
            </div>

            <div className="w-full max-w-2xl">
                <h2 className="text-2xl tracking-wide">Meditation Guides</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                    <div className="bg-white border border-moss rounded-lg shadow-lg p-4 hover:bg-gray-50 transition-all duration-300">
                        <a href="https://www.calm.com/" target="_blank" rel="noopener noreferrer" className="font-medium">
                            Calm
                        </a>
                        <p className="text-sm">Meditations, sleep stories, and breathing exercises to promote relaxation.</p>
                    </div>
                    <div className="bg-white border border-moss rounded-lg shadow-lg p-4 hover:bg-gray-50 transition-all duration-300">
                        <a href="https://insighttimer.com/" target="_blank" rel="noopener noreferrer" className="font-medium">
                            Insight Timer
                        </a>
                        <p className="text-sm">Free guided meditations from experienced teachers around the world.</p>
                    </div>
                </div>
            </div>

            <div className="w-full max-w-2xl">
                <h2 className="text-2xl tracking-wide">Yoga Accessories</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                    <div className="bg-white border border-moss rounded-lg shadow-lg p-4 hover:bg-gray-50 transition-all duration-300">
                        <a href="https://www.aloyoga.com/products/warrior-mat" target="_blank" rel="noopener noreferrer" className="font-medium">
                            Alo Yoga Warrior Mat
                        </a>
                        <p className="text-sm">Durable, non-slip, eco-friendly mat with a smooth, supportive surface.</p>
                    </div>
                    <div className="bg-white border border-moss rounded-lg shadow-lg p-4 hover:bg-gray-50 transition-all duration-300">
                        <a href="https://www.manduka.com/collections/yoga-mats-pro-series/products/prolite-yoga-mat" target="_blank" rel="noopener noreferrer" className="font-medium">
                            Manduka ProLite Mat
                        </a>
                        <p className="text-sm">High-performance, eco-conscious mat built to last.</p>
                    </div>
                    <div className="bg-white border border-moss rounded-lg shadow-lg p-4 hover:bg-gray-50 transition-all duration-300">
                        <a href="https://www.liforme.com/" target="_blank" rel="noopener noreferrer" className="font-medium">
                            Liforme Yoga Mat
                        </a>
                        <p className="text-sm">Eco-friendly, non-toxic mats with great grip and cushion.</p>
                    </div>
                    <div className="bg-white border border-moss rounded-lg shadow-lg p-4 hover:bg-gray-50 transition-all duration-300">
                        <a href="https://www.manduka.com/collections/equa-yoga-towels/products/equa-yoga-hand-towel" target="_blank" rel="noopener noreferrer" className="font-medium">
                            eQua Yoga Hand Towel
                        </a>
                        <p className="text-sm">Lightweight, quick-drying yoga towels that enhance your practice.</p>
                    </div>
                    <div className="bg-white border border-moss rounded-lg shadow-lg p-4 hover:bg-gray-50 transition-all duration-300">
                        <a href="https://yogo.net/?srsltid=AfmBOooZUmrXT8Nv6gQXNSTFF7Nh47w9J_l32GTyh8v0V39-n_Ln_Cy_" target="_blank" rel="noopener noreferrer" className="font-medium">
                            Yogo Travel Mat
                        </a>
                        <p className="text-sm">Portable, foldable yoga mat for on-the-go practice.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resources;
