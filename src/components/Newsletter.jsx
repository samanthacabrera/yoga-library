import React, { useState, useEffect } from "react";

const Newsletter = () => {
    const mediumURL = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@samantha.n.cabrera";
    
    const [blog, setBlog] = useState({
        items: [],
        error: null
    });
    
    useEffect(() => {
        fetch(mediumURL)
            .then(response => response.json())
            .then(data => {
                const yogaArticles = data.items.filter(post => 
                    post.title.toLowerCase().includes("yoga") || 
                    post.description.toLowerCase().includes("yoga")
                );
                setBlog({
                    items: yogaArticles,
                });
            })
            .catch(err => {
                setBlog({ error: err.message });
            });
    }, []);
    
    const totalArticles = blog.items.length;

    const displayBlogs = () => {
        if (blog.items) {
            return blog.items.map((post, index) => (
                <li 
                    key={index} 
                    className="group flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-6 bg-white border shadow-sm rounded-lg p-6 hover:shadow-md transition-shadow"
                >
                    <span className="text-2xl text-gray-400">
                        {String(totalArticles - index).padStart(2, "0")}
                    </span>
                    <div className="flex-1">
                        <div className="text-sm text-gray-500 mb-2">
                            Published on {new Date(post.pubDate).toLocaleDateString()}
                        </div>
                        <a 
                            href={post.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-2xl font-light tracking-wide leading-snug"
                        >
                            {post.title}
                        </a>
                    </div>
                    <a
                        href={post.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 text-sm text-gray-800 bg-gray-100 border border-gray-300 hover:bg-moss hover:text-white hover:scale-105 hover:opacity-80 transition-transform duration-300 rounded px-2 py-1"
                    >
                        Read More
                    </a>
                </li>
            ));
        }
    };

    return (
        <div className="flex flex-col min-h-screen w-full max-w-3xl space-y-20 px-8 py-4 mx-auto">
            <div className="mb-8">
                <h1 className="text-2xl sm:text-3xl md:text-4xl text-center my-12">Our Community Newsletter</h1>
                <p>Stay inspired and connected with our monthly yoga newsletter, each edition delivers insightful articles, tips for deepening your practice.</p>
            </div>

            <ul className="space-y-12 my-12">
                {displayBlogs()}
            </ul>

            <hr></hr>
            {/* Whats New */}
            <div className="bg-white border shadow-sm rounded-lg p-6">
                <h2 className="text-2xl my-8">What's New - Feb 2025</h2>
                <ul className="space-y-2">
                    <li>
                        <span className="font-medium tracking-wide">Launch of Medium Blog:</span> Our new Medium blog is live, offering monthly articles on yoga and holistic wellness. You can find the latest posts on our website or at <a href="https://medium.com/me/stories/public" className="italic hover:underline">Medium</a>.
                    </li>
                    <li>
                        <span className="font-medium tracking-wide">New Resources Page:</span> We've launched a dedicated Resources Page featuring a curated collection of tools, articles, and videos designed to support your yoga practice.
                    </li>
                    <li>
                        <span className="font-medium tracking-wide">Revamped Beginner's Guide:</span> Our Beginner's Guide has been completely refreshed with step-by-step instructions, visually engaging content, and practical tips. 
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Newsletter;
