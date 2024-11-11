import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import posesData from "../data/poses.json";
import Search from "./Search";

const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const navigate = useNavigate();

    const categories = {
        type: Array.from(new Set(posesData.flatMap((pose) => pose.type))),
        benefit: Array.from(new Set(posesData.flatMap((pose) => pose.benefit))),
        part: Array.from(new Set(posesData.flatMap((pose) => pose.part)))
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleLinkClick = (path) => {
        setIsDropdownOpen(false);
        navigate(path);
    };

    return (
        <div className="flex space-x-6 items-center p-4">
            <h1>
                <Link to="/">Yoga Pose Library</Link>
            </h1>
            <nav className="flex space-x-6">
                <Link 
                    to="/" 
                >
                    All Poses
                </Link>
                <Link to="/pose-of-the-day" >Pose of the Day</Link>
                <div className="relative inline-block">
                    <button onClick={toggleDropdown} className="mr-4">
                        Pose Categories
                    </button>
                    
                    {isDropdownOpen && (
                        <div className="absolute bg-white border rounded-lg shadow-lg mt-2 grid grid-cols-3 gap-4 p-4 w-80">
                            <div>
                                <h3 className="text-lg mb-2">Type</h3>
                                {categories.type.map((category) => {
                                    const path = `/categories/type/${category.toLowerCase()}`;
                                    return (
                                        <button
                                            key={category}
                                            onClick={() => handleLinkClick(path)}
                                            className="block px-4 py-2 hover:underline text-left w-full"
                                        >
                                            {category}
                                        </button>
                                    );
                                })}
                            </div>
                            <div>
                                <h3 className="text-lg mb-2">Benefit</h3>
                                {categories.benefit.map((category) => {
                                    const path = `/categories/benefit/${category.toLowerCase()}`;
                                    return (
                                        <button
                                            key={category}
                                            onClick={() => handleLinkClick(path)}
                                            className="block px-4 py-2 hover:underline text-left w-full"
                                        >
                                            {category}
                                        </button>
                                    );
                                })}
                            </div>
                            <div>
                                <h3 className="text-lg mb-2">Part</h3>
                                {categories.part.map((category) => {
                                    const path = `/categories/part/${category.toLowerCase()}`;
                                    return (
                                        <button
                                            key={category}
                                            onClick={() => handleLinkClick(path)}
                                            className="block px-4 py-2 hover:underline text-left w-full"
                                        >
                                            {category}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </div>
                <Link to="/resources" >Resources</Link>
                <Link to="/donate">Donate</Link>
            </nav>
            <div className="absolute top-2 right-4">
                <Search />
            </div>
        </div>
    );
};

export default Header;
