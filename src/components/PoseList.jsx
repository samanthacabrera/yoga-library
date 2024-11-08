import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import posesData from '../data/poses.json';

const PoseList = () => {
  const [poses, setPoses] = useState([]);
  const { categoryType, categoryValue } = useParams();

  useEffect(() => {
    if (categoryType && categoryValue) {
      setPoses(
        posesData.filter((pose) =>
          pose[categoryType] && pose[categoryType].map(item => item.toLowerCase()).includes(categoryValue.toLowerCase())
        )
      );
    } else {
      setPoses(posesData);
    }
  }, [categoryType, categoryValue]);

  return (
    <div className="flex flex-col min-h-screen min-w-44 lg:min-w-64 space-y-2 p-4 bg-gray-100">
      {poses.length === 0 ? (
        <p>No poses found for this category.</p>
      ) : (
        poses.map((pose) => (
          <div key={pose.id} className="hover:-translate-y-1 transition duration-200">
            <Link to={`/pose/${pose.id}`}>
              {pose.name}
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default PoseList;
