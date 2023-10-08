import { Link } from "react-router-dom";
import '../Login/Login.css'
import PropTypes from 'prop-types'; 


const RegisteredCard = ({service}) => {
    const {  techName, img,  shortDescription, type, category } = service || {
        
    }
    return (
<div className="card  bg-base-100 shadow-xl">
  <div className="card-body">
 
    <h2 className="card-title">{techName}</h2>
    <p className="font-medium mt-3 text-gray-500">Package Category: {category}</p>
    <p className="font-medium mb-3  text-gray-500">Package Type: {type}</p>
    <p className="font-medium  text-gray-400">{shortDescription}</p>
    
  </div>
 
  <figure><img className="h-96 w-full" src={img} alt="Shoes" /></figure>
<div className="mx-auto my-5">
<Link to='/'><button className="btn-grad w-full   font-bold">Learn More</button></Link>
</div>
</div>
    );
};

RegisteredCard.propTypes = {
    service: PropTypes.object
}

export default RegisteredCard;