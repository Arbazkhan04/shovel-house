import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { feedbackByHouseOwner } from "../../apiManager/houseOwner/matchShvoller";

export default function ServiceFinished() {
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [review, setReview] = useState("");

  const location = useLocation();
  const { Id,name,paymentOffering } = location.state || {};

  const [jobId, setJobId] = useState(Id || "");
  const [shovellerName, setShovellerName] = useState(name || ""); 
  const [payment, setPayment] = useState(paymentOffering||"");

  
  const handleFinished = async () => {
    console.log("Rating: ", rating);
    console.log("Review: ", review);

    try {
      const res = await feedbackByHouseOwner(jobId, rating, review);
      console.log(res);

    } catch (error) {
      console.log(error);
    }finally{
      console.log('done')
    }
    navigate("/houseowner/transaction",{
      state:{
        Id:jobId,
        shovellerName:shovellerName,
        payment:payment
      }
    });

  };

  const handleRatingClick = (rate) => {
    setRating(rate);
  };

  return (
    <div className="flex overflow-hidden flex-col pb-12 mx-auto w-full bg-white max-w-[480px]">
      <div className="flex flex-col px-20 mt-6 w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/cccddd1adf967f0ace784bac7ff266373e9f7f1e96b1bcdceed0aa5bcc94afce?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
          className="object-contain self-end w-6 aspect-square -mb-7"
        />
        <div className="flex flex-col items-center w-full mt-14">
          <div className="text-3xl font-medium text-center text-black capitalize">
            Service Finished
          </div>
        </div>

        <div className="flex flex-col mt-4">
          <div className="flex flex-col w-full">
            <div className="flex flex-col max-w-full text-xl leading-7 capitalize rounded-none text-zinc-800 w-[349px]">
              <div className="flex flex-col justify-center px-4 py-8 w-full rounded-lg bg-zinc-100">
                <div className="flex gap-6 items-center">
                  <div className="my-auto w-[232px]">
                    <span className="">${payment} </span>will be Transferred to{" "}
                    <span className="">{shovellerName}</span>
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c7927b5363fc26b87a22c30b9804d0e0dee42d52e146dfb4e3ad29db4fbb70bf?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                    className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square"
                  />
                </div>
              </div>
            </div>
            {/* <div className="flex flex-col mt-1 max-w-full tracking-tight rounded-none w-[350px]">
              <div className="flex flex-col justify-center px-4 py-5 rounded-lg bg-zinc-100">
                <div className="flex flex-col w-full">
                  <div className="flex gap-10 justify-between items-end w-full">
                    <div className="text-xs leading-loose text-black text-opacity-70">
                      Tip Amount
                    </div>
                    <div className="gap-2.5 self-stretch px-2 py-1 text-sm font-medium leading-loose text-right text-black whitespace-nowrap bg-white rounded">
                      $4.00
                    </div>
                  </div>
                  <div className="flex gap-10 justify-between items-end mt-3 w-full">
                    <div className="text-xs leading-loose text-black text-opacity-70 w-[104px]">
                      Service fee
                    </div>
                    <div className="gap-2.5 self-stretch px-2 py-1 text-sm font-medium leading-loose text-right text-black whitespace-nowrap">
                      $1.00
                    </div>
                  </div>
                  <div className="flex gap-10 justify-between items-end mt-3 w-full">
                    <div className="text-xs leading-loose text-black text-opacity-70">
                      Service Charges
                    </div>
                    <div className="gap-2.5 self-stretch px-2 py-1 text-sm font-medium leading-loose text-right text-black whitespace-nowrap">
                      $25.00
                    </div>
                  </div>
                  <div className="flex gap-10 justify-between items-end mt-3 w-full whitespace-nowrap">
                    <div className="text-xs leading-loose text-black text-opacity-70 w-[104px]">
                      Total
                    </div>
                    <div className="gap-2.5 self-stretch px-2 py-1 text-sm font-medium leading-loose text-right text-black">
                      $30.00
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          <div className="flex flex-col mt-6 max-w-full rounded-none w-[349px]">
            <div className="flex z-10 flex-col justify-center px-2.5 py-4 w-full rounded-lg bg-zinc-100">
              <div className="flex gap-10 justify-between items-center w-full">
                <div className="self-stretch my-auto text-sm tracking-tight leading-loose text-zinc-800">
                  Rate <span className="font-medium">{shovellerName}'s</span> Services
                </div>
                <div className="flex gap-1 items-center self-stretch my-auto">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar
                      key={star}
                      className={`cursor-pointer ${rating >= star || hoveredRating >= star ? 'text-white-500' : 'text-gray-400'} text-2xl`}
                      onClick={() => handleRatingClick(star)}
                      onMouseEnter={() => setHoveredRating(star)}
                      onMouseLeave={() => setHoveredRating(0)}
                    />
                  ))}
                </div>
              </div>
            </div>
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="Share your Experience (max 100 characters)"
              rows="4"
              maxLength={100}
              className="w-full px-4 py-2 mt-3 text-xs leading-loose rounded-lg bg-zinc-100 border-none text-stone-500"
            />
          </div>
        </div>
        <div
          onClick={handleFinished}
          className="gap-9 self-start px-12 py-4 mt-10 text-xl font-medium tracking-wider text-center text-white whitespace-nowrap bg-black rounded-lg cursor-pointer"
        >
          Leave Your Review
        </div>
      </div>
    </div>
  );
}
