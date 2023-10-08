import { Link } from "react-router-dom";
import "../Pages/Login/Login.css";
import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  return (
    <div className="flex">
      <Link className="md:text-sm lg:text-sm text-xs font-semibold" ><button className="btn-grad   font-bold">Registration open hurry up</button></Link>

      <Marquee pauseOnHover={true} speed={130}>
        <Link className="md:text-lg text-sm font-semibold" > Get ready to experience a excilent event DevConf 2.0, Experience an unforgettable day at devConf 2.0 on May 27, 9 AM to 6 PM. Register now to secure your seat! Registration open now hurry up to secure your seat.....  </Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
