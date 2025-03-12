// import React, { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";

// const Drawer = () => {
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);
//   const drawerRef = useRef(null);
//   const buttonRef = useRef(null);

//   const toggleDrawer = () => {
//     setIsDrawerOpen((prevState) => !prevState);
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         drawerRef.current &&
//         !drawerRef.current.contains(event.target) &&
//         buttonRef.current &&
//         !buttonRef.current.contains(event.target)
//       ) {
//         setIsDrawerOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <div className="fixed top-0 left-0 h-full flex items-center z-50">
//       {/* Drawer Toggle Button */}
//       <button
//         ref={buttonRef}
//         onClick={toggleDrawer}
//         className={`absolute top-[25vh] transition-all duration-500 ease-in-out bg-moss text-white p-2 rounded-tr-xl rounded-br-xl shadow-md
//           ${
//             isDrawerOpen
//               ? "left-[13rem]"
//               : "left-0"
//           }`}
//       >
//         <span className="text-sm transition-transform duration-500 ease-in-out">
//           {isDrawerOpen ? "<<" : ">>"}
//         </span>
//       </button>

//       {/* Drawer Content */}
//       <div
//         ref={drawerRef}
//         className={`fixed left-0 top-0 h-full flex flex-col min-w-[13rem] p-4 bg-moss text-white rounded-r-2xl transition-all duration-500 ease-in-out
//           ${
//             isDrawerOpen
//               ? "transform translate-x-0"
//               : "transform -translate-x-full opacity-0"
//           }`}
//       >
//         <Link to="/" className="text-center rounded-lg p-1 my-4 bg-white text-moss opacity-90 hover:opacity-100 transition-all duration-300 ease-in-out">Learn Yoga Online</Link>
//         {[
//           { label: "Start Here", to: "/what-is-yoga/beginners-guide" },
//           { label: "What Is Yoga?", to: "/what-is-yoga/overview" },
//           { label: "The 8-Limbed Path", to: "/what-is-yoga/eight-limbed-path" },
//           { label: "The 7 Chakras", to: "/what-is-yoga/seven-chakras" },
//           { label: "The 3 Gunas", to: "/what-is-yoga/three-gunas" },
//           { label: "List of Poses", to: "/poses" },
//           { label: "Newsletter", to: "/newsletter" },
//           { label: "Resources", to: "/resources" },
//         ].map((item, index) => (
//           <Link
//             key={index}
//             to={item.to}
//             className="text-center tracking-wider rounded transition-all my-4 duration-300 ease-in-out hover:scale-105 hover:bg-white hover:text-moss"
//           >
//             {item.label}
//           </Link>
//         ))}
        
//         <div className="mt-auto border-t border-gray-300 pt-4">
//           <p className="text-sm max-w-[8rem]">
//             Have feedback? Contact me at{" "}
//             <a href="mailto:samantha.n.cabrera@gmail.com"
//               className="tracking-tighter italic underline hover:cursor-pointer"
//             >
//               samantha.n.cabrera@gmail.com
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Drawer;

import { useState, useEffect, useRef } from 'react';

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
  
  const menuItems = [
    { label: "Start Here", to: "/what-is-yoga/beginners-guide" },
    { label: "What Is Yoga?", to: "/what-is-yoga/overview" },
    { label: "The 8-Limbed Path", to: "/what-is-yoga/eight-limbed-path" },
    { label: "The 7 Chakras", to: "/what-is-yoga/seven-chakras" },
    { label: "The 3 Gunas", to: "/what-is-yoga/three-gunas" },
    { label: "List of Poses", to: "/poses" },
    { label: "Newsletter", to: "/newsletter" },
    { label: "Resources", to: "/resources" },
  ];

  return (
    <div className="fixed top-0 left-0 h-full flex items-center z-50">
     {/* Toggle Button */}
    <button
      ref={buttonRef}
      onClick={toggleDrawer}
      className={`absolute top-8 z-50 transition-all duration-700 ease-in-out
      flex items-center justify-center w-12 h-12 rounded-r-2xl bg-moss focus:outline-none
      ${isDrawerOpen 
        ? "left-64" 
        : "left-0"}`}
      aria-label={isDrawerOpen ? "Close menu" : "Open menu"}
    >
      <div className="bg-moss border border-moss/20 w-1.5 h-1.5 rounded-full bg-moss bg-white
        transition-all duration-300 ease-in-out"
      ></div>
    </button>

      {/* Overlay */}
      {isDrawerOpen && (
        <div 
          className="fixed inset-0 bg-charcoal/20 backdrop-blur-sm transition-opacity duration-500"
          onClick={() => setIsDrawerOpen(false)}
        />
      )}

      {/* Drawer Content */}
      <div
        ref={drawerRef}
        className={`fixed left-0 top-0 h-full flex flex-col w-64 
        bg-moss shadow-lg transition-all duration-700 ease-in-out z-50
        ${isDrawerOpen
          ? "transform translate-x-0"
          : "transform -translate-x-full"
        }`}
      >
        <div className="absolute top-0 right-0 left-0 h-32 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full opacity-5 transform translate-x-16 -translate-y-24"></div>
          <div className="absolute top-0 left-0 w-16 h-16 bg-white rounded-full opacity-5 transform -translate-x-8 -translate-y-8"></div>
        </div>
        
        {/* Logo */}
        <div className="p-4 mt-4 border-b border-white/10 relative">
          <a 
            href="/" 
            className="block text-white/80 hover:text-white hover:scale-[101%] transition-all duration-200 ease-in-out text-center font-light tracking-widest py-2"
          >
            <span className="text-lg relative inline-block">
              Learn Yoga Online
              <span className="absolute -bottom-1 left-1/2 w-0 h-px bg-white/60 transition-all duration-700 ease-out group-hover:w-full group-hover:left-0"></span>
            </span>
          </a>
        </div>
        
        {/* Nav Links */}
        <nav className="flex-1 px-8 py-10 overflow-y-auto">
          <ul className="space-y-6">
            {menuItems.map((item, index) => (
              <li key={index} className="relative">
                <a
                  href={item.to}
                  className="block text-center py-2 font-light tracking-wider
                  transition-all duration-500 ease-in-out text-sm text-white/80
                  hover:text-white relative group"
                >
                  <span className="relative inline-block px-6 pb-2">
                    {item.label}
                    <span className="absolute -bottom-1 left-1/2 w-0 h-px bg-white/60 transition-all duration-700 ease-out group-hover:w-full group-hover:left-0"></span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="absolute bottom-32 right-0 w-16 h-16 bg-white rounded-full opacity-5 transform translate-x-8"></div>
        
        {/* Contact */}
        <div className="px-6 py-8 mt-auto border-t border-white/10 text-center relative">
          <p className="text-xs font-light text-white/70">
            Have feedback? Contact me at
            <a 
              href="mailto:samantha.n.cabrera@gmail.com"
              className="block mt-1 tracking-wide text-white/80 hover:text-white transition-all duration-500 ease-in-out overflow-visible whitespace-normal"
            >
              samantha.n.cabrera@gmail.com
            </a>
          </p>
          <div className="absolute bottom-0 left-0 w-16 h-16 bg-white rounded-full opacity-5 transform -translate-x-8 translate-y-8"></div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;