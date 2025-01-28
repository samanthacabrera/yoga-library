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
            publishDate: "December 1, 2024"
        },
        { 
            id: 3, 
            title: "How to Build a Daily Yoga Routine", 
            slug: "building-routine", 
            summary: "Create a sustainable daily yoga routine with easy-to-follow steps that fit your lifestyle.",
            publishDate: "November 7, 2024"
        },
    ];

    const totalArticles = articles.length;

    return (
        <div className="flex flex-col min-h-screen w-full max-w-3xl space-y-20 px-8 py-4 mx-auto">
            <div className="mb-8">
                <h1 className="text-2xl sm:text-3xl md:text-4xl text-center my-12">Our Community Newsletter</h1>
                <p>Stay inspired and connected with our monthly yoga newsletter, designed to support your wellness journey. Each edition delivers insightful articles, tips for deepening your practice, and guided sequences tailored to all levels.</p>
            </div>
            
            <ul className="space-y-12 my-12">
                {articles.map((article, index) => (
                    <li 
                        key={article.id} 
                        className="group flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-6 bg-white border shadow-sm rounded-lg p-6 hover:shadow-md transition-shadow"
                    >
                        <span className="text-2xl text-gray-400">
                             {String(totalArticles - index).padStart(2, "0")}
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

            <hr></hr>

            <div className="bg-white self-center shadow-sm rounded-lg p-6 space-y-4 max-w-lg w-full border border-gray-200">
                <h2 className="text-2xl font-light text-center">  Join Our Yoga Community</h2>
                <p className="text-center text-gray-500">
                  Stay connected with us to receive updates, articles, and resources. Our newsletter signup is coming soon!
                </p>
                <button 
                    disabled 
                    className="block w-full px-6 py-3 text-sm text-gray-400 bg-gray-100 border border-gray-300 rounded-md cursor-not-allowed"
                >
                    Signup
                </button>
            </div>
        </div>
    );
};

export default ArticleList;
