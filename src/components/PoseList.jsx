import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import posesData from '../data/poses.json';
import sanskritsData from '../data/sanskrits.json';

const PoseList = () => {
  const [poses, setPoses] = useState([]);
  const [sortOption, setSortOption] = useState('id'); 

  useEffect(() => {
    const mergedPoses = posesData.map(pose => {
      const sanskrit = sanskritsData.find(item => item.id === pose.id);
      return sanskrit ? { ...pose, translation: sanskrit.translation || "" } : pose;
    });
    setPoses(mergedPoses);
  }, []);

  const toggleSort = () => {
    setSortOption((prevSortOption) => {
      const newSortOption = 
        prevSortOption === 'id' ? 'name' :
        prevSortOption === 'name' ? 'translation' :
        'id'; 

       setPoses((prevPoses) => {
        return [...prevPoses].sort((a, b) => {
          if (newSortOption === 'id') {
            return a.id - b.id; 
          } else if (newSortOption === 'name') {
            return (a.name || '').localeCompare(b.name || ''); 
          } else if (newSortOption === 'translation') {
            const translationA = a.translation || '';
            const translationB = b.translation || '';
            if (translationA === '' && translationB === '') {
              return 0;
            } else if (translationA === '') {
              return 1; 
            } else if (translationB === '') {
              return -1; 
            }
            return translationA.localeCompare(translationB); 
          }
          return 0;
        });
      });

      return newSortOption;
    });
  };

  return (
    <div className="flex flex-col min-h-screen max-h-[400vh] min-w-64 overflow-y-scroll scrollbar-hidden space-y-2 p-1 bg-gray-100">
      <button
        onClick={toggleSort}
        className="self-start opacity-50"
      >
        <span className="pl-2">sort by: </span>
        {sortOption === 'id' ? 'popularity' : sortOption === 'name' ? 'common name' : 'sanskrit translation'}
      </button>
      {poses.length === 0 ? (
        <p>No poses available.</p>
      ) : (
        poses.map((pose) => (
          <div key={pose.id} className="pl-2 hover:text-gray-600">
            <Link to={`/pose/${pose.id}`}>
              {sortOption === 'translation' ? pose.translation : pose.name}
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default PoseList;
