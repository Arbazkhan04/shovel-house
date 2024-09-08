import { useState, useEffect } from "react";
import { GoogleMap, useJsApiLoader, Marker, Autocomplete } from "@react-google-maps/api";

const libraries = ["places"]; // Load the Places library

function MapComponent() {
  const [position, setPosition] = useState(null);
  const [map, setMap] = useState(null);
  const [autocomplete, setAutocomplete] = useState(null);
  const [address, setAddress] = useState("");

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
        },
        (error) => {
          console.error("Error getting location", error);
        }
      );
    }
  }, []);

  if (!isLoaded) {
    return <div>Loading map...</div>;
  }

  return (
    <div>
      <div className="flex gap-4 items-center p-4 mb-2 w-full text-xl tracking-wide rounded-lg bg-zinc-100 text-stone-500">
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
      <GoogleMap
        mapContainerStyle={{ height: "300px", width: "100%" }}
        center={position}
        zoom={13}
        onLoad={onLoad}
      >
        {position && <Marker position={position} />}
      </GoogleMap>
    </div>
  );
}

export default MapComponent;
