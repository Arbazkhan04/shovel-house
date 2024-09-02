import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function ServicePreference() {
  const navigate = useNavigate();

  // State to manage selected preferences
  const [selectedPreferences, setSelectedPreferences] = useState({
    snowShoveling: false,
    lawnMowing: false,
  });

  // Handle the click on the preference container
  const togglePreference = (preference) => {
    setSelectedPreferences((prevPreferences) => ({
      ...prevPreferences,
      [preference]: !prevPreferences[preference],
    }));
  };

  const handleNext = () => {
    // Submit the selected preferences or navigate to the next page
    console.log("Selected Preferences:", selectedPreferences);
    navigate("/houseowner/HomeOwnerLocation");
  };

  const handleBack = () => {
    navigate("/houseowner/loginPaymentInfo");
  };

  return (
    <div className="flex overflow-hidden flex-col pb-12 mx-auto w-full bg-white max-w-[480px]">
      <div className="flex flex-col px-5 mt-5 w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d58c15594f08f907ba81058258945cedda38f9bf3e78da17eccb4be4905d6147?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
          className="object-contain w-6 aspect-square"
        />
        <div className="mt-4 text-3xl font-medium text-black capitalize min-h-[34px]">
          Services Preferences
        </div>
        <div className="flex flex-col mt-6">
          <div className="text-xl font-medium tracking-wide text-black">
            Types of Services Needed
          </div>
          <div className="flex flex-col mt-2 max-w-full text-base tracking-tight leading-none text-center text-zinc-800 w-[350px]">
            <div className="w-full">Preferences can be changed later</div>
          </div>
        </div>
        <div className="flex gap-3 items-start mt-4 text-sm tracking-tight leading-loose text-center text-black">
          {/* Snow Shoveling Option */}
          <div
            className={`flex flex-col flex-1 shrink justify-center p-3 rounded border-2 ${
              selectedPreferences.snowShoveling ? "border-black" : "border-neutral-400"
            } basis-0 bg-zinc-100 cursor-pointer`}
            onClick={() => togglePreference("snowShoveling")}
          >
            <div className="flex relative flex-col justify-center items-center w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/51b72d74a03b5923cf339242c81c0d6d2b115a1d3f3f84c3d86809e8200c2be2?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                className="object-contain z-0 aspect-square w-[72px]"
              />
              <div className="z-0 mt-2">Snow Shoveling</div>
              {selectedPreferences.snowShoveling && (
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3f9648edb107bc2d1d18c4c4e3315a947fedb5d249b17d860f71770e8f8b800?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                  className="object-contain absolute z-10 self-start w-6 h-6 aspect-square left-[-7px] top-[-7px]"
                />
              )}
            </div>
          </div>

          {/* Lawn Mowing Option */}
          <div
            className={`flex flex-col flex-1 shrink justify-center p-3 rounded border-2 ${
              selectedPreferences.lawnMowing ? "border-black" : "border-neutral-400"
            } basis-0 bg-zinc-100 cursor-pointer`}
            onClick={() => togglePreference("lawnMowing")}
          >
            <div className="flex relative flex-col justify-center items-center w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5500d6c22347209e98467b3bfc703d536e4d1eb735632089cbb62241a6326f2c?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                className="object-contain aspect-square w-[72px]"
              />
              <div className="mt-2">Lawn Mowing</div>
              {selectedPreferences.lawnMowing && (
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3f9648edb107bc2d1d18c4c4e3315a947fedb5d249b17d860f71770e8f8b800?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                  className="object-contain absolute z-10 self-start w-6 h-6 aspect-square left-[-7px] top-[-7px]"
                />
              )}
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-3 items-start mt-20 w-full text-xl font-medium tracking-wider text-center whitespace-nowrap">
          <div
            onClick={handleBack}
            className="flex-1 shrink gap-9 self-stretch px-12 py-3.5 text-black rounded-lg bg-zinc-100"
          >
            Back
          </div>
          <div
            onClick={handleNext}
            className="flex-1 shrink gap-9 self-stretch px-12 py-3.5 text-white bg-black rounded-lg"
          >
            Submit
          </div>
        </div>
      </div>
    </div>
  );
}
