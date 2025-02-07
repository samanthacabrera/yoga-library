import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import posesData from "../data/poses.json";

const pages = [
  { name: "Overview", path: "/what-is-yoga/overview" },
  { name: "Beginner's Guide", path: "/what-is-yoga/beginners-guide" },
  { name: "Eight-Limbed Path", path: "/what-is-yoga/eight-limbed-path" },
  { name: "Three Gunas", path: "/what-is-yoga/three-gunas" },
  { name: "Seven Chakras", path: "/what-is-yoga/seven-chakras" },
  { name: "Newsletter", path: "/newsletter" },
  { name: "Resources", path: "/resources" },
  { name: "Privacy Policy", path: "/privacy-policy" },
];

const Search = () => {
  const [searchTerm, setSearchTerm] = useState(() => sessionStorage.getItem("searchTerm") || "");
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
    sessionStorage.setItem("searchTerm", query);

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
    sessionStorage.removeItem("searchTerm");
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
    <div ref={searchRef} className="fixed top-2 right-2">
      <form onSubmit={handleSearch} className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Search..."
          className="border-b-2 border-gray-300 focus:outline-none focus:border-moss px-2 py-1"
        />
        <button type="submit" className="absolute right-0 top-0 p-2"></button>
      </form>

      {isDropdownOpen && filteredResults.length > 0 && (
        <div className="mt-2">
          <ul className="space-y-2">
            {filteredResults.map((result, index) => (
              <li key={index}>
                <button
                  onClick={() => {
                    navigate(result.path);
                    resetSearch();
                  }}
                  className="hover:underline"
                >
                  {result.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Search;
