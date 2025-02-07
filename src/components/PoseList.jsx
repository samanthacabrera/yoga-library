import React from 'react';
import { Link } from 'react-router-dom';
import posesData from '../data/poses.json';

const PoseList = () => {
  return (
    <div className="mt-40 p-6 md:p-12">
      <Link
        to="/poses"
        className="text-white text-lg lg:text-2xl tracking-wide font-medium hover:border-b-2">
        Yoga Pose Directory
      </Link>

      {posesData.length === 0 ? (
        <p className="text-center">No poses available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-6 md:py-12">
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
