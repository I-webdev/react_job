import { useEffect, useState } from "react";
import axios from "axios";
import JobSingular from "./job-singular";
import Spinner from "./spinner";

function JobListing({ isHome }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://job-api-k0mu.onrender.com`);

        setData(response.data);

        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  const newData = data.slice(0, 3);

  return (
    <>
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            {isHome ? "Recent Jobs" : "Browse Jobs"}
          </h2>

          {loading ? (
            <Spinner loading={loading} />
          ) : (
            <>
              {isHome ? (
                <div className="flex flex-col-reverse md:flex-row-reverse gap-6">
                  {newData.map((dat) => (
                    <JobSingular job={dat} key={dat.id} />
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {data.map((dat) => (
                    <JobSingular job={dat} key={dat.id} />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}
export default JobListing;
