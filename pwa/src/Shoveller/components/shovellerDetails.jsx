import { useNavigate } from "react-router-dom";

export default function ShovellerDetails() {
    const navigate = useNavigate();
    const handleNext = () => {
        navigate("/shoveller/serviceDetail");
        };
    const handleBack = () => {
        navigate("/signupQuestion");
        }

  return (
    <div className="flex overflow-hidden flex-col items-center pb-12 mx-auto w-full bg-white max-w-[480px]">
      <div className="mt-16 text-5xl font-medium text-center text-black capitalize w-[305px]">
        Earn with Shovel House
      </div>
      <div className="flex flex-col mt-16 w-full max-w-[354px]">
        <div className="flex flex-col w-full rounded-xl">
          <div className="text-xl tracking-tight leading-6 text-zinc-800">
            What neighborhood would you like to work in?{" "}
          </div>
          <div className="flex flex-col mt-6 w-full">
            <div className="flex flex-col w-full tracking-tight text-zinc-800">
              <div className="flex flex-col w-full">
                <div className="text-xl font-medium leading-none">
                  Enter your neighborhood{" "}
                </div>
                <div className="flex gap-2.5 items-center p-4 mt-3 w-full text-base leading-none text-center rounded-lg bg-zinc-100 min-h-[56px]">
                  <div className="flex gap-2 items-center self-stretch my-auto">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea62201fe1f3064e9b955303d3bbf20c0c73faddea25dcb933fbf2e4bb46370d?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                      className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                    />
                    <div className="self-stretch my-auto">
                      e.g ,Downtown, Brooklyn
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 text-xs text-stone-500">
              (This is usually near your home address. It helps us find clients
              in your vicinity)
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-12 w-full tracking-tight text-zinc-800">
          <div className="flex flex-col w-full">
            <div className="text-xl font-medium leading-none">
              Referral code (optional)
            </div>
            <div className="flex gap-2.5 items-center px-4 py-6 mt-3 w-full text-base leading-none text-center whitespace-nowrap rounded-lg bg-zinc-100 min-h-[56px]">
              <div className="gap-3 self-stretch my-auto">13223</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-3 items-start mt-36 w-full text-xl font-medium tracking-wider text-center whitespace-nowrap max-w-[350px]">
        <div onClick={handleBack} className="flex-1 shrink gap-9 self-stretch px-12 py-3.5 text-black rounded-lg bg-zinc-100">
          Back
        </div>
        <div onClick={handleNext} className="flex-1 shrink gap-9 self-stretch px-12 py-3.5 text-white bg-black rounded-lg">
          Next
        </div>
      </div>
    </div>
  );
}