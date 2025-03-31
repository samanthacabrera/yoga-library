import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import posesData from "../data/poses.json";
import { Search as SearchIcon, X, ArrowRight } from "lucide-react";

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
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const navigate = useNavigate();
  const searchRef = useRef(null);
  const inputRef = useRef(null);
  const resultsRef = useRef(null);

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

  const expandSearch = () => {
    setIsExpanded(true);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  };

  const handleInputChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchTerm(query);
    
    if (query) {
      const poseMatches = posesData
        .filter((pose) => pose.name.toLowerCase().includes(query))
        .slice(0, 5)
        .map((pose) => ({ 
          name: pose.name, 
          path: `/poses/${pose.name}`,
          type: "Pose"
        }));

      const pageMatches = pages
        .filter((page) => page.name.toLowerCase().includes(query))
        .map((page) => ({ 
          ...page,
          type: "Page" 
        }));

      setFilteredResults([...poseMatches, ...pageMatches]);
      setIsDropdownOpen(true);
      setActiveIndex(-1);
    } else {
      setFilteredResults([]);
      setIsDropdownOpen(false);
    }
  };

  const resetSearch = () => {
    setSearchTerm("");
    setFilteredResults([]);
    setIsDropdownOpen(false);
    setIsExpanded(false);
  };

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsExpanded(false);
      setIsDropdownOpen(false);
    }
  };

  const handleKeyDown = (e) => {
    if (filteredResults.length === 0) return;
    
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex(prev => 
        prev < filteredResults.length - 1 ? prev + 1 : 0
      );
    }
    else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex(prev => 
        prev > 0 ? prev - 1 : filteredResults.length - 1
      );
    }

    else if (e.key === "Enter" && activeIndex >= 0) {
      e.preventDefault();
      navigate(filteredResults[activeIndex].path);
      resetSearch();
    }

    else if (e.key === "Escape") {
      resetSearch();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchTerm]);

  useEffect(() => {
    if (activeIndex >= 0 && resultsRef.current) {
      const activeElement = resultsRef.current.children[activeIndex];
      if (activeElement) {
        activeElement.scrollIntoView({
          block: 'nearest',
          inline: 'start',
          behavior: 'smooth'
        });
      }
    }
  }, [activeIndex]);

  const groupedResults = filteredResults.reduce((acc, result) => {
    const type = result.type || 'Other';
    if (!acc[type]) acc[type] = [];
    acc[type].push(result);
    return acc;
  }, {});

  return (
    <div ref={searchRef} className="absolute right-4 z-50">
      <form onSubmit={handleSearch} className="relative">
        <div 
          className={`flex items-center transition-all duration-200 ease-out
            ${isExpanded 
              ? "rounded-lg bg-white/5 backdrop-blur-sm border border-moss/20 shadow-sm" 
              : "p-1 rounded-full hover:bg-white/5 hover:shadow-sm"}`}
          onClick={!isExpanded ? expandSearch : undefined}
        >
          <div className={`flex items-center transition-all duration-200 ${isExpanded ? "p-1" : "p-1.5"}`}>
            <SearchIcon className={`transition-all duration-200 ${isExpanded ? "w-4 h-4 ml-2 text-moss" : "w-4 h-4 text-moss/70"}`} />
          </div>
          
          <input
            ref={inputRef}
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Search..."
            className={`transition-all duration-200 ease-out text-sm bg-transparent focus:outline-none text-charcoal placeholder-moss/50
              ${isExpanded ? "w-40 lg:w-56 py-1.5 px-1 opacity-100" : "w-0 px-0 opacity-0"}`}
          />
          
          {searchTerm && isExpanded && (
            <button 
              onClick={resetSearch} 
              className="mr-2 text-moss/50 hover:text-moss transition-colors"
              aria-label="Clear search"
            >
              <X className="w-3 h-3" />
            </button>
          )}
        </div>
      </form>
      
      {isDropdownOpen && filteredResults.length > 0 && (
        <div className="absolute right-0 mt-1 w-full max-h-80 overflow-hidden bg-white/95 backdrop-blur-sm rounded-md shadow-md border border-moss/15 z-50">
          <div ref={resultsRef} className="max-h-80 overflow-y-auto py-1 divide-y divide-moss/10">
            {Object.entries(groupedResults).map(([type, results]) => (
              <div key={type} className="py-1">
                <div className="px-3 py-1 text-xs font-medium text-moss/80 uppercase tracking-wider">
                  {type}
                </div>
                
                {results.map((result, idx) => {
                  const resultIndex = filteredResults.findIndex(r => r.name === result.name && r.path === result.path);
                  const isActive = resultIndex === activeIndex;
                  
                  return (
                    <button
                      key={`${result.name}-${idx}`}
                      onClick={() => {
                        navigate(result.path);
                        resetSearch();
                      }}
                      onMouseEnter={() => setActiveIndex(resultIndex)}
                      className={`w-full text-left px-3 py-2 text-sm flex items-center justify-between group transition-all duration-150
                        ${isActive 
                          ? 'bg-moss/5 text-moss' 
                          : 'hover:bg-moss/5 hover:text-moss/90'}`}
                    >
                      <span className={`font-medium truncate transition-all duration-150 border-b border-transparent
                        ${isActive ? 'border-moss/30' : 'group-hover:border-moss/20'}`}>
                        {result.name}
                      </span>
                      
                      <ArrowRight 
                        className={`w-3 h-3 transition-all duration-150 
                          ${isActive ? 'opacity-80 text-moss' : 'opacity-0 group-hover:opacity-40 text-moss/70'}`} 
                      />
                    </button>
                  );
                })}
              </div>
            ))}
          </div>
          
          <div className="px-3 py-2 bg-moss/5 text-xs text-center text-moss/70 border-t border-moss/10">
            {filteredResults.length} result{filteredResults.length !== 1 ? 's' : ''} found
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;