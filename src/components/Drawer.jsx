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
    <>
      {/* Drawer toggle button */}
      <button
        ref={buttonRef}
        onClick={toggleDrawer}
        className={`absolute top-18 transition-all duration-300 ease-in-out ${
          isDrawerOpen ? "left-[12rem]" : "left-0"
        }`}
      >
        <div className="flex flex-col text-4xl opacity-50 p-2 bg-gray-200 rounded-tr-lg rounded-br-lg transition-transform duration-500 ease-in-out">
          {isDrawerOpen ? <span>&laquo;</span> : <span>&raquo;</span>}
        </div>
      </button>

      {/* Drawer content */}
      <div
        ref={drawerRef}
        className={`flex flex-col h-[25rem] min-w-[12rem] max-w-full p-2 bg-gray-100 rounded transition-all duration-300 ease-in-out ${
          isDrawerOpen
            ? "max-h-[25rem] opacity-100 visibility-visible pointer-events-auto"
            : "max-h-0 opacity-0 visibility-hidden pointer-events-none"
        }`}
        style={{ transitionDuration: "300ms" }}
      >
        <Link
          to="/beginners-guide"
          className="hover:bg-moss hover:text-white hover:scale-105 hover:opacity-80 transition-transform duration-300 rounded px-2 py-1"
        >
          Start Here
        </Link>
        <Link
          to="/what-is-yoga"
          className="hover:bg-moss hover:text-white hover:scale-105 hover:opacity-80 transition-transform duration-300 rounded px-2 py-1"
        >
          What Is Yoga?
        </Link>
        <Link
          to="/path-of-yoga"
          className="hover:bg-moss hover:text-white hover:scale-105 hover:opacity-80 transition-transform duration-300 rounded px-2 py-1"
        >
          The 8-Limbed Path
        </Link>
        <Link
          to="/three-gunas"
          className="hover:bg-moss hover:text-white hover:scale-105 hover:opacity-80 transition-transform duration-300 rounded px-2 py-1"
        >
          The 3 Gunas
        </Link>
        <Link
          to="/seven-chakras"
          className="hover:bg-moss hover:text-white hover:scale-105 hover:opacity-80 transition-transform duration-300 rounded px-2 py-1"
        >
          The 7 Chakras
        </Link>
        <Link
          to="/categories/all"
          className="hover:bg-moss hover:text-white hover:scale-105 hover:opacity-80 transition-transform duration-300 rounded px-2 py-1"
        >
          List of Poses
        </Link>
        <Link
          to="/articles"
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
    </>
  );
};

export default Drawer;
