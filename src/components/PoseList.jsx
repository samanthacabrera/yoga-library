import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import posesData from '../data/poses.json';
import sanskritsData from '../data/sanskrits.json';

const PoseList = () => {
  const [poses, setPoses] = useState([]);
  const [sortOption, setSortOption] = useState('commonName'); 

  useEffect(() => {
    const mergedPoses = posesData.map(pose => {
      const sanskrit = sanskritsData.find(item => item.id === pose.id);
      return {
        ...pose,
        commonName: pose.name, 
        sanskritName: sanskrit ? sanskrit.translation || "" : "", 
      };
    });
    setPoses(mergedPoses);
  }, []);

  const toggleSort = () => {
    setSortOption((prevSortOption) => {
      const newSortOption =
        prevSortOption === 'commonName' ? 'sanskritName' : 'commonName'; 

      setPoses((prevPoses) => {
        return [...prevPoses].sort((a, b) => {
          if (newSortOption === 'commonName') {
            return (a.commonName || '').localeCompare(b.commonName || ''); 
          } else if (newSortOption === 'sanskritName') {
            const sanskritA = a.sanskritName || '';
            const sanskritB = b.sanskritName || '';
            if (sanskritA === '' && sanskritB === '') return 0;
            if (sanskritA === '') return 1;
            if (sanskritB === '') return -1;
            return sanskritA.localeCompare(sanskritB);
          }
          return 0;
        });
      });

      return newSortOption;
    });
  };

  return (
    <div className="flex flex-col bg-gray-100 text-sm md:text-base">
      <div className="flex justify-between p-4">
        <h3>Index of Top 50 Poses In Yoga</h3>
        
        <div className="flex items-center text-sm space-x-2 text-xs md:text-sm">
            <button
              onClick={() => setSortOption('commonName')}
              className={`px-2 py-1 rounded ${
                sortOption === 'commonName'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              Common Name
            </button>
            <button
              onClick={() => setSortOption('sanskritName')}
              className={`px-2 py-1  rounded ${
                sortOption === 'sanskritName'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              Sanskrit Name
            </button>
        </div>

      </div>
      {poses.length === 0 ? (
        <p>No poses available.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 px-4 pb-4">
          {poses.map((pose) => (
            <div key={pose.id} className="hover:scale-105 transition duration-200">
              <Link to={`/pose/${pose.id}`} >
                {sortOption === 'sanskritName' ? pose.sanskritName : pose.commonName}
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PoseList;
