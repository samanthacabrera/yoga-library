import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import posesData from '../data/poses.json';
import descriptions from '../data/descriptions.json';
import sanskirts from '../data/sanskrits.json';
import benefits from '../data/benefits.json';
import precautions from '../data/precautions.json';
import modifications from '../data/modifications.json';
import cues from '../data/cues.json';

const PosePage = () => {
  const { id } = useParams();
  const pose = posesData.find((p) => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!pose) {
    return <div>Pose not found</div>;
  }

  const poseDesc = descriptions.find((d) => d.id === pose.id);
  const poseSanskirt = sanskirts.find((s) => s.id === pose.id);
  const poseBenefit = benefits.find((b) => b.id === pose.id);
  const posePrecaution = precautions.find((p) => p.id === pose.id);
  const poseModification = modifications.find((m) => m.id === pose.id);
  const poseCues = cues.find((c) => c.id === pose.id);

  const sources = [];
  if (poseDesc && poseDesc.source) {
    sources.push({ section: 'Description', text: poseDesc.source });
  }
  if (poseBenefit && poseBenefit.source) {
    sources.push({ section: 'Benefits', text: poseBenefit.source });
  }
  if (poseSanskirt && poseSanskirt.source) {
    sources.push({ section: 'Origins', text: poseSanskirt.source });
  }
  if (posePrecaution && posePrecaution.source) {
    sources.push({ section: 'Precautions', text: posePrecaution.source });
  }
  if (poseModification && poseModification.source) {
    sources.push({ section: 'Modifications', text: poseModification.source });
  }
  if (poseCues && poseCues.source) {
    sources.push({ section: 'Step-By-Step', text: poseCues.source });
  }

  return (
    <div className="flex flex-col min-h-screen w-full max-w-3xl space-y-6 p-8">
      <h2 className="text-4xl">
        {pose.name} <span>({poseSanskirt.sanskrit_name})</span>
      </h2>

      <div id="translation">
        {poseSanskirt.translation && (
          <p>
            <strong>Sanskrit: </strong>
            {poseSanskirt.translation}
          </p>
        )}
      </div>

      {pose.image && (
        <img
          src={pose.image}
          alt={pose.name}
          style={{ maxWidth: '300px', height: 'auto', margin: '0 auto', display: 'block' }}
          className="rounded-md"
        />
      )}

      <div className="flex flex-col lg:flex-row lg:space-x-6 text-blue-500">
        <a href="#description" className="hover:underline">
          Description
        </a>
        <a href="#benefits" className="hover:underline">
          Benefits
        </a>
        <a href="#origins" className="hover:underline">
          Origins
        </a>
        <a href="#precautions" className="hover:underline">
          Precautions
        </a>
        <a href="#modifications" className="hover:underline">
          Modifications
        </a>
        <a href="#cues" className="hover:underline">
          Step-By-Step
        </a>
      </div>

      <div id="description">
        {poseDesc && poseDesc.desc && (
          <p>
            <strong>Description:</strong> {poseDesc.desc}
          </p>
        )}
      </div>

      <div id="benefits">
        {poseBenefit && poseBenefit.benefit && (
          <p>
            <strong>Benefits:</strong> {poseBenefit.benefit}
          </p>
        )}
      </div>

      <div id="origins">
        {poseSanskirt && poseSanskirt.context && (
          <p>
            <strong>Origins:</strong> {poseSanskirt.context}
          </p>
        )}
      </div>

      <div id="precautions">
        {posePrecaution && posePrecaution.precaution && (
          <p>
            <strong>Precautions: </strong> {posePrecaution.precaution}
          </p>
        )}
      </div>

      <div id="modifications">
        {poseModification && poseModification.modification && (
          <p>
            <strong>Modifications: </strong> {poseModification.modification}
          </p>
        )}
      </div>

      <div id="cues">
        {poseCues && poseCues.cues && (
          <div>
            <p>
              <strong>Step-By-Step Breakdown:</strong>
            </p>
            <ol className="list-decimal list-inside">
              {poseCues.cues.map((cue, index) => {
                const linkPoseNames = (cueText) => {
                  const matchedPoseCue = posesData.find((p) => cueText.includes(p.name));
                  
                  if (matchedPoseCue) {
                    return (
                      <>
                        {cueText.split(matchedPoseCue.name).map((part, partIndex) => (
                          <>
                            {part}
                            {partIndex < cueText.split(matchedPoseCue.name).length - 1 && (
                              <Link
                                key={`${index}-${partIndex}`} 
                                to={`/pose/${matchedPoseCue.id}`}
                                className="text-blue-500 hover:underline"
                              >
                                {matchedPoseCue.name}
                              </Link>
                            )}
                          </>
                        ))}
                      </>
                    );
                  }
                  return cueText; 
                };
                return <li key={index}>{linkPoseNames(cue)}</li>;
              })}
            </ol>
          </div>
        )}
      </div>

      <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
        <p><strong>Tags:</strong></p>

        {pose.benefit.length > 0 && (
          <div>
            <p className="text-gray-500 my-1">Benefits</p>
            <ul className="flex flex-wrap gap-2">
              {pose.benefit.map((benefit, index) => (
                <li key={index}>
                  <Link 
                    to={`/categories/benefit/${benefit}`} 
                    className="bg-gray-300 text-gray-700 px-3 py-1 my-1 rounded-full text-sm hover:bg-gray-400 transition-colors"
                  >
                    {benefit}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {pose.part.length > 0 && (
          <div>
            <p className="text-gray-500 my-1">Parts of the body</p>
            <ul className="flex flex-wrap gap-2">
              {pose.part.map((part, index) => (
                <li key={index}>
                  <Link 
                    to={`/categories/part/${part}`} 
                    className="bg-gray-300 text-gray-700 px-3 py-1 my-1 rounded-full text-sm hover:bg-gray-400 transition-colors"
                  >
                    {part}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {pose.type.length > 0 && (
          <div>
            <p className="text-gray-500 my-1">Pose Types</p>
            <ul className="flex flex-wrap gap-2">
              {pose.type.map((type, index) => (
                <li key={index}>
                  <Link 
                    to={`/categories/type/${type}`} 
                    className="bg-gray-300 text-gray-700 px-3 py-1 my-1 rounded-full text-sm hover:bg-gray-400 transition-colors"
                  >
                    {type}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {pose.chakra.length > 0 && (
          <div>
            <p className="text-gray-500 my-1">Chakras</p>
            <ul className="flex flex-wrap gap-2">
              {pose.chakra.map((chakra, index) => (
                <li key={index}>
                  <Link 
                    to={`/categories/chakra/${chakra}`} 
                    className="bg-gray-300 text-gray-700 px-3 py-1 my-1 rounded-full text-sm hover:bg-gray-400 transition-colors"
                  >
                    {chakra}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="flex flex-col text-sm">
        <a href="https://www.flaticon.com/free-icons/workout" title="workout icons">Workout icons created by dDara - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/yoga" title="yoga icons">Yoga icons created by monkik - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/lunge" title="lunge icons">Lunge icons created by Eideticmemo - Flaticon</a>
      </div>

      {sources.length > 0 && (
        <div
          id="sources"
          className="mt-6 pt-4 border-t border-gray-300 text-sm space-y-2"
          style={{ marginTop: '1.5rem' }}
        >
          <h3 className="text-lg" style={{ marginBottom: '0.5rem' }}>
            Sources
          </h3>
          <ul className="list-inside list-disc space-y-1">
            {sources.map((source, index) => (
              <li key={index} className="text-justify">
                <em>{source.section}</em> - {source.text} 
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PosePage;
