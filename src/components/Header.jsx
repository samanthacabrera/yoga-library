import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import posesData from "../data/poses.json";
import Search from "./Search";

const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navigate = useNavigate();
    const dropdownRef = useRef(null);
    const mobileMenuRef = useRef(null);

    const categories = {
        type: Array.from(new Set(posesData.flatMap((pose) => pose.type))),
        benefit: Array.from(new Set(posesData.flatMap((pose) => pose.benefit))),
        part: Array.from(new Set(posesData.flatMap((pose) => pose.part))),
        chakra: Array.from(new Set(posesData.flatMap((pose) => pose.chakra))),
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleLinkClick = (path) => {
        setIsDropdownOpen(false);
        setIsMobileMenuOpen(false);
        navigate(path);
    };

    useEffect(() => {
    const handleClickOutside = (event) => {
    if (isDropdownOpen && dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
    }
    if (isMobileMenuOpen && mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
    }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
        document.removeEventListener("mousedown", handleClickOutside);
    };
}, [isDropdownOpen, isMobileMenuOpen]);


    return (
        <div className="flex space-x-6 items-center p-4">
            <h1>
                <Link to="/">Learn Yoga Online</Link>
            </h1>
            
            {/* Desktop nav */}
            <nav className="hidden md:flex space-x-6">
                <Link to="/categories/all">All Poses</Link>
                <div ref={dropdownRef} className="relative inline-block">
                    <button onClick={toggleDropdown} className="mr-4">
                        Pose Categories
                    </button>
                    {isDropdownOpen && (
                        <div className="absolute bg-white border border-2 rounded-lg shadow-lg grid grid-cols-4 gap-8 p-4 w-[700px] h-[450px] overflow-scroll">
                            <div>
                                <h3 className="text-lg bg-gray-100 rounded p-1 mb-2">Type</h3>
                                {categories.type.map((category) => {
                                    const path = `/categories/type/${category.toLowerCase()}`;
                                    return (
                                        <button
                                            key={category}
                                            onClick={() => handleLinkClick(path)}
                                            className="block py-2 hover:underline text-left w-full"
                                        >
                                            {category}
                                        </button>
                                    );
                                })}
                            </div>
                            <div>
                                <h3 className="text-lg bg-gray-100 rounded p-1 mb-2">Benefit</h3>
                                {categories.benefit.map((category) => {
                                    const path = `/categories/benefit/${category.toLowerCase()}`;
                                    return (
                                        <button
                                            key={category}
                                            onClick={() => handleLinkClick(path)}
                                            className="block py-2 hover:underline text-left w-full"
                                        >
                                            {category}
                                        </button>
                                    );
                                })}
                            </div>
                            <div>
                                <h3 className="text-lg bg-gray-100 rounded p-1 mb-2">Part</h3>
                                {categories.part.map((category) => {
                                    const path = `/categories/part/${category.toLowerCase()}`;
                                    return (
                                        <button
                                            key={category}
                                            onClick={() => handleLinkClick(path)}
                                            className="block py-2 hover:underline text-left w-full"
                                        >
                                            {category}
                                        </button>
                                    );
                                })}
                            </div>
                            <div>
                                <h3 className="text-lg bg-gray-100 rounded p-1 mb-2">Chakra</h3>
                                {categories.chakra.map((category) => {
                                    const path = `/categories/chakra/${category.toLowerCase()}`;
                                    return (
                                        <button
                                            key={category}
                                            onClick={() => handleLinkClick(path)}
                                            className="block py-2 hover:underline text-left w-full"
                                        >
                                            {category}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </div>
                <Link to="/beginners-guide">Beginner's Guide</Link>
                <Link to="/articles">Articles</Link>
                <Link to="/resources">Resources</Link>
            </nav>

            <div className="absolute top-2 right-4 hidden md:block">
                <Search />
            </div>

            <div className="md:hidden absolute top-4 right-4">
                <button onClick={toggleMobileMenu} className="focus:outline-none">
                    {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                </button>
            </div>

            {/* Mobile nav */}
            {isMobileMenuOpen && (
                <div ref={mobileMenuRef} className="fixed top-0 right-0 w-2/3 h-full bg-white z-10 p-4 flex flex-col space-y-4 overflow-y-auto shadow-lg">
                    <Link
                        to="/categories/all"
                        onClick={() => handleLinkClick("/categories/all")}
                        className="text-lg"
                    >
                    All Poses
                    </Link>
                    <div>
                        <div className="space-y-2">
                            <h4 className="text-lg bg-gray-100 rounded p-1 mb-2">Find Pose by Type</h4>
                            {categories.type.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => handleLinkClick(`/categories/type/${category.toLowerCase()}`)}
                                    className="block ml-8 hover:underline text-left w-full"
                                >
                                    {category}
                                </button>
                            ))}
                            <h4 className="text-lg bg-gray-100 rounded p-1 mb-2">Find Pose by Benefit</h4>
                            {categories.benefit.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => handleLinkClick(`/categories/benefit/${category.toLowerCase()}`)}
                                    className="block ml-8 hover:underline text-left w-full"
                                >
                                    {category}
                                </button>
                            ))}
                             <h4 className="text-lg bg-gray-100 rounded p-1 mb-2">Find Pose by Part of the Body</h4>
                            {categories.part.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => handleLinkClick(`/categories/part/${category.toLowerCase()}`)}
                                    className="block ml-8 hover:underline text-left w-full"
                                >
                                    {category}
                                </button>
                            ))}
                            <h4 className="text-lg bg-gray-100 rounded p-1 mb-2">Find Pose by Chakra</h4>
                            {categories.chakra.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => handleLinkClick(`/categories/chakra/${category.toLowerCase()}`)}
                                    className="block ml-8 hover:underline text-left w-full"
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                    <Link
                        to="/beginners-guide"
                        onClick={() => handleLinkClick("/beginners-guide")}
                        className="text-lg"
                    >
                        Beginner's Guide
                    </Link>
                    <Link
                        to="/articles"
                        onClick={() => handleLinkClick("/articles")}
                        className="text-lg"
                    >
                        Articles
                    </Link>
                    <Link
                        to="/resources"
                        onClick={() => handleLinkClick("/resources")}
                        className="text-lg"
                    >
                        Resources
                    </Link>
                    <div className="mt-4 flex-grow">
                        <Search />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;
