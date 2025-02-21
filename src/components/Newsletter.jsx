import React, { useState, useEffect } from "react";

const Newsletter = () => {
    const [blog, setBlog] = useState({ items: [], error: null });

    useEffect(() => {
        fetch("/blog.json") 
            .then(response => response.json())
            .then(data => {
                const yogaArticles = data.items.filter(post =>
                    post.title.toLowerCase().includes("yoga") || 
                    post.description.toLowerCase().includes("yoga")
                );
                setBlog({ items: yogaArticles });
            })
            .catch(err => setBlog({ error: err.message }));
    }, []);

    const totalArticles = blog.items.length;
    const latestArticle = blog.items[0];

    const displayBlogs = () => {
        return blog.items.map((post, index) => (
            <li key={index} className="group flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-6 bg-white bg-opacity-50 border border-moss rounded-lg shadow p-6">
                <span className="text-2xl text-gray-400">
                    {String(totalArticles - index).padStart(2, "0")}
                </span>
                <div className="flex-1">
                    <div className="text-sm text-gray-500 mb-2">
                        Published on {new Date(post.pubDate).toLocaleDateString()}
                    </div>
                    <a href={post.link} target="_blank" rel="noopener noreferrer" className="text-2xl font-light tracking-wide leading-snug">
                        {post.title}
                    </a>
                </div>
                <a href={post.link} target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 text-sm hover:scale-[1.03] hover:bg-moss hover:text-white transition-all duration-300 ease-in-out">
                    Read More
                </a>
            </li>
        ));
    };

    return (
        <div className="flex flex-col min-h-screen w-full max-w-3xl space-y-40 px-8 py-4 mx-auto">
           <div className="my-12">
                <h2 className="text-lg lg:text-xl heading tracking-wider uppercase">Our Monthly Column:</h2>
                <h1 className="heading my-12 lg:mb-20 text-4xl lg:text-8xl text-center">Beyond the Mat</h1>
                <p className="tracking-wide mt-4 text-lg lg:text-xl text-gray-700 max-w-2xl">
                    Stay inspired and connected with our monthly yoga column. Each edition delivers 
                    insightful articles and practical tips to deepen your practice, both on and off the mat.
                </p>
            </div>

            {latestArticle && (
                <div className="bg-moss bg-opacity-10 border border-moss rounded-t-xl p-6 lg:p-12 space-y-6">
                    <h2 className="text-lg lg:text-4xl text-moss">This Month's Feature</h2>
                    <h3 className="text-base lg:text-2xl leading-tight">
                        {latestArticle.title}
                    </h3>
                    <p className="text-gray-700">{latestArticle.description}</p>
                    <a href={latestArticle.link} target="_blank" rel="noopener noreferrer" 
                       className="inline-block bg-moss text-xs lg:text-sm text-white px-6 py-3 rounded-full font-medium tracking-wider bg-opacity-90 hover:bg-opacity-100 transition duration-300">
                        Read Full Article →
                    </a>
                </div>
            )}

            {/* All Articles  */}
            <div>
                <h3 className="py-24 heading text-4xl lg:text-6xl">All Editions</h3>
                <ul className="space-y-12 mb-12">
                    {displayBlogs()}
                </ul>
            </div>

            <hr></hr>
            {/* Whats New */}
            <div>
                <h3 className="heading text-4xl lg:text-6xl py-24">What's New</h3>
                <div className="border border-moss bg-white bg-opacity-50 rounded-lg shadow p-6">
                    <h3 className="uppercase tracking-wider heading font-medium">Feb 2025</h3>
                    <ul className="space-y-2">
                        <li>
                            <span className="font-medium tracking-wide">Launch of Medium Blog:</span> Our new Medium blog is live, offering monthly articles on yoga and holistic wellness. You can find the latest posts on our website or at <a href="https://medium.com/me/stories/public" className="italic hover:underline">Medium</a>.
                        </li>
                        <li>
                            <span className="font-medium tracking-wide">New Resources Page:</span> We've launched a dedicated Resources Page featuring a curated collection of tools, articles, and videos designed to support your yoga practice.
                        </li>
                    </ul>
                </div>
            </div>

            <hr></hr>
            {/* Meet the Author */}
            <div>
                <h2 className="heading text-4xl lg:text-6xl py-12 text-center" >Meet the Author</h2>
                <div className="flex flex-col md:flex-row items-start space-y-8 md:space-y-0 md:space-x-12 my-16">
                    <img 
                        src="/me.png" 
                        alt="Sam" 
                        className="w-40 h-40 md:w-60 md:h-60 object-cover object-[75%_15%] rounded-t-xl shadow"
                    />
                    <div className="flex-1 text-center md:text-left space-y-12">
                        <p> Hi there, my name is Sam and I am a web developer who also happens to spend a lot of time on a yoga mat. Yoga has been a constant in my life for years now, offering a sense of grounding when everything else feels unsteady.</p>
                        <p>Over time, I've realized that yoga is as much about the moments off the mat as it is about the time spent on it. It has taught me patience, humility, and the importance of being present.</p>
                        <p>I’m not a writer by trade, and I don’t aim to be. This space is simply where I share what yoga means to me — the lessons, struggles, and small moments that come with maintaining a regular practice. My hope is that these reflections resonate with others who are also exploring their own relationship with yoga, no matter where they are on their journey.</p>
                        <p>However you’ve found your way here, I hope you’ll find something that resonates with you.</p>
                        <div className="flex justify-center md:justify-start space-x-4">
                            <a href="https://medium.com/@samantha.n.cabrera" target="_blank" rel="noopener noreferrer" className="hover:text-moss transition duration-300">Medium</a>
                            <a href="mailto:samantha.n.cabrera@gmail.com" className="hover:text-moss transition duration-300">Email</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
