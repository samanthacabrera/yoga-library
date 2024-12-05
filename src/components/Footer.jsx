import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="flex justify-center opacity-50 py-1">
            <p>made by <a href="https://github.com/samanthacabrera" target="_blank" className="hover:italic hover:underline">sam cabrera</a></p>
            <p className="absolute left-2">
                <Link to="/privacy-policy" className="hover:italic hover:underline">
                    Privacy Policy
                </Link>
            </p>
        </div>
    )
}

export default Footer;