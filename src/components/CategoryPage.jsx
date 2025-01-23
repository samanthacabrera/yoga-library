import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import posesData from "../data/poses.json";

const extractCategories = (data, categoryType) => {
  const categories = new Set();
  data.forEach((pose) => {
    pose[categoryType]?.forEach((item) => {
      categories.add(item);
    });
  });
  return Array.from(categories);
};

const categoryDescriptions = {
  type: {
    
  },
  benefit: {
    improve_posture: "These yoga poses enhance spinal alignment and body mechanics for better posture.",
    increase_awareness: "These yoga poses cultivate mindfulness and a deeper connection to your body and breath.",
    improve_balance: "These yoga poses strengthen stability and coordination for improved physical balance.",
    tone_muscles: "These yoga poses shape and define muscles through targeted engagement.",
    boost_circulation: "These yoga poses encourage blood flow, delivering oxygen and nutrients throughout the body.",
    improve_flexibility: "These yoga poses increase range of motion and elasticity in muscles and joints.",
    build_stability: "These yoga poses develop core strength and provide a solid foundation for steady movement.",
    boost_confidence: "These yoga poses promote self-assurance and inner strength through accomplishment.",
    increase_flexibility: "These yoga poses enhance adaptability and reduce tension in muscles and joints.",
    boost_energy: "These yoga poses recharge the body and mind by stimulating energy flow.",
    reduce_stress: "These yoga poses relax the mind and body, lowering stress levels and promoting calm.",
    restore_energy: "These yoga poses rejuvenate vitality and replenish your natural reserves.",
    enhance_focus: "These yoga poses sharpen concentration and mental clarity for better presence.",
    enhance_stamina: "These yoga poses build endurance and resilience for sustained physical activity.",
    build_strength: "These yoga poses strengthen muscles and support overall physical power.",
    relieve_tension: "These yoga poses ease tightness and discomfort in muscles and joints.",
    improve_circulation: "These yoga poses optimize blood flow for better health and vitality.",
    enhance_openness: "These yoga poses foster emotional and physical openness for deeper connections.",
    enhance_relaxation: "These yoga poses promote a state of deep rest and tranquility."
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
  const [categories, setCategories] = useState([]);
  const { categoryType, categoryValue } = useParams();
  const [filteredPoses, setFilteredPoses] = useState(posesData);
  const [activeCategories, setActiveCategories] = useState({
    type: false,
    benefit: false,
    chakra: false,
    part: false,
  });

  useEffect(() => {
    const uniqueCategories = [];
    ["type", "benefit", "chakra", "part"].forEach((categoryType) => {
      const categoryItems = extractCategories(posesData, categoryType);
      uniqueCategories.push({ type: categoryType, values: categoryItems });
    });
    setCategories(uniqueCategories);
  }, []);

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

  const toggleCategory = (categoryType) => {
    setActiveCategories((prevState) => ({
      ...prevState,
      [categoryType]: !prevState[categoryType],
    }));
  };

  const getHeadingText = () => {
    if (categoryType && categoryValue) {
      const formattedValue = categoryValue.charAt(0).toUpperCase() + categoryValue.slice(1);
      if (categoryType === "type") {
        return `Explore ${formattedValue} Yoga Poses`;
      } else if (categoryType === "benefit") {
        return `Explore Yoga Poses to ${formattedValue}`;
      } else if (categoryType === "chakra") {
        return `Explore Poses for the ${formattedValue} Chakra`;
      } else if (categoryType === "part") {
        return `Explore Poses for the ${formattedValue}`;
      }
    }
    return "Explore All Yoga Poses";
  };

  const getDescText = () => {
    if (categoryType && categoryValue) {
       const formattedValue = categoryValue.toLowerCase().replace(/\s+/g, '_');
    return categoryDescriptions[categoryType]?.[formattedValue] || "";
    }
    return "Here are the top 50 yoga poses. These carefully selected poses will help you build a solid foundation in your practice, improve flexibility, increase strength, and promote mindfulness.";
  };

  return (
    <div className="flex flex-col min-h-screen w-full max-w-3xl space-y-8 p-8 mx-auto">

      <h2 className="text-4xl">Yoga Pose Categories</h2>
      <div className="flex gap-4">
        {["type", "benefit", "chakra", "part"].map((categoryType) => (
          <button
            key={categoryType}
            onClick={() => toggleCategory(categoryType)}
            className={`px-4 py-0 border rounded-lg ${activeCategories[categoryType] ? 'bg-gray-200' : 'bg-gray-100'}`}
          >
            {categoryType.charAt(0).toUpperCase() + categoryType.slice(1)}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-1">
        {categories.map((category) => (
          activeCategories[category.type] && (
            <div key={category.type}>
              <h4>{category.type.charAt(0).toUpperCase() + category.type.slice(1)}</h4>
              <div className="flex flex-wrap gap-2">
                {category.values.map((value) => (
                  <Link
                    key={value}
                    to={`/categories/${category.type}/${value.toLowerCase()}`}
                    className="px-2 py-1 bg-gray-100 text-sm border rounded-lg hover:bg-gray-200 transition"
                  >
                    {value}
                  </Link>
                ))}
              </div>
            </div>
          )
        ))}
      </div>

      <h2 className="text-4xl">{getHeadingText()}</h2>
      <p className="text-lg text-gray-600">{getDescText()}</p>

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
