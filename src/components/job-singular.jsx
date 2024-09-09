import { useState } from "react";
import { Link } from "react-router-dom";
import { FaMapMarker } from "react-icons/fa";

function JobSingular({ job }) {
  const [text, setText] = useState(false);

  function expandText() {
    setText(true);
  }
  function reduceText() {
    setText(false);
  }

  return (
    <div className="bg-white rounded-xl shadow-md relative basis-[90%] ">
      <div className="p-4">
        <div className="mb-6">
          <div className="text-gray-600 my-2">{job.type}</div>
          <h3 className="text-xl font-bold">{job.title}</h3>
        </div>

        {text ? (
          <>
            <div className="mb-5">{job.description}</div>
            <p
              className="cursor-pointer font-semibold text-indigo-500 mb-2"
              onClick={reduceText}
            >
              Less
            </p>
          </>
        ) : (
          <>
            <div className="mb-5">{job.description.substr(0, 110)}...</div>
            <p
              className="cursor-pointer font-semibold text-indigo-500 mb-2"
              onClick={expandText}
            >
              More
            </p>
          </>
        )}

        <h3 className="text-indigo-500 mb-2">{job.salary} / Year</h3>

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="text-orange-700 mb-3">
            <FaMapMarker className="text-lg inline-block mr-1" />
            
            {job.location}
          </div>
          <Link
            to={`/job/${job.id}`}
            className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default JobSingular;
