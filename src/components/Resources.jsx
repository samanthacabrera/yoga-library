import React from "react";

const Resources = () => {
    return (
        <div className="flex flex-col p-8 space-y-8">
            <div>
            <h1 className="text-4xl mb-1">Resources</h1>
            <p className="max-w-lg leading-relaxed">
                Handpicked tutorials and articles to deepen your yoga journey. Explore, learn, and elevate your practice.
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
                        <a href="https://www.yogiapproved.com/" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-700 hover:text-black transition-colors">
                            YogiApproved
                        </a>
                        <p className="text-sm">Guides and resources for deepening your home practice.</p>
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

        </div>
    );
};

export default Resources;