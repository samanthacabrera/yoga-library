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
  const [currentPageType, setCurrentPageType] = useState(0);

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

  const relatedByType = posesData.filter((p) => 
    p.id !== pose.id && p.type.some((type) => pose.type.includes(type))
  );

  const posesPerPage = 2;

  const currentPosesType = relatedByType.slice(currentPageType * posesPerPage, (currentPageType + 1) * posesPerPage);

  const totalPagesType = Math.ceil(relatedByType.length / posesPerPage);

  const handlePageChangeType = (direction) => {
    if (direction === 'next' && currentPageType < totalPagesType - 1) {
      setCurrentPageType(currentPageType + 1);
    } else if (direction === 'prev' && currentPageType > 0) {
      setCurrentPageType(currentPageType - 1);
    }
  };


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

      <header className="text-2xl md:text-4xl">
        <h2>
          {pose.name} - {poseSanskirt.translation} - {poseSanskirt.sanskrit_name}
        </h2>

      {/* Image */}
      {pose.image && (
        <img
          src={pose.image}
          alt={pose.name}
          style={{ maxWidth: '300px', height: 'auto', margin: '0 auto', display: 'block' }}
          className="rounded-md"
        />
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
                <div key={idx} className="bg-moss text-white text-sm p-4 rounded-xl shadow-md hover:shadow-lg transition">
                  <p className="font-bold uppercase tracking-wide">{section.title}</p>
                  <div className="flex flex-wrap mt-2 gap-2">
                    {section.data.map((item, index) => (
                      <Link
                        key={index}
                        to={`/poses/${section.title.toLowerCase().replace(/\s/g, '')}/${item}`}
                        className="bg-white text-moss px-2 py-1 font-semibold rounded-lg shadow-sm hover:bg-gray-200 transition"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                </div>
              )
          )}
        </div>
      </header>

      {/* Table of Contents */}
      <div className="flex flex-col lg:flex-row lg:space-x-6 text-moss">
        <a href="#description" className="hover:underline">
          Overview
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

      {/* Overview */}
      {poseDesc && poseDesc.desc && (
        <div id="description" className="group">
          <h3 className="text-2xl md:text-4xl tracking-wider my-2 group-hover:text-moss transition duration-300">Overview</h3>
          <p>{poseDesc.desc}</p>
        </div>
      )}
      {/* Benefits */}
      {poseBenefit && poseBenefit.benefit && (
        <div id="benefits" className="group">
          <h3 className="text-2xl md:text-4xl tracking-wider my-2 group-hover:text-moss transition duration-300">Benefits</h3>
          <p>{poseBenefit.benefit}</p>
        </div>
      )}
      {/* Origins */}
      {poseSanskirt && poseSanskirt.context && (
        <div id="origins" className="group">
          <h3 className="text-2xl md:text-4xl tracking-wider my-2 group-hover:text-moss transition duration-300">Origins</h3>
          <p>{poseSanskirt.context}</p>
        </div>
      )}
      {/* Precautions */}
      {posePrecaution && posePrecaution.precaution && (
        <div id="precautions" className="group">
          <h3 className="text-2xl md:text-4xl tracking-wider my-2 group-hover:text-moss transition duration-300">Precautions</h3>
          <p>{posePrecaution.precaution}</p>
        </div>
      )}
      {/* Modifications */}
      {poseModification && poseModification.modification && (
        <div id="modifications" className="group">
          <h3 className="text-2xl md:text-4xl tracking-wider my-2 group-hover:text-moss transition duration-300">Modifications</h3>
          <p>{poseModification.modification}</p>
        </div>
      )}
      {/* Cues */}
      {poseCues && poseCues.cues && (
        <div id="cues" className="group">
          <h3 className="text-2xl md:text-4xl tracking-wider my-2 group-hover:text-moss transition duration-300">Step-By-Step Breakdown</h3>
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

      {/* Related Poses */}
      {relatedByType.length > 0 && (
        <div className="border-4 border-moss p-8 rounded-xl space-y-8">
          <p className="text-2xl md:text-4xl text-center tracking-wider my-2 hover:text-moss transition duration-300">
            Related Poses
          </p>
          <div className="grid grid-cols-2 gap-8">
            {currentPosesType.map((relatedPose) => {
              const sharedCategories = pose.type.filter((type) =>
                relatedPose.type.includes(type)
              );

              return (
                <Link
                  key={relatedPose.id}
                  to={`/poses/${relatedPose.name}`}
                  className="relative group"
                >
                  <div className="relative overflow-hidden rounded shadow hover:scale-105 transition transform duration-300">
                    <img
                      src={relatedPose.image}
                      alt={relatedPose.name}
                      className="w-full h-56 object-cover rounded group-hover:opacity-80 transition-opacity duration-300"
                    />
                    <div className="absolute inset-0 bg-moss bg-opacity-80 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300 text-white p-6 rounded">
                      {sharedCategories.length > 0 && (
                        <p className="text-xs text-center font-medium tracking-wide">
                          {relatedPose.name} is related by {sharedCategories.join(", ")}
                        </p>
                      )}
                    </div>
                  </div>
                  <p className="text-sm md:text-lg text-center font-medium tracking-wide my-2">
                    {relatedPose.name}
                  </p>
                </Link>
              );
            })}
          </div>

          <div className="flex justify-between mt-8">
            <button
              onClick={() => handlePageChangeType('prev')}
              className={`text-moss font-medium text-lg hover:scale-110 transition duration-200 ${currentPageType === 0 ? 'invisible' : ''}`}
            >
              ← Prev
            </button>
            <button
              onClick={() => handlePageChangeType('next')}
              className={`text-moss font-medium text-lg hover:scale-110 transition duration-200 ${currentPageType === totalPagesType - 1 ? 'invisible' : ''}`}
            >
              Next →
            </button>
          </div>
        </div>
      )}

            
      <div className="flex flex-col text-sm">
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
