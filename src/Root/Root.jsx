import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const Root = () => {
  return (
    <div>
      <div className="relative">
        <Navbar />
        <div className="bg-cover bg-center min-h-screen" style={{ backgroundImage: 'url("https://i.ibb.co/9VscrKy/cool-background-3.png")' }}>
          <Outlet />
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;

