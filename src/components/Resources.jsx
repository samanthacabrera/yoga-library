import React from "react";

const Resources = () => {
    return (
        <div className="flex flex-col items-center p-8 space-y-12 text-gray-900">
            <h1 className="text-4xl tracking-wide text-black">Resources</h1>
            <p className="max-w-md text-center text-gray-700 leading-tight">
                A curated collection of tutorials, articles, and ways to support our yoga library. 
                Dive in, find something that resonates, and consider helping us grow this community.
            </p>

            {/* Tutorials Section */}
            <div className="w-full max-w-3xl">
                <h2 className="text-2xl mb-2 text-black uppercase">Yoga Tutorials</h2>
                <ul className="space-y-4 text-lg leading-snug">
                    <li>
                        <a
                            href=""
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black underline hover:no-underline"
                        >
                            SoCal Yogi
                        </a>
                        <p className="text-gray-600">Direct, accessible routines that balance traditional and modern yoga.</p>
                    </li>
                    <li>
                        <a
                            href="https://www.youtube.com/c/yogawithadriene"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black underline hover:no-underline"
                        >
                            Yoga with Adriene
                        </a>
                        <p className="text-gray-600">Gentle, inclusive, and thoughtful practices for any level.</p>
                    </li>
                    <li>
                        <a
                            href="https://www.youtube.com/c/breatheandflow"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black underline hover:no-underline"
                        >
                            Breathe and Flow
                        </a>
                        <p className="text-gray-600">Strength-focused, flow-based tutorials for dynamic practice.</p>
                    </li>
                </ul>
            </div>

            {/* Articles Section */}
            <div className="w-full max-w-3xl">
                <h2 className="text-2xl mb-2 text-black uppercase">Articles & Guides</h2>
                <ul className="space-y-4 text-lg leading-snug">
                    <li>
                        <a
                            href="https://www.yogajournal.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black underline hover:no-underline"
                        >
                            Yoga Journal
                        </a>
                        <p className="text-gray-600">Explore yoga philosophy, sequences, and expert insights.</p>
                    </li>
                    <li>
                        <a
                            href="https://www.mindbodygreen.com/yoga"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black underline hover:no-underline"
                        >
                            MindBodyGreen Yoga
                        </a>
                        <p className="text-gray-600">Articles connecting yoga to holistic health and mindfulness.</p>
                    </li>
                    <li>
                        <a
                            href="https://www.yogiapproved.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black underline hover:no-underline"
                        >
                            YogiApproved
                        </a>
                        <p className="text-gray-600">Guides and challenges to deepen your practice at home.</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Resources;
