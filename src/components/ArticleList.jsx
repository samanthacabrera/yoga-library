import React from "react";
import { Link } from "react-router-dom";

const ArticleList = () => {
    const articles = [
        { 
            id: 1, 
            title: "Setting Intentions for Your Yoga Practice", 
            slug: "setting-intentions", 
            summary: "Learn how setting clear intentions can enhance your yoga practice and guide your journey.",
            publishDate: "January 2, 2025"
        },
        { 
            id: 2, 
            title: "Breathing Techniques for Beginners", 
            slug: "breathing-techniques", 
            summary: "Discover simple breathing exercises to calm your mind and improve your yoga performance.",
            publishDate: "December 28, 2024"
        },
        { 
            id: 3, 
            title: "How to Build a Daily Yoga Routine", 
            slug: "building-routine", 
            summary: "Create a sustainable daily yoga routine with easy-to-follow steps that fit your lifestyle.",
            publishDate: "December 20, 2024"
        },
    ];

    return (
        <div className="flex flex-col min-h-screen p-8 space-y-16">
            <h1 className="text-4xl">Articles</h1>
            <ul className="space-y-12">
                {articles.map((article, index) => (
                    <li 
                        key={article.id} 
                        className="group flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-6 bg-white shadow-sm rounded-lg p-6 hover:shadow-md transition-shadow"
                    >
                        <span className="text-2xl text-gray-400">
                            {String(index + 1).padStart(2, "0")}
                        </span>
                        <div className="flex-1">
                            <div className="text-sm text-gray-500 mb-2">
                                Published on {article.publishDate}
                            </div>
                            <Link
                                to={`/articles/${article.slug}`} 
                                className="text-2xl font-light tracking-wide leading-snug"
                            >
                                {article.title}
                            </Link>
                            <p className="mt-3 text-gray-600 leading-relaxed">
                                {article.summary}
                            </p>
                        </div>
                        <Link
                            to={`/articles/${article.slug}`}
                            className="inline-block px-4 py-2 text-sm text-gray-800 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 transition-colors"
                        >
                            Read More
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ArticleList;
