/* eslint-disable react-hooks/rules-of-hooks */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import MyBookings from "./MyBookings";
import MyPending from "./MyPending";
import Swal from "sweetalert2";


const MySchedules = () => {
  const { user } = useContext(AuthContext);
  const [myBookings, setMyBookings] = useState([]);
  const [pendingWorks, setPendingWorks] = useState([]);

  const url = `https://local-tours-and-guide-server-vert.vercel.app/bookings`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
      
        const myBookings = data.filter((booking) => booking.email === user?.email);
        const otherBookings = data.filter((booking) => booking.email !== user?.email);

        setMyBookings(myBookings);
        setPendingWorks(otherBookings);
      });
  }, [url, user]);

  const handleStatusUpdate = (id, newStatus) => {
    if (newStatus !== "Pending") {
      fetch(`https://local-tours-and-guide-server-vert.vercel.app/bookings/${id}`, {
        method: 'PATCH',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.modifiedCount > 0) {
            Swal.fire({
              title: "Success!",
              text: "Status Upadte Successfully",
              icon: "success",
              confirmButtonText: "OK",
            });
            const remaining = pendingWorks.filter((pendingWork) => pendingWork._id !== id);
            const updated = pendingWorks.find((pendingWork) => pendingWork._id === id);
            updated.status = newStatus;
            const newStatusUpdate = [updated, ...remaining];
            setPendingWorks(newStatusUpdate);
          }
        });
    } else {
      console.log("Changing to 'Pending' is not allowed.");
    }
}


  if (!user || !user.email) {
    return (
      <div className="md:flex justify-center items-center h-screen">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="container mx-auto">
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
              <h1 className="mb-5 text-5xl font-bold">😊 My Schedules 😊</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between gap-6">
        <div
          className="hero rounded-lg border"
          style={{
            backgroundImage:
              "url(https://i.ibb.co/XWZ6GMx/cool-background-5.png)",
          }}
        >
          <div className="hero-overlay bg-opacity-60 py-12 rounded-lg"></div>
          <div className="hero-content text-center text-neutral-content rounded-lg py-12">
            <div className="max-w-xl">
              <h1 className="mb-5 text-5xl font-bold">My Bookings</h1>
            </div>
          </div>
        </div>
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
              <h1 className="mb-5 text-5xl font-bold">My Pending Works</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between py-8 gap-6">
        <div className="grid grid-cols w-full gap-6 border-2 p-6 rounded-lg border-black">
          {
            myBookings.map(myBook => <MyBookings key={myBook._id} myBook={myBook}></MyBookings>)
          }
        </div>
        <div className="grid grid-cols w-full gap-6 border-2 p-6 rounded-lg border-black">
            {
                pendingWorks.map(pendingWork => <MyPending pendingWork={pendingWork} key={pendingWork._id}  handleStatusUpdate={handleStatusUpdate}></MyPending>)
            }
        </div>
      </div>
    </div>
  );
};

export default MySchedules;
