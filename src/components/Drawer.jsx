import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import posesData from "../data/poses.json";

const Drawer = () => {
    const [openSections, setOpenSections] = useState({});
    const navigate = useNavigate();
    const drawerRef = useRef(null);

    const categories = {
        type: Array.from(new Set(posesData.flatMap((pose) => pose.type))),
        benefit: Array.from(new Set(posesData.flatMap((pose) => pose.benefit))),
        part: Array.from(new Set(posesData.flatMap((pose) => pose.part))),
        chakra: Array.from(new Set(posesData.flatMap((pose) => pose.chakra))),
    };

    const toggleSection = (section) => {
        setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
    };

    const handleLinkClick = (path) => {
        navigate(path);
    };

const CategorySection = ({ title, items, sectionKey }) => (
    <div>
        <button
            className="flex justify-between w-full pl-2 rounded hover:bg-gray-200 hover:scale-105 hover:opacity-80 transition-transform duration-300 px-2 py-1"
            onClick={() => toggleSection(sectionKey)}
            aria-expanded={!!openSections[sectionKey]}
            aria-controls={`section-${sectionKey}`}
        >
            {title}
        </button>
        <div
            id={`section-${sectionKey}`}
            className={`ml-5 space-y-1 overflow-hidden transition-all ${
                openSections[sectionKey] ? "max-h-96" : "max-h-0"
            }`}
            style={{ transitionDuration: "300ms" }}
        >
            {items.map((item) => (
                <button
                    key={item}
                    onClick={() =>
                        handleLinkClick(`/categories/${sectionKey}/${item.toLowerCase()}`)
                    }
                    className="block text-left w-full rounded px-2 py-1 hover:bg-gray-200 hover:scale-105 hover:opacity-80 transition-transform duration-300"
                >
                    {item}
                </button>
            ))}
        </div>
    </div>
);

const PosesListToggle = () => (
    <div>
        <button
            className="flex justify-between w-full rounded hover:bg-gray-200 hover:scale-105 hover:opacity-80 transition-transform duration-300 px-2 py-1"
            onClick={() => toggleSection("posesList")}
            aria-expanded={!!openSections["posesList"]}
            aria-controls="section-posesList"
        >
            List of Poses
        </button>
        <div
            id="section-posesList"
            className={`ml-5 space-y-1 overflow-hidden transition-all ${
                openSections["posesList"] ? "max-h-96" : "max-h-0"
            }`}
            style={{ transitionDuration: "300ms" }}
        >
            <Link
                to="/categories/all"
                onClick={() => handleLinkClick("/categories/all")}
                className="pl-2 block text-left w-full rounded px-2 py-1 hover:bg-gray-200 hover:scale-105 hover:opacity-80 transition-transform duration-300"
            >
                All Poses
            </Link>
            <CategorySection
                title="Find Pose by Type"
                items={categories.type}
                sectionKey="type"
            />
            <CategorySection
                title="Find Pose by Benefit"
                items={categories.benefit}
                sectionKey="benefit"
            />
            <CategorySection
                title="Find Pose by Body Part"
                items={categories.part}
                sectionKey="part"
            />
            <CategorySection
                title="Find Pose by Chakra"
                items={categories.chakra}
                sectionKey="chakra"
            />
        </div>
    </div>
);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (drawerRef.current && !drawerRef.current.contains(event.target)) {
                setOpenSections({});
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div ref={drawerRef} className="flex flex-col min-w-[16rem] max-w-full p-2 bg-gray-100">
            <Link
                to="/beginners-guide"
                onClick={() => handleLinkClick("/beginners-guide")}
                className="hover:bg-gray-200 hover:scale-105 hover:opacity-80 transition-transform duration-300 rounded px-2 py-1"
            >
                Start Here
            </Link>
            <Link
                to="/eightlimbedpathofyoga"
                onClick={() => handleLinkClick("/eightlimbedpathofyoga")}
                className="hover:bg-gray-200 hover:scale-105 hover:opacity-80 transition-transform duration-300 rounded px-2 py-1"
            >
                8-Limbed Path
            </Link>
            <PosesListToggle /> 
            <Link
                to="/articles"
                onClick={() => handleLinkClick("/articles")}
                className="hover:bg-gray-200 hover:scale-105 hover:opacity-80 transition-transform duration-300 rounded px-2 py-1"
            >
                Newsletter
            </Link>
            <Link
                to="/resources"
                onClick={() => handleLinkClick("/resources")}
                className="hover:bg-gray-200 hover:scale-105 hover:opacity-80 transition-transform duration-300 rounded px-2 py-1"
            >
                Resources
            </Link>
        </div>
    );
};

export default Drawer;
