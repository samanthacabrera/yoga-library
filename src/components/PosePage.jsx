import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import posesData from '../data/poses.json';
import descriptions from '../data/descriptions.json';
import sanskirts from '../data/sanskrits.json';
import benefits from '../data/benefits.json';
import precautions from '../data/precautions.json';
import modifications from '../data/modifications.json';
import cues from '../data/cues.json';

const PosePage = () => {
  const { name } = useParams();
  const pose = posesData.find((p) => p.name.toLowerCase() === name.toLowerCase());

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [name]);

  if (!pose) {
    return <div>Pose not found</div>;
  }

  const poseDesc = descriptions.find((d) => d.id === pose.id);
  const poseSanskirt = sanskirts.find((s) => s.id === pose.id);
  const poseBenefit = benefits.find((b) => b.id === pose.id);
  const posePrecaution = precautions.find((p) => p.id === pose.id);
  const poseModification = modifications.find((m) => m.id === pose.id);
  const poseCues = cues.find((c) => c.id === pose.id);
  const relatedPoses = posesData.filter((p) => 
    p.id !== pose.id && 
    p.type.some((type) => pose.type.includes(type))
  );
  
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
    <div className="flex flex-col min-h-screen w-full max-w-3xl space-y-8 md:space-y-20 p-8 mx-auto">

      <nav className="text-sm mb-4">
        <Link to="/poses" className="text-moss hover:underline">All Poses</Link> /  
        {pose.type.length > 0 && (
        <Link 
            to={`/poses/type/${pose.type[0]}`} 
            className="text-moss hover:underline px-1"
          >
            {pose.type[0]} Poses
        </Link>
        )}  
        / {pose.name}
      </nav>

      <header className="relative p-6 md:p-8 flex group bg-moss bg-opacity-90 border border-black rounded-2xl">
        <h2 className="text-4xl md:text-6xl tracking-tight text-left opacity-70 relative">
          <span className="block">
            {pose.name}
          </span>
          <span className="text-2xl block italic mt-2">
            {poseSanskirt.translation}
          </span>
          <span className="text-4xl text-white opacity-50">
            {poseSanskirt.sanskrit_name}
          </span>
        </h2>
      </header>
      
      {/* Image */}
      {pose.image && (
        <img
          src={pose.image}
          alt={pose.name}
          style={{ maxWidth: '300px', height: 'auto' }}
          className="rounded-md mx-auto py-12"
        />
      )}

   {/* Table of Contents */}
    <div className="sticky top-0 z-10 bg-white flex flex-col lg:flex-row lg:space-x-2 text-moss font-bold uppercase tracking-tight">
      <a href="#description" className="border-b-4 border-transparent hover:border-moss transition-all duration-500 px-2 py-1">
        Overview
      </a>
      <a href="#benefits" className="border-b-4 border-transparent hover:border-moss transition-all duration-500 px-2 py-1">
        Benefits
      </a>
      <a href="#origins" className="border-b-4 border-transparent hover:border-moss transition-all duration-500 px-2 py-1">
        Origins
      </a>
      <a href="#precautions" className="border-b-4 border-transparent hover:border-moss transition-all duration-500 px-2 py-1">
        Precautions
      </a>
      <a href="#modifications" className="border-b-4 border-transparent hover:border-moss transition-all duration-500 px-2 py-1">
        Modifications
      </a>
      <a href="#cues" className="border-b-4 border-transparent hover:border-moss transition-all duration-500 px-2 py-1">
        Step-By-Step
      </a>
    </div>
      
      {/* Overview */}
      {poseDesc && poseDesc.desc && (
        <div id="description" className="group">
          <h3 className="font-medium text-2xl md:text-4xl tracking-wider my-2 group-hover:text-moss transition duration-300">Overview</h3>
          <p>{poseDesc.desc}</p>
        </div>
      )}
      {/* Benefits */}
      {poseBenefit && poseBenefit.benefit && (
        <div id="benefits" className="group">
          <h3 className="font-medium text-2xl md:text-4xl tracking-wider my-2 group-hover:text-moss transition duration-300">Benefits</h3>
          <p>{poseBenefit.benefit}</p>
        </div>
      )}
      {/* Origins */}
      {poseSanskirt && poseSanskirt.context && (
        <div id="origins" className="group">
          <h3 className="font-medium text-2xl md:text-4xl tracking-wider my-2 group-hover:text-moss transition duration-300">Origins</h3>
          <p>{poseSanskirt.context}</p>
        </div>
      )}
      {/* Precautions */}
      {posePrecaution && posePrecaution.precaution && (
        <div id="precautions" className="group">
          <h3 className="font-medium text-2xl md:text-4xl tracking-wider my-2 group-hover:text-moss transition duration-300">Precautions</h3>
          <p>{posePrecaution.precaution}</p>
        </div>
      )}
      {/* Modifications */}
      {poseModification && poseModification.modification && (
        <div id="modifications" className="group">
          <h3 className="font-medium text-2xl md:text-4xl tracking-wider my-2 group-hover:text-moss transition duration-300">Modifications</h3>
          <p>{poseModification.modification}</p>
        </div>
      )}
      {/* Cues */}
      {poseCues && poseCues.cues && (
        <div id="cues" className="group">
          <h3 className="font-medium text-2xl md:text-4xl tracking-wider my-2 group-hover:text-moss transition duration-300">Step-By-Step Breakdown</h3>
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
                              className="text-moss hover:underline"
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

      {/* Tags */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        {[
          { title: "Benefits", data: pose.benefit },
          { title: "Body Parts", data: pose.part },
          { title: "Pose Types", data: pose.type },
          { title: "Chakras", data: pose.chakra }
        ].map(
          (section, idx) =>
            section.data.length > 0 && (
              <div key={idx} className="bg-moss bg-opacity-90 text-white text-sm p-4 rounded-xl shadow-md">
                <p className="font-semibold tracking-wide">{section.title}</p>
                <div className="flex flex-wrap mt-2 gap-2">
                  {section.data.map((item, index) => (
                    <Link
                      key={index}
                      to={`/poses/${section.title.toLowerCase().replace(/\s/g, '')}/${item}`}
                      className="bg-white text-moss font-medium px-2 py-1 rounded-lg hover:scale-105 transition"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </div>
            )
        )}
      </div>

      {/* Related Poses */}
      {relatedPoses.length > 0 && (
        <div className="border-2 border-moss p-8 rounded-2xl space-y-8">
          <p className="text-2xl md:text-4xl text-center tracking-wider my-2">
            Related Poses
          </p>
          <div className="flex space-x-8 overflow-x-scroll">
            {relatedPoses.map((relatedPose) => {
              return (
                <Link
                  key={relatedPose.id}
                  to={`/poses/${relatedPose.name}`}
                  className="relative group w-1/2 min-w-[300px]" 
                >
                  <div className="relative overflow-hidden rounded shadow transition transform duration-300">
                    <img
                      src={relatedPose.image}
                      alt={relatedPose.name}
                      className="w-full h-56 object-cover rounded group-hover:opacity-0 transition-opacity duration-300"
                    />
                    <div className="absolute inset-0 bg-moss bg-opacity-90 group-hover:border-moss border border-transparent flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300 text-white text-center p-6 rounded">
                      <p className="font-medium trackint-tight leading-tight">{relatedPose.name} is a related pose to {pose.name}. Click to learn more</p>
                    </div>
                  </div>
                  <p className="text-sm md:text-lg text-center tracking-wide my-2">
                    {relatedPose.name}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      )}

      <div className="flex flex-col text-sm opacity-50">
        <a href="https://www.flaticon.com/free-icons/workout" title="workout icons">Workout icons created by dDara - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/yoga" title="yoga icons">Yoga icons created by monkik - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/lunge" title="lunge icons">Lunge icons created by Eideticmemo - Flaticon</a>
      </div>

      {/* Sources */}
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
