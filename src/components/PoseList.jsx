import React from 'react';
import { Link } from 'react-router-dom';
import posesData from '../data/poses.json';

const PoseList = () => {
  return (
    <div className="mt-40 py-8 px-8 md:px-20">
      <Link
        to="/poses"
        className="text-white text-2xl lg:text-4xl tracking-tight hover:opacity-70 transition duration-300 block border-b border-white py-2 my-12">
        Yoga Pose Directory
      </Link>

      {posesData.length === 0 ? (
        <p className="text-center text-gray-500 mt-24">No poses available.</p>
      ) : (
        <div className="grid grid-cols-1 gap-2 text-white">
          {posesData.map((pose) => (
            <div 
              key={pose.id} 
              className="relative group p-4 border border-white rounded-lg hover:border-black transition duration-500"
            >
              <Link 
                to={`/poses/${pose.name}`} 
                className="block text-xs tracking-wide text-left group-hover:text-black transition-colors duration-500"
              >
                {pose.name}
              </Link>
              <span className="absolute bottom-4 right-4 text-sm text-gray-400 group-hover:text-black transition duration-500">→</span>
              <div className="absolute top-0 left-0 w-0 h-full bg-black opacity-5 group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PoseList;
