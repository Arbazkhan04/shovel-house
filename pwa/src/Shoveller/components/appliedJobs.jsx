import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAppliedJobs } from "../../apiManager/shoveller/matchJobApi";
import Loader from "../../sharedComp/loader";
import { useSelector } from "react-redux";

export default function AppliedJobsList() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const {userInfo} = useSelector((state) => state.auth);
  const shovellerId = userInfo.user.id;

  useEffect(() => {
    const fetchAppliedJobs = async () => {
      try {
        setLoading(true);
        const res = await getAppliedJobs(shovellerId); // Fetch applied jobs
        console.log(res.jobs)
        setJobs(res.jobs);
      } catch (error) {
        setError(error.message || "An error occurred while fetching applied jobs.");
      } finally {
        setLoading(false);
      }

    };
    fetchAppliedJobs();
  }, []);

  const navigateToJobDetails = (job,houseOwnerAction) => {
    
    navigate("/shoveller/serviceProgressShoveller", {
      state: {
        jobId: job._id,
        houseOwnerId: job.houseOwnerId,
        jobStatus: job.jobStatus, //open, in-progress, completed, not-anymore
        houseOwnerAction: houseOwnerAction //accepted, pending, canceled
      },
    });
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="flex flex-col items-center w-full bg-white max-w-[480px] mx-auto p-4">
      {/* Header Section */}
      <div className="w-full mb-4">
        <div className="flex items-center justify-between">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e78b2ab3c1b037e4da039a9fa3854323270864886cc09ff5fbbb6ed86eb963e2?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
            className="w-6 h-6 object-contain"
            alt="Applied Jobs Icon"
          />
          <p className="text-gray-500">Applied Jobs</p>
        </div>
      </div>

      {/* List of Applied Jobs */}
      <div className="flex flex-col mt-5 w-full">
        {jobs.length > 0 ? (
          jobs.map((job, index) => {
            console.log(job.ShovelerInfo.
              ShovelerId)
            const shovellerInfo = job.ShovelerInfo?.find((shoveller) => shoveller.ShovelerId === shovellerId);   

            return (
              <div
              key={index}
              onClick={() => navigateToJobDetails(job,shovellerInfo.houseOwnerAction)}
              className="flex justify-between items-center p-4 bg-zinc-100 rounded-lg mb-3 hover:bg-zinc-200 transition-all cursor-pointer"
            >
              <div className="flex items-center gap-4">
                {/* <img
                  srcSet={job.imageUrl}
                  className="w-12 h-12 object-contain"
                  alt="Job Icon"
                /> */}
                <div>
                  <div className="text-lg font-medium">{job.services[0]}</div>
                  <div className="text-sm text-gray-500">
                    Scheduled at {job.scheduledTime.hour}:{job.scheduledTime.minute} {job.scheduledTime.period}
                  </div>
                </div>
              </div>
              <div className="text-sm font-semibold text-black">
                {shovellerInfo.houseOwnerAction === "canceled" && <span className="text-red-500">Canceled</span>}
                {shovellerInfo.houseOwnerAction === "accepted" && <span className="text-yellow-500">Accepted</span>}
                {shovellerInfo.houseOwnerAction === "pending" && <span className="text-green-500">Pending</span>}
              </div>
            </div>
            )
          })
        ) : (
          <p className="text-center text-gray-500">You haven't applied for any jobs yet.</p>
        )}
      </div>
    </div>
  );
}
