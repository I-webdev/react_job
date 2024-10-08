import { useEffect, useState } from "react";
import { useParams, Link, useNavigate, useLoaderData } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import axios from "axios";
import Spinner from "../components/spinner";
function JobPage() {
  
  // const [data, setData] = useState({});
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  let { id } = useParams();
  const navigate = useNavigate();

  function handleDelete() {
    (async () => {
      try {
        const response = await axios.delete(
          `https://job-api-k0mu.onrender.com/${id}`
        );
      } catch (error) {
        console.error("Error deleting data:", error);
      }
    })();
    return navigate("/jobs");
  }

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         `https://job-api-k0mu.onrender.com/${id}`
  //       );

  //       setData(response.data);

  //       setLoading(false);
  //     } catch (err) {
  //       setError(err);
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);
  
const data = useLoaderData();

  let company = data.company; 

  return (
    <>
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            to="/jobs"
            className="text-indigo-500 hover:text-indigo-600 flex items-center"
          >
            <FaArrowLeft className="mr-2" />
            Back to Job Listings
          </Link>
        </div>
      </section>
        <section className="bg-indigo-50">
          <div className="container m-auto py-10 px-6">
            <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
              <main>
                <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
                  <div className="text-gray-500 mb-4">{data.type}</div>
                  <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
                  <div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
                    <i className="fa-solid fa-location-dot text-lg text-orange-700 mr-2"></i>
                    <p className="text-orange-700">{data.location}</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                  <h3 className="text-indigo-800 text-lg font-bold mb-6">
                    Job Description
                  </h3>

                  <p className="mb-4">{data.description}</p>

                  <h3 className="text-indigo-800 text-lg font-bold mb-2">
                    Salary
                  </h3>

                  <p className="mb-4">{data.salary} / Year</p>
                </div>
              </main>

              {/* <!-- Sidebar --> */}
              <aside>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-6">Company Info</h3>

                  <h2 className="text-2xl">{company?.name}</h2>

                  <p className="my-2">{company?.description} </p>

                  <hr className="my-4" />

                  <h3 className="text-xl">Contact Email:</h3>

                  <p className="my-2 bg-indigo-100 p-2 font-bold">
                    {company?.contactEmail}
                  </p>

                  <h3 className="text-xl">Contact Phone:</h3>

                  <p className="my-2 bg-indigo-100 p-2 font-bold">
                    {company?.contactPhone}
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                  <h3 className="text-xl font-bold mb-6">Manage Job</h3>
                  <Link
                    to={`/job/edit/${id}`}
                    className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                  >
                    Edit Job
                  </Link>
                  <button
                    onClick={handleDelete}
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                  >
                    Delete Job
                  </button>
                </div>
              </aside>
            </div>
          </div>
        </section>
      
    </>
  );
}
export default JobPage;
