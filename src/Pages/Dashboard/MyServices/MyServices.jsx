
import { useContext, useEffect, useState } from "react";
import MyServiceCard from "./MyServiceCard";
import Swal from "sweetalert2";
import { AuthContext } from "../../../providers/AuthProvider";
import axios from "axios";
import { useNavigate } from "react-router-dom";



const MyServices = () => {
    const {user} = useContext(AuthContext)
    const [bookings, setBookings] = useState([]);
    const navigate = useNavigate()



    const url = `https://local-tours-and-guide-server-vert.vercel.app/bookings?email=${user?.email}`;

    useEffect(() => {

      axios.get(url, {withCredentials: true})
      .then(res => {
        console.log(res.data);
        setBookings(res.data);
      })
    },[url])

    
  const handleDeleteService = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`https://local-tours-and-guide-server-vert.vercel.app/bookings/${id}`)
        .then(res => {
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            const remainingItems = bookings.filter((booking) => booking._id !== id);
            setBookings(remainingItems);
            Swal.fire("Deleted!", "Your cart has been deleted.", "success");
          }
        })
      }
    });
  };
 
    return (
        <div className="container mx-auto">
           <div>
            <div className="py-8">
              <div
                className="hero rounded-lg"
                style={{
                  backgroundImage:
                    "url(https://i.ibb.co/XWZ6GMx/cool-background-5.png)",
                }}
              >
                <div className="hero-overlay bg-opacity-60 py-12 rounded-lg"></div>
                <div className="hero-content text-center text-neutral-content rounded-lg py-12">
                  <div className="max-w-xl">
                    <h1 className="mb-5 text-5xl font-bold">
                    😊 My Services 😊
                    </h1>
                  
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {
                    bookings.map(booking => <MyServiceCard key={booking._id} booking={booking} handleDeleteService={handleDeleteService} navigate={navigate}></MyServiceCard>)
                }
            </div>
          </div>
        </div>
    );
};

export default MyServices;