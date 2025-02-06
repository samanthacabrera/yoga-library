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
        sanskritName: sanskrit ? sanskrit.sanskrit_translation || "" : "",
      };
    });
    setPoses(mergedPoses);
  }, []);

  return (
    <div className="mt-40 px-4 sm:px-8 md:px-12">
      <div className="flex flex-col md:flex-row justify-between">
        <h3 className="text-white text-lg lg:text-2xl tracking-wide my-12">
          Poses Index
        </h3>
        <div className="flex items-center text-white">
          <button
            onClick={() => setSortOption('commonName')}
            className={`px-4 py-2 transition-all duration-200 ${
              sortOption === 'commonName' ? 'border-b' : 'hover:scale-105'
            }`}
          >
            Common Name
          </button>
          <button
            onClick={() => setSortOption('sanskritName')}
            className={` transition-all duration-200 ${
              sortOption === 'sanskritName' ? 'border-b' : 'hover:scale-105'
            }`}
          >
            Sanskrit Name
          </button>
        </div>
      </div>

      {poses.length === 0 ? (
        <p className="text-center">No poses available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-12">
          {poses.map((pose) => (
            <div key={pose.id} className="p-4 bg-white border-2 rounded-2xl border-moss hover:bg-moss hover:bg-opacity-50 hover:text-white hover:border-white transition duration-300">
              <Link to={`/poses/${pose.name}`} className="block text-sm font-medium">
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
