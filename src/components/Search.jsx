import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import posesData from "../data/poses.json";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPoses, setFilteredPoses] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const searchRef = useRef(null);

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
      setSearchTerm("");
      setFilteredPoses([]);
      setIsDropdownOpen(false);
    }
  };

  const handleInputChange = (e) => {
    const query = e.target.value.trim().toLowerCase();
    setSearchTerm(query);

    if (query) {
      const results = posesData.filter((pose) =>
        pose.name.toLowerCase().includes(query)
      );
      setFilteredPoses(results);
      setIsDropdownOpen(true);
    } else {
      setFilteredPoses([]);
      setIsDropdownOpen(false);
    }
  };

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
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
          className="border-b-2 border-gray-300 focus:outline-none focus:border-black px-2 py-1 w-64"
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
                    navigate(`/pose/${pose.id}`);
                    setIsDropdownOpen(false);
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
