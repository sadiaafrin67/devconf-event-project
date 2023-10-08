import PropTypes from "prop-types";
import ServicesCard from "./ServicesCard";

const Services = ({ services }) => {
  // console.log('services diye aslm', services);

  return (
    <div>
      <h2 className="text-center font-bold text-2xl mt-10">
        Our Event <span className="text-primary">Services</span>
      </h2>
      <p className="text-center font-medium text-base py-5 px-3 text-gray-600 mb-4">
        Experience an unforgettable day at devConf 2.0 on May 27, 9 AM to 6 PM.
        Register now to secure your seat!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {services?.map((service) => (
          <ServicesCard key={service.id} service={service}></ServicesCard>
        ))}
      </div>
    </div>
  );
};

Services.propTypes = {
  services: PropTypes.array,
};
export default Services;
