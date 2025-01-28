import React from "react";
import { Link } from "react-router-dom";

const Challenge = () => {
    const challenges = [
        {
            month: "January 2025",
            slug: "setting-intentions",
            challenge: "Complete a 10-minute yoga flow every day to build strength and flexibility. Incorporate at least three different asanas such as Downward Dog, Warrior I, and Child's Pose into each session.",
            reflection: "At the end of the month, reflect on how committing to a daily practice has impacted your mental clarity, mood, and emotional resilience. Did consistency help alleviate stress or improve focus?",
            articleTitle: "Setting Intentions"
        },
        {
            month: "December 2024",
            slug: "breathing-techniques", 
            challenge: "Practice a 15-minute vinyasa flow each day. Focus on syncing your breath with your movements and incorporate poses like Plank, Cobra, and Tree Pose.",
            reflection: "How did focusing on breath and flow influence your emotional state? Did you notice any changes in your mindfulness, calmness, or energy?",
            articleTitle: "Breathing Techniques"
        },
        {
            month: "November 2024",
            slug: "building-routine", 
            challenge: "Commit to a 20-minute yoga session at least three times a week. Focus on building core strength with poses like Boat Pose, Plank, and Dolphin Pose.",
            reflection: "Reflect on how strengthening your core physically affected your confidence and mental clarity. Did the challenge boost your focus or create any emotional shifts?",
            articleTitle: "Building a Routine"
        }
    ];

    return (
        <div className="flex flex-col min-h-screen w-full max-w-3xl space-y-8 px-8 py-4 mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl text-center my-12">Monthly Yoga Challenges</h1>
            
            {challenges.map((item, index) => (
                <div key={index} className="p-4 border border-gray-200 shadow rounded-lg space-y-4">
                    <h2 className="text-2xl font-medium tracking-wide">{item.month}</h2>
                    <div className="space-y-2">
                        <h3 className="font-medium tracking-wide">Challenge</h3>
                        <p>{item.challenge}</p>

                        <h3 className="font-medium tracking-wide">Reflection</h3>
                        <p>{item.reflection}</p>
                    </div>
                    <div className="text-sm">
                        <p>
                            Want to learn more about {item.articleTitle}? Check out our article on{" "}
                            <Link to={`/articles/${item.slug}`} className="text-moss hover:underline">
                                {item.articleTitle}
                            </Link>.
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Challenge;
