import React, { useState, useEffect } from "react";
import posesData from "../data/poses.json"; 

const DailyPose = () => {
    const [poseOfTheDay, setPoseOfTheDay] = useState(null);
    const getRandomPose = () => {
        const randomIndex = Math.floor(Math.random() * posesData.length);
        return posesData[randomIndex];
    };

    useEffect(() => {
        setPoseOfTheDay(getRandomPose());
    }, []); 

    return (
        <div className="flex flex-col items-center pt-20 text-center h-screen w-full space-y-2 p-6">
            {poseOfTheDay ? (
                <div>
                    <h2 className="text-4xl mb-6">Pose of the Day:</h2>
                  
                    <h3 className="text-2xl">{poseOfTheDay.name}</h3>
                        
                </div>
            ) : (
                <p>Loading Pose of the Day...</p>
            )}
        </div>
    );
};

export default DailyPose;
