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
            <li key={index} className="group flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-6 bg-moss bg-opacity-10 border border-moss rounded-t-xl p-6 lg:p-12 ">
                <span className="text-2xl text-moss opacity-50">
                    {String(totalArticles - index).padStart(2, "0")}
                </span>
                <div className="flex-1">
                    <div className="text-sm opacity-90 mb-2">
                        Published on {new Date(post.pubDate).toLocaleDateString()}
                    </div>
                    <a href={post.link} target="_blank" rel="noopener noreferrer" className="text-2xl font-light tracking-wide leading-snug">
                        {post.title}
                    </a>
                </div>
                <a href={post.link} target="_blank" rel="noopener noreferrer" className="">
                    Read More
                </a>
            </li>
        ));
    };

    return (
        <div className="flex flex-col min-h-screen w-full max-w-3xl mx-auto space-y-40">
           <div className="mt-40">
                <h2 className="text-lg lg:text-xl heading tracking-wider uppercase">Our Monthly Column:</h2>
                <h1 className="heading my-12 lg:mb-20 text-4xl lg:text-8xl text-center">Beyond the Mat</h1>
                <p className="mt-4 text-lg lg:text-xl text-gray-700 max-w-2xl">
                    Stay inspired and connected with our monthly yoga column. Each edition delivers 
                    insightful articles and practical tips to deepen your practice, both on and off the mat.
                </p>
            </div>

            {latestArticle && (
                <div>
                <h2 className="text-2xl lg:text-6xl text-moss">This Month's Feature</h2>
                <div className="bg-moss bg-opacity-10 border border-moss rounded-t-xl p-6 lg:p-12 space-y-6 my-24">
                    <h3 className="text-4xl lg:text-8xl text-moss tracking-tight opacity-50 font-bold">March</h3>
                    <h6 className="text-base lg:text-2xl ">
                        {latestArticle.title}
                    </h6>
                    <p className="text-gray-700">{latestArticle.description}</p>
                    <a href={latestArticle.link} target="_blank" rel="noopener noreferrer" 
                       className="">
                        Read Full Article 
                    </a>
                </div>
                </div>
            )}

            {/* All Articles  */}
            <div>
                <h2 className="text-2xl lg:text-6xl text-moss">All Editions</h2>
                <ul className="space-y-12 py-24">
                    {displayBlogs()}
                </ul>
            </div>

            {/* Whats New */}
            <div>
                <h3 className="text-2xl lg:text-6xl text-moss">What's New</h3>
                <div className="bg-moss bg-opacity-10 border border-moss rounded-t-xl p-6 lg:p-12 space-y-6 my-24">
                    <h3 className="uppercase tracking-wider heading font-medium">March 2025</h3>
               <ul className="space-y-2">
                        <li>
                            <span className="font-medium tracking-wide">Introducing Yarnsana:</span> We're excited to share the launch of Yarnsana, our sustainable, upcycled, hand-crocheted yoga accessories brand. Stay tuned for updates as we build our eCommerce platform!
                        </li>
                        <li>
                            <span className="font-medium tracking-wide">"What Is Yoga?" Page Revamped:</span> We've redesigned our "What Is Yoga?" page to include a simple quiz that helps you discover the best yoga style for you. Check it out and find your perfect practice!
                        </li>
                    </ul>
                </div>
            </div>

         {/* Meet the Author */}
            <div className="relative py-20 px-6">
                <h2 className="text-2xl lg:text-6xl text-moss text-center">
                    Meet the Author
                </h2>
            <div className="max-w-4xl mx-auto bg-white border shadow p-8 lg:p-12 my-24">
                <div className="grid md:grid-cols-[auto_1fr] gap-10 md:gap-14 items-start">
                    <img 
                        src="/me.png" 
                        alt="Sam" 
                        className="w-60 h-60 object-cover object-[75%_15%] mx-auto rounded-t-lg"
                    />
                    <div>
                        <p className="">
                            Hi there, my name is Sam, and I am a web developer who also happens to spend a lot of time on a yoga mat. Yoga has been a constant in my life for years now, offering a sense of grounding when everything else feels unsteady.
                        </p>
                    </div>
                </div>
                <div className="mt-6 space-y-6">
                    <p>
                        Over time, I've realized that yoga is as much about the moments off the mat as it is about the time spent on it. It has taught me patience, humility, and the importance of being present.
                    </p>
                    <p>
                        I’m not a writer by trade, and I don’t aim to be. This space is simply where I share what yoga means to me — the lessons, struggles, and small moments that come with maintaining a regular practice. My hope is that these reflections resonate with others who are also exploring their own relationship with yoga, no matter where they are on their journey.
                    </p>
                    <p>
                        Beyond yoga and coding, I also run an online store called <a href="https://yarnsara-samanthacabreras-projects.vercel.app/"  target="_blank" rel="noopener noreferrer" className="font-medium tracking-wider" >yarn<span className="italic">sara</span></a>, where I create and sell 100% upcycled, hand-crocheted yoga accessories. It’s been a rewarding way to merge my passions for sustainability, creating, and yoga.
                    </p>
                    <p>
                        However you’ve found your way here, I hope you’ll find something that resonates with you.
                    </p>
                </div>
                <div className="flex justify-center md:justify-start space-x-6 pt-6">
                    <a href="https://medium.com/@samantha.n.cabrera" target="_blank" rel="noopener noreferrer" className="text-lg font-light hover:text-moss transition duration-300 ease-in-out">
                        Medium
                    </a>
                    <a href="mailto:samantha.n.cabrera@gmail.com" className="text-lg font-light hover:text-moss transition duration-300 ease-in-out">
                        Email
                    </a>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Newsletter;
