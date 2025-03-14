import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

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
    <div className="fixed top-0 left-0 h-full flex items-center z-40">
      {/* Toggle Button */}
      <button
        ref={buttonRef}
        onClick={toggleDrawer}
        className={`absolute top-4 bg-transparent border-none focus:outline-none transition-all duration-300 ease-in-out
        ${isDrawerOpen ? "left-56" : "left-4"}`}
        aria-label={isDrawerOpen ? "Close menu" : "Open menu"}
      >
        {isDrawerOpen ? (
          <X size={20} className="hidden" />
        ) : (
          <Menu size={20} className="text-charcoal/60 hover:text-charcoal transition-all duration-300" />
        )}
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
        className={`fixed left-0 top-0 h-full flex flex-col w-64 bg-moss shadow transition-all duration-700 ease-in-out z-50
        ${isDrawerOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Close Button */}
        <button
          onClick={toggleDrawer}
          className="absolute top-4 right-4 text-charcoal/60 hover:text-charcoal transition-all duration-300"
          aria-label="Close menu"
        >
          <X size={20} className="text-white/50 hover:text-charcoal transition-all duration-300" />
        </button>
        {/* Logo */}
        <div className="p-4 mt-4 border-b border-white/10">
          <a href="/" className="block text-white/80 hover:text-white text-center font-light tracking-widest py-2">
            Learn Yoga Online
          </a>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 p-4 overflow-y-auto">
          <ul className="space-y-6 py-4">
            {menuItems.map((item, index) => (
              <li key={index} className="relative">
                <Link to={item.to} className="block text-center py-2 font-light tracking-wider
                  transition-all duration-500 ease-in-out text-sm text-white/80
                  hover:text-white relative group"
                >
                  <span className="relative inline-block px-6 pb-2">
                    {item.label}
                    <span className="absolute -bottom-1 left-1/2 w-0 h-px bg-white/60 transition-all duration-700 ease-out group-hover:w-full group-hover:left-0"></span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <div className="mt-auto p-4 border-t border-white/10 ">
          <p className="text-xs font-light text-white/70">
            Have feedback? Contact me at
            <a 
              href="mailto:samantha.n.cabrera@gmail.com"
              className="block mt-1 tracking-wide text-white/80 hover:text-white transition-all duration-500 ease-in-out overflow-visible whitespace-normal"
            >
              samantha.n.cabrera@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Drawer;