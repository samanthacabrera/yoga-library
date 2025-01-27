import React from "react";
import { useLocation } from "react-router-dom";

const Limb = () => {
    const limbs = [
        { path: "yama", title: "Yama", description: "Ethical disciplines and moral restraints." },
        { path: "niyama", title: "Niyama", description: "Personal observances for self-discipline." },
        { path: "asana", title: "Asana", description: "Physical postures for health and meditation." },
        { path: "pranayama", title: "Pranayama", description: "Control of breath to regulate energy." },
        { path: "pratyahara", title: "Pratyahara", description: "Withdrawal of senses to focus inward." },
        { path: "dharana", title: "Dharana", description: "Concentration on a single point or object." },
        { path: "dhyana", title: "Dhyana", description: "Meditation for clarity and mindfulness." },
        { path: "samadhi", title: "Samadhi", description: "Union with the self, ultimate absorption." },
    ];

    const location = useLocation();
    const currentPath = location.pathname.replace("/pathofyoga/", ""); 

    const currentLimb = limbs.find((limb) => limb.path === currentPath);

    return (
        <div className="flex flex-col items-center min-h-screen w-full max-w-3xl p-8 mx-auto">
            {currentLimb ? (
                <>
                    <h1 className="text-center text-2xl">{currentLimb.title}</h1>
                    <p className="text-center text-base mt-4">{currentLimb.description}</p>
                </>
            ) : (
                <h1 className="text-center text-2xl">Welcome to the 8-Limbed Path of Yoga</h1>
            )}
        </div>
    );
};

export default Limb;
