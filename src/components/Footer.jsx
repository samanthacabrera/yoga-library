import React from "react";
import { Link } from "react-router-dom";
import PoseList from "./PoseList";

const Footer = () => {
    return (
        <div className="bg-gray-100">

            <PoseList/>

            <div className="flex justify-around text-sm opacity-50 p-2 lg:p-4">
                <Link to="/privacy-policy" className="hover:italic hover:underline">
                    Privacy Policy
                </Link>
        
                <p>Made by <a href="https://github.com/samanthacabrera" target="_blank" className="hover:italic hover:underline">sam cabrera</a></p>
            </div>
        </div>
    )
}

export default Footer;