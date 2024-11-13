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

    // Close menus when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target) &&
                mobileMenuRef.current &&
                !mobileMenuRef.current.contains(event.target)
            ) {
                setIsDropdownOpen(false);
                setIsMobileMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="flex space-x-6 items-center p-4 relative">
            <h1>
                <Link to="/">Yoga Pose Library</Link>
            </h1>
            
            {/* Desktop navigation */}
            <nav className="hidden md:flex space-x-6">
                <Link to="/">All Poses</Link>
                <div ref={dropdownRef} className="relative inline-block">
                    <button onClick={toggleDropdown} className="mr-4">
                        Pose Categories
                    </button>
                    {isDropdownOpen && (
                        <div className="absolute bg-white border rounded-lg shadow-lg mt-2 grid grid-cols-3 gap-8 p-4 w-96">
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
                        </div>
                    )}
                </div>
                <Link to="/beginners-guide">Beginner's Guide</Link>
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

            {/* Mobile navigation (half-screen) */}
            {isMobileMenuOpen && (
                <div ref={mobileMenuRef} className="fixed top-0 right-0 w-1/2 h-full bg-white z-10 p-4 flex flex-col space-y-4 overflow-y-auto shadow-lg">
                    <Link
                        to="/"
                        onClick={() => handleLinkClick("/")}
                        className="text-lg"
                    >
                        All Poses
                    </Link>
                    <button
                        onClick={toggleDropdown}
                        className="text-lg text-left"
                    >
                        Pose Categories  
                    </button>
                    {isDropdownOpen && (
                        <div className="pl-4 space-y-4">
                            <h3 className="text-lg bg-gray-100 rounded p-1 mb-2">Type</h3>
                            {categories.type.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => handleLinkClick(`/categories/type/${category.toLowerCase()}`)}
                                    className="block py-1 hover:underline text-left w-full"
                                >
                                    {category}
                                </button>
                            ))}
                            <h3 className="text-lg bg-gray-100 rounded p-1 mb-2 mt-2">Benefit</h3>
                            {categories.benefit.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => handleLinkClick(`/categories/benefit/${category.toLowerCase()}`)}
                                    className="block py-1 hover:underline text-left w-full"
                                >
                                    {category}
                                </button>
                            ))}
                            <h3 className="text-lg bg-gray-100 rounded p-1 mb-2 mt-2">Part</h3>
                            {categories.part.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => handleLinkClick(`/categories/part/${category.toLowerCase()}`)}
                                    className="block py-1 hover:underline text-left w-full"
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    )}
                    <Link
                        to="/beginners-guide"
                        onClick={() => handleLinkClick("/beginners-guide")}
                        className="text-lg"
                    >
                        Beginner's Guide
                    </Link>
                    <Link
                        to="/resources"
                        onClick={() => handleLinkClick("/resources")}
                        className="text-lg"
                    >
                        Resources
                    </Link>
                    <div className="mt-4">
                        <Search />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;
