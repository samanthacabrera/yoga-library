import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import posesData from '../data/poses.json';

const PoseList = () => {
  const [poses, setPoses] = useState([]);
  const [isSorted, setIsSorted] = useState(false); 

  useEffect(() => {
    setPoses(posesData);
  }, []);

  const toggleSort = () => {
    setIsSorted(!isSorted);
    setPoses((prevPoses) =>
      [...prevPoses].sort((a, b) =>
        isSorted ? a.id - b.id : a.name.localeCompare(b.name)
      )
    );
  };

  return (
    <div className="flex flex-col min-h-screen max-h-[200vh] w-54 lg:w-64 overflow-y-scroll scrollbar-hidden space-y-2 p-1 bg-gray-100">
      <button
        onClick={toggleSort}
        className="self-start opacity-50 hover:opacity-60"
      >
       <span class="inline-block transform rotate-90">&harr;</span>sort by: {isSorted ? 'name' : 'popularity'}
      </button>
      {poses.length === 0 ? (
        <p>No poses available.</p>
      ) : (
        poses.map((pose) => (
          <div key={pose.id} className="hover:-translate-y-1 transition duration-200">
            <Link to={`/pose/${pose.id}`}>{pose.name}</Link>
          </div>
        ))
      )}
    </div>
  );
};

export default PoseList;
