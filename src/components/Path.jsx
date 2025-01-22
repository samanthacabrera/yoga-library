import React from "react";

const Path = () => {
    const limbs = [
        { name: "Yama", description: "Ethical disciplines and moral restraints." },
        { name: "Niyama", description: "Personal observances for self-discipline." },
        { name: "Asana", description: "Physical postures for health and meditation." },
        { name: "Pranayama", description: "Control of breath to regulate energy." },
        { name: "Pratyahara", description: "Withdrawal of senses to focus inward." },
        { name: "Dharana", description: "Concentration on a single point or object." },
        { name: "Dhyana", description: "Meditation for clarity and mindfulness." },
        { name: "Samadhi", description: "Union with the self, ultimate absorption." },
    ];

    return (
        <div className="flex flex-col min-h-screen w-full max-w-3xl space-y-8 p-8 mx-auto">
            <h1 className="text-center text-2xl">The 8-Limbed Path of Yoga</h1>
            <ul className="space-y-2">
                {limbs.map((limb, index) => (
                    <li key={index} className="flex flex-col items-center">
                        <strong>{limb.name}</strong>
                        <span>{limb.description}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Path;
