import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import posesData from "../data/poses.json";

const CategoryPage = () => {
  const { categoryType, categoryValue } = useParams();
  const [filteredPoses, setFilteredPoses] = useState([]);

  useEffect(() => {
    if (categoryType && categoryValue) {
      const matchingPoses = posesData.filter((pose) =>
        pose[categoryType]?.some(item => item.toLowerCase() === categoryValue.toLowerCase())
      );
      setFilteredPoses(matchingPoses);
    }
  }, [categoryType, categoryValue]);

  const formattedCategoryValue = categoryValue.charAt(0).toUpperCase() + categoryValue.slice(1);

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">
        {categoryType === "type"
          ? `Explore ${formattedCategoryValue} Yoga Poses`
          : `Explore Yoga Poses for ${formattedCategoryValue}`}
      </h2>
      
      {filteredPoses.length === 0 ? (
        <p>No poses found for this category.</p>
      ) : (
        <ul className="space-y-2">
          {filteredPoses.map((pose) => (
            <li key={pose.id}>
              <Link to={`/pose/${pose.id}`} className="hover:underline">
                {pose.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CategoryPage;
