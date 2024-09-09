import { useState, useEffect, useCallback } from "react";
import { GoogleMap, useJsApiLoader, Marker, Autocomplete } from "@react-google-maps/api";

const libraries = ["places"]; // Load the Places library

function MapComponent() {
  const [position, setPosition] = useState(null); // Current marker position
  const [map, setMap] = useState(null); // Google Map instance
  const [autocomplete, setAutocomplete] = useState(null); // Autocomplete instance
  const [address, setAddress] = useState(""); // Current address
  const [geocoder, setGeocoder] = useState(null); // Geocoder instance

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyDJQNAbTK3AGLlmRGVxa3VbejegSp-qB9A",
    libraries,
  });

  const onLoad = (mapInstance) => {
    setMap(mapInstance);
    setGeocoder(new window.google.maps.Geocoder()); // Initialize Geocoder
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
      if (place.formatted_address) {
        setAddress(place.formatted_address);
      }
    }
  };

  // Reverse geocode to get address from lat and lng
  const reverseGeocode = (lat, lng) => {
    if (geocoder) {
      geocoder.geocode({ location: { lat, lng } }, (results, status) => {
        if (status === "OK" && results[0]) {
          setAddress(results[0].formatted_address); // Update the address in the search box
        } else {
          console.error("Geocoder failed due to: " + status);
        }
      });
    }
  };

  // Debounce function to limit how often the center is updated during drag
  const debounce = (func, timeout = 200) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  };

  // Handle the map's center changing dynamically (while dragging) with debouncing
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
          if (map) {
            map.panTo({ lat: latitude, lng: longitude });
          }
        },
        (error) => {
          console.error("Error getting location", error);
        }
      );
    }
  }, [map]);

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
              value={address}
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
        onCenterChanged={handleMapCenterChanged} // Update marker position and address during drag
      >
        {position && <Marker position={position} />}
      </GoogleMap>
    </div>
  );
}

export default MapComponent;
