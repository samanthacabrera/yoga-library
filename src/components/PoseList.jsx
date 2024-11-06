import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import posesData from '../data/poses.json';

const PoseList = () => {
  const [poses, setPoses] = useState([]);
  const { category } = useParams(); 

  useEffect(() => {
    if (category && category !== "all") {
      setPoses(posesData.filter((pose) => pose.category.toLowerCase() === category.toLowerCase()));
    } else {
      setPoses(posesData);
    }
  }, [category]); 

  return (
    <div className="flex flex-col w-2/3 min-h-screen p-4">
      {poses.length === 0 ? (
        <p>No poses found for this category.</p>
      ) : (
        poses.map((pose) => (
          <div key={pose.id} className="hover:-translate-y-1 transition duration-200">
            <Link to={`/pose/${pose.id}`} >
              {pose.name}
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default PoseList;
