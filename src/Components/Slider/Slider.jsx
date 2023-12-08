import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const Slider = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage:
              "url(https://i.ibb.co/ynnSxhz/photo-1655272427422-498f985c8998-w-500-auto-format-fit-crop-q-60-ixlib-rb-4-0.jpg",
          }}
        >
          <div className="hero-overlay bg-opacity-70"></div>
          <div className="hero-content text-center text-neutral-content">
            <div>
              <h1
                className="font-extrabold sm:text-4xl mb-5 md:px-18 sm:px-12 lg:px-24 md:text-5xl  lg:text-6xl 
              text-center"
              >
                <Typewriter
                  words={["Discover Hidden Wonders with Our Local Guides"]}
                  loop={true}
                  cursor={true}
                  cursorStyle="_"
                  delaySpeed={1000}
                />
              </h1>
              <p className="mb-5 md:px-18 sm:px-12 lg:px-24" data-aos="fade-up">
                Discover the romantic allure of Paris with a local guide. Visit
                iconic landmarks like the Eiffel Tower, Louvre Museum, and
                indulge in delicious pastries and wine.
              </p>
              <Link>
                <button className="text-white my-8 px-8 py-3 font-semibold uppercase rounded-full text-base border ">
                  Discover
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage:
              "url(https://i.ibb.co/4KWt5CP/photo-1522202176988-66273c2fd55f-w-500-auto-format-fit-crop-q-60-ixlib-rb-4-0.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-70"></div>
          <div className="hero-content text-center text-neutral-content">
            <div>
              <h1
                className="font-extrabold sm:text-4xl mb-5 md:px-18 sm:px-12 lg:px-24 md:text-5xl  lg:text-6xl 
              text-center 
              "
                data-aos="fade-up"
              >
                  <Typewriter
                  words={[" Unveil Culture, Adventure, and History - Guided Tours Await"]}
                  loop={true}
                  cursor={true}
                  cursorStyle="_"
                  delaySpeed={1000}
                />
               
              </h1>
              <p className="mb-5 md:px-18 sm:px-12 lg:px-24" data-aos="fade-up">
                Get the full NYC experience with a knowledgeable local guide.
                Explore Times Square, Central Park, and taste diverse cuisines
                in this vibrant city.
              </p>

              <Link>
                <button className="text-white my-8 px-8 py-3 font-semibold uppercase rounded-full text-base border ">
                  Discover
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage:
              "url(https://i.ibb.co/tq0d00x/photo-1597910037242-3539dde9a439-w-500-auto-format-fit-crop-q-60-ixlib-rb-4-0.jpg",
          }}
        >
          <div className="hero-overlay bg-opacity-70"></div>
          <div className="hero-content text-center text-neutral-content">
            <div>
              <h1
                className="font-extrabold sm:text-4xl mb-5 md:px-18 sm:px-12 lg:px-24 md:text-5xl  lg:text-6xl 
              text-center 
              "
                data-aos="fade-up"
              >
                {" "}
                <Typewriter
                  words={["  Your Gateway to Memorable Journeys"]}
                  loop={true}
                  cursor={true}
                  cursorStyle="_"
                  delaySpeed={1000}
                />
              
              </h1>
              <p className="mb-5 md:px-18 sm:px-12 lg:px-24" data-aos="fade-up">
                Your Journey Begins Here. Explore, Learn, and Create Memories
                with Our Local Tours. Discover Authentic Experiences Today.
              </p>
              <Link>
                <button className="text-white my-8 px-8 py-3 font-semibold uppercase rounded-full text-base border ">
                  Discover
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage:
              "url(https://i.ibb.co/p0npmXm/photo-1669744665015-33f3a2f657b3-w-500-auto-format-fit-crop-q-60-ixlib-rb-4-0.jpg",
          }}
        >
          <div className="hero-overlay bg-opacity-70"></div>
          <div className="hero-content text-center text-neutral-content">
            <div>
              <h1
                className="font-extrabold sm:text-4xl mb-5 md:px-18 sm:px-12 lg:px-24 md:text-5xl  lg:text-6xl 
              text-center 
              "
                data-aos="fade-up"
              >
                  <Typewriter
                  words={["Your Passport to Authentic Experiences in Every Corner of the World."]}
                  loop={true}
                  cursor={true}
                  cursorStyle="_"
                  delaySpeed={1000}
                />
             
              </h1>
              <p className="mb-5 md:px-18 sm:px-12 lg:px-24" data-aos="fade-up">
                Embark on Unforgettable Adventures with Local Guides. Explore
                Culture, Nature, and History in the Heart of Each Destination.
                Your Journey Begins Here!
              </p>
              <Link>
                <button className="text-white my-8 px-8 py-3 font-semibold uppercase rounded-full text-base border ">
                  Discover
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Slider;
