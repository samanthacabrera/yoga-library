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
    standing: "These yoga poses focus on grounding and stability, building strength and balance from a standing position.",
    inversion: "These yoga poses flip your perspective by bringing the heart above the head, improving circulation and focus.",
    strength: "These yoga poses build muscular endurance and resilience through dynamic and sustained engagement.",
    prone: "These yoga poses are performed face-down, strengthening the back, shoulders, and core while grounding the body.",
    arm_balance: "These yoga poses challenge balance and strength by lifting the body off the ground using the arms.",
    backbend: "These yoga poses open the front body and strengthen the spine, promoting flexibility and energy flow.",
    restorative: "These yoga poses encourage deep relaxation, using props and gentle stretches to soothe the mind and body.",
    forward_fold: "These yoga poses calm the mind and stretch the back of the body, improving flexibility and relaxation.",
    lunge: "These yoga poses strengthen the legs and hips while improving balance and alignment.",
    balance: "These yoga poses cultivate focus and stability by challenging your equilibrium in a variety of postures.",
    hip_opener: "These yoga poses release tension in the hips, promoting flexibility and emotional release.",
    twist: "These yoga poses detoxify and energize the body by gently rotating the spine and massaging internal organs.",
    kneeling: "These yoga poses are performed on the knees, providing a stable base for strength and alignment work.",
    squat: "These yoga poses build lower-body strength and flexibility, supporting the hips and spine.",
    seated: "These yoga poses are practiced sitting down, promoting focus, alignment, and flexibility.",
    stretch: "These yoga poses focus on elongating muscles and improving overall flexibility and mobility.",
    supine: "These yoga poses are performed lying on your back, encouraging relaxation and gentle stretching."
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
    root: "The Root Chakra, located at the base of the spine, is associated with grounding and stability. These yoga poses help you feel secure and balanced, building a strong connection to the earth and creating a foundation for your practice.",
    sacral: "The Sacral Chakra, located just below the navel, governs creativity and emotional flow. These yoga poses encourage self-expression, unlock tension in the hips and lower abdomen, and inspire creative energy.",
    solar_plexus: "The Solar Plexus Chakra, located in the upper abdomen, represents personal power and confidence. These yoga poses strengthen the core, build inner resilience, and help you feel empowered and in control.",
    heart: "The Heart Chakra, located in the center of the chest, is linked to love, compassion, and emotional healing. These yoga poses open the chest and shoulders, promoting kindness, self-acceptance, and the release of emotional tension.",
    throat: "The Throat Chakra, located in the throat area, governs communication and self-expression. These yoga poses focus on the neck, shoulders, and throat, encouraging you to speak your truth with clarity and confidence.",
    third_eye: "The Third Eye Chakra, located between the eyebrows, is associated with intuition and insight. These yoga poses promote mental clarity, inner awareness, and a deeper connection to your wisdom and imagination.",
    crown: "The Crown Chakra, located at the top of the head, represents spiritual connection and enlightenment. These yoga poses encourage mindfulness, alignment with your higher self, and a sense of oneness with the universe."
  },
  part: {
    spine: "These yoga poses support spinal health, improve alignment, and enhance flexibility in your back.",
    legs: "These yoga poses strengthen and stretch the legs, promoting stability and mobility.",
    arms: "These yoga poses build strength and endurance in the arms while improving flexibility.",
    shoulders: "These yoga poses release tension and enhance strength and mobility in the shoulders.",
    core: "These yoga poses engage and strengthen the core muscles for better stability and balance.",
    chest: "These yoga poses open the chest, improve posture, and encourage deeper breathing.",
    hips: "These yoga poses release tension and improve flexibility and openness in the hips.",
    side_body: "These yoga poses stretch and strengthen the side body, improving lateral flexibility.",
    glutes: "These yoga poses target the glutes to enhance strength, stability, and support for the hips.",
    back: "These yoga poses alleviate back tension, improve flexibility, and support a healthy spine.",
    thighs: "These yoga poses tone and strengthen the thighs while enhancing flexibility and stamina."
  }
};

const CategoryPage = () => {
  const [categories, setCategories] = useState([]);
  const { categoryType, categoryValue } = useParams();
  const [filteredPoses, setFilteredPoses] = useState(posesData);
  const [activeCategories, setActiveCategories] = useState({
    all: false,
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
    if (categoryType === "all") {
      setActiveCategories((prevState) => ({
        type: false,
        benefit: false,
        chakra: false,
        part: false,
        all: !prevState.all, 
      }));
    }
    if (categoryType === "close") {
      setActiveCategories(() => ({
        all: false,
        type: false,
        benefit: false,
        chakra: false,
        part: false,
        }));
    }
    else {
      setActiveCategories((prevState) => ({
        ...prevState,
        [categoryType]: !prevState[categoryType],
        all: false, 
      }));
    }
  };

  const getHeadingText = () => {
    if (categoryType && categoryValue) {
      const formattedValue = categoryValue
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");
        
      if (categoryType === "type") {
        return `${formattedValue} Yoga Poses`;
      } else if (categoryType === "benefit") {
        return `Yoga Poses to ${formattedValue}`;
      } else if (categoryType === "chakra") {
        return `Poses for the ${formattedValue} Chakra`;
      } else if (categoryType === "part") {
        return `Poses for the ${formattedValue}`;
      }
    }
    return "All Yoga Poses";
  };

  const getDescText = () => {
    if (categoryType && categoryValue) {
       const formattedValue = categoryValue.toLowerCase().replace(/\s+/g, '_');
    return categoryDescriptions[categoryType]?.[formattedValue] || "";
    }
    return "Here are the top 50 yoga poses. These carefully selected poses will help you build a solid foundation in your practice, improve flexibility, increase strength, and promote mindfulness.";
  };

  return (
    <div className="flex flex-col min-h-screen w-full max-w-3xl space-y-8 px-8 py-4 mx-auto">
     <h1 className="heading text-center mt-20 py-12 text-4xl lg:text-9xl">Yoga Pose Directory</h1>

      <div className="flex gap-2 justify-center text-sm lg:text-lg">
        <Link to="/poses">
          <button
            onClick={() => toggleCategory("all")}
            className={`px-6 py-2 font-medium tracking-wide text-charcoal lowercase border rounded-md transition-all duration-300
              ${
                activeCategories.all
                  ? "bg-moss text-white border-moss"
                  : "bg-transparent border-charcoal border-opacity-70"
              } 
              hover:bg-moss hover:bg-opacity-70 hover:text-white hover:border-moss focus:outline-none focus:ring-4 focus:ring-moss focus:ring-opacity-30`}
          >
            All
          </button>
        </Link>

        {["type", "benefit", "chakra", "part"].map((categoryType) => (
          <button
            key={categoryType}
            onClick={() => toggleCategory(categoryType)}
            className={`px-6 py-2 font-medium tracking-wide text-charcoal lowercase border rounded-md transition-all duration-300 
              ${
                activeCategories[categoryType]
                  ? "bg-moss text-white border-moss"
                  : "bg-transparent border-charcoal border-opacity-70"
              } 
              hover:bg-moss hover:bg-opacity-70 hover:text-white hover:border-moss focus:outline-none focus:ring-4 focus:ring-moss focus:ring-opacity-30`}
          >
            {categoryType.charAt(0).toUpperCase() + categoryType.slice(1)}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-4 mt-8">
        {categories.map(
          (category) =>
            activeCategories[category.type] && (
              <div key={category.type} className="w-full">
                <h4 className="text-lg lg:text-2xl tracking-wide text-charcoal mb-4">
                  {category.type}
                </h4>
                <div className="flex flex-wrap gap-3">
                  {category.values.map((value) => (
                    <Link
                      key={value}
                      onClick={() => toggleCategory("close")}
                      to={`/poses/${category.type}/${value.toLowerCase()}`}
                      className="px-3 py-1 text-xs lg:text-sm rounded-full border border-charcoal bg-white bg-opacity-50 text-charcoal tracking-tight transition-all duration-200 hover:bg-moss hover:text-white hover:border-moss"
                    >
                      {value}
                    </Link>
                  ))}
                </div>
              </div>
            )
        )}
      </div>

      <h2 className="text-xl lg:text-6xl pt-12 text-center tracking-wider">{getHeadingText()}</h2>
      <p className="text-charcoal tracking-wider leading-loose">{getDescText()}</p>

      {filteredPoses.length === 0 ? (
        <p className="text-lg font-bold text-black bg-moss p-4 text-center">
          No poses found for this category.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-8">
          {filteredPoses.map((pose) => (
            <div
              key={pose.id}
              className="relative p-4 border bg-white bg-opacity-50 rounded shadow hover:shadow-lg transition-shadow duration-300"
            >
              <Link to={`/poses/${pose.name}`} className="group flex flex-col items-center">
                {pose.image ? (
                  <img
                    src={pose.image}
                    alt={pose.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-96 sm:h-72 md:h-48 lg:h-32 flex items-center justify-center bg-gray-100">
                    <span className="text-xs opacity-30">No Image</span>
                  </div>
                )}
                <span className="mt-2 lowercase tracking-wide text-center leading-relaxed group-hover:text-moss transition-all duration-300">
                  {pose.name}
                </span>
              </Link>
            </div>
          ))}
        </div>
      )}


      <div className="flex flex-col text-sm opacity-50">
        <a href="https://www.flaticon.com/free-icons/workout" title="workout icons">Workout icons created by dDara - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/yoga" title="yoga icons">Yoga icons created by monkik - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/lunge" title="lunge icons">Lunge icons created by Eideticmemo - Flaticon</a>
      </div>
    </div>
  );
};

export default CategoryPage;
