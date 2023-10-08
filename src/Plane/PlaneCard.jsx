import { HiArrowCircleRight } from "react-icons/hi";



const PlaneCard = ({plane}) => {
    const { name, date } = plane ||  {}   
    
    return (
        <div className="">
            <div className="flex p-3 items-center rounded-full border-[3px] border-blue-400">
               <div>
                 <HiArrowCircleRight className="text-2xl rounded-full mx-4"></HiArrowCircleRight>
               </div>
               <div>
                <h3 className="text-xl font-bold">{name}</h3>
                <p className="text-base font-medium">{date}</p>
               </div>
            </div>
        </div>
    );
};

export default PlaneCard;