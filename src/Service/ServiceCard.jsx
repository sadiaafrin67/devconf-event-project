import './Services.css';
import swal from 'sweetalert';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const ServiceCard = ({service}) => {

    const { id, techName, img, registrationFee, shortDescription, benefits } = service || {}

    const handleRegistered = () => {

        const addToRegister = []

        const registeredEvent = JSON.parse(localStorage.getItem('registered'))
        

        if(!registeredEvent){
            addToRegister.push(service)
            localStorage.setItem('registered', JSON.stringify(addToRegister))
            swal("Registeration Successful", "You are successfully registered for this event,  Thank you for joining", "success");

        }
        else{

            const isExist = registeredEvent.find(item => item.id == id)

            if(!isExist){
                addToRegister.push(...registeredEvent, service)
                localStorage.setItem('registered', JSON.stringify(addToRegister))
                swal("Registeration Successful", "You are successfully registered for this event, Thank you for joining", "success");
            }
            else{
                swal("Already Registered", "You are already registered for this event, Thank you for joining", "error");
            }


            
        }
    }

    return (
<div className="relative my-20 mx-auto flex w-full md:w-2/3 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
    <img className='h-full w-full' src={img}/>
  </div>
  <div className="p-6">
    <div className="mb-2 flex items-center justify-between">
      <p className="block font-sans text-2xl font-bold font- leading-relaxed text-blue-gray-900 antialiased">
        {techName}
      </p>
     
    </div>

    <p className="block font-sans text-2xl font-bold  leading-relaxed text-blue-gray-900 antialiased">
       Registration Fee: {registrationFee}$
      </p>
    
    <p className="block my-4 font-sans  text-xl font-semibold  leading-normal text-gray-700 antialiased opacity-75">
    Benifits of joining our event: {benefits}
    </p>

    <p className="block font-sans my-9  text-base font-medium leading-normal text-gray-700 antialiased opacity-75">
    {shortDescription}
    </p>
  </div>
  <div className="p-6 pt-0">

   <Link to='/registered'>
   <button onClick={handleRegistered} className="block mx-auto btn-grad w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-base font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
      Registration Now
    </button>
   </Link>

  </div>
</div>


    );
};

ServiceCard.propTypes = {
    service: PropTypes.object
}

export default ServiceCard;