import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import posesData from "../data/poses.json";

const CategoryPage = () => {
  const { categoryType, categoryValue } = useParams();
  const [filteredPoses, setFilteredPoses] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (categoryType && categoryValue) {
      const matchingPoses = posesData.filter((pose) =>
        pose[categoryType]?.some((item) => item.toLowerCase() === categoryValue.toLowerCase())
      );
      setFilteredPoses(matchingPoses);
    }
  }, [categoryType, categoryValue]);

  const formattedCategoryValue = categoryValue.charAt(0).toUpperCase() + categoryValue.slice(1);

  return (
    <div className="p-6">
      <h2 className="text-4xl mb-1">
        {categoryType === "type"
          ? `Explore ${formattedCategoryValue} Yoga Poses`
          : `Explore Yoga Poses for ${formattedCategoryValue}`}
      </h2>

      {filteredPoses.length === 0 ? (
        <p>No poses found for this category.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 py-8">
          {filteredPoses.map((pose) => (
            <div key={pose.id} className="hover:underline">
              <Link to={`/pose/${pose.id}`}>
                <div className="flex flex-col items-center">
                  {pose.image ? (
                    <img
                      src={pose.image}
                      alt={pose.name}
                      className="mb-2 w-32 h-32 object-cover rounded-lg"
                    />
                  ) : (
                    <div className="mb-2 w-32 h-32 flex items-center justify-center bg-gray-50 rounded-lg"></div>
                  )}
                  <span>{pose.name}</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
