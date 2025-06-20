import { Link } from "react-router-dom";
import posesData from "../data/poses.json";

const PoseList = () => {
  return (
    <div className="flex flex-col w-screen">
      <h1>Pose Library</h1>
      <div className="flex flex-col min-h-screen w-full max-w-3xl space-y-8 px-8 py-4 mx-auto">
        {posesData.length === 0 ? (
          <p className="text-center">
            No poses found for this category.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-8">
            {posesData.map((pose) => (
              <div
                key={pose.id}
                className="relative p-4 border bg-white bg-opacity-50 rounded shadow hover:shadow-lg transition-shadow duration-300"
              >
                <Link to={`/poses/${pose.name}`} className="group flex flex-col items-center">
                  {pose.image ? (
                    <img
                      src={pose.image}
                      alt={pose.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-96 sm:h-72 flex items-center justify-center bg-gray-100">
                      <span className="text-xs opacity-30">No Image</span>
                    </div>
                  )}
                  <span className="mt-2 lowercase tracking-wide text-center leading-relaxed group-hover:text-moss transition-all duration-300">
                    {pose.name}
                  </span>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PoseList;
