import React, {useState} from 'react';
import { useParams, Link } from 'react-router-dom';
import posesData from '../data/poses.json';
import descriptions from '../data/descriptions.json';
import sanskirts from '../data/sanskrits.json';
import benefits from '../data/benefits.json';
import cues from '../data/cues.json';

const PosePage = () => {
  const { name } = useParams();
  const poseIndex = posesData.findIndex((p) => p.name.toLowerCase() === name.toLowerCase());
  const pose = posesData[poseIndex];
  const prevPose = posesData[(poseIndex - 1 + posesData.length) % posesData.length];
  const nextPose = posesData[(poseIndex + 1) % posesData.length];
  const poseDesc = descriptions.find((d) => d.id === pose.id);
  const poseSanskirt = sanskirts.find((s) => s.id === pose.id);
  const poseBenefit = benefits.find((b) => b.id === pose.id);
  const poseCues = cues.find((c) => c.id === pose.id);
  const relatedPoses = posesData.filter((p) => 
    p.id !== pose.id && 
    p.type.some((type) => pose.type.includes(type))
  );
  const [tocOpen, setTocOpen] = useState(true);

  if (!pose) {
    return <div>Pose not found</div>;
  }
  
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
  if (poseCues && poseCues.source) {
    sources.push({ section: 'Step-By-Step', text: poseCues.source });
  }

  return (
    <div className="flex flex-col min-h-screen w-full max-w-3xl space-y-12 md:space-y-24 leading-loose p-8 mt-12 mx-auto">
      <div>
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 py-12 text-sm tracking-widest">
        <Link
          to="/poses"
          className="hover:text-moss hover:border-b-2 hover:border-moss transition-all duration-300"
        >
          All Poses
        </Link>
        {pose.type.length > 0 && (
          <>
            <span>/</span>
            <Link
              to={`/poses/type/${pose.type[0]}`}
              className="hover:text-moss hover:border-b-2 hover:border-moss transition-all duration-300"
            >
              {pose.type[0]} Poses
            </Link>
          </>
        )}
        <span>/</span>
        <span className="font-medium">{pose.name}</span>
      </nav>
      
      {/* Prev/Next Pose */}
      <div className="flex justify-between items-center my-6 lg:my-0">
        {prevPose && (
          <Link 
            to={`/poses/${prevPose.name}`} 
            className="fixed top-1/2 left-0 -translate-y-1/2 group flex items-center gap-1 z-50"
          >
            <div className="flex items-center justify-center w-6 h-12 md:w-8 md:h-16 bg-moss/20 hover:bg-moss/30 rounded-r-full pr-2 transition-all duration-300 ease-in-out group-hover:scale-[103%] group-hover:shadow-md">
              <svg className="text-gray-400 group-hover:text-moss transition-colors duration-300" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </div>
            
            <div className="block absolute left-16 top-1/2 -translate-y-1/2 bg-white rounded-md px-3 py-1 border border-moss/20 opacity-0 -translate-x-4 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap">
              <span className="text-sm">{prevPose.name}</span>
            </div>
          </Link>
        )}
        {nextPose && (
          <Link 
            to={`/poses/${nextPose.name}`} 
            className="fixed top-1/2 right-0 -translate-y-1/2 group flex items-center gap-1 z-50"
          >
            <div className="block absolute right-16 top-1/2 -translate-y-1/2 bg-white rounded-md px-3 py-1 border border-moss/20 opacity-0 translate-x-4 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap">
              <span className="text-sm">{nextPose.name}</span>
            </div>
            
            <div className="flex items-center justify-center w-6 h-12 md:w-8 md:h-16 bg-moss/20 hover:bg-moss/30 rounded-l-full pl-2 transition-all duration-300 ease-in-out group-hover:scale-[103%] group-hover:shadow-md">
              <svg className="text-gray-400 group-hover:text-moss transition-colors duration-300" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </div>
          </Link>
        )}
      </div>

      {/* Header */}
      <header className="relative px-6 py-8 group w-full bg-moss bg-opacity-20 rounded-2xl">
        <p className="text-4xl md:text-6xl text-center tracking-tight opacity-90 relative text-white font-medium">
          {poseSanskirt.sanskrit_name}
        </p>
        <h2 className="text-4xl md:text-6xl text-center my-4 transition-all duration-300 ease-in-out hover:opacity-80">
          {pose.name}
        </h2>
        <p className="text-lg md:text-xl italic tracking-wide text-center mt-3 opacity-80">
          {poseSanskirt.sanskrit_translation}
          <span className="ml-2 text-base md:text-lg opacity-75">
            {poseSanskirt.sanskrit_pronunciation}
          </span>
        </p>
        
      {/* Tags */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
        {[
          { title: "Benefits", data: pose.benefit, slug: "benefit" },
          { title: "Body Parts", data: pose.part, slug: "part" },
          { title: "Pose Types", data: pose.type, slug: "type" },
          { title: "Chakras", data: pose.chakra, slug: "chakra" }
        ].map(section => 
          section.data.length > 0 && (
            <div key={section.slug} className="bg-moss/15 rounded-xl p-3">
              <p className="font-medium text-sm">{section.title}</p>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {section.data.map(item => (
                  <Link
                    key={item}
                    to={`/poses/${section.slug}/${item.toLowerCase().replace(/\s/g, '%20')}`}
                    className="bg-white text-moss text-xs font-medium px-2 py-1 rounded-md hover:scale-[103%] transition duration-300 ease-in-out"
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
    </div>
      
    {/* Image */}
    {pose.image && (
      <img
        src={pose.image}
        alt={pose.name}
        style={{ maxWidth: '300px', height: 'auto' }}
        className="mx-auto "
      />
    )}

      {/* Table of Contents */}
      <nav className="sticky top-16 z-10 my-12">
        <div className="backdrop-blur-sm bg-white/80 rounded px-1 py-4">
          <button 
            onClick={() => setTocOpen(!tocOpen)} 
            className="absolute top-4 right-0 px-2 py-1 text-sm border border-moss/50 text-moss bg-white rounded-md shadow hover:scale-[103%] transition-all"
          >
            {tocOpen ? 'Hide' : 'Show'}
          </button>
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-moss tracking-wider">Table of Contents</h4>
              <div className="h-px flex-1 bg-moss/20 ml-4"></div>
            </div>
          {tocOpen && (
          <>
            <div className="flex flex-col md:flex-row flex-wrap gap-x-8 gap-y-3">
              <a
                href="#description" 
                className="text-charcoal/80 hover:text-moss relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-moss after:transition-all hover:after:w-full"
              >
                Overview
              </a>
              <a 
                href="#benefits" 
                className="text-charcoal/80 hover:text-moss relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-moss after:transition-all hover:after:w-full"
              >
                Benefits
              </a>
              <a 
                href="#origins" 
                className="text-charcoal/80 hover:text-moss relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-moss after:transition-all hover:after:w-full"
              >
                Origins
              </a>
              <a 
                href="#cues" 
                className="text-charcoal/80 hover:text-moss relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-moss after:transition-all hover:after:w-full"
              >
                Cues
              </a>
              <a 
                href="#related" 
                className="text-charcoal/80 hover:text-moss relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-moss after:transition-all hover:after:w-full"
              >
                Related
              </a>
            </div>
          </>
          )}
        </div>
      </nav>

      {/* Overview */}
      {poseDesc && poseDesc.desc && (
        <section id="description" className="group scroll-mt-96 md:scroll-mt-40">
          <h2 className="text-left text-2xl md:text-3xl tracking-wider my-8 group-hover:text-moss transition duration-300">
            Overview
          </h2>
          <div className="bg-white/50 backdrop-blur-sm p-8 shadow-sm rounded border border-moss/20">
            <p>{poseDesc.desc}</p>
            {poseDesc.source && (
              <p className="text-xs text-gray-500 mt-4 italic">Source: {poseDesc.source}</p>
            )}
          </div>
        </section>
      )}

      {/* Benefits */}
      {poseBenefit && (poseBenefit.physical || poseBenefit.mental) && (
        <section id="benefits" className="group scroll-mt-96 md:scroll-mt-40">
          <h2 className="text-left text-2xl md:text-3xl tracking-wider my-8 group-hover:text-moss transition duration-300">
            Benefits
          </h2>
          <div className="bg-white/50 backdrop-blur-sm p-8 shadow-sm rounded border border-moss/20">
            {poseBenefit.physical && (
              <p className="mb-4">
                <span className="font-medium">Physical Benefits:</span> {poseBenefit.physical}
              </p>
            )}
            {poseBenefit.mental && (
              <p>
                <span className="font-medium">Mental Benefits:</span> {poseBenefit.mental}
              </p>
            )}
            {poseBenefit.source && (
              <p className="text-xs text-gray-500 mt-4 italic">Source: {poseBenefit.source}</p>
            )}
          </div>
        </section>
      )}

      {/* Origins */}
      {poseSanskirt && poseSanskirt.context && (
        <section id="origins" className="group scroll-mt-96 md:scroll-mt-40">
          <h2 className="text-left text-2xl md:text-3xl tracking-wider my-8 group-hover:text-moss transition duration-300">
            Origins
          </h2>
          <div className="bg-white/50 backdrop-blur-sm p-8 shadow-sm rounded border border-moss/20">
            <p>{poseSanskirt.context}</p>
            {poseSanskirt.source && (
              <p className="text-xs text-gray-500 mt-4 italic">Source: {poseSanskirt.source}</p>
            )}
          </div>
        </section>
      )}

      {/* Cues */}
      {poseCues && poseCues.cues && (
        <div id="cues" className="group scroll-mt-96 md:scroll-mt-40">
          <h2 className="text-left text-2xl md:text-3xl tracking-wider my-8 group-hover:text-moss transition duration-300">Alignment Cues</h2>
          <div className="space-y-6">
            {poseCues.cues.map((cue, index) => {
              const linkPoseNames = (cueText) => {
                const matchedPoseCue = posesData.find((p) => cueText.includes(p.name));
                
                if (matchedPoseCue) {
                  return (
                    <>
                      {cueText.split(matchedPoseCue.name).map((part, partIndex) => (
                        <React.Fragment key={`${index}-${partIndex}`}>
                          {part}
                          {partIndex < cueText.split(matchedPoseCue.name).length - 1 && (
                            <Link
                              to={`/poses/${matchedPoseCue.name}`}
                              className="text-moss hover:underline font-medium"
                            >
                              {matchedPoseCue.name}
                            </Link>
                          )}
                        </React.Fragment>
                      ))}
                    </>
                  );
                }
                return cueText; 
              };
              
              return (
                <div key={index} className="flex items-start space-x-4 bg-white p-6 rounded-2xl border border-moss border-opacity-30 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-moss bg-opacity-80 text-white flex items-center justify-center font-medium">
                    {index + 1}
                  </div>
                  <div className="flex-1 tracking-wide leading-relaxed">{linkPoseNames(cue)}</div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Related Poses */}
      {relatedPoses.length > 0 && (
        <section id="related" className="group scroll-mt-96 md:scroll-mt-40">
          <h2 className="text-left text-2xl md:text-3xl tracking-wider my-8 group-hover:text-moss transition duration-300">Related Poses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPoses.slice(0, 6).map((relatedPose) => (
              <Link
                key={relatedPose.id}
                to={`/poses/${relatedPose.name}`}
                className="block border border-moss/20 rounded p-2 transition-all duration-500 hover:shadow hover:scale-105"
              >
                <div className="overflow-hidden mb-3">
                  <img 
                    src={relatedPose.image} 
                    alt={relatedPose.name}
                    className="w-full aspect-square object-cover"
                  />
                </div>
                <h4 className="text-base font-medium tracking-wide mb-1">{relatedPose.name}</h4>
                {relatedPose.type && (
                  <div className="flex gap-2">
                    {relatedPose.type.slice(0, 2).map((type, index) => (
                      <span key={index} className="text-xs text-charcoal/80">
                        {type}
                      </span>
                    ))}
                  </div>
                )}
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Sources */}
      {sources.length > 0 && (
        <div
          id="sources"
          className="group mt-6 pt-4 border-t border-gray-300"
          style={{ marginTop: '1.5rem' }}
        >
        <h3 className="my-4">Sources</h3>
          <ul className="list-inside list-decimal space-y-2">
            {sources.map((source, index) => (
              <li key={index} >
                {source.text} 
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PosePage;
