import React from "react";
import { Link } from "react-router-dom";
import PoseList from "./PoseList";

const Footer = () => {
    return (
        <div className="bg-moss bg-opacity-90">
            <PoseList />

            <footer className="p-6 mx-4 text-sm">
                <div className="flex flex-col-reverse md:flex-row justify-between items-center md:items-end space-y-6 md:space-y-0">
                    
                    <div className="text-center md:text-left">
                        <p>© {new Date().getFullYear()} Learn Yoga Online</p>
                        <a 
                            href="https://github.com/samanthacabrera" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="italic"
                        >
                            made by <span className="hover:text-white duration-300 ease-in-out">Sam Cabrera</span>
                        </a>
                    </div>

                    <div className="flex flex-col md:flex-row p-2 space-y-2 md:space-y-0 md:space-x-8 text-center md:text-right">
                        <Link to="/" className="hover:text-white duration-300 ease-in-out">Home</Link>
                        <Link to="/newsletter" className="hover:text-white duration-300 ease-in-out">Newsletter</Link>
                        <Link to="/privacy-policy" className="hover:text-white duration-300 ease-in-out">Privacy</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
