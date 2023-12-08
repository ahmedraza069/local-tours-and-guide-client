import { createBrowserRouter } from "react-router-dom";
import Root from "../../Root/Root";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import Home from "../../Pages/Home/Home";
import Contact from "../../Pages/Contact/Contact";


import MyServices from "../../Pages/Dashboard/MyServices/MyServices";
import AddServices from "../../Pages/Dashboard/AddServices/AddServices";

import AllServices from "../../Pages/AllServices/AllServices";
import SingleService from "../../Components/SingleService/SingleService";
import PrivateRoute from "./PrivateRoute";
import MySchedules from "../../Pages/Dashboard/MySchedules/MySchedules";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import UpdatePackage from "../../Pages/Dashboard/MyServices/UpdatePackage";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://local-tours-and-guide-server-vert.vercel.app/services')
      },
      {
        path: '/services',
        element: <AllServices></AllServices>,
        loader: () => fetch('https://local-tours-and-guide-server-vert.vercel.app/services')
       
      },
      {
        path: '/services/:id',
        element: <PrivateRoute><SingleService></SingleService></PrivateRoute>,
        loader: ({params}) => fetch(`https://local-tours-and-guide-server-vert.vercel.app/services/${params.id}`)
      },
 
      {
        path: '/my-services',
        element: <PrivateRoute><MyServices></MyServices></PrivateRoute>,
      },
     {
      path: '/update-package/:id',
      element:<PrivateRoute> <UpdatePackage></UpdatePackage></PrivateRoute>,
      loader: ({params}) => fetch(`https://local-tours-and-guide-server-vert.vercel.app/bookings/${params.id}`)
     },
      {
        path: '/add-services',
        element: <PrivateRoute><AddServices></AddServices></PrivateRoute>, 
      },
      {
        path: '/my-schedules',
        element: <PrivateRoute><MySchedules></MySchedules></PrivateRoute>,
        loader: () => fetch('https://local-tours-and-guide-server-vert.vercel.app/bookings')
      }
      ,
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      }
    ]
  },
]);

export default router;