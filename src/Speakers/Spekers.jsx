import { useEffect, useState } from "react";
import SpekersCard from "./SpekersCard";


const Spekers = () => {

    const [speakers, setSpeakers] = useState([])

    useEffect(() => {
        fetch('/spekers.json')
            .then(res => {console.log(res); return res.json()})
            .then(data => {
                setSpeakers(data)
            })
    }, [])

    console.log(speakers)



    return (
        <div >
            <div data-aos="flip-left"   data-aos-duration="3000"  className="pl-4 mt-10 ">
                <div className="flex items-center ">
                    <img src="https://devconfbd.com/images/speaker-icon.svg"  />
                <h1 className="md:text-6xl ml-8 text-2xl mt-10 mb-8 font-semibold text-start">Our Upcoming Guests</h1>
                </div>
                <h3 className="text-start font-medium  text-base md:text-[25px] md:leading-[40px] lg:leading-[58px]   lg:text-[40px]  text-gray-600 mb-12">Join us at our upcoming event <span className="text-primary font-bold">Dev 3.0</span> event to learn from the best and <br /> brightest minds in programming, including our <br /> esteemed guest speakers.</h3>
            </div>
            <div data-aos="flip-right" data-aos-duration="3000" className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 ">
               {
                   speakers?.map(speaker => <SpekersCard key={speaker.id} speaker={speaker}></SpekersCard>)
               }
            </div>
        </div>
    );
};

export default Spekers;