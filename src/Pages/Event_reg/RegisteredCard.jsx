import { Link } from "react-router-dom";
import '../Login/Login.css'


const RegisteredCard = ({service}) => {
    const { id, techName, img, registrationFee, shortDescription, benefits } = service || {
        
    }
    return (
<div className="card  bg-base-100 shadow-xl">
  <div className="card-body">
 
    <h2 className="card-title">{techName}</h2>
    <p className="font-medium my-3 text-gray-500">Benifits: {benefits}</p>
    <p className="font-medium  text-gray-400">{shortDescription}</p>
    
  </div>
 
  <figure><img className="h-96 w-full" src={img} alt="Shoes" /></figure>
<div className="mx-auto my-5">
<Link to='/'><button className="btn-grad w-full   font-bold">View Details</button></Link>
</div>
</div>
    );
};

export default RegisteredCard;