import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import posesData from "../data/poses.json";

const categoryDescriptions = {
  type: {
    
  },
  benefit: {
    
  },
  chakra: {
    root: "The Root Chakra, located at the base of the spine, is associated with grounding, stability, and a sense of security. Practices for the Root Chakra focus on connection to the earth and cultivating inner strength.",
    sacral: "The Sacral Chakra, located just below the navel, governs creativity, sensuality, and emotional expression. Practices for this chakra encourage emotional healing and creative flow.",
    solar_plexus: "The Solar Plexus Chakra, located in the upper abdomen, represents personal power, confidence, and transformation. Practices for this chakra build inner strength and self-esteem.",
    heart: "The Heart Chakra, located in the chest, is associated with love, compassion, and emotional balance. Practices for the Heart Chakra promote kindness, forgiveness, and openness.",
    throat: "The Throat Chakra, located in the throat area, governs communication and self-expression. Practices for this chakra encourage authentic communication and the free flow of words.",
    third_eye: "The Third Eye Chakra, located between the eyebrows, is associated with intuition, wisdom, and spiritual insight. Practices for the Third Eye Chakra enhance mental clarity and perception.",
    crown: "The Crown Chakra, located at the top of the head, represents spiritual connection and enlightenment. Practices for this chakra encourage connection to higher consciousness and divine wisdom."
  },
  part: {
    
  }
};

const CategoryPage = () => {
  const { categoryType, categoryValue } = useParams();
  const [filteredPoses, setFilteredPoses] = useState(posesData);

  useEffect(() => {
    window.scrollTo(0, 0);

    if (categoryType && categoryValue) {
      const matchingPoses = posesData.filter((pose) =>
        pose[categoryType]?.some((item) => item.toLowerCase() === categoryValue.toLowerCase())
      );
      setFilteredPoses(matchingPoses);
    } else {
      setFilteredPoses(posesData); 
    }
  }, [categoryType, categoryValue]);

  const getHeadingText = () => {
    if (categoryType && categoryValue) {
      const formattedValue = categoryValue.charAt(0).toUpperCase() + categoryValue.slice(1);
      return categoryType === "type"
        ? `Explore ${formattedValue} Yoga Poses`
        : `Explore Yoga Poses for ${formattedValue}`;
    }
    return "Explore All Yoga Poses";
  };

  const getDescText = () => {
    if (categoryType && categoryValue) {
       const formattedValue = categoryValue.toLowerCase().replace(/\s+/g, '_');
    return categoryDescriptions[categoryType]?.[formattedValue] || "No description available for this category.";
    }
    return "Select a category to explore more.";
  };

  return (
    <div className="min-h-[85vh] p-6">
      <h2 className="text-4xl mb-1">{getHeadingText()}</h2>
      <p className="text-lg text-gray-600 mb-6">{getDescText()}</p>

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
