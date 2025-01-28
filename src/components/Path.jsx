import React, { useState } from "react";
import { Link } from "react-router-dom";

const Path = () => {
    const [activeLimb, setActiveLimb] = useState(null); 

    const limbs = [
        { path: "yama", name: "Yama", description: "Ethical disciplines and moral restraints." },
        { path: "niyama", name: "Niyama", description: "Personal observances for self-discipline." },
        { path: "asana", name: "Asana", description: "Physical postures for health and meditation." },
        { path: "pranayama", name: "Pranayama", description: "Control of breath to regulate energy." },
        { path: "pratyahara", name: "Pratyahara", description: "Withdrawal of senses to focus inward." },
        { path: "dharana", name: "Dharana", description: "Concentration on a single point or object." },
        { path: "dhyana", name: "Dhyana", description: "Meditation for clarity and mindfulness." },
        { path: "samadhi", name: "Samadhi", description: "Union with the self, ultimate absorption." },
    ];

const toggleLimbContent = (path) => {
    if (activeLimb === path) {
        setActiveLimb(null); 
    } else {
        setActiveLimb(path); 
    }
};

    return (
        <div className="flex flex-col w-full max-w-3xl space-y-8 px-8 py-4 mx-auto">
          <h1 className="text-center text-2xl md:text-4xl">The 8-Limbed Path of Yoga</h1>
            <div className="flex overflow-x-auto space-x-8 py-8">
                {limbs.map((limb, index) => (
                    <div key={index} className="flex-none w-48 text-center space-y-4">
                        <div className="text-4xl font-bold">{index + 1}</div>
                        <p className="text-xl">{limb.name}</p>
                        <p className="text-sm">{limb.description}</p>
                        <Link
                            to={`/pathofyoga/${limb.path}`}
                            onClick={() => toggleLimbContent(limb.path)} 
                            className="px-4 py-2 border hover:scale-105 hover:bg-moss hover:text-white text-sm rounded-full transition duration-300 transform"
                        >
                            {activeLimb === limb.path ? "Show Less" : "Learn More"}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Path;
