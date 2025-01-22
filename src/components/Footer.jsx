import React from "react";
import { Link } from "react-router-dom";
import PoseList from "./PoseList";

const Footer = () => {
    return (
        <div className="bg-gray-100">
            <PoseList/>

            <div className="flex justify-center opacity-50 py-1">
                <div className="absolute left-2">
                    <Link to="/privacy-policy" className="hover:italic hover:underline">
                        Privacy Policy
                    </Link>
                </div>

                <p>Made by <a href="https://github.com/samanthacabrera" target="_blank" className="hover:italic hover:underline">sam cabrera</a></p>

                <div className="absolute right-2">
                    <form action="mailto:samantha.n.cabrera@gmail.com" method="POST" enctype="text/plain">
                        <button type="submit"  className="hover:italic hover:underline">Feedback</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Footer;