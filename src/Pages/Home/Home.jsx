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
      <Plane></Plane>
      <Spekers></Spekers>
      <Services services={services}></Services>
      
     
      
    </div>
  );
};

export default Home;
