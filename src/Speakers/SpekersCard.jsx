import '../Pages/Login/Login.css';

const SpekersCard = ({speaker}) => {
    const {img, name, company, id} = speaker
    return (
        <div>
            <div>
               <div className="mx-auto border-[3px] border-blue-500 rounded-full w-[250px]">
               <img className="border-[3px] border-blue-500  rounded-full  w-[250px] overflow-x-hidden  hover:scale-105 scale-100 ease-in-out duration-300" src={img} alt="" />
               </div>
              <div className="text-center">
              <h1 className="text-2xl font-bold mt-3">{name}</h1>
                <p className="text-xl font-semibold my-4">{company}</p>
              </div>
            </div>
        </div>
    );
};

export default SpekersCard;