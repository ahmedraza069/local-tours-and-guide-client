import { Link } from "react-router-dom";


const PopullarService = ({serviceData}) => {

    const {_id, serviceName, serviceImg, userEmail, userName, userImg, packagePrice, serviceArea, packageCategory, packageTitle, packageDescription, timeZone} = serviceData;
    return (
        <div className="flex flex-col p-6 space-y-6 overflow-hidden rounded-lg shadow-lg" style={{ backgroundImage: 'url("https://i.ibb.co/hyQsKRy/cool-background-6.png")' }} >
        <div className="flex justify-between items-center">
            <div className="flex space-x-4 ">
            <img alt="" src={userImg} className="object-cover w-12 h-12 rounded-full shadow" />
            <div className="flex flex-col space-y-1">
                <a rel="noopener noreferrer" href="#" className="text-sm font-semibold">{userName}</a>
                <span className="text-xs dark:text-gray-400">{timeZone}</span>
            </div>
            </div>
          <div>
          <p className="px-4 py-3  text-xs font-semibold uppercase rounded-lg text-white" style={{
                  backgroundImage:
                    'url("https://i.ibb.co/Y2vFWWw/cool-background-4.png")',
                }}>{packageCategory}</p>
          </div>
        </div>
        <p className="mb-3 border border-gray-500"></p>
        <div>
            <img src={serviceImg} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
            <p className="mb-3 border border-gray-500"></p>
            <div className="flex justify-between py-5">
            <h2 className="mb-1 text-2xl font-bold">{serviceName}</h2>
            <p className="px-4 py-3  font-semibold rounded-lg text-white" style={{
                  backgroundImage:
                    'url("https://i.ibb.co/Y2vFWWw/cool-background-4.png")',
                }}>$ {packagePrice}</p>
            </div>
            <p className="text-base text-gray-400">{packageTitle}</p>
        </div>
        <button>
     <Link to={`/services/${_id}`}>
     <p className="px-4 py-4  text-normal font-semibold hero-overlay opacity-100 uppercase rounded-lg text-white" style={{
                  backgroundImage:
                    'url("https://i.ibb.co/Y2vFWWw/cool-background-4.png")',
                }}>View Details</p>
     </Link>
        </button>
    </div>
    );
};

export default PopullarService;