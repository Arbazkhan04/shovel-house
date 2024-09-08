import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { GoogleMap, useJsApiLoader, Marker, Autocomplete } from "@react-google-maps/api";
import ShovelHouseImage from "../../assets/images/shovelhouse.png";
const libraries = ["places"]; // Load the Places library

export default function SearchJobByArea() {
  
  const [position, setPosition] = useState(null);
  const [map, setMap] = useState(null);
  const [autocomplete, setAutocomplete] = useState(null);
  const [address, setAddress] = useState("");
  const [jobs, setJobs] = useState([]); // Holds jobs data

  const navigate = useNavigate();
  
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyDJQNAbTK3AGLlmRGVxa3VbejegSp-qB9A",
    libraries
  });

  const onLoad = (mapInstance) => {
    setMap(mapInstance);
  };

  const onAutocompleteLoad = (autocompleteInstance) => {
    setAutocomplete(autocompleteInstance);
  };

  const handlePlaceSelect = () => {
    if (autocomplete) {
      const place = autocomplete.getPlace();
      if (place.geometry) {
        const { lat, lng } = place.geometry.location;
        setPosition({ lat: lat(), lng: lng() });
        map.panTo({ lat: lat(), lng: lng() });
        // Fetch nearby jobs based on search location (dummy data)
        fetchNearbyJobs(lat(), lng());
      }

      // Update the address with the formatted address from the selected place
      if (place.formatted_address) {
        setAddress(place.formatted_address);
      }
    }
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (location) => {
          const { latitude, longitude } = location.coords;
          setPosition({ lat: latitude, lng: longitude });
          fetchNearbyJobs(latitude, longitude); // Fetch jobs based on current location (dummy data)
        },
        (error) => {
          console.error("Error getting location", error);
        }
      );
    }
  }, []);

  const fetchNearbyJobs = (lat, lng) => {
    // Add dummy job data instead of fetching from API
    const dummyJobs = [
      { id: 1, latitude: lat + 0.01, longitude: lng + 0.01, title: "Job 1" },
      { id: 2, latitude: lat - 0.01, longitude: lng - 0.01, title: "Job 2" },
      { id: 3, latitude: lat + 0.02, longitude: lng - 0.02, title: "Job 3" },
      { id: 4, latitude: lat - 0.02, longitude: lng + 0.02, title: "Job 4" },
    ];

    setJobs(dummyJobs); // Store dummy jobs in state
  };

  if (!isLoaded) {
    return <div>Loading map...</div>;
  }


  const handleList = () => {
    navigate('/shoveller/searchJobByList');
  }
  return (
    <div className="flex overflow-hidden flex-col pb-8 mx-auto w-full bg-white max-w-[480px]">
      <div className="flex flex-col px-5 mt-5 w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e78b2ab3c1b037e4da039a9fa3854323270864886cc09ff5fbbb6ed86eb963e2?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
          className="object-contain w-6 aspect-square"
        />
        <div className="flex flex-col mt-4">
          <div className="flex flex-col w-full">
            <div className="flex flex-col w-full">
              <div className="text-3xl font-medium tracking-wide text-black">
                Search Jobs In Area
              </div>
              {/* // Search Location */}
              <div className="flex gap-4 items-center p-4 mt-2 w-full text-xl tracking-wide rounded-lg bg-zinc-100 text-stone-500">
                <div className="flex gap-3 items-center self-stretch my-auto">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a6032f4677532048706a8704524ffe1d8992163f0534e05763bdc632371b83aa?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                    alt="Search Icon"
                  />
                  <Autocomplete onLoad={onAutocompleteLoad} onPlaceChanged={handlePlaceSelect}>
                    <input
                      type="text"
                      placeholder="Search"
                      value={address} // Use the updated address state
                      onChange={(e) => setAddress(e.target.value)}
                      className="flex-1 outline-none bg-transparent"
                    />
                  </Autocomplete>
                </div>
              </div>


            </div>


            <div className="flex flex-col mb-4 items-center mt-6 w-full text-xl leading-none text-center whitespace-nowrap">
              <div className="flex gap-10 justify-between items-center max-w-full w-[211px]">
                <div className="flex cursor-pointer gap-2 items-center self-stretch my-auto text-black">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c17ea213ae3718c167cd5b8621e35cf5dfdf20649f9c98385a2c4a3b37d75d32?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                    className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                  />
                  <div className="self-stretch my-auto w-[41px]">Map</div>
                </div>
                <div className="flex cursor-pointer gap-2 items-center self-stretch my-auto text-stone-500">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7771b5892dc0009e9473ba2883081ac19512249ff0fb66321dfd9a26cc399c68?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                    className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                  />
                  <div onClick={handleList} className="self-stretch my-auto">List</div>
                </div>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5f60652455ee921b503bb8b97b6f3e7bcf76f78f82f1ae30765aff3356aad0a2?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                className="object-contain mt-3 max-w-full w-[350px]"
              />
            </div>
          </div>

          {/* show map here */}
          <GoogleMap
            mapContainerStyle={{ height: "450px", width: "100%" }}
            center={position}
            zoom={13}
            onLoad={onLoad}
          >
            {position && <Marker position={position} />}

            {/* Render job markers (dummy data) */}
          {jobs.map((job) => (
            <Marker
              key={job.id}
              position={{ lat: job.latitude, lng: job.longitude }}
              icon={{
                url: ShovelHouseImage,
                scaledSize: new window.google.maps.Size(30, 30),
              }}
              label={job.title} // Display the job title as label
            />
          ))}

          </GoogleMap>


        </div>
      </div>
    </div>
  );
}


