import React from 'react';
import { useParams } from 'react-router-dom';
import posesData from '../data/poses.json';
import descriptions from '../data/descriptions.json'; 
import sanskirts from '../data/sanskirts.json'
import benefits from '../data/benefits.json';
import precautions from '../data/precautions.json';
import modifications from '../data/modifications.json';
import cues from '../data/cues.json';

const PosePage = () => {
  const { id } = useParams();
  const pose = posesData.find(p => p.id === parseInt(id));

  if (!pose) {
    return <div>Pose not found</div>;
  }

  const poseDesc = descriptions.find(d => d.id === pose.id);
  const poseSanskirt = sanskirts.find(s => s.id === pose.id);
  const poseBenefit = benefits.find(b => b.id === pose.id);
  const posePrecaution = precautions.find(p => p.id === pose.id);
  const poseModification = modifications.find(m => m.id === pose.id);
  const poseCues = cues.find(c => c.id === pose.id);

  return (
    <div className="flex flex-col min-h-screen w-full max-w-2xl space-y-6 p-6">
      <h2 className="text-4xl">{pose.name} <span>({poseSanskirt.sanskrit_name})</span></h2>
      
      {/* {pose.image && <img src={pose.image} alt={pose.name} />} */}
      
      {poseDesc && poseDesc.desc && (
        <p><strong>Description:</strong> {poseDesc.desc}</p>
      )}

      {poseBenefit && poseBenefit.benefit && (
        <p><strong>Benefits:</strong> {poseBenefit.benefit}</p>
      )}

      {posePrecaution && posePrecaution.precaution && (
        <p><strong>Precautions: </strong> {posePrecaution.precaution}</p>
      )}

      {poseModification && poseModification.modification && (
        <p><strong>Modificiations: </strong> {poseModification.modification}</p>
      )}

      {poseCues && poseCues.cues && (
        <div>
          <p><strong>Step-By-Step Breakdown:</strong></p>
          <ol className="list-decimal list-inside">
            {poseCues.cues.map((cue, index) => (
              <li key={index}>{cue}</li>
            ))}
          </ol>
        </div>
      )}

      <div>
      <p><strong>Tags:</strong></p>
      {pose.benefit.length > 0 && (
        <div>
          - Benefits -
          <ul className="flex space-x-2">
            {pose.benefit.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
      )}

      {pose.part.length > 0 && (
        <div>
          - Parts of the body -
          <ul className="flex space-x-2">
            {pose.part.map((part, index) => (
              <li key={index}>{part}</li>
            ))}
          </ul>
        </div>
      )}

      {pose.type.length > 0 && (
        <div>
          - Pose Type - 
          <ul className="flex space-x-2">
            {pose.type.map((type, index) => (
              <li key={index}>{type}</li>
            ))}
          </ul>
        </div>
      )}
      </div>
    </div>
  );
};

export default PosePage;
