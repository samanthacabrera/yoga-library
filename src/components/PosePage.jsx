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
    <div className="flex flex-col min-h-screen w-full space-y-2 p-6">
      <h2 className="text-4xl">{pose.name}</h2>
      
      {pose.image && <img src={pose.image} alt={pose.name} />}
      
      {pose.desc && <p><strong>Description:</strong> {pose.desc}</p>}

      {pose.benefit.length > 0 && (
        <div>
          <strong>Benefits:</strong>
          <ul className="flex space-x-2">
            {pose.benefit.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
      )}

      {pose.part.length > 0 && (
        <div>
          <strong>Parts of the body:</strong>
          <ul className="flex space-x-2">
            {pose.part.map((part, index) => (
              <li key={index}>{part}</li>
            ))}
          </ul>
        </div>
      )}

      {pose.type.length > 0 && (
        <div>
          <strong>Pose Type:</strong>
          <ul className="flex space-x-2">
            {pose.type.map((type, index) => (
              <li key={index}>{type}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PosePage;
