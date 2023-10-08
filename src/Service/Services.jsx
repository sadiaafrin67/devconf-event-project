import PropTypes from "prop-types";
import ServicesCard from "./ServicesCard";

const Services = ({ services }) => {
  // console.log('services diye aslm', services);

  return (
    <div  data-aos="flip-left"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="3000">
      <h2 className="text-center font-bold text-2xl mt-10">
      Our <span  className="text-primary">Tech Conference</span> Packages
      </h2>
      <p className="text-center font-medium text-base py-5 px-3 md:px-12 text-gray-600 mb-4">
        Experience an unforgettable event organized by Dev 3.0 on May 27, 9 AM to 6 PM. <br />
       Booked us for make your event or conference successfull. 
      </p>

      <div  data-aos="fade-down"
    data-aos-easing="linear"
    data-aos-duration="3000" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
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
