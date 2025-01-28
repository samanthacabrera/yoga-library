import React from "react";

const Resources = () => {
    return (
        <div className="flex flex-col min-h-screen w-full max-w-3xl space-y-8 px-8 py-4 mx-auto">
            <div className="mb-8">
                <h1 className="text-2xl sm:text-3xl md:text-4xl text-center my-12">Resources</h1>
                <p>
                    Handpicked tutorials and articles to deepen your yoga journey. Whether you're refining your technique, discovering new practices, or finding the perfect gear, our resources are here to support and inspire your growth every step of the way.
                </p>
            </div>
            
            <div className="w-full max-w-2xl">
                <h2 className="text-xl mb-1 font-medium">Yoga Tutorials</h2>
                <ul className="space-y-5">
                    <li className="flex flex-col space-y-1">
                        <a href="https://www.youtube.com/c/yogawithadriene" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-700 hover:text-black transition-colors">
                            Yoga with Adriene
                        </a>
                        <p className="text-sm">Inclusive, beginner-friendly practices for every level.</p>
                    </li>
                    <li className="flex flex-col space-y-1">
                        <a href="https://www.youtube.com/c/breatheandflow" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-700 hover:text-black transition-colors">
                            Breathe and Flow
                        </a>
                        <p className="text-sm">Dynamic flows and strength-building sequences.</p>
                    </li>
                </ul>
            </div>

            <div className="w-full max-w-2xl">
                <h2 className="text-xl mb-1 font-medium">Articles & Blogs</h2>
                <ul className="space-y-5">
                    <li className="flex flex-col space-y-1">
                        <a href="https://www.yogajournal.com/" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-700 hover:text-black transition-colors">
                            Yoga Journal
                        </a>
                        <p className="text-sm">In-depth insights into yoga philosophy, poses, and lifestyle.</p>
                    </li>
                    <li className="flex flex-col space-y-1">
                        <a href="https://www.ekhartyoga.com/articles/browse_all" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-700 hover:text-black transition-colors">
                            EkhartYoga
                        </a>
                        <p className="text-sm">Guides and resources on meditation, wellbeing, and more.</p>
                    </li>
                </ul>
            </div>

            <div className="w-full max-w-2xl">
                <h2 className="text-xl mb-1 font-medium">Meditation Guides</h2>
                <ul className="space-y-5">
                    <li className="flex flex-col space-y-1">
                        <a href="https://www.calm.com/" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-700 hover:text-black transition-colors">
                            Calm
                        </a>
                        <p className="text-sm">Meditations, sleep stories, and breathing exercises to promote relaxation.</p>
                    </li>
                    <li className="flex flex-col space-y-1">
                        <a href="https://insighttimer.com/" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-700 hover:text-black transition-colors">
                            Insight Timer
                        </a>
                        <p className="text-sm">Free guided meditations from experienced teachers around the world.</p>
                    </li>
                </ul>
            </div>

            <div className="w-full max-w-2xl">
                <h2 className="text-xl mb-1 font-medium">Yoga Accessories</h2>
                <ul className="space-y-5">
                    <li className="flex flex-col space-y-1">
                        <a href="https://www.aloyoga.com/products/warrior-mat" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-700 hover:text-black transition-colors">
                            Alo Yoga Warrior Mat
                        </a>
                        <p className="text-sm">Durable, non-slip, eco-friendly mat with a smooth, supportive surface.</p>
                    </li>
                    <li className="flex flex-col space-y-1">
                        <a href="https://www.manduka.com/collections/yoga-mats-pro-series/products/prolite-yoga-mat" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-700 hover:text-black transition-colors">
                            Manduka ProLite Mat
                        </a>
                        <p className="text-sm">High-performance, eco-conscious mat built to last.</p>
                    </li>
                    <li className="flex flex-col space-y-1">
                        <a href="https://www.liforme.com/" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-700 hover:text-black transition-colors">
                            Liforme Yoga Mat
                        </a>
                        <p className="text-sm">Eco-friendly, non-toxic mats with great grip and cushion.</p>
                    </li>
                    <li className="flex flex-col space-y-1">
                        <a href="https://www.manduka.com/collections/equa-yoga-towels/products/equa-yoga-hand-towel" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-700 hover:text-black transition-colors">
                            eQua Yoga Hand Towel
                        </a>
                        <p className="text-sm">Lightweight, quick-drying yoga towels that enhance your practice.</p>
                    </li>
                    <li className="flex flex-col space-y-1">
                        <a href="https://yogo.net/?srsltid=AfmBOooZUmrXT8Nv6gQXNSTFF7Nh47w9J_l32GTyh8v0V39-n_Ln_Cy_" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-700 hover:text-black transition-colors">
                            Yogo Travel Mat
                        </a>
                        <p className="text-sm">Portable, foldable yoga mat for on-the-go practice.</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Resources;
