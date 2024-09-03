// import { useNavigate } from "react-router-dom";

// export default function ServiceDetail() {
//   const navigate = useNavigate();
//   const handleNext = () => {
//     navigate('/shoveller/shovellerPersonalDetail')
//   }
//   const handleBack = () => {
//     navigate('/shoveller/shovellerDetails')
//   }
//   return (
//     <div className="flex overflow-hidden flex-col items-center pb-12 mx-auto w-full bg-white max-w-[480px]">
//       <div className="flex flex-col mt-8 w-full text-black max-w-[350px]">
//         <div className="flex flex-col w-full">
//           <div className="text-2xl font-medium tracking-wide">
//             Services Provide
//           </div>
//           <div className="mt-3 text-xs leading-5">
//             Choose what services you want to provide (check all that apply, you
//             may change this later)
//           </div>
//         </div>
//         <div className="flex flex-col mt-6 w-full">
//           <div className="flex flex-col justify-center w-full text-sm tracking-tight text-center">
//             <div className="flex gap-3 w-full min-h-[148px]">
//               <div className="flex flex-col flex-1 shrink justify-center p-3 rounded border border-solid basis-0 bg-zinc-100 border-neutral-400">
//                 <div className="flex relative flex-col justify-center items-center w-full">
//                   <img
//                     loading="lazy"
//                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/5b8c3556e3b6558f2b9bd41359fd8d057cf3ff729275b8c54f9a9b9a9486c0a0?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
//                     className="object-contain z-0 aspect-square w-[72px]"
//                   />
//                   <div className="z-0 mt-2">
//                     Snow Shoveling with shovel/pusher
//                   </div>
//                   <img
//                     loading="lazy"
//                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/73932920d3c127c758cedad1608130912bda06fb26b7ed48b1c5c2debb53127b?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
//                     className="object-contain absolute z-0 self-start w-6 h-6 aspect-square left-[-7px] top-[-7px]"
//                   />
//                 </div>
//               </div>
//               <div className="flex flex-col flex-1 shrink justify-center p-3 rounded basis-0 bg-zinc-100">
//                 <div className="flex flex-col justify-center items-center w-full">
//                   <img
//                     loading="lazy"
//                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/37078516e07c302a74bd18a4a2a7b2f6d1cbc9237a466691e2ebedfe707203c3?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
//                     className="object-contain aspect-square w-[72px]"
//                   />
//                   <div className="mt-2">Snow Shoveling with sunblower</div>
//                 </div>
//               </div>
//             </div>
//             <div className="flex gap-3 mt-3 w-full">
//               <div className="flex flex-col flex-1 shrink justify-center self-start p-3 rounded basis-0 bg-zinc-100">
//                 <div className="flex flex-col justify-center w-full">
//                   <img
//                     loading="lazy"
//                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/64b69fc44471c6e0c19974c7516c0033a17cc87f2bc5ae781f9562d4305b7039?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
//                     className="object-contain self-center aspect-square w-[72px]"
//                   />
//                   <div className="mt-2">
//                     Lawn mowing with reel push mower (non-electric)
//                   </div>
//                 </div>
//               </div>
//               <div className="flex flex-col flex-1 shrink justify-center p-3 rounded basis-0 bg-zinc-100">
//                 <div className="flex flex-col justify-center items-center w-full">
//                   <img
//                     loading="lazy"
//                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/718c2efcabac9d06967283b97c4d817d8afe472878472f6a0c7aa7ea09731b0e?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
//                     className="object-contain aspect-square w-[72px]"
//                   />
//                   <div className="mt-2">Lawn mowing with electric mower</div>
//                 </div>
//               </div>
//             </div>
//             <div className="flex gap-3 mt-3 w-full min-h-[148px]">
//               <div className="flex flex-col flex-1 shrink justify-center p-3 rounded basis-0 bg-zinc-100">
//                 <div className="flex flex-col justify-center items-center w-full">
//                   <img
//                     loading="lazy"
//                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/8aa1dc61baa80755cf42d65544a6241d6842b3ae0e73bce600f12b98846c9b31?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
//                     className="object-contain aspect-square w-[72px]"
//                   />
//                   <div className="mt-2">Lawn mowing with gas mower</div>
//                 </div>
//               </div>
//               <div className="flex flex-col flex-1 shrink justify-center p-3 rounded basis-0 bg-zinc-100">
//                 <div className="flex flex-col justify-center items-center w-full">
//                   <img
//                     loading="lazy"
//                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/da93da1a2849c58318649b89f20c26f76948ca026d039fec1a153cd48807ff70?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
//                     className="object-contain aspect-square w-[72px]"
//                   />
//                   <div className="mt-2">
//                     Edge trimming with electric string trimmer
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="flex gap-3 mt-3 w-full min-h-[148px]">
//               <div className="flex flex-col flex-1 shrink justify-center p-3 rounded basis-0 bg-zinc-100">
//                 <div className="flex flex-col justify-center items-center w-full">
//                   <img
//                     loading="lazy"
//                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/da93da1a2849c58318649b89f20c26f76948ca026d039fec1a153cd48807ff70?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
//                     className="object-contain aspect-square w-[72px]"
//                   />
//                   <div className="mt-2">
//                     Edge trimming with gas string trimmer
//                   </div>
//                 </div>
//               </div>
//               <div className="flex flex-col flex-1 shrink justify-center p-3 leading-loose rounded basis-0 bg-zinc-100">
//                 <div className="flex flex-col justify-center items-center w-full">
//                   <img
//                     loading="lazy"
//                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/e33ce80952eba85e1b4c0196e62c7bdcc6e11bf12fb28a1a56a9be07954683bb?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
//                     className="object-contain aspect-square w-[72px]"
//                   />
//                   <div className="mt-2">Lawn Mowing</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="mt-5 text-xs leading-4">
//             All equipment will be provided by the homeowner, but you must know
//             how to operate the tools/machines on your own (specific start and
//             stop instructions will be provided by homeowner)
//           </div>
//         </div>
//       </div>
//       <div className="flex gap-3 items-start mt-9 w-full text-xl font-medium tracking-wider text-center whitespace-nowrap max-w-[350px]">
//         <div onClick={handleBack} className="flex-1 shrink gap-9 self-stretch px-12 py-3.5 text-black rounded-lg bg-zinc-100">
//           Back
//         </div>
//         <div onClick={handleNext} className="flex-1 shrink gap-9 self-stretch px-12 py-3.5 text-white bg-black rounded-lg">
//           Next
//         </div>
//       </div>
//     </div>
//   );
// }


import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ServiceDetail() {
  const [selectedServices, setSelectedServices] = useState([]);
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/shoveller/shovellerPersonalDetail');
  };

  const handleBack = () => {
    navigate('/shoveller/shovellerDetails');
  };

  const handleServiceClick = (service) => {
    setSelectedServices((prevSelected) =>
      prevSelected.includes(service)
        ? prevSelected.filter((item) => item !== service)
        : [...prevSelected, service]
    );
    console.log(selectedServices);
  };

  const isSelected = (service) => selectedServices.includes(service);

  return (
    <div className="flex overflow-hidden flex-col items-center pb-12 mx-auto w-full bg-white max-w-[480px]">
      <div className="flex flex-col mt-8 w-full text-black max-w-[350px]">
        <div className="flex flex-col w-full">
          <div className="text-2xl font-medium tracking-wide">
            Services Provide
          </div>
          <div className="mt-3 text-xs leading-5">
            Choose what services you want to provide (check all that apply, you may change this later)
          </div>
        </div>
        <div className="flex flex-col mt-6 w-full">
          <div className="flex flex-col justify-center w-full text-sm tracking-tight text-center">
            <div className="flex gap-3 w-full min-h-[148px]">
              <div
                onClick={() => handleServiceClick('shovel')}
                className={`flex flex-col flex-1 shrink justify-center p-3 rounded border-2 cursor-pointer
                  ${isSelected('shovel') ? 'border-black' : 'border-neutral-400'}
                  bg-zinc-100`}
              >
                <div className="flex relative flex-col justify-center items-center w-full">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/5b8c3556e3b6558f2b9bd41359fd8d057cf3ff729275b8c54f9a9b9a9486c0a0?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                    className="object-contain z-0 aspect-square w-[72px]"
                  />
                  <div className="z-0 mt-2">
                    Snow Shoveling with shovel/pusher
                  </div>
                  {isSelected('shovel') && (
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3f9648edb107bc2d1d18c4c4e3315a947fedb5d249b17d860f71770e8f8b800?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                      className="object-contain absolute z-10 self-start w-6 h-6 aspect-square left-[-7px] top-[-7px]"
                    />
                  )}
                </div>
              </div>
              <div
                onClick={() => handleServiceClick('sunblower')}
                className={`flex flex-col flex-1 shrink justify-center p-3 rounded border-2 cursor-pointer
                  ${isSelected('sunblower') ? 'border-black' : 'border-neutral-400'}
                  bg-zinc-100`}
              >
                <div className="flex relative flex-col justify-center items-center w-full">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/37078516e07c302a74bd18a4a2a7b2f6d1cbc9237a466691e2ebedfe707203c3?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                    className="object-contain aspect-square w-[72px]"
                  />
                  <div className="mt-2">Snow Shoveling with sunblower</div>
                  {isSelected('sunblower') && (
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3f9648edb107bc2d1d18c4c4e3315a947fedb5d249b17d860f71770e8f8b800?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                      className="object-contain absolute z-10 self-start w-6 h-6 aspect-square left-[-7px] top-[-7px]"
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="flex gap-3 mt-3 w-full min-h-[148px]">
              <div
                onClick={() => handleServiceClick('reelPushMower')}
                className={`flex flex-col flex-1 shrink justify-center p-3 rounded border-2 cursor-pointer
                  ${isSelected('reelPushMower') ? 'border-black' : 'border-neutral-400'}
                  bg-zinc-100`}
              >
                <div className="flex relative flex-col justify-center w-full">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/64b69fc44471c6e0c19974c7516c0033a17cc87f2bc5ae781f9562d4305b7039?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                    className="object-contain self-center aspect-square w-[72px]"
                  />
                  <div className="mt-2">
                    Lawn mowing with reel push mower (non-electric)
                  </div>
                  {isSelected('reelPushMower') && (
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3f9648edb107bc2d1d18c4c4e3315a947fedb5d249b17d860f71770e8f8b800?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                      className="object-contain absolute z-10 self-start w-6 h-6 aspect-square left-[-7px] top-[-7px]"
                    />
                  )}
                </div>
              </div>
              <div
                onClick={() => handleServiceClick('electricMower')}
                className={`flex flex-col flex-1 shrink justify-center p-3 rounded border-2 cursor-pointer
                  ${isSelected('electricMower') ? 'border-black' : 'border-neutral-400'}
                  bg-zinc-100`}
              >
                <div className="flex relative flex-col justify-center items-center w-full">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/718c2efcabac9d06967283b97c4d817d8afe472878472f6a0c7aa7ea09731b0e?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                    className="object-contain aspect-square w-[72px]"
                  />
                  <div className="mt-2">Lawn mowing with electric mower</div>
                  {isSelected('electricMower') && (
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3f9648edb107bc2d1d18c4c4e3315a947fedb5d249b17d860f71770e8f8b800?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                      className="object-contain absolute z-10 self-start w-6 h-6 aspect-square left-[-7px] top-[-7px]"
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="flex gap-3 mt-3 w-full min-h-[148px]">
              <div
                onClick={() => handleServiceClick('gasMower')}
                className={`flex flex-col flex-1 shrink justify-center p-3 rounded border-2 cursor-pointer
                  ${isSelected('gasMower') ? 'border-black' : 'border-neutral-400'}
                  bg-zinc-100`}
              >
                <div className="flex relative flex-col justify-center items-center w-full">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8aa1dc61baa80755cf42d65544a6241d6842b3ae0e73bce600f12b98846c9b31?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                    className="object-contain aspect-square w-[72px]"
                  />
                  <div className="mt-2">Lawn mowing with gas mower</div>
                  {isSelected('gasMower') && (
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3f9648edb107bc2d1d18c4c4e3315a947fedb5d249b17d860f71770e8f8b800?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                      className="object-contain absolute z-10 self-start w-6 h-6 aspect-square left-[-7px] top-[-7px]"
                    />
                  )}
                </div>
              </div>
              <div
                onClick={() => handleServiceClick('electricTrimmer')}
                className={`flex flex-col flex-1 shrink justify-center p-3 rounded border-2 cursor-pointer
                  ${isSelected('electricTrimmer') ? 'border-black' : 'border-neutral-400'}
                  bg-zinc-100`}
              >
                <div className="flex relative flex-col justify-center items-center w-full">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/da93da1a2849c58318649b89f20c26f76948ca026d039fec1a153cd48807ff70?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                    className="object-contain aspect-square w-[72px]"
                  />
                  <div className="mt-2">
                    Edge trimming with electric string trimmer
                  </div>
                  {isSelected('electricTrimmer') && (
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3f9648edb107bc2d1d18c4c4e3315a947fedb5d249b17d860f71770e8f8b800?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                      className="object-contain absolute z-10 self-start w-6 h-6 aspect-square left-[-7px] top-[-7px]"
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="flex gap-3 mt-3 w-full min-h-[148px]">
              <div
                onClick={() => handleServiceClick('gasTrimmer')}
                className={`flex flex-col flex-1 shrink justify-center p-3 rounded border-2 cursor-pointer
                  ${isSelected('gasTrimmer') ? 'border-black' : 'border-neutral-400'}
                  bg-zinc-100`}
              >
                <div className="flex relative flex-col justify-center items-center w-full">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/da93da1a2849c58318649b89f20c26f76948ca026d039fec1a153cd48807ff70?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                    className="object-contain aspect-square w-[72px]"
                  />
                  <div className="mt-2">Edge trimming with gas string trimmer</div>
                  {isSelected('gasTrimmer') && (
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3f9648edb107bc2d1d18c4c4e3315a947fedb5d249b17d860f71770e8f8b800?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                      className="object-contain absolute z-10 self-start w-6 h-6 aspect-square left-[-7px] top-[-7px]"
                    />
                  )}
                </div>
              </div>
              <div
                onClick={() => handleServiceClick('lawnMowing')}
                className={`flex flex-col flex-1 shrink justify-center p-3 rounded border-2 cursor-pointer
                  ${isSelected('lawnMowing') ? 'border-black' : 'border-neutral-400'}
                  bg-zinc-100`}
              >
                <div className="flex relative flex-col justify-center items-center w-full">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e33ce80952eba85e1b4c0196e62c7bdcc6e11bf12fb28a1a56a9be07954683bb?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                    className="object-contain aspect-square w-[72px]"
                  />
                  <div className="mt-2">
                  Lawn Mowing
                  </div>
                  {isSelected('lawnMowing') && (
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3f9648edb107bc2d1d18c4c4e3315a947fedb5d249b17d860f71770e8f8b800?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                      className="object-contain absolute z-10 self-start w-6 h-6 aspect-square left-[-7px] top-[-7px]"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 text-xs leading-4">
              All equipment will be provided by the homeowner, but you must know
              how to operate the tools/machines on your own (specific start and
              stop instructions will be provided by homeowner)
            </div>
        </div>
        <div className="flex gap-3 items-start mt-9 w-full text-xl font-medium tracking-wider text-center whitespace-nowrap max-w-[350px] cursor-pointer">
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

