import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Drawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const drawerRef = useRef(null); 
  const buttonRef = useRef(null); 

  const toggleDrawer = () => {
    setIsDrawerOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsDrawerOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      {/* Drawer toggle button */}
      <button
        ref={buttonRef}
        onClick={toggleDrawer}
        className={`absolute top-1/4 transition-all duration-300 ease-in-out z-50 ${
          isDrawerOpen ? "left-[12rem]" : "left-0"
        }`}
      >
        <div className="flex flex-col text-4xl text-gray-500 p-2 bg-gray-100 shadow rounded-tr-lg rounded-br-lg transition-transform duration-500 ease-in-out">
          {isDrawerOpen ? <span>&laquo;</span> : <span>&raquo;</span>}
        </div>
      </button>

      {/* Drawer content */}
      <div
        ref={drawerRef}
        className={`absolute top-1/4 left-0 flex flex-col h-[25rem] min-w-[12rem] max-w-full p-2 bg-gray-100 rounded transition-all duration-300 ease-in-out ${
          isDrawerOpen
            ? "transform translate-x-0"
            : "transform -translate-x-full"
        }`}
        style={{ transitionDuration: "300ms", zIndex: 50 }}
      >
        <Link
          to="/what-is-yoga/beginners-guide"
          className="hover:bg-moss hover:text-white hover:scale-105 hover:opacity-80 transition-transform duration-300 rounded px-2 py-1"
        >
          Start Here
        </Link>
        <Link
          to="/what-is-yoga/overview"
          className="hover:bg-moss hover:text-white hover:scale-105 hover:opacity-80 transition-transform duration-300 rounded px-2 py-1"
        >
          What Is Yoga?
        </Link>
        <Link
          to="/what-is-yoga/eight-limbed-path"
          className="hover:bg-moss hover:text-white hover:scale-105 hover:opacity-80 transition-transform duration-300 rounded px-2 py-1"
        >
          The 8-Limbed Path
        </Link>
        <Link
          to="/what-is-yoga/three-gunas"
          className="hover:bg-moss hover:text-white hover:scale-105 hover:opacity-80 transition-transform duration-300 rounded px-2 py-1"
        >
          The 3 Gunas
        </Link>
        <Link
          to="/what-is-yoga/seven-chakras"
          className="hover:bg-moss hover:text-white hover:scale-105 hover:opacity-80 transition-transform duration-300 rounded px-2 py-1"
        >
          The 7 Chakras
        </Link>
        <Link
          to="/poses"
          className="hover:bg-moss hover:text-white hover:scale-105 hover:opacity-80 transition-transform duration-300 rounded px-2 py-1"
        >
          List of Poses
        </Link>
        <Link
          to="/newsletter"
          className="hover:bg-moss hover:text-white hover:scale-105 hover:opacity-80 transition-transform duration-300 rounded px-2 py-1"
        >
          Newsletter
        </Link>
        <Link
          to="/resources"
          className="hover:bg-moss hover:text-white hover:scale-105 hover:opacity-80 transition-transform duration-300 rounded px-2 py-1"
        >
          Resources
        </Link>
      </div>
    </div>
  );
};

export default Drawer;
