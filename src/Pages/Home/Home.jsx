import { Link } from "react-router-dom";
import Slider from "../../Components/Slider/Slider";
import PopullarService from "../../Components/PopullarService/PopullarService";
import CustomerReviews from "../../Components/CustomerReviews/CustomerReviews";
import Faq from "../../Components/Faq/Faq";
import Features from "../../Components/Features/Features";
import Stats from "../../Components/Stats/Stats";
import { motion } from "framer-motion";

import { fadeIn } from "../../variant.js";

import useServices from "../../Hooks/useServices.jsx";
import Loading from "../../Components/Loading/Loading.jsx";


const Home = () => {
  const { data, isLoading } = useServices();

  const popularServicesSliceData = data ? data.slice(0, 4) : [];

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <Slider></Slider>
      <div>
        <motion.div
             variants={fadeIn("up", 0.2)}
             initial="hidden" 
             whileInView="show"
             viewport={{ once: false, amount: 0.7 }}
        >
          <h2 className="my-12 lg:my-16 text-center font-bold text-6xl text-gray-600">
            Our Latest Services
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 container mx-auto">
          {popularServicesSliceData.map((serviceData) => (
            <PopullarService
              key={serviceData._id}
              serviceData={serviceData}
            ></PopullarService>
          ))}
        </div>
        <div className="text-center py-10">
          <Link to={"/services"}>
            <button
              className=" items-center px-10 py-3.5 text-base font-medium text-center text-white transition duration-500 ease-in-out transform border border-white shadow-lg rounded-lg "
              style={{
                backgroundImage:
                  'url("https://i.ibb.co/Y2vFWWw/cool-background-4.png")',
              }}
            >
              See All
            </button>
          </Link>
        </div>
      </div>
      <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden" 
      whileInView="show"
      viewport={{ once: false, amount: 0.7 }}
      >
        <CustomerReviews></CustomerReviews>
      </motion.div>
      <motion.div
       variants={fadeIn("down", 0.2)}
       initial="hidden" 
       whileInView="show"
       viewport={{ once: false, amount: 0.7 }}
      >
        <Faq></Faq>
      </motion.div>
      <motion.div
       variants={fadeIn("up", 0.2)}
       initial="hidden" 
       whileInView="show"
       viewport={{ once: false, amount: 0.7 }}
      >
        <Features></Features>
      </motion.div>
      <motion.div
       variants={fadeIn("up", 0.2)}
       initial="hidden" 
       whileInView="show"
       viewport={{ once: false, amount: 0.7 }}
      className="py-6">
        <Stats></Stats>
      </motion.div>
    </div>
  );
};

export default Home;
