import React from "react";

const Articles = () => {
    const articles = [
        { id: 1, title: "The History of Yoga", summary: "Explore the origins and evolution of yoga practices over centuries." },
        { id: 2, title: "Breathing Techniques for Beginners", summary: "Learn simple breathing techniques to enhance your yoga sessions." },
        { id: 3, title: "The Benefits of Yoga for Mental Health", summary: "Understand how yoga helps improve focus, reduce stress, and support mental well-being." },
    ];

    return (
        <div className="flex flex-col p-8 space-y-8">
            <h1 className="text-4xl mb-1">
                Articles
            </h1>
            <ul className="space-y-24">
                {articles.map((article, index) => (
                    <li key={article.id} className="flex items-start space-x-6">
                        <span className="text-5xl font-light text-gray-300">
                            {String(index + 1).padStart(2, "0")}
                        </span>
                        <div>
                            <h2 className="text-4xl font-light leading-snug mb-4 hover:text-gray-500 transition-colors">
                                {article.title}
                            </h2>
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

export default Articles;
