

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllJobs } from '../../apiManager/shoveller/matchJobApi'
import Loader from '../../sharedComp/loader';

export default function SearchJobByList() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const getJobs = async () => {
      try {
        setLoading(true);
        const res = await getAllJobs();
        console.log(res);
        setJobs(res);

      } catch (error) {
        setError(error.message || "An error occurred while fetching jobs");
      } finally {
        setLoading(false);
      }
    }
    getJobs();
  }, [])


  const handleShovellerMap = () => {
    navigate("/shoveller/searchJobByMap");
  };

  const navigateToHouseOwnerJob = () => {
    navigate("/shoveller/isMatchHouseOwner");
  };

  if (loading) {
    return <Loader />
  }

  if (error) {
    return <p>{error}</p>
  }

  return (
    <div className="flex overflow-hidden flex-col pb-3 mx-auto w-full bg-white max-w-[480px]">
      <div className="flex flex-col px-5 mt-5 w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e78b2ab3c1b037e4da039a9fa3854323270864886cc09ff5fbbb6ed86eb963e2?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
          className="object-contain w-6 aspect-square"
          alt="Search Icon"
        />
        <div className="flex flex-col mt-4">
          <div className="text-3xl font-medium tracking-wide text-black">
            Search Jobs In Area
          </div>
          {/* Use an input field for search while maintaining the design */}
          <div className="flex gap-4 items-center p-4 mt-3 w-full text-xl tracking-wide rounded-lg bg-zinc-100 text-stone-500">
            <div className="flex gap-3 items-center self-stretch my-auto">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/24150185c539c82e9703719df45b8d931494322e0bbfae370589b7b204138ab1?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
              />
              <input
                type="text"
                placeholder="Search Location"
                className="flex-1 p-2 rounded-lg bg-zinc-100 text-stone-500 focus:outline-none"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mt-6 w-full text-xl leading-none text-center whitespace-nowrap">
          <div className="flex gap-10 justify-between items-center max-w-full w-[211px]">
            <div className="flex gap-2 items-center text-stone-500 cursor-pointer" onClick={handleShovellerMap}>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9dd09a6abf1a68166b7a3c2ea65a50fe520a8497f75825bd00076a8f5326b01a?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                className="object-contain w-4 aspect-square"
                alt="Map Icon"
              />
              <div>Map</div>
            </div>
            <div className="flex gap-2 items-center text-black cursor-pointer">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0bd2b5a75a465655bc5be8b6e7a9691ff635ef742d1258053409dd2bf0cf65d2?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                className="object-contain w-4 aspect-square"
                alt="List Icon"
              />
              <div>List</div>
            </div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/584210f80131546a57f8f37e8fef30ba7d61cc2a8129d155087c8c2c50ae53e0?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
            className="object-contain mt-3 max-w-full w-[350px]"
            alt="Map Image"
          />
        </div>
        <div className="flex flex-col mt-5 w-full tracking-tight">
          {/* List of candidates */}
          {jobs && jobs.map((job, index) => (
            <div
              key={index}
              onClick={() => navigate(`/shoveller/isMatchHouseOwner`, { state: { houseOwnerId: job.houseOwnerId, jobId: job._id ,isHouseOwnerAccepted:job.isHouseOwnerAccepted} })}
              className="flex cursor-pointer gap-10 justify-between items-center px-4 py-3 w-full rounded-lg bg-zinc-100 mb-2"
            >
              <div className="flex gap-2 items-center text-zinc-800">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/cbbaae0db0d05a01e1fe05609a37a79bd82fad33480da6c5339d119d98591928?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                  className="object-contain aspect-square w-[52px]"
                  alt="Candidate Icon"
                />
                <div className="flex flex-col">
                  <div className="text-xl leading-none">{job.houseOwnerId}</div>
                  <div className="mt-2 text-xs leading-loose">{job.services[0]}</div>
                </div>
              </div>
              <div className="text-sm leading-loose text-black w-[42px]">
                {job.location.coordinates[0] - job.location.coordinates[1]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
