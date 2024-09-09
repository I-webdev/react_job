import Card from "./card";
import { useParams } from "react-router-dom";
function HomeCard() {
  const {id} = useParams();
    return (
      <section className="py-4">
        <div className="container-xl lg:container m-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
            <Card
              colour="bg-gray-100"
              heading="For Developers"
              paragraph="Browse our React jobs and start your career today"
              btn="Browse Job"
              href= "/jobs"
            />
            <Card
              colour="bg-indigo-100"
              heading="For Employers"
              paragraph="List your job to find the perfect
            developer for the role"
            btn = "Add Jobs"
            href={`/add_job`}
            />
              
          </div>
        </div>
      </section>
    );
    
}
export default HomeCard;