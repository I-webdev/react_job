import { Link } from "react-router-dom";
function Card({ colour = "bg-gray-100", heading, paragraph, href, btn }) {
  return (
    <div className={`${colour} p-6 rounded-lg shadow-md`}>
      <h2 className="text-2xl font-bold"> {heading}</h2>
      <p className="mt-2 mb-4"> {paragraph}</p>
      <Link
        to={href}
        className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
      >
        {btn}
      </Link>
    </div>
  );
}
export default Card;