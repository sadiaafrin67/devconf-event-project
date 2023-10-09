import { HiArrowCircleRight } from "react-icons/hi";
import PropTypes from 'prop-types'; 


const PlaneCard = ({plane}) => {
    const { name, date } = plane ||  {}   
    
    return (
        <div className="px-2">
            <div className="flex p-3 items-center rounded-full border-[3px] border-blue-400 hover:border-blue-700">
               <div>
                 <HiArrowCircleRight className="text-xl rounded-full mx-4"></HiArrowCircleRight>
               </div>
               <div>
                <h3 className="md:text-xl font-bold">{name}</h3>
                <p className="text-base text-gray-500 font-medium">{date}</p>
               </div>
            </div>
        </div>
    );
};

PlaneCard.propTypes = {
    plane: PropTypes.object
}

export default PlaneCard;