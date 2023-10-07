import PropTypes from 'prop-types';
import ServicesCard from './ServicesCard';


const Services = ({services}) => {
    // console.log('services diye aslm', services);
    
    return (
        <div>
            <h2 className="text-center font-bold text-2xl my-10">Our Event <span className="text-primary">Services</span></h2>

            <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                {
                    services?.map(service => (
                        <ServicesCard key={service.id} service={service}></ServicesCard>
                    ))
                }

            </div>
        </div>
    );
};

Services.propTypes = {
    services: PropTypes.array
};
export default Services;