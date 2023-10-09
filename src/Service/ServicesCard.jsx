import PropTypes from 'prop-types';
import '../Service/Services.css';
import { Link } from 'react-router-dom';

const ServicesCard = ({ service }) => {

    const { id, techName, img, registrationFee,   category } = service || {}
//   console.log("servicecard diye aslm", service);


  return (
    <div>
      <div className="my-4 ">
        <div className="relative flex  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
            <img
              src={img}
              layout="fill"
            />
          </div>
          <div className="p-6">
            <h5 className="mb-2 block font-sans text-xl font-black leading-snug tracking-normal text-blue-gray-900 antialiased">
              {techName}
            </h5>
            <p className="block font-sans text-xl font-bold leading-relaxed text-inherit antialiased ">
             Package Price: {registrationFee}$
            </p>
            <p className="block my-4 font-sans  text-lg font-bold  leading-normal text-gray-800 antialiased opacity-75">
    Package Category: {category}
    </p>
          </div>
       
          <div className="p-6 pt-0">
            <Link to={`/event/${id}`}>
            <button
              className="btn-grad  select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50  disabled:shadow-none"
              type="button"
              data-ripple-light="true"
            >
              View Details 
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

ServicesCard.propTypes = {
  service: PropTypes.object
}

export default ServicesCard;
