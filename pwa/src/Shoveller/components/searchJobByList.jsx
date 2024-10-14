import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllJobs } from '../../apiManager/shoveller/matchJobApi'
import Loader from '../../sharedComp/loader';
import { useSelector } from "react-redux";

export default function SearchJobByList() {
  console.log('SearchJobByList')
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const {userInfo} = useSelector((state) => state.auth);
  const shovellerId = userInfo.user.id;

  useEffect(() => {
    const getJobs = async () => {
      try {
        setLoading(true);
        const res = await getAllJobs();
        console.log(res)
        setJobs(res);
      } catch (error) {
        setError(error.message || "An error occurred while fetching jobs");
      } finally {
        setLoading(false);
      }
    }
    getJobs();
  }, []);

  const handleShovellerMap = () => {
    navigate("/shoveller/searchJobByMap");
  };

  const navigateToHouseOwnerJob = (job) => {
    navigate("/shoveller/isMatchHouseOwner", {
      state: {
        houseOwnerId: job.houseOwnerId._id,
        jobId: job._id,
        // isHouseOwnerAccepted: job.isHouseOwnerAccepted,
        scheduledTime: job.scheduledTime,
        name : job.houseOwnerId.name, 
      }
    });
  };

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in kilometers
    return distance.toFixed(2); // Return the distance rounded to two decimal places
  };

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      console.log('called')
      if (searchQuery.trim()) {
        const filtered = jobs.filter((job) =>
          job.services.some((service) =>
            service.toLowerCase().includes(searchQuery.toLowerCase())
          )
        );
        setFilteredJobs(filtered);
      } else {
        setFilteredJobs(jobs); // Reset to all jobs if the search query is empty
      }
    }, 500); // Debounce delay of 500ms

    return () => clearTimeout(debounceTimeout); // Clean up timeout on component unmount or searchQuery change
  }, [searchQuery, jobs]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };


  // Filter out jobs where the shoveller has already applied
  const availableJobs = jobs.filter(job => !job.ShovelerInfo?.some(shoveller => shoveller.ShovelerId === shovellerId));


  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="flex flex-col items-center w-full bg-white max-w-[480px] mx-auto p-4">
      {/* Header Section */}
      <div className="w-full">
        <div className="flex items-center justify-between">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e78b2ab3c1b037e4da039a9fa3854323270864886cc09ff5fbbb6ed86eb963e2?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
            className="w-6 h-6 object-contain"
            alt="Search Icon"
          />
          <p onClick={ () => navigate(`/shoveller/appliedJobs/${shovellerId}`)} className="text-gray-500 cursor-pointer">Applied Jobs</p>
        </div>
        <div className="flex flex-col mt-4">
          <h1 className="text-3xl font-semibold text-black mb-4">
            Search Jobs In Area
          </h1>
          <div className="flex gap-4 items-center p-3 bg-zinc-100 rounded-lg text-xl">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/24150185c539c82e9703719df45b8d931494322e0bbfae370589b7b204138ab1?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
              className="w-6 h-6"
              alt="Location Icon"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="search services"
              className="w-full p-2 bg-zinc-100 rounded-lg focus:outline-none text-gray-700"
            />
          </div>
        </div>
      </div>

      {/* Toggle between Map and List */}
      <div className="flex justify-center mt-6 gap-10 w-full">
        <button
          className="flex gap-2 items-center text-gray-500 hover:text-black transition-all cursor-pointer"
          onClick={handleShovellerMap}
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9dd09a6abf1a68166b7a3c2ea65a50fe520a8497f75825bd00076a8f5326b01a?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
            className="w-4 h-4"
            alt="Map Icon"
          />
          Map
        </button>
        <div className="flex gap-2 items-center text-black cursor-pointer">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0bd2b5a75a465655bc5be8b6e7a9691ff635ef742d1258053409dd2bf0cf65d2?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
            className="w-4 h-4"
            alt="List Icon"
          />
          List
        </div>
      </div>

      {/* List of Jobs */}
      <div className="flex flex-col mt-5 w-full">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job, index) => (
            <div
              key={index}
              onClick={() => navigateToHouseOwnerJob(job)}
              className="flex justify-between items-center p-4 bg-zinc-100 rounded-lg mb-3 hover:bg-zinc-200 transition-all cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <img
                  srcSet = {job.houseOwnerId.imageUrl}
                  className="w-12 h-12 object-cover rounded-full"
                  alt="Job Icon"
                />
                <div>
                  <div className="text-lg font-medium">{job.houseOwnerId.name}</div>
                  <div className="text-sm text-gray-500">{job.services[0]}</div>
                </div>
              </div>
              <div className="text-sm text-black">
                 {calculateDistance(
                  userInfo.user.latitude,
                  userInfo.user.longitude,
                  job.location.coordinates[1], //lat
                  job.location.coordinates[0] //long
                )} km
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No jobs found</p>
        )}
      </div>
    </div>
  );
}
