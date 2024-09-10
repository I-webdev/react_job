import axios from "axios";
// import { useParams } from "react-router-dom";

const FetchData = async ({ params }) => {
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
const FullData = async ({ params }) => {
  try {
    const response = await axios.get(
      `https://job-api-k0mu.onrender.com/`
    );

    let fullData = response.data;
    return data;
  } catch (err) {
    console.log(err);
  }
};
export {FetchData as default, FullData};
