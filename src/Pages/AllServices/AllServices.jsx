
import AllServicesCard from "./AllServicesCard";
import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

import Loading from "../../Components/Loading/Loading";
import useServices from "../../Hooks/useServices";

const AllServices = () => {
  const { data, isLoading } = useServices();

  const [searchInput, setSearchInput] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    if (isLoading) {
      return;
    }

    const filteredServices = data.filter((service) => {
      const categoryMatch =
        !selectedFilter || service.packageCategory === selectedFilter;
      const searchMatch =
        !searchInput ||
        service.packageName.toLowerCase().includes(searchInput.toLowerCase());
      return categoryMatch && searchMatch;
    });

    setSearchResults(filteredServices);
  }, [data, isLoading, searchInput, selectedFilter]);

  const handleSearch = () => {
    const filteredServices = data.filter((service) => {
      const categoryMatch =
        !selectedFilter || service.packageCategory === selectedFilter;
      const searchMatch =
        !searchInput ||
        service.packageName.toLowerCase().includes(searchInput.toLowerCase());
      return categoryMatch && searchMatch;
    });
  
    setSearchResults(filteredServices);
  };

  const showAllButtonVisible = searchResults.length < 6;

  if (isLoading) {
    return <div><Loading></Loading></div>;
  }


  return (
    <div>
      <div className="container mx-auto">
        <div>
          <div>
            <div className="py-8">
              <div
                className="hero rounded-lg"
                style={{
                  backgroundImage:
                    "url(https://i.ibb.co/XWZ6GMx/cool-background-5.png)",
                }}
              >
                <div className="hero-overlay bg-opacity-60 py-16 rounded-lg"></div>
                <div className="hero-content text-center text-neutral-content rounded-lg py-16">
                  <div className="max-w-xl">
                    <h1 className="mb-5 text-5xl font-bold">
                    <Typewriter
                  words={[" Quick way to find your Dream Tour."]}
                  loop={true}
                  cursor={true}
                  cursorStyle="_"
                  delaySpeed={1000}
                />
                     
                    </h1>
                    <div className="join">
                      <div>
                        <div>
                          <input
                            className="input input-bordered join-item text-black"
                            placeholder="Search"
                            value={selectedFilter}
                            onChange={(e) => setSearchInput(e.target.value)}
                          />
                        </div>
                      </div>
                      <select
                        className="select select-bordered join-item text-black"
                        value={selectedFilter}
                        onChange={(e) => setSelectedFilter(e.target.value)}
                      >
                        <option value="">Select a category</option>
                        <option value="City Tours">City Tours</option>
                        <option value="Historical Tours">
                          Historical Tours
                        </option>
                        <option value="Cultural Tours">Cultural Tours</option>
                        <option value="Adventure Tours">Adventure Tours</option>
                        <option value="Nature Tours">Nature Tours</option>
                        <option value=" Art and Architecture Tours">
                          Art and Architecture Tours
                        </option>
                        
                      </select>
                      <div>
                        <button
                          onClick={handleSearch}
                          className="btn join-item"
                        >
                          Search
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-8 mb-5 text-5xl font-bold text-center text-gray-400">
            <h2> 
              Our Services
           
             
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          {showAll
              ? data.map((service) => (
                  <AllServicesCard key={service._id} service={service}></AllServicesCard>
                ))
              : searchResults.length > 0
              ? searchResults.slice(0, 6).map((service) => (
                  <AllServicesCard key={service._id} service={service}></AllServicesCard>
                ))
              : data.slice(0, 6).map((service) => (
                  <AllServicesCard key={service._id} service={service}></AllServicesCard>
                ))}
          </div>
          {showAllButtonVisible && !showAll && (
            <div className="text-center py-8">
              <button
                onClick={() => setShowAll(true)}
                className="items-center px-10 py-3.5 text-base font-medium text-center text-white transition duration-500 ease-in-out transform border border-white shadow-lg rounded-lg"
                style={{ backgroundImage: 'url("https://i.ibb.co/Y2vFWWw/cool-background-4.png")' }}
              >
                Show All
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllServices;
