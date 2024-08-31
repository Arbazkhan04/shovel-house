import * as React from "react";

export default function LoginAccountDetail() {
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
            Account Details
          </div>
          <div className="flex flex-col mt-6 w-full text-sm text-zinc-800">
            <div className="flex flex-col w-full">
              <div className="flex flex-col w-full">
                <div className="flex flex-col justify-center p-3 w-full whitespace-nowrap rounded-lg border-black border-solid border-[0.5px]">
                  <div className="flex gap-2 items-center w-full">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/c51bea7e316b37bee8e2c92083a7a3e85c4faf44a7c13cfc47030aeac52bf350?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                      className="object-contain shrink-0 self-stretch my-auto aspect-square w-[22px]"
                    />
                    <div className="self-stretch my-auto">Email</div>
                  </div>
                </div>
                <div className="flex flex-col justify-center p-3 mt-3 w-full whitespace-nowrap rounded-lg border-black border-solid border-[0.5px]">
                  <div className="flex gap-2 items-center w-full">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/4aafd9b5d868a2b4ab93be69d6a30800a9f772342074f271884589ac82bd5a0a?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                      className="object-contain shrink-0 self-stretch my-auto aspect-square w-[22px]"
                    />
                    <div className="self-stretch my-auto">Name</div>
                  </div>
                </div>
                <div className="flex flex-col justify-center p-3 mt-3 w-full whitespace-nowrap rounded-lg border-black border-solid border-[0.5px]">
                  <div className="flex gap-10 justify-between items-center w-full">
                    <div className="flex gap-2 items-center self-stretch my-auto">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1d22604acdbcca3720f62c0ac911d1c4c7c2549f38bb93be39b4654d603155a?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                        className="object-contain shrink-0 self-stretch my-auto aspect-square w-[22px]"
                      />
                      <div className="self-stretch my-auto">Password</div>
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c47945e503b601c0f121727bce918086e3b749eaef6e51f3a524cdd1aa877a6?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                      className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-center p-3 mt-3 w-full rounded-lg border-black border-solid border-[0.5px]">
                  <div className="flex gap-10 justify-between items-center w-full">
                    <div className="flex gap-2 items-center self-stretch my-auto">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1d22604acdbcca3720f62c0ac911d1c4c7c2549f38bb93be39b4654d603155a?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                        className="object-contain shrink-0 self-stretch my-auto aspect-square w-[22px]"
                      />
                      <div className="self-stretch my-auto">
                        Confirm Password
                      </div>
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e0ef8afe2c37fbd8211cecc072a89488a2e75bf43d919f723ba689650730598e?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                      className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-3 items-start mt-20 w-full text-xl font-medium tracking-wider text-center whitespace-nowrap">
          <div className="flex-1 shrink gap-9 self-stretch px-12 py-3.5 text-black rounded-lg bg-zinc-100">
            Back
          </div>
          <div className="flex-1 shrink gap-9 self-stretch px-12 py-3.5 text-white bg-black rounded-lg">
            Next
          </div>
        </div>
      </div>
    </div>
  );
}