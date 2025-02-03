import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import posesData from "../data/poses.json";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState(() => sessionStorage.getItem("searchTerm") || "");
  const [filteredPoses, setFilteredPoses] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const searchRef = useRef(null);

  useEffect(() => {
    sessionStorage.removeItem("searchTerm"); 
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();
    const trimmedSearchTerm = searchTerm.trim().toLowerCase();

    if (trimmedSearchTerm) {
      if (trimmedSearchTerm.includes(" ")) {
        const [categoryType, ...categoryValueArr] = trimmedSearchTerm.split(" ");
        const categoryValue = categoryValueArr.join(" ");
        navigate(`/categories/${categoryType.toLowerCase()}/${categoryValue.toLowerCase()}`);
      } else {
        navigate(`/pose/${trimmedSearchTerm.toLowerCase()}`);
      }
    }
    resetSearch();
  };

  const handleInputChange = (e) => {
    const query = e.target.value.trim().toLowerCase();
    setSearchTerm(query);
    sessionStorage.setItem("searchTerm", query);

    if (query) {
      const results = posesData.filter((pose) =>
        pose.name.toLowerCase().includes(query)
      );
      setFilteredPoses(results);
      setIsDropdownOpen(true);
    } else {
      resetSearch();
    }
  };

  const resetSearch = () => {
    setSearchTerm("");
    setFilteredPoses([]);
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
    <div ref={searchRef} className="absolute right-1 z-10 bg-white">
      <form onSubmit={handleSearch} className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Search for poses"
          className="border-b-2 border-gray-300 focus:outline-none focus:border-moss px-2 py-1"
        />
        <button type="submit" className="absolute right-0 top-0 p-2"></button>
      </form>

      {isDropdownOpen && filteredPoses.length > 0 && (
        <div className="mt-2">
          <ul className="space-y-2">
            {filteredPoses.map((pose) => (
              <li key={pose.id}>
                <button
                  onClick={() => {
                    navigate(`/poses/${pose.name}`);
                    resetSearch();
                  }}
                  className="hover:underline"
                >
                  {pose.name}
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
