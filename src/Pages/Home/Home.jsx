import { useLoaderData } from "react-router-dom";

import Banner from "./Banner";
import Services from "../../Service/Services";


const Home = () => {

    const services = useLoaderData()
    // console.log(services)


  return (
    <div>
      <Banner></Banner>
      <Services services={services}></Services>
    </div>
  );
};

export default Home;
