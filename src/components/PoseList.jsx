import React from 'react';
import { Link } from 'react-router-dom';
import posesData from '../data/poses.json';

const PoseList = () => {
  return (
    <div className="mt-40 px-4 sm:px-8 md:px-12">
      <h3 className="text-white text-lg lg:text-2xl tracking-wide py-12">
        Poses Index
      </h3>

      {posesData.length === 0 ? (
        <p className="text-center">No poses available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-12">
          {posesData.map((pose) => (
            <div key={pose.id} className="p-4 bg-white border-2 rounded-2xl border-moss hover:bg-moss hover:bg-opacity-50 hover:text-white hover:border-white transition duration-300">
              <Link to={`/poses/${pose.name}`} className="block text-sm font-medium">
                {pose.name}
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PoseList;
