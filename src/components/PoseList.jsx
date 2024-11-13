import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import posesData from '../data/poses.json';

const PoseList = () => {
  const [poses, setPoses] = useState([]);

  useEffect(() => {
    setPoses(posesData);
  }, []);

  return (
    <div className="flex flex-col flex-col-grow min-h-screen min-w-44 lg:min-w-64 overflow-y-scroll space-y-4 p-4 bg-gray-100">
      {poses.length === 0 ? (
        <p>No poses available.</p>
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
