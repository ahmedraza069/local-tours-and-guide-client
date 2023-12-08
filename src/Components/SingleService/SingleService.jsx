import { useLoaderData } from "react-router-dom";
import UpdateService from "../UpdateService/UpdateService";

const SingleService = () => {
  const serviceInfo = useLoaderData();
  const {
    serviceName,
    serviceImg,
    userName,
    userImg,
    packagePrice,
    timeZone,
    serviceArea,
    packageCategory,
    packageTitle,
    packageDescription,
  } = serviceInfo;
  return (
    <div>
      <div className="container px-6 py-10 mx-auto">
        <div className="lg:-mx-6 lg:flex lg:items-center">
          <img
            className="object-cover object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[36rem]"
            src={serviceImg}
            alt="product-image"
          />
          <div className="w-full h-full">
            <div
              className="flex overflow-hidden rounded-md  text-white"
              style={{
                backgroundImage:
                  'url("https://i.ibb.co/Y2vFWWw/cool-background-4.png")',
              }}
            >
              <div className="w-full p-8">
                <div className="flex space-x-4 ">
                  <img
                    alt=""
                    src={userImg}
                    className="object-cover w-12 h-12 rounded-full shadow"
                  />
                  <div className="flex flex-col space-y-1">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="text-sm font-semibold"
                    >
                      {userName}
                    </a>
                    <span className="text-xs dark:text-gray-400">
                      {timeZone}
                    </span>
                  </div>
                </div>
                <button className="px-3 py-2 my-6 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded  focus:outline-none focus:bg-gray-700 ">
                  {serviceName}
                </button>
                <div className="flex gap-6 items-center justify-start">
                  <h1 className="text-2xl font-bold  text-white">
                    {packageTitle}
                  </h1>
                  <p className="px-3 py-2 text-xs font-bold text-white transition-colors duration-300 transform bg-gray-800 rounded-full  focus:outline-none focus:bg-gray-700">
                    {packageCategory}
                  </p>
                </div>

                <p className="py-4 font-medium  text-white text-normal dark:text-gray-400">
                  {packageDescription}
                </p>
                <h1 className="text-lg my-2 font-medium text-white dark:text-gray-200 md:text-xl">
                  {serviceArea}
                </h1>
                <h1 className="text-lg my-2 font-bold text-white dark:text-gray-200 md:text-xl">
                  ${packagePrice}
                </h1>

                <div>
                  <button
                    onClick={() =>
                      document.getElementById("my_modal_4").showModal()
                    }
                    className=" my-4 px-5 py-4 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded  focus:outline-none focus:bg-gray-700 "
                  >
                    Book Now
                  </button>
                  {/* You can open the modal using document.getElementById('ID').showModal() method */}
                  <dialog id="my_modal_4" className="modal">
                    <div className="modal-box w-11/12 max-w-5xl">
                      <div>
                        <UpdateService></UpdateService>
                      </div>
                      <div className="modal-action">
                        <form method="dialog">
                          <button className=" items-center px-10 py-3.5 text-base font-medium text-center text-white transition duration-500 ease-in-out transform border border-white shadow-lg rounded-lg " style={{ backgroundImage: 'url("https://i.ibb.co/Y2vFWWw/cool-background-4.png")' }}>Close</button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
