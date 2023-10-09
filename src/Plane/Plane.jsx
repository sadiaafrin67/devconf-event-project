import { useEffect, useState } from "react";
import PlaneCard from "./PlaneCard";


const Plane = () => {
    const [plane, setPlane] = useState([])

    useEffect(() => {
        fetch('./plane.json')
            .then(res => {console.log(res); return res.json()})
            .then(data => {
                setPlane(data)
            })
    }, [])

    console.log(plane)
    return (
        <div>
            <div data-aos="fade-down" data-aos-duration="3000" className="pl-4 mt-10 ">
                <div className="flex items-center ">
                    <img src="https://devconfbd.com/images/speaker-icon.svg"  />
                <h1 className="md:text-6xl ml-8 text-2xl mt-10 mb-8 font-semibold text-start"><span className="text-primary font-bold">Dev 3.0</span> at a glance</h1>
                </div>
                <h3 className="text-start font-medium  text-base md:text-[25px] md:leading-[40px] lg:leading-[58px]   lg:text-[40px]  text-gray-600 mb-12">Let's have a look. How <span className="text-red-600 font-bold">exciting</span> it is going to be.</h3>
            </div>

            <div data-aos="fade-up" data-aos-duration="3000" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                {
                    plane?.map(plane => <PlaneCard key={plane.id} plane={plane}></PlaneCard>)
                }

            </div>
        </div>
    );
};

export default Plane;