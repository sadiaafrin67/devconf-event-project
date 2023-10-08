import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ServiceCard from './ServiceCard';
import BreakingNews from '../BreakingNews/BreakingNews';

const Service = () => {

    const [service, setService] = useState()


    const {id} = useParams()
    

    const services = useLoaderData()
    // console.log('service diye aslm dinamically', services)


    useEffect( () => {

        const findService = services?.find(service => service.id == id)
        setService(findService)
        
    }, [id, services])

    return (
        <div>
            <div className="mt-20">
            <BreakingNews></BreakingNews>
            </div>
            <ServiceCard service={service}></ServiceCard>
        </div>
    );
};

export default Service;