import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const categories = ["All", "Strength", "Balance", "Flexibility"];

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="flex space-x-6 items-center p-4">
            <h1>
                <Link to="/">Yoga Pose Library</Link>
            </h1>
            <nav>
                <div className="relative inline-block">
                    <button 
                        onClick={toggleDropdown} 
                        className="mr-4"
                    >
                        Categories
                    </button>
                    
                    {isDropdownOpen && (
                        <div className="absolute bg-white border rounded-lg shadow-lg mt-2">
                            {categories.map((category) => (
                                <Link 
                                    key={category} 
                                    to={`/categories/${category.toLowerCase()}`} 
                                    className="block px-4 py-2 hover:bg-gray-100"
                                    onClick={() => setIsDropdownOpen(false)} 
                                >
                                    {category}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Header;
