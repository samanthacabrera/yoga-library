import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import posesData from "../data/poses.json";

const pages = [
  { name: "Overview", path: "/what-is-yoga/overview" },
  { name: "Beginner's Guide", path: "/what-is-yoga/beginners-guide" },
  { name: "The Eight-Limbed Path", path: "/what-is-yoga/eight-limbed-path" },
  { name: "The Three Gunas", path: "/what-is-yoga/three-gunas" },
  { name: "The Seven Chakras", path: "/what-is-yoga/seven-chakras" },
  { name: "Newsletter", path: "/newsletter" },
  { name: "Resources", path: "/resources" },
  { name: "Privacy Policy", path: "/privacy-policy" },
];

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const searchRef = useRef(null);

  useEffect(() => {
    sessionStorage.removeItem("searchTerm");
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();
    if (filteredResults.length > 0) {
      navigate(filteredResults[0].path);
    }
    resetSearch();
  };

  const handleInputChange = (e) => {
    const query = e.target.value.trim().toLowerCase();
    setSearchTerm(query);
    
    if (query) {
      const poseMatches = posesData
        .filter((pose) => pose.name.toLowerCase().includes(query))
        .map((pose) => ({ name: pose.name, path: `/poses/${pose.name}` }));

      const pageMatches = pages.filter((page) =>
        page.name.toLowerCase().includes(query)
      );

      setFilteredResults([...poseMatches, ...pageMatches]);
      setIsDropdownOpen(true);
    } else {
      resetSearch();
    }
  };

  const resetSearch = () => {
    setSearchTerm("");
    setFilteredResults([]);
    setIsDropdownOpen(false);
  };

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      resetSearch();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={searchRef} className="m-2">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="search"
          className="w-[200px] lg:w-[300px] border-b-2 border-moss focus:placeholder-charcoal focus:outline-none tracking-wider"
        />
      </form>
      {isDropdownOpen && (
        <ul className="z-50 absolute right-0 w-fit bg-moss text-white m-2 rounded-2xl py-4 space-y-4">
          {filteredResults.map((result, index) => (
            <li key={index}>
              <button
                onClick={() => navigate(result.path)}
                className="block w-full px-12 w-[200px] lg:w-[300px] tracking-wide hover:scale-105 hover:bg-white hover:text-moss transition-all duration-300 ease-in-out rounded"
              >
                {result.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
