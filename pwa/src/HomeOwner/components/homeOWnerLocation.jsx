import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import MapComponent from "./map";

export default function HomeOwnerLocation() {
  const [selectedServices, setSelectedServices] = useState([]);
  const [location, setLocation] = useState('');
  

  const handleAddService = (service) => {
    if(selectedServices.includes(service)){
      setSelectedServices(selectedServices.filter(item => item !== service));
    }else{
      setSelectedServices([...selectedServices, service]);
    }
  }

  const navigate = useNavigate();
  const handleDuration = () => {
    navigate('/houseOwner/timeDuration');
  }
  const handleBack = () => {
    navigate('/question');
  }
  return (
    <div className="flex overflow-hidden flex-col pb-12 mx-auto w-full bg-white max-w-[480px]">
      <div className="flex gap-2 items-center px-5 mt-7">
        <div className="flex flex-1 shrink self-stretch my-auto w-16 h-2 bg-black rounded-md basis-0" />
        <div className="flex flex-1 shrink self-stretch my-auto w-16 h-2 bg-black rounded-md basis-0" />
        <div className="flex flex-1 shrink self-stretch my-auto h-2 rounded-md basis-0 bg-zinc-100 w-[65px]" />
        <div className="flex flex-1 shrink self-stretch my-auto w-16 h-2 rounded-md basis-0 bg-zinc-100" />
        <div className="flex flex-1 shrink self-stretch my-auto h-2 rounded-md basis-0 bg-zinc-100 w-[65px]" />
      </div>
      <div className="flex flex-col self-center mt-6 w-full max-w-[350px]">
        <div className="flex flex-col w-full whitespace-nowrap">
          <div className="text-3xl font-medium tracking-wide text-black">
            Location
          </div>
        </div>


        {/* Map component */}
        <div className="mt-5">
          <MapComponent />
        </div>
      


        { /*services required*/ }
        <div className="flex flex-col mt-5 w-full text-black">
           <div className="text-2xl font-medium tracking-wide">
             Services Required
           </div>
           <div className="flex gap-3 items-center mt-3 w-full text-sm tracking-tight leading-loose text-center">
             {/* Service 1 */}
            <div
              className={`flex flex-col justify-center items-center p-3 rounded w-[139px] h-[150px] ${selectedServices.includes('Snow Shoveling') ? 'bg-gray-300' : 'bg-zinc-100'}`}
              onClick={() => handleAddService('Snow Shoveling')}
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f7c9f159916bb46c2244446ad33ae8986e5be20ec33eb7a074ac6943c872cf0?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                className="object-contain aspect-square w-[72px] h-[72px]"
                alt="Snow Shoveling"
              />
              <div className="mt-2 relative">
                Snow Shoveling
                {selectedServices.includes('Snow Shoveling') && (
                  <div className="absolute -top-12 right-0 w-4 h-4  rounded-full">
                    <span className="text-white text-xs">✔</span>
                  </div>
                )}
              </div>
            </div>

            {/* Service 2 */}
            <div
              className={`flex flex-col justify-center items-center p-3 rounded w-[139px] h-[150px] ${selectedServices.includes('Lawn Mowing') ? 'bg-gray-300' : 'bg-zinc-100'}`}
              onClick={() => handleAddService('Lawn Mowing')}
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/21c1c33880a3ed8c71e3d6882bb465494b54736ef0d641afc0499cde42437b8d?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                className="object-contain aspect-square w-[72px] h-[72px]"
                alt="Lawn Mowing"
              />
              <div className="mt-2 relative">
                Lawn Mowing
                {selectedServices.includes('Lawn Mowing') && (
                  <div className="absolute -top-20 right-0 w-4 h-4  rounded-full">
                    <span className="text-white text-xs">✔</span>
                  </div>
                )}
              </div>
            </div>

            {/* Service 3 */}
            <div
              className={`flex flex-col justify-center items-center p-3 rounded w-[139px] h-[150px] ${selectedServices.includes('Another Service') ? 'bg-gray-300' : 'bg-zinc-100'}`}
              onClick={() => handleAddService('Another Service')}
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/664273ce6a955904c7ec67aad5a37a818e8751db6b619acdcfc7031d93c000a7?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                className="object-contain aspect-[0.49] w-[72px] h-[72px]"
                alt="Another Service"
              />
              <div className="mt-2 relative">
                Another Service
                {selectedServices.includes('Another Service') && (
                  <div className="absolute -top-12 right-0 w-4 h-4  rounded-full">
                    <span className="text-white text-xs">✔</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-3 items-start self-center mt-10 w-full text-xl font-medium tracking-wider text-center whitespace-nowrap max-w-[350px]">
        <div onClick={handleBack} className="flex-1 shrink gap-9 self-stretch px-12 py-3.5 text-black rounded-lg bg-zinc-100 cursor-pointer">
          Back
        </div>
        <div onClick={handleDuration} className="flex-1 shrink gap-9 self-stretch px-12 py-3.5 text-white bg-black rounded-lg cursor-pointer">
          Next
        </div>
      </div>
    </div>
  );
}