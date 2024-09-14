import { useState, useEffect, useCallback } from "react";
import { GoogleMap, useJsApiLoader, Marker, Autocomplete } from "@react-google-maps/api";
import { useJobPostProgressContext } from "../../context/jobPostProgressFrom";

const libraries = ["places"]; // Load the Places library

function MapComponent() {
  const [position, setPosition] = useState(null); // Current marker position
  const [map, setMap] = useState(null); // Google Map instance
  const [autocomplete, setAutocomplete] = useState(null); // Autocomplete instance
  const [geocoder, setGeocoder] = useState(null); // Geocoder instance

  const { jobPostProgress, setLocation } = useJobPostProgressContext(); // Access context

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

        // Update context with new address and coordinates
        if (place.formatted_address) {
          setLocation(place.formatted_address, lat(), lng());
        }
      }
    }
  };

  // Reverse geocode to get address from lat and lng
  const reverseGeocode = (lat, lng) => {
    if (geocoder) {
      geocoder.geocode({ location: { lat, lng } }, (results, status) => {
        if (status === "OK" && results[0]) {
          const newAddress = results[0].formatted_address;
          setLocation(newAddress, lat, lng); // Update the context with the new address and coordinates
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
            reverseGeocode(latitude, longitude); // Reverse geocode to update address in context
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
        <Autocomplete onLoad={onAutocompleteLoad} onPlaceChanged={handlePlaceSelect}>
          <input
            type="text"
            placeholder="Search"
            value={jobPostProgress.location.address} // Bind the input to context state
            onChange={(e) => setLocation(e.target.value, position?.lat, position?.lng)} // Update context on input change
            className="flex-1 outline-none bg-transparent"
          />
        </Autocomplete>
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
