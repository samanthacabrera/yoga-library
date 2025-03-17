import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PageNav from "./PageNav";

const Newsletter = () => {
    const [blog, setBlog] = useState({ items: [], error: null });
    const location = useLocation(); 

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

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                element.scrollIntoView();
            }
        }
    }, [location]);

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
            
        {/* Meet the Author  */}
        <div id="meet-the-author" className="relative py-32">  
            <h3 className="text-4xl text-moss text-center my-24">Meet the Author</h3>
            <div className="max-w-4xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-start md:space-x-16">
                    <div className="md:w-1/3 flex flex-col items-center mb-10 md:mb-0">
                        <img 
                            src="/me.png" 
                            alt="Sam" 
                            className="w-40 h-40 lg:w-48 lg:h-48 object-cover object-[75%_15%] rounded-full shadow-sm"
                        />
                        
                        <div className="flex justify-center space-x-8 mt-8">
                            <a href="mailto:samantha.n.cabrera@gmail.com" className="text-gray-500 hover:text-moss transition-colors duration-200">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </a>
                            <a href="https://medium.com/@samantha.n.cabrera" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-moss transition-colors duration-200">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                                    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    
                    <div className="md:w-2/3">                
                        <div className="space-y-6 text-gray-600 leading-relaxed font-light">
                            <p>Hi, my name is Sam Cabrera and I'm so glad you're here. My yoga journey started in 2020 when life felt particularly overwhelming. In the midst of the uncertainty and stress, I turned to yoga, hoping it might offer me some peace. What I didn't expect was how deeply yoga would transform my life.</p>
                            
                            <p>As I practiced more, I realized yoga was not just about the physical postures—it became a path of self-discovery and personal growth. I delved into different styles, explored yoga's philosophy, and began integrating mindfulness into my everyday life.</p>
                            
                            <p>In 2024, I created this website to share my journey and provide a simple, welcoming space for others to find inspiration and support on their own paths. And in 2025, I combined my love for yoga with my passion for sustainability by launching Yarnsana, an online store where I sell 100% upcycled, hand-crocheted yoga accessories.</p>
                            
                            <p>However you've found your way here, I hope you'll find something that resonates with you.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    );
};

export default Newsletter;
