import { useNavigate } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { GoogleMap, useJsApiLoader, Marker, Autocomplete } from "@react-google-maps/api";
import ShovelHouseImage from "../../assets/images/shovelhouse.png";
import Loading from '../../sharedComp/loader';
import { getAllJobs } from '../../apiManager/shoveller/matchJobApi';

const libraries = ["places"];

export default function SearchJobByArea() {


  const [position, setPosition] = useState({ lat: 0, lng: 0 }); // Default position
  const [map, setMap] = useState(null); // Google Map instance
  const [autocomplete, setAutocomplete] = useState(null); // Autocomplete instance
  const [geocoder, setGeocoder] = useState(null); // Geocoder instance
  const [location, setLocation] = useState({ address: '', lat: null, lng: null });

  const [jobs, setJobs] = useState([]);
  const [loadingJobs, setLoadingJobs] = useState(false);
  const navigate = useNavigate();

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyDJQNAbTK3AGLlmRGVxa3VbejegSp-qB9A",
    libraries
  });

  const onLoad = (mapInstance) => {
    setMap(mapInstance);
    setGeocoder(new window.google.maps.Geocoder()); // Initialize Geocoder
  };

  const onAutocompleteLoad = (autocompleteInstance) => {
    setAutocomplete(autocompleteInstance);
  };



  const handlePlaceSelect = () => {
    console.log('Place selected'); // Debugging statement

    if (autocomplete) {
      const place = autocomplete.getPlace();
      if (place.geometry) {
        const { lat, lng } = place.geometry.location;
        setPosition({ lat: lat(), lng: lng() });
        map.panTo({ lat: lat(), lng: lng() });
        fetchNearbyJobs(lat(), lng());
        // Update context with new address and coordinates
        if (place.formatted_address) {
          setLocation({ address: place.formatted_address, lat: lat(), lng: lng() });
        }
      }
    }
  };


  const debounce = (func, timeout = 200) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  };



  // Reverse geocode to get address from lat and lng
  const reverseGeocode = (lat, lng) => {
    if (geocoder) {
      geocoder.geocode({ location: { lat, lng } }, (results, status) => {
        if (status === "OK" && results[0]) {
          const newAddress = results[0].formatted_address;
          setLocation({ address: newAddress, lat: lat, lng: lng }); // Update the context with the new address and coordinates
        } else {
          console.error("Geocoder failed due to: " + status);
        }
      });
    }
  };

  const handleMapCenterChanged = useCallback(
    debounce(() => {
      if (map) {
        const newPosition = map.getCenter();
        const newLat = newPosition.lat();
        const newLng = newPosition.lng();

        // Only update the position if it's different from the current one
        if (newLat !== position?.lat || newLng !== position?.lng) {
          setPosition({ lat: newLat, lng: newLng });
          reverseGeocode(newLat, newLng); // Reverse geocode to get the updated address
          fetchNearbyJobs(newLat, newLng); // Fetch nearby jobs based on new position
        }
      }
    }, 300), // Debounce for 300ms
    [map, position, geocoder]
  );


  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (location) => {
          const { latitude, longitude } = location.coords;
          setPosition({ lat: latitude, lng: longitude });
          fetchNearbyJobs(latitude, longitude);
          // console.log(position)
          if (map) {
            map.panTo({ lat: latitude, lng: longitude });
            reverseGeocode(latitude, longitude); // Reverse geocode to update address in context
          }
        },
        (error) => {
          console.error("Error getting location", error);
        }
      );
    }
  }, [map]);


  const fetchNearbyJobs = async(lat, lng) => {
    try {
      setLoadingJobs(true);
      const res = await getAllJobs();
      console.log(res)
      setJobs(res);
    } catch (error) {
      console.log(error);
    }finally{
      setLoadingJobs(false);
    }
    // setLoadingJobs(true);
    // setTimeout(() => {
    //   // Simulated jobs data around the provided lat/lng
    //   const dummyJobs = [
    //     { id: 1, latitude: lat + 0.01, longitude: lng + 0.01, title: "Job 1" },
    //     { id: 2, latitude: lat - 0.01, longitude: lng - 0.01, title: "Job 2" },
    //     { id: 3, latitude: lat + 0.02, longitude: lng - 0.02, title: "Job 3" },
    //     { id: 4, latitude: lat - 0.02, longitude: lng + 0.02, title: "Job 4" },
    //   ];
    //   setJobs(dummyJobs);
    //   console.log("duumy jobs: " + (dummyJobs));
    //   setLoadingJobs(false);
    // }, 1000);
  };

  if (!isLoaded) {
    return <Loading />;
  }

  const handleList = () => {
    navigate("/shoveller/searchJobByList");
  };

  return (
    <div className="flex flex-col mx-auto pb-8 w-full bg-white max-w-[480px]">
      {/* Header */}
      <div className="flex flex-col px-5 mt-5">
        <div className="flex items-center justify-between">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e78b2ab3c1b037e4da039a9fa3854323270864886cc09ff5fbbb6ed86eb963e2?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
            className="w-6 h-6 object-contain"
            alt="Search Icon"
          />
          <p className="text-gray-500">Applied Jobs</p>
        </div>
        <div className="text-3xl font-semibold mt-4">Search Jobs in Your Area</div>
      </div>

      {/* Location Search */}
      <div className="px-5 mt-6">
        <div className="flex gap-4 items-center bg-zinc-100 p-3 rounded-lg">
          <Autocomplete onLoad={onAutocompleteLoad} onPlaceChanged={handlePlaceSelect}>
            <input
              type="text"
              value={location.address}
              placeholder="Search for a location"
              onChange={(e) => setLocation({ ...location, address: e.target.value })}
              className="w-full bg-transparent outline-none text-lg"
            />
          </Autocomplete>
        </div>
      </div>

      {/* Toggle between Map and List */}
      <div className="flex justify-center mt-6 gap-10 w-full">
        <div className="flex gap-2 items-center text-black cursor-pointer">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9dd09a6abf1a68166b7a3c2ea65a50fe520a8497f75825bd00076a8f5326b01a?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
            className="w-4 h-4"
            alt="Map Icon"
          />
          Map
        </div>
        <button onClick={handleList}
          className="flex gap-2 items-center text-gray-500 hover:text-black transition-all cursor-pointer"

        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0bd2b5a75a465655bc5be8b6e7a9691ff635ef742d1258053409dd2bf0cf65d2?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
            className="w-4 h-4"
            alt="List Icon"
          />
          List
        </button>
      </div>

      {/* Map and Jobs */}
      <div className="px-5 mt-6">
        <div className="h-[350px] relative bg-gray-300 rounded-lg overflow-hidden">
          <GoogleMap
            onLoad={onLoad}
            onCenterChanged={handleMapCenterChanged}
            center={position || { lat: 0, lng: 0 }} // Default center if position is null
            zoom={14}
            mapContainerStyle={{ width: "100%", height: "100%" }}
          >
            {position && <Marker
              position={position}
              draggable={true}
              onDragEnd={(event) => {
                console.log('Marker dragged');
                const newLat = event.latLng.lat();
                const newLng = event.latLng.lng();
                console.log('Marker dragged:', { newLat, newLng }); // Log the new position

                setPosition({ lat: newLat, lng: newLng });
                reverseGeocode(newLat, newLng); // Reverse geocode to update address based on marker drag
                fetchNearbyJobs(newLat, newLng); // Fetch nearby jobs based on new position
              }} />}


            {/* Job Markers */}
            {jobs.map((job) => (
              <Marker
                key={job._id}
                position={{ lat: Number(job.location.coordinates[1]), lng: Number(job.location.coordinates[0]) }}
                icon={{
                  url: ShovelHouseImage, // Replace with your job icon URL
                  scaledSize: new window.google.maps.Size(30, 30), // Adjust size as needed
                }}
                title={job.title}
              />
            ))}
          </GoogleMap>
        </div>
      </div>

      {/* Job List */}
      <div className="mt-4 px-5">
        {loadingJobs ? (
          <Loading />
        ) : (
          jobs.map((job) => (
            <div key={job._id} className="p-3 border-b border-gray-200">
              <div>{job.services[0]}</div>
              <div className="text-gray-500">Lat: {Number(job.location.coordinates[1])}, Lng: {Number(job.location.coordinates[0])}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

