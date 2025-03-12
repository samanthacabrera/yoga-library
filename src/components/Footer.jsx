import React from "react";
import { Link } from "react-router-dom";
import PoseList from "./PoseList";

const Footer = () => {
    return (
        <div className="bg-gradient-to-b from-moss/80 to-moss/95 text-white">
            <PoseList />

            <footer className="p-8 mx-12 text-sm">
                <div className="flex flex-col-reverse md:flex-row justify-between items-center md:items-end space-y-6 md:space-y-0">
                    
                    <div className="text-center md:text-left text-white/80">
                        <p className="tracking-wide">© {new Date().getFullYear()} Learn Yoga Online</p>
                        <a 
                            href="https://github.com/samanthacabrera" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="italic hover:text-white transition duration-300"
                        >
                            made by Sam Cabrera
                        </a>
                    </div>

                    <div className="flex flex-col md:flex-row p-2 space-y-2 md:space-y-0 md:space-x-6 text-center md:text-right">
                        {[
                            { name: "Home", path: "/" },
                            { name: "Newsletter", path: "/newsletter" },
                            { name: "Privacy", path: "/privacy-policy" }
                        ].map((item, idx) => (
                            <Link 
                                key={idx} 
                                to={item.path} 
                                className="relative group transition duration-300 text-white/80 hover:text-white px-2 pb-1"
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
}

export default Footer;
