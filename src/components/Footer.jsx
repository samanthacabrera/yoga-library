import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="flex justify-around opacity-50 py-1">
            <p>&copy; 2024</p>
            <p>made by <a href="https://github.com/samanthacabrera" target="_blank" className="hover:italic hover:underline">sam cabrera</a></p>
            <Link to="/privacy-policy">Privacy Policy</Link>
        </div>
    )
}

export default Footer;