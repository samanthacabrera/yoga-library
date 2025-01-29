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
     <div className="bg-gray-100 mt-40">
      <div className="flex justify-between p-4 md:px-8">
        <h3 className="tracking-wide">Index of Top 50 Poses In Yoga</h3>
        <div className="flex items-center text-xs md:text-sm space-x-2">
          <button
            onClick={() => setSortOption('commonName')}
            className={`px-4 py-2 rounded-lg transition-colors duration-300 ease-in-out ${
              sortOption === 'commonName' ? 'bg-moss text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            Common Name
          </button>
          <button
            onClick={() => setSortOption('sanskritName')}
            className={`px-4 py-2 rounded-lg transition-colors duration-300 ease-in-out ${
              sortOption === 'sanskritName' ? 'bg-moss text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            Sanskrit Name
          </button>
        </div>
      </div>

      {poses.length === 0 ? (
        <p className="text-center py-8 text-gray-600">No poses available.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 p-4 md:px-8 text-xs md:text-sm">
          {poses.map((pose) => (
            <div key={pose.id} className="group relative flex items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-moss hover:text-white hover:scale-105 hover:opacity-80 transition-transform duration-300">
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
