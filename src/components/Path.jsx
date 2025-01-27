import React from "react";
import { Link } from "react-router-dom";

const Path = () => {
    const limbs = [
        { path: "pathofyoga/yama", name: "Yama", description: "Ethical disciplines and moral restraints." },
        { path: "pathofyoga/niyama", name: "Niyama", description: "Personal observances for self-discipline." },
        { path: "pathofyoga/asana", name: "Asana", description: "Physical postures for health and meditation." },
        { path: "pathofyoga/pranayama", name: "Pranayama", description: "Control of breath to regulate energy." },
        { path: "pathofyoga/pratyahara", name: "Pratyahara", description: "Withdrawal of senses to focus inward." },
        { path: "pathofyoga/dharana", name: "Dharana", description: "Concentration on a single point or object." },
        { path: "pathofyoga/dhyana", name: "Dhyana", description: "Meditation for clarity and mindfulness." },
        { path: "pathofyoga/samadhi", name: "Samadhi", description: "Union with the self, ultimate absorption." },
    ];

    return (
        <div className="flex flex-col min-h-screen w-full max-w-3xl space-y-8 p-8 mx-auto">
            <h1 className="text-center text-2xl">The 8-Limbed Path of Yoga</h1>
            <ul className="space-y-4">
                {limbs.map((limb, index) => (
                    <li key={index} className="group flex flex-col items-center">
                        <Link to={`/${limb.path}`} className="group-hover:text-moss transition duration-500">
                            {limb.name}
                        </Link>
                        <p className="text-center text-sm mt-1">{limb.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Path;
