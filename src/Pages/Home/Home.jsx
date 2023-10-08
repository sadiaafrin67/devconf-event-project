import { useLoaderData } from "react-router-dom";

import Banner from "./Banner";
import Services from "../../Service/Services";
import BreakingNews from "../../BreakingNews/BreakingNews";
import Spekers from "../../Speakers/Spekers";
import Plane from "../../Plane/Plane";


const Home = () => {

    const services = useLoaderData()
    // console.log(services)


  return (
    <div>
      <Banner></Banner>
      <BreakingNews></BreakingNews>
      <Services services={services}></Services>
      <Spekers></Spekers>
      <Plane></Plane>
      
    </div>
  );
};

export default Home;
