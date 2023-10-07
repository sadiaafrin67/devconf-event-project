import { useEffect, useState } from "react";
import '../Login/Login.css'
import RegisteredCard from "./RegisteredCard";


const RegisteredEvent = () => {

    const [registeredEvent, setRegisteredEvent] = useState([]);
    const [noDataFound, setNoDataFound] = useState('')
    const [isShowMore, setIsShowMore] = useState(false)

    useEffect(() => {
        const registeredEvent = JSON.parse(localStorage.getItem('registered'))
        

        if(registeredEvent){
            setRegisteredEvent(registeredEvent)
        }
        else{
            setNoDataFound('No Data Found')
        }
    }, [])


    return (
        <div>

            {noDataFound ? <>
            <img className="h-[80vh] my-10 w-full md:w-2/5 mx-auto" src="https://i.ibb.co/R7JYLL2/5928293-2953962.jpg"  />
            </>  : 
            <div className="my-20 grid grid-cols-1 lg:grid-cols-2 gap-6">
                
                {isShowMore ? registeredEvent.map(service => <RegisteredCard key={service.id} service={service}></RegisteredCard>) 
                : 
                registeredEvent.slice(0, 2).map(service => <RegisteredCard key={service.id} service={service}></RegisteredCard>)
                }

                </div>}


<div className="flex justify-center mx-auto mb-10">
<button onClick={() => setIsShowMore(!isShowMore)} className="btn-grad  ">{isShowMore ? 'See Less' : 'See More'}</button>
</div>

        </div>
    );
};

export default RegisteredEvent;