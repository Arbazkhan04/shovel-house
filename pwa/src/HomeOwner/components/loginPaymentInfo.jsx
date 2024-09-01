import { useNavigate } from "react-router-dom";

export default function LoingPaymentInfo() {
  const navigate = useNavigate();
  const handleNext = () => {
    navigate("/houseowner/servicePreference");
  };
  const handleBack = () => {
    navigate("/houseowner/loginAccountDetail");
  };
  return (
    <div className="flex overflow-hidden flex-col pb-12 mx-auto w-full bg-white max-w-[480px]">
      <div className="flex flex-col px-5 mt-5 w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9e1b4b91b9c57b90dd883ecf517bededc2915ea909e4a211385ef791c20c162e?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
          className="object-contain w-6 aspect-square"
        />
        <div className="flex flex-col mt-3.5">
          <div className="text-2xl font-medium tracking-wide text-black">
            Payment Information
          </div>
          <div className="flex flex-col mt-6 w-full text-sm text-zinc-800">
            <div className="flex flex-col w-full">
              <div className="flex flex-col w-full">
                <div className="flex flex-col justify-center p-3 w-full rounded-lg border-black border-solid border-[0.5px]">
                  <div className="flex gap-2 items-center w-full">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea9dc3f766cd705e37fb7940f6248edf5dd0c6225f580947061b79240a83aa6f?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                      className="object-contain shrink-0 self-stretch my-auto aspect-square w-[22px]"
                    />
                    <div className="self-stretch my-auto">Card Number</div>
                  </div>
                </div>
                <div className="flex gap-3 items-start mt-3 w-full">
                  <div className="flex flex-col justify-center p-3 rounded-lg border-black border-solid border-[0.5px] w-[169px]">
                    <div className="flex gap-2 items-center w-full">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b2bf06dcf73cc51f149eaad2b40a9c419c41a846c879dd86688adf27aa3c5e22?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                        className="object-contain shrink-0 self-stretch my-auto aspect-square w-[22px]"
                      />
                      <div className="self-stretch my-auto">Expiry Date</div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center p-3 whitespace-nowrap rounded-lg border-black border-solid border-[0.5px] w-[169px]">
                    <div className="flex gap-2 items-center w-full">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/31bd6fc82bafa7ef7fd854f06cf9b3f7764e0d51b788b36663a85935d126d9da?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                        className="object-contain shrink-0 self-stretch my-auto aspect-[0.95] w-[19px]"
                      />
                      <div className="self-stretch my-auto">CVV</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center p-3 mt-3 w-full rounded-lg border-black border-solid border-[0.5px]">
                  <div className="flex gap-10 justify-between items-center w-full">
                    <div className="flex gap-2 items-center self-stretch my-auto">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7bcb6f17d8e5d0b5b0496519c658cae80c5ca71ad931b3af59e64e1d4a0a1fa7?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                        className="object-contain shrink-0 self-stretch my-auto aspect-square w-[22px]"
                      />
                      <div className="self-stretch my-auto">
                        Billing Address
                      </div>
                    </div>
                    <div className="flex shrink-0 self-stretch my-auto w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-3 items-start mt-20 w-full text-xl font-medium tracking-wider text-center whitespace-nowrap">
          <div onClick={handleBack} className="flex-1 shrink gap-9 self-stretch px-12 py-3.5 text-black rounded-lg bg-zinc-100">
            Back
          </div>
          <div onClick={handleNext} className="flex-1 shrink gap-9 self-stretch px-12 py-3.5 text-white bg-black rounded-lg">
            Next
          </div>
        </div>
      </div>
    </div>
  );
}