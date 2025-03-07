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
  const poseIndex = posesData.findIndex((p) => p.name.toLowerCase() === name.toLowerCase());
  const pose = posesData[poseIndex];

  if (!pose) {
    return <div>Pose not found</div>;
  }


  const prevPose = posesData[(poseIndex - 1 + posesData.length) % posesData.length];
  const nextPose = posesData[(poseIndex + 1) % posesData.length];

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
    <div className="flex flex-col min-h-screen w-full max-w-3xl space-y-12 md:space-y-40 leading-[3.5] p-8 mt-12 mx-auto">
      <div>
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
      <div className="flex justify-between items-center transform -translate-y-1/2 m-1">
        {prevPose && (
          <Link 
            to={`/poses/${prevPose.name}`} 
            className="text-sm tracking-wide text-gray-700 hover:text-moss hover:border-b-2 hover:border-moss transition-all duration-300 bg-transparent border-b-0 hover:border-black pb-1"
          >
            ← {prevPose.name}
          </Link>
        )}
        {nextPose && (
          <Link 
            to={`/poses/${nextPose.name}`} 
            className="text-sm tracking-wide text-gray-700 hover:text-moss hover:border-b-2 hover:border-moss transition-all duration-300 bg-transparent border-b-0 hover:border-black pb-1"
          >
            {nextPose.name} →
          </Link>
        )}
      </div>


      <header className="relative p-6 md:p-8 flex group bg-moss bg-opacity-30 border border-moss rounded-2xl">
        <h2 className="text-4xl md:text-6xl tracking-tight text-left opacity-90 relative">
          <span className="block">
            {pose.name}
          </span>
          <span className="text-2xl tracking-wide block italic mt-4">
            {poseSanskirt.sanskrit_translation} 
          </span>
          <span className="block text-lg">{poseSanskirt.sanskrit_pronunciation}</span>
          <span className="text-4xl text-white font-medium">
            {poseSanskirt.sanskrit_name}
          </span>
        </h2>
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
    <div className="flex flex-col lg:flex-row lg:space-x-6 lg:sticky top-0 z-10 lg:py-2 text-moss text-xl w-full bg-[#f9faf4]">
      <a href="#description" className="border-b-2 border-transparent hover:border-moss transition-all duration-500 p-1">
        Overview
      </a>
      <a href="#benefits" className="border-b-2 border-transparent hover:border-moss transition-all duration-500 p-1">
        Benefits
      </a>
      <a href="#origins" className="border-b-2 border-transparent hover:border-moss transition-all duration-500 p-1">
        Origins
      </a>
      <a href="#precautions" className="border-b-2 border-transparent hover:border-moss transition-all duration-500 p-1">
        Precautions
      </a>
      <a href="#modifications" className="border-b-2 border-transparent hover:border-moss transition-all duration-500 p-1">
        Modifications
      </a>
      <a href="#cues" className="border-b-2 border-transparent hover:border-moss transition-all duration-500 p-1">
        Cues
      </a>
    </div>
      
      {/* Overview */}
      {poseDesc && poseDesc.desc && (
        <div id="description" className="group">
          <h3 className="font-medium text-2xl md:text-6xl tracking-wider my-8 group-hover:text-moss transition duration-300">Overview</h3>
          <p className="tracking-wider">{poseDesc.desc}</p>
        </div>
      )}
      {poseBenefit && (poseBenefit.physical || poseBenefit.mental) && (
        <div id="benefits" className="group">
          <h3 className="font-medium text-2xl md:text-6xl tracking-wider my-8 group-hover:text-moss transition duration-300">
            Benefits
          </h3>
          {poseBenefit.physical && (
            <p className="tracking-wider">
              <span className="font-medium">Physical Benefits:</span> {poseBenefit.physical}
            </p>
          )}
          {poseBenefit.mental && (
            <p className="tracking-wider">
              <span className="font-medium">Mental Benefits:</span> {poseBenefit.mental}
            </p>
          )}
        </div>
      )}
      {/* Origins */}
      {poseSanskirt && poseSanskirt.context && (
        <div id="origins" className="group">
          <h3 className="font-medium text-2xl md:text-6xl tracking-wider my-8 group-hover:text-moss transition duration-300">Origins</h3>
          <p className="tracking-wider">{poseSanskirt.context}</p>
        </div>
      )}
      {/* Precautions */}
      {posePrecaution && posePrecaution.precaution && (
        <div id="precautions" className="group">
          <h3 className="font-medium text-2xl md:text-6xl tracking-wider my-8 group-hover:text-moss transition duration-300">Precautions</h3>
          <p className="tracking-wider">{posePrecaution.precaution}</p>
        </div>
      )}
      {/* Modifications */}
      {poseModification && poseModification.modification && (
        <div id="modifications" className="group">
          <h3 className="font-medium text-2xl md:text-6xl tracking-wider my-8 group-hover:text-moss transition duration-300">Modifications</h3>
          <p className="tracking-wider">{poseModification.modification}</p>
        </div>
      )}
      {/* Cues */}
      {poseCues && poseCues.cues && (
        <div id="cues" className="group">
          <h3 className="font-medium text-2xl md:text-6xl tracking-wider my-8 group-hover:text-moss transition duration-300">Alignment & <br/>Breath Cues</h3>
          <ol className="list-decimal list-inside tracking-wider">
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
          { title: "Benefits", data: pose.benefit, slug: "benefit" },
          { title: "Body Parts", data: pose.part, slug: "part" },
          { title: "Pose Types", data: pose.type, slug: "type" },
          { title: "Chakras", data: pose.chakra, slug: "chakra" }
        ].map(
          (section, idx) =>
            section.data.length > 0 && (
              <div key={idx} className="bg-moss bg-opacity-30 border border-moss rounded-2xl text-sm p-4">
                <p className="font-medium tracking-wide">{section.title}</p>
                <div className="flex flex-wrap mt-2 gap-2">
                  {section.data.map((item, index) => (
                    <Link
                      key={index}
                      to={`/poses/${section.slug}/${item.toLowerCase().replace(/\s/g, '%20')}`}
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
        <div className="p-8 space-y-6 bg-moss bg-opacity-30 border border-moss rounded-2xl">
          <p className="font-medium tracking-wide text-center text-xl lg:text-2xl">
            Related Poses
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {relatedPoses.slice(0, 6).map((relatedPose) => (
              <Link
                key={relatedPose.id}
                to={`/poses/${relatedPose.name}`}
                className="bg-white text-moss text-center mx-auto w-[300px] lg:w-full font-medium px-2 py-1 rounded-lg hover:scale-105 transition"
              >
                {relatedPose.name}
              </Link>
            ))}
          </div>
        </div>
      )}


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
