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
    <div className="fixed top-0 left-0 h-full flex items-center z-50">
      {/* Drawer Toggle Button */}
      <button
        ref={buttonRef}
        onClick={toggleDrawer}
        className={`absolute top-[25vh] transition-all duration-500 ease-in-out bg-moss text-white p-2 rounded-tr-xl rounded-br-xl shadow-md
          ${
            isDrawerOpen
              ? "left-[13rem]"
              : "left-0"
          }`}
      >
        <span className="text-sm transition-transform duration-500 ease-in-out">
          {isDrawerOpen ? "<<" : ">>"}
        </span>
      </button>

      {/* Drawer Content */}
      <div
        ref={drawerRef}
        className={`fixed left-0 top-0 h-full flex flex-col min-w-[13rem] p-4 bg-moss text-white rounded-r-2xl transition-all duration-500 ease-in-out
          ${
            isDrawerOpen
              ? "transform translate-x-0"
              : "transform -translate-x-full opacity-0"
          }`}
      >
        <Link to="/" className="text-center rounded-lg p-1 my-4 bg-white text-moss opacity-90 hover:opacity-100 transition-all duration-300 ease-in-out">Learn Yoga Online</Link>
        {[
          { label: "Start Here", to: "/what-is-yoga/beginners-guide" },
          { label: "What Is Yoga?", to: "/what-is-yoga/overview" },
          { label: "The 8-Limbed Path", to: "/what-is-yoga/eight-limbed-path" },
          { label: "The 7 Chakras", to: "/what-is-yoga/seven-chakras" },
          { label: "The 3 Gunas", to: "/what-is-yoga/three-gunas" },
          { label: "List of Poses", to: "/poses" },
          { label: "Newsletter", to: "/newsletter" },
          { label: "Resources", to: "/resources" },
        ].map((item, index) => (
          <Link
            key={index}
            to={item.to}
            className="text-center tracking-wider rounded transition-all my-4 duration-300 ease-in-out hover:scale-105 hover:bg-white hover:text-moss"
          >
            {item.label}
          </Link>
        ))}
        
        <div className="mt-auto border-t border-gray-300 pt-4">
          <p className="text-sm max-w-[8rem]">
            Have feedback? Contact me at{" "}
            <a href="mailto:samantha.n.cabrera@gmail.com"
              className="tracking-tighter italic underline hover:cursor-pointer"
            >
              samantha.n.cabrera@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
