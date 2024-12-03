import React from "react";
import { Link } from "react-router-dom";

const ArticleList = () => {
    const articles = [
        { 
            id: 1, 
            title: "Setting Intentions for Your Yoga Practice", 
            slug: "setting-intentions", 
            summary: "Learn how setting clear intentions can enhance your yoga practice and guide your journey."
        },
        { 
            id: 2, 
            title: "Breathing Techniques for Beginners", 
            slug: "breathing-techniques", 
            summary: "Discover simple breathing exercises to calm your mind and improve your yoga performance."
        },
        { 
            id: 3, 
            title: "How to Build a Daily Yoga Routine", 
            slug: "building-routine", 
            summary: "Create a sustainable daily yoga routine with easy-to-follow steps that fit your lifestyle."
        },
    ];

    return (
        <div className="flex flex-col p-8 space-y-8">
            <h1 className="text-4xl mb-1">Articles</h1>
            <ul className="space-y-24">
                {articles.map((article, index) => (
                    <li key={article.id} className="flex items-start space-x-6">
                        <span className="text-5xl font-light text-gray-300">
                            {String(index + 1).padStart(2, "0")}
                        </span>
                        <div>
                            <Link
                                to={`/articles/${article.slug}`} 
                                className="text-4xl font-light leading-snug mb-4 hover:text-gray-700 transition-colors"
                            >
                                {article.title}
                            </Link>
                            <p className="text-lg leading-relaxed text-gray-500">
                                {article.summary}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ArticleList;
