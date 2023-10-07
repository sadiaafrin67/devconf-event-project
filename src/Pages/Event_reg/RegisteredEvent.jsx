import { useEffect, useState } from "react";


const RegisteredEvent = () => {

    const [registeredEvent, setRegisteredEvent] = useState([]);
    const [noDataFound, setNoDataFound] = useState('')

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
            {noDataFound ? <p className="h-screen">{noDataFound}</p> : 
            <div>
                
                </div>}
        </div>
    );
};

export default RegisteredEvent;