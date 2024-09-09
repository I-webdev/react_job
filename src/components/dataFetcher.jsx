import axios from "axios";
// import { useParams } from "react-router-dom";

const fetchData = async ({ params }) => {
  try {
    const response = await axios.get(
      `https://job-api-k0mu.onrender.com/${params.id}`
    );

    let data = response.data;
    return data;
  } catch (err) {
    console.log(err);
  }
};
export default fetchData;
