import { Link } from "react-router-dom";
import "../Pages/Login/Login.css";
import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  return (
    <div data-aos="fade-right" data-aos-duration="3000" className="flex">
      <Link className="md:text-sm lg:text-sm text-xs font-semibold" ><button className="btn-grad   font-bold">Book Now hurry up</button></Link>

      <Marquee pauseOnHover={true} speed={130}>
        <Link className="md:text-lg mr-4 text-sm font-semibold" > Get ready to experience a excilent event organized by Dev 3.0, Experience an unforgettable day at dev 3.0.</Link>
        <Link className="md:text-lg text-sm font-semibold">Book our package to make your event or conference successfull... Get discount upto 20% for all packages </Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
