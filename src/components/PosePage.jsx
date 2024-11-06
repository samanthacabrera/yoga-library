import React from 'react';
import { useParams } from 'react-router-dom';
import posesData from '../data/poses.json';

const PosePage = () => {
  const { id } = useParams();
  const pose = posesData.find(p => p.id === parseInt(id));

  if (!pose) {
    return <div>Pose not found</div>;
  }

  return (
    <div className="flex flex-col items-center pt-20 -translate-x-1/4 w-full">
      <h2>{pose.name}</h2>
      <p>Description: {pose.description}</p>
      <h4></h4>
      <p>Benefits: {pose.benefits}</p>
    </div>
  );
};

export default PosePage;
