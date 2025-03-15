import React, { useState, useEffect } from "react";
import PageNav from "./PageNav";

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
            <li key={index} className="group flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-6 bg-moss bg-opacity-10 rounded-xl p-6 lg:p-12 hover:scale-[102%] transition duration-300 ease-in-out">
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
                <a 
                    href={post.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="px-4 py-2 border border-moss text-moss rounded-lg hover:bg-moss hover:text-white transition-all duration-300 text-sm font-medium flex items-center"
                >
                    Read More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </a>
            </li>
        ));
    };

    return (
        <>
        <PageNav/>
        <div className="flex flex-col min-h-screen w-full max-w-3xl md:mx-auto mx-12 space-y-40">
           <div className="mt-40">
                <h2 className="text-lg text-center tracking-wider uppercase">Our Monthly Column:</h2>
                <h1 className="my-12 lg:mb-20 text-6xl text-center">Beyond the Mat</h1>
                <p className="mt-4 text-lg text-center tracking-wide text-gray-700 max-w-2xl mx-auto">
                    Stay inspired and connected with our monthly yoga column. Each edition delivers 
                    insightful articles and practical tips to deepen your practice, both on and off the mat.
                </p>
            </div>

            {latestArticle && (
                <div>
                <h2 className="text-4xl text-moss text-center">Latest Edition</h2>
                <div className="bg-moss bg-opacity-10 rounded-xl p-6 lg:p-12 space-y-6 my-24 hover:scale-[102%] transition duration-300 ease-in-out">
                    <h3 className="text-4xl text-moss tracking-tight opacity-50 font-bold">March</h3>
                    <h3 className="text-base lg:text-2xl ">
                        {latestArticle.title}
                    </h3>
                    <p className="text-gray-700">{latestArticle.description}</p>
                    <a href={latestArticle.link} target="_blank" rel="noopener noreferrer" 
                       className="w-fit px-4 py-2 border border-moss text-moss rounded-lg hover:bg-moss hover:text-white transition-all duration-300 text-sm font-medium flex items-center">
                        Read Full Article 
                    </a>
                </div>
                </div>
            )}

            {/* All Articles  */}
            <div>
                <h2 className="text-4xl text-moss text-center">All Editions</h2>
                <ul className="space-y-12 py-24">
                    {displayBlogs()}
                </ul>
            </div>

            {/* Whats New */}
            <div>
                <h3 className="text-4xl text-moss text-center">What's New</h3>
                <div className="bg-moss bg-opacity-10 rounded-xl p-6 lg:p-12 space-y-6 my-24">
                    <h3 className="uppercase tracking-wider font-medium">March 2025</h3>
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
               
            <div className="max-w-4xl mx-auto bg-white border shadow p-8 lg:p-12 my-24">
                <div className="flex flex-col space-y-6 py-12 tracking-wide text-justify">
                    <img 
                        src="/me.png" 
                        alt="Sam" 
                        className="w-60 h-60 object-cover object-[75%_15%] mx-auto mb-6 rounded-full"
                    />
                    <h2 className="text-4xl text-moss text-center py-2">
                        Meet the Author
                    </h2>
                    <p>Hi, I’m Sam, and I’m so glad you’re here. My yoga journey started in 2020 when life felt particularly overwhelming. In the midst of the uncertainty and stress, I turned to yoga, hoping it might offer me some peace. What I didn’t expect was how deeply yoga would transform my life.</p>
                    <p>As I practiced more, I realized yoga was not just about the physical postures—it became a path of self-discovery and personal growth. I delved into different styles, explored yoga’s philosophy, and began integrating mindfulness into my everyday life. Yoga taught me patience, humility, and the importance of being present in the moment.</p>
                    <p>In 2024, I created this website to share my journey and provide a simple, welcoming space for others to find inspiration and support on their own paths. And in 2025, I combined my love for yoga with my passion for sustainability by launching Yarnsara, an online store where I sell 100% upcycled, hand-crocheted yoga accessories.</p>
                    <p>However you’ve found your way here, I hope you’ll find something that resonates with you.</p>
                </div>
                <div className="flex justify-center md:justify-start space-x-6">
                    <a href="mailto:samantha.n.cabrera@gmail.com" className="text-lg font-light hover:text-moss transition duration-300 ease-in-out">
                        Email
                    </a>
                    <a href="https://medium.com/@samantha.n.cabrera" target="_blank" rel="noopener noreferrer" className="text-lg font-light hover:text-moss transition duration-300 ease-in-out">
                        Medium
                    </a>
                </div>
            </div>
        </div>
    </div>
    </>
    );
};

export default Newsletter;
