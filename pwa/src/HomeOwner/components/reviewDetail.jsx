import * as React from "react";

export default function ReviewDetail() {
  return (
    <div className="flex overflow-hidden flex-col pb-12 mx-auto w-full bg-white max-w-[480px]">
      <div className="flex gap-2 items-center px-5 mt-7">
        <div className="flex flex-1 shrink self-stretch my-auto w-16 h-2 bg-black rounded-md basis-0" />
        <div className="flex flex-1 shrink self-stretch my-auto h-2 bg-black rounded-md basis-0 w-[65px]" />
        <div className="flex flex-1 shrink self-stretch my-auto w-16 h-2 bg-black rounded-md basis-0" />
        <div className="flex flex-1 shrink self-stretch my-auto w-16 h-2 bg-black rounded-md basis-0" />
        <div className="flex flex-1 shrink self-stretch my-auto h-2 bg-black rounded-md basis-0 w-[65px]" />
      </div>
      <div className="flex flex-col self-center mt-8 w-full max-w-[350px]">
        <div className="flex flex-col w-full">
          <div className="text-3xl font-medium text-black">Review</div>
          <div className="flex flex-col mt-8 w-full tracking-tight">
            <div className="flex flex-col w-full text-xl leading-none whitespace-nowrap text-zinc-800">
              <div className="flex flex-col w-full">
                <div className="font-medium">Location</div>
                <div className="flex gap-2.5 items-center p-4 mt-3 w-full text-center rounded-lg bg-zinc-100">
                  <div className="flex gap-3 items-center self-stretch my-auto">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/abb82b742813622010ee12f9939f2f338f5f58d480a45108cc8a5ba99f59dcee?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                      className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                    />
                    <div className="self-stretch my-auto">56/11-A</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-4 w-full text-xl leading-none text-zinc-800">
              <div className="flex flex-col w-full">
                <div className="font-medium">Service Required</div>
                <div className="flex gap-2.5 items-center p-4 mt-3 w-full text-center rounded-lg bg-zinc-100">
                  <div className="flex gap-3 items-center self-stretch my-auto">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/55a68778be4e38bd5b3514919ae22c700288b50d42c558db8c27ba09b1c7c993?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                      className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                    />
                    <div className="self-stretch my-auto">Snow Shovelling</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-4 w-full text-xl leading-none text-zinc-800">
              <div className="flex flex-col w-full">
                <div className="font-medium">Service Start Time</div>
                <div className="flex gap-2.5 items-center p-4 mt-3 w-full text-center rounded-lg bg-zinc-100">
                  <div className="flex gap-3 items-center self-stretch my-auto">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/51b4686dcb78bf82908b35c26055a80a23bf180d08eb606d87b9c02f63dfc963?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                      className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                    />
                    <div className="self-stretch my-auto">06:30:00 AM</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-4 w-full text-xl leading-none text-zinc-800">
              <div className="flex flex-col w-full">
                <div className="font-medium">Service Duration</div>
                <div className="flex gap-2.5 items-center p-4 mt-3 w-full text-center rounded-lg bg-zinc-100">
                  <div className="flex gap-3 items-center self-stretch my-auto">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/51b4686dcb78bf82908b35c26055a80a23bf180d08eb606d87b9c02f63dfc963?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                      className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                    />
                    <div className="self-stretch my-auto">Less than 30 min</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-4 w-full text-xl leading-none text-zinc-800">
              <div className="flex flex-col w-full">
                <div className="font-medium">Payment Offering</div>
                <div className="flex gap-2.5 items-center p-4 mt-3 w-full text-center rounded-lg bg-zinc-100">
                  <div className="gap-3 self-stretch my-auto">$ 50.00</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-4 w-full">
              <div className="flex flex-col w-full">
                <div className="text-xl font-medium leading-none text-zinc-800">
                  Payment Method
                </div>
                <div className="flex flex-col mt-3 w-full">
                  <div className="flex gap-10 justify-between items-center p-4 w-full text-xl leading-none text-center rounded-lg bg-zinc-100 text-zinc-800">
                    <div className="flex gap-2.5 items-center self-stretch my-auto">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed23165813b856e27750216121aba3a903abb38f269460f3fad8be9949bd42fd?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                        className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                      />
                      <div className="self-stretch my-auto">Credit /Debit</div>
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/c970a83a82c70afb8e060471faa98e28f155e24d21b263a378e72ae5420cad80?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                      className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                    />
                  </div>
                  <div className="flex flex-col mt-1 w-full rounded-none">
                    <div className="flex flex-col justify-center p-6 rounded-lg bg-zinc-100">
                      <div className="flex flex-col w-full">
                        <div className="text-xl leading-none text-zinc-800">
                          Card Number
                        </div>
                        <div className="gap-2.5 self-stretch px-4 py-3.5 mt-4 w-full text-base leading-none text-center text-black bg-white rounded">
                          5632 5684 2649 5912
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-3 items-start self-center mt-12 w-full text-xl font-medium tracking-wider text-center whitespace-nowrap max-w-[350px]">
        <div className="flex-1 shrink gap-9 self-stretch px-12 py-3.5 text-black rounded-lg bg-zinc-100">
          Back
        </div>
        <div className="flex-1 shrink gap-9 self-stretch px-12 py-3.5 text-white bg-black rounded-lg">
          Submit
        </div>
      </div>
    </div>
  );
}