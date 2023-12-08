/* eslint-disable react/no-unknown-property */

import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import moment from 'moment';
import axios from "axios";


const AddServices = () => {

    const {user} = useContext(AuthContext);
    console.log(user.displayName);
    const handleAddPackage = (e) =>{
        e.preventDefault();
        const form = e.target;
        const serviceName = form.service_name.value;
        const serviceImg = form.package_image.value;
        const userEmail = form.email.value;
        const userImg = form.user_image.value;
        const packagePrice = form.price.value;
        const serviceArea = form.services_area.value;
        const packageCategory = form.service_category.value;
        const packageTitle = form.title.value;
        const packageDescription = form.description.value;
        const userName = form.user_name.value;
        const timeZone = form.date_time.value;

     const packageInfo =   {serviceName, serviceImg,userName,userEmail, userImg, packagePrice, timeZone,serviceArea, packageCategory, packageTitle, packageDescription};
 
    axios.post('https://local-tours-and-guide-server-vert.vercel.app/services', packageInfo)
     
     .then(res => {
      console.log(res.data);
        if (res.data.insertedId) {
          
            Swal.fire({
              title: "Success!",
              text: "Tour Package Added SuccesFully",
              icon: "success",
              confirmButtonText: "OK",
            });
          }
          form.reset()
        
     })
    }



  return (
    <div>
      <div className="lg:p-24">
        <div
          className="mb-4 rounded-lg"
          style={{
            backgroundImage:
              'url("https://i.ibb.co/Y2vFWWw/cool-background-4.png")',
          }}
        >
          <h2 className="text-5xl font-bold text-center text-slate-800 py-8">
            😊 Add Your Tour Package 😊
          </h2>
        </div>

        <div
          className="p-8 rounded-lg"
          style={{
            backgroundImage:
              'url("https://i.ibb.co/Y2vFWWw/cool-background-4.png")',
          }}
        >
          <form onSubmit={handleAddPackage}>
            <div className="flex gap-8">
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text text-white font-semibold">
                    Package Name
                  </span>
                </label>
                <label>
                  <input
                    type="text"
                    required
                    placeholder="Package Service Name"
                    name="service_name"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text text-white font-semibold">
                    Package Photo URL
                  </span>
                </label>
                <label>
                  <input
                    type="url"
                    required
                    placeholder="Package Photo URL"
                    name="package_image"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
            {/* input flex part */}
            <div className="flex gap-8">
            <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text font-semibold text-white">
                    Your Name
                  </span>
                </label>
                <label>
                  <input
                    type="text"
                    required
                    name="user_name"
                    value={user?.displayName}
                    placeholder="Your Name"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text font-semibold text-white">
                    Your Email
                  </span>
                </label>
                <label>
                  <input
                    type="email"
                    required
                    name="email"
                    value={user?.email}
                    placeholder="Your Email"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text font-semibold text-white">
                    Your Photo URL
                  </span>
                </label>
                <label>
                  <input
                    type="url"
                    required
                    name="user_image"
                    value={user?.photoURL}
                    placeholder="Your Photo URL"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>

            {/* input flex part */}
            <div className="flex gap-8">
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text font-semibold text-white">
                    Package Price
                  </span>
                </label>
                <label>
                  <input
                    type="text"
                    required
                    name="price"
                    placeholder="Package Price"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text font-semibold text-white">
                    Services Post Date/Time
                  </span>
                </label>
                <label>
                  <input
                    type="text"
                    required
                    name="date_time"
                    value={`${moment().format("ddd, MMM D, YYYY, h:mm:ss a")}`}
                    placeholder="Package Price"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text font-semibold text-white">
                    Service Area
                  </span>
                </label>
                <label>
                  <input
                    type="text"
                    required
                    placeholder="Service Area"
                    name="services_area"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
            {/* input flex part */}
            <div className="flex gap-8">
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text font-semibold text-white">
                    Package Category
                  </span>
                </label>
                <label>
                  <select
                    required
                    name="service_category"
                    className="select select-bordered w-full"
                  >
                    <option value="">Select a category</option>
                    <option value="City Tours">City Tours</option>
                    <option value="Historical Tours">Historical Tours</option>
                    <option value="Cultural Tours">Cultural Tours</option>
                    <option value="Adventure Tours">Adventure Tours</option>
                    <option value="Nature Tours">Nature Tours</option>
                    <option value=" Art and Architecture Tours">
                      Art and Architecture Tours
                    </option>
                    <option value="Photography Tours">Photography Tours</option>
                  </select>
                </label>
              </div>
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text font-semibold text-white">Package Title</span>
                </label>
                <label>
                  <input
                    type="text"
                    required
                    placeholder="Package Title"
                    name="title"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
            <div className="mt-6 w-full">
            <p className="font-semibold text-white py-2">Description</p>
    <textarea className="p-2 rounded-lg w-full" placeholder="Enter your description here..." name="description" rows="4">
        
    </textarea>
            </div>
            {/* input flex part */}
            <div className="mb-8">
              <input
                type="submit"
                value="Add a Product"
                className="btn btn-block text-white mt-6"
                style={{
                  backgroundImage:
                    'url("https://i.ibb.co/Y2vFWWw/cool-background-4.png")',
                }}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddServices;
