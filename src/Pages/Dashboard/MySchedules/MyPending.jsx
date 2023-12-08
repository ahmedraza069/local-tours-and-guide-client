import { useState } from "react";

const MyPending = ({ pendingWork, handleStatusUpdate }) => {
  const {
    _id,
    serviceName,
    serviceImg,

    packagePrice,
    timeZone,
    serviceArea,
    packageCategory,
    packageTitle,
    status,
  } = pendingWork;


  const [selectedStatus, setSelectedStatus] = useState("pending");


  return (
    <div>
      <div
        className="flex overflow-hidden rounded-lg shadow-lg dark:bg-gray-800"
        style={{
          backgroundImage:
            'url("https://i.ibb.co/9VscrKy/cool-background-3.png")',
        }}
      >
        <div
          className="w-1/3 bg-cover"
          style={{ backgroundImage: `url("${serviceImg}")` }}
        ></div>

        <div className="w-2/3 p-4 md:p-4">
          <button className="px-2 py-1 my-2 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded  focus:outline-none focus:bg-gray-700 ">
            {packageCategory}
          </button>
          <h1 className="text-xl font-bold text-gray-800 dark:text-white">
            {serviceName}
          </h1>

          <p className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-400">
            {packageTitle}
          </p>

          <h1 className="text-medium font-bold py-2 text-gray-800 dark:text-white">
            Date: {timeZone}
          </h1>
          <h1 className="text-medium font-bold pb-2 text-gray-800 dark:text-white">
            Date: {serviceArea}
          </h1>

          <h1 className="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">
            ${packagePrice}
          </h1>
          <div className="flex justify-start gap-6 mt-5 item-center">
            <button
              onClick={() => handleStatusUpdate(_id, selectedStatus)}
              className=" items-center text-base font-medium text-center text-white transition duration-500 ease-in-out transform border border-white shadow-lg rounded-lg "
              style={{
                backgroundImage:
                  'url("https://i.ibb.co/Y2vFWWw/cool-background-4.png")',
              }}
            >
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="select select-bordered w-full max-w-xs text-black"
              >
                <option value={"Pending"}>Pending</option>
                <option value={"In Progress"}>In Progress</option>
                <option value={"Completed"}>Completed</option>
              </select>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPending;