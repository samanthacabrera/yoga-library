import React, { forwardRef } from "react";
import { Link } from "react-router-dom";
import posesData from "../data/poses.json";

const Footer = forwardRef((props, ref) => {
    return (
        <div ref={ref} className="bg-gradient-to-b from-moss/80 to-moss/95 text-white">
            <div className="mt-40 py-8 px-8 md:px-20">
                <Link
                    to="/poses"
                    className="text-white text-2xl lg:text-4xl tracking-tight hover:opacity-80 hover:scale-[100.3%] transition-all duration-500 ease-in-out block border-b border-white py-2 my-12">
                    Yoga Pose Directory
                </Link>

                {posesData.length === 0 ? (
                    <p className="text-center text-gray-500 mt-24">No poses available.</p>
                ) : (
                    <div className="grid grid-cols-1 gap-2 text-white">
                        {posesData.map((pose) => (
                            <div 
                                key={pose.id} 
                                className="relative group p-4 border border-white rounded-lg transition duration-500"
                            >
                                <Link 
                                    to={`/poses/${pose.name}`} 
                                    className="block text-xs tracking-wide text-left transition-colors duration-500"
                                >
                                    {pose.name}
                                    <span className="absolute bottom-4 right-4 text-sm text-white transition duration-500">→</span>
                                    <div className="absolute top-0 left-0 w-0 h-full bg-white/5 group-hover:w-full transition-all duration-500"></div>
                                </Link>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <footer className="p-8 mx-12 text-sm">
                <div className="flex flex-col-reverse md:flex-row justify-between items-center md:items-end space-y-6 md:space-y-0">
                    <div className="text-center md:text-left">
                        <p className="text-white/80">© {new Date().getFullYear()} Learn Yoga Online</p>
                        <a 
                            href="https://github.com/samanthacabrera" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="group relative pb-1 italic text-white/80 hover:text-white transition duration-300"
                        >
                            made by Sam Cabrera
                            <span className="absolute left-0 bottom-0 w-full h-[1px] bg-white/80 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                        </a>
                    </div>

                    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-center md:text-right">
                        {[
                            { name: "Home", path: "/" },
                            { name: "Newsletter", path: "/newsletter" },
                            { name: "Privacy", path: "/privacy-policy" }
                        ].map((item, idx) => (
                            <Link 
                                key={idx} 
                                to={item.path} 
                                className="relative group transition duration-300 text-white/80 hover:text-white pb-1"
                            >
                                {item.name}
                                <span className="absolute left-0 bottom-0 w-full h-[1px] bg-white/80 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                            </Link>
                        ))}
                    </div>
                </div>
            </footer>
        </div>
    );
})

export default Footer;
