// import { useNavigate } from "react-router-dom";

// export default function SearchJobByList() {
//   const navigate = useNavigate();

//   const handleShovllerMap = () => {
//     navigate("/shoveller/searchJobByMap");
//   }

//   const navigateToHouseOwnerJob = () => {
//     navigate("/shoveller/isMatchHouseOwner");
//   }
//   return (
//     <div className="flex overflow-hidden flex-col pb-3 mx-auto w-full bg-white max-w-[480px]">
//       <div className="flex flex-col px-5 mt-5 w-full">
//         <img
//           loading="lazy"
//           src="https://cdn.builder.io/api/v1/image/assets/TEMP/e78b2ab3c1b037e4da039a9fa3854323270864886cc09ff5fbbb6ed86eb963e2?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
//           className="object-contain w-6 aspect-square"
//         />
//         <div className="flex flex-col mt-4">
//           <div className="flex flex-col w-full">
//             <div className="flex flex-col w-full">
//               <div className="text-3xl font-medium tracking-wide text-black">
//                 Search Jobs In Area
//               </div>
//               <div className="flex gap-4 items-center p-4 mt-3 w-full text-xl tracking-wide rounded-lg bg-zinc-100 text-stone-500">
//                 <div className="flex gap-3 items-center self-stretch my-auto">
//                   <img
//                     loading="lazy"
//                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/24150185c539c82e9703719df45b8d931494322e0bbfae370589b7b204138ab1?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
//                     className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
//                   />
//                   <div className="self-stretch my-auto">Search Location</div>
//                 </div>
//               </div>
//             </div>
//             <div className="flex flex-col items-center mt-6 w-full text-xl leading-none text-center whitespace-nowrap">
//               <div className="flex gap-10 justify-between items-center max-w-full w-[211px]">
//                 <div className="flex gap-2 items-center self-stretch my-auto text-stone-500">
//                   <img
//                     loading="lazy"
//                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/9dd09a6abf1a68166b7a3c2ea65a50fe520a8497f75825bd00076a8f5326b01a?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
//                     className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
//                   />
//                   <div onClick={handleShovllerMap} className="self-stretch my-auto w-[41px]">Map</div>
//                 </div>
//                 <div className="flex gap-2 items-center self-stretch my-auto text-black">
//                   <img
//                     loading="lazy"
//                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/0bd2b5a75a465655bc5be8b6e7a9691ff635ef742d1258053409dd2bf0cf65d2?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
//                     className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
//                   />
//                   <div className="self-stretch my-auto">List</div>
//                 </div>
//               </div>
//               <img
//                 loading="lazy"
//                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/584210f80131546a57f8f37e8fef30ba7d61cc2a8129d155087c8c2c50ae53e0?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
//                 className="object-contain mt-3 max-w-full w-[350px]"
//               />
//             </div>
//           </div>
//           <div className="flex flex-col mt-5 w-full tracking-tight">
//             <div onClick={navigateToHouseOwnerJob} className="flex gap-10 justify-between items-center px-4 py-3 w-full rounded-lg bg-zinc-100">
//               <div className="flex gap-2 items-center self-stretch my-auto text-zinc-800">
//                 <img
//                   loading="lazy"
//                   srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/cbbaae0db0d05a01e1fe05609a37a79bd82fad33480da6c5339d119d98591928?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/cbbaae0db0d05a01e1fe05609a37a79bd82fad33480da6c5339d119d98591928?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cbbaae0db0d05a01e1fe05609a37a79bd82fad33480da6c5339d119d98591928?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/cbbaae0db0d05a01e1fe05609a37a79bd82fad33480da6c5339d119d98591928?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/cbbaae0db0d05a01e1fe05609a37a79bd82fad33480da6c5339d119d98591928?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cbbaae0db0d05a01e1fe05609a37a79bd82fad33480da6c5339d119d98591928?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/cbbaae0db0d05a01e1fe05609a37a79bd82fad33480da6c5339d119d98591928?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/cbbaae0db0d05a01e1fe05609a37a79bd82fad33480da6c5339d119d98591928?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
//                   className="object-contain shrink-0 self-stretch my-auto aspect-square w-[52px]"
//                 />
//                 <div className="flex flex-col self-stretch my-auto">
//                   <div className="text-xl leading-none">Huzaifa</div>
//                   <div className="mt-2 text-xs leading-loose">
//                     Snow shoveling
//                   </div>
//                 </div>
//               </div>
//               <div className="self-stretch my-auto text-sm leading-loose text-black w-[42px]">
//                 0.8Km
//               </div>
//             </div>
//             <div className="flex gap-10 justify-between items-center px-4 py-3 mt-1 w-full rounded-lg bg-zinc-100">
//               <div className="flex gap-2 items-center self-stretch my-auto text-zinc-800">
//                 <img
//                   loading="lazy"
//                   srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/cbbaae0db0d05a01e1fe05609a37a79bd82fad33480da6c5339d119d98591928?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/cbbaae0db0d05a01e1fe05609a37a79bd82fad33480da6c5339d119d98591928?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cbbaae0db0d05a01e1fe05609a37a79bd82fad33480da6c5339d119d98591928?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/cbbaae0db0d05a01e1fe05609a37a79bd82fad33480da6c5339d119d98591928?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/cbbaae0db0d05a01e1fe05609a37a79bd82fad33480da6c5339d119d98591928?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cbbaae0db0d05a01e1fe05609a37a79bd82fad33480da6c5339d119d98591928?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/cbbaae0db0d05a01e1fe05609a37a79bd82fad33480da6c5339d119d98591928?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/cbbaae0db0d05a01e1fe05609a37a79bd82fad33480da6c5339d119d98591928?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
//                   className="object-contain shrink-0 self-stretch my-auto aspect-square w-[52px]"
//                 />
//                 <div className="flex flex-col self-stretch my-auto">
//                   <div className="text-xl leading-none">Huzaifa</div>
//                   <div className="mt-2 text-xs leading-loose">
//                     Snow shoveling
//                   </div>
//                 </div>
//               </div>
//               <div className="self-stretch my-auto text-sm leading-loose text-black w-[42px]">
//                 0.8Km
//               </div>
//             </div>
//             <div className="flex gap-10 justify-between items-center px-4 py-3 mt-1 w-full rounded-lg bg-zinc-100">
//               <div className="flex gap-2 items-center self-stretch my-auto text-zinc-800">
//                 <img
//                   loading="lazy"
//                   srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/cbbaae0db0d05a01e1fe05609a37a79bd82fad33480da6c5339d119d98591928?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/cbbaae0db0d05a01e1fe05609a37a79bd82fad33480da6c5339d119d98591928?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cbbaae0db0d05a01e1fe05609a37a79bd82fad33480da6c5339d119d98591928?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/cbbaae0db0d05a01e1fe05609a37a79bd82fad33480da6c5339d119d98591928?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/cbbaae0db0d05a01e1fe05609a37a79bd82fad33480da6c5339d119d98591928?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cbbaae0db0d05a01e1fe05609a37a79bd82fad33480da6c5339d119d98591928?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/cbbaae0db0d05a01e1fe05609a37a79bd82fad33480da6c5339d119d98591928?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/cbbaae0db0d05a01e1fe05609a37a79bd82fad33480da6c5339d119d98591928?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
//                   className="object-contain shrink-0 self-stretch my-auto aspect-square w-[52px]"
//                 />
//                 <div className="flex flex-col self-stretch my-auto">
//                   <div className="text-xl leading-none">Huzaifa</div>
//                   <div className="mt-2 text-xs leading-loose">
//                     Snow shoveling
//                   </div>
//                 </div>
//               </div>
//               <div className="self-stretch my-auto text-sm leading-loose text-black w-[42px]">
//                 0.8Km
//               </div>
//             </div>
//             <div className="flex gap-10 justify-between items-center px-4 py-3 mt-1 w-full rounded-lg bg-zinc-100">
//               <div className="flex gap-2 items-center self-stretch my-auto text-zinc-800">
//                 <img
//                   loading="lazy"
//                   srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/cbbaae0db0d05a01e1fe05609a37a79bd82fad33480da6c5339d119d98591928?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/cbbaae0db0d05a01e1fe05609a37a79bd82fad33480da6c5339d119d98591928?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cbbaae0db0d05a01e1fe05609a37a79bd82fad33480da6c5339d119d98591928?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/cbbaae0db0d05a01e1fe05609a37a79bd82fad33480da6c5339d119d98591928?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/cbbaae0db0d05a01e1fe05609a37a79bd82fad33480da6c5339d119d98591928?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cbbaae0db0d05a01e1fe05609a37a79bd82fad33480da6c5339d119d98591928?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/cbbaae0db0d05a01e1fe05609a37a79bd82fad33480da6c5339d119d98591928?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/cbbaae0db0d05a01e1fe05609a37a79bd82fad33480da6c5339d119d98591928?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
//                   className="object-contain shrink-0 self-stretch my-auto aspect-square w-[52px]"
//                 />
//                 <div className="flex flex-col self-stretch my-auto">
//                   <div className="text-xl leading-none">Huzaifa</div>
//                   <div className="mt-2 text-xs leading-loose">
//                     Snow shoveling
//                   </div>
//                 </div>
//               </div>
//               <div className="self-stretch my-auto text-sm leading-loose text-black w-[42px]">
//                 0.8Km
//               </div>
//             </div>
//             <div className="flex gap-10 justify-between items-center px-4 py-3 mt-1 w-full rounded-lg bg-zinc-100">
//               <div className="flex gap-2 items-center self-stretch my-auto text-zinc-800">
//                 <img
//                   loading="lazy"
//                   srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/cbbaae0db0d05a01e1fe05609a37a79bd82fad33480da6c5339d119d98591928?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/cbbaae0db0d05a01e1fe05609a37a79bd82fad33480da6c5339d119d98591928?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cbbaae0db0d05a01e1fe05609a37a79bd82fad33480da6c5339d119d98591928?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/cbbaae0db0d05a01e1fe05609a37a79bd82fad33480da6c5339d119d98591928?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/cbbaae0db0d05a01e1fe05609a37a79bd82fad33480da6c5339d119d98591928?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cbbaae0db0d05a01e1fe05609a37a79bd82fad33480da6c5339d119d98591928?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/cbbaae0db0d05a01e1fe05609a37a79bd82fad33480da6c5339d119d98591928?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/cbbaae0db0d05a01e1fe05609a37a79bd82fad33480da6c5339d119d98591928?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
//                   className="object-contain shrink-0 self-stretch my-auto aspect-square w-[52px]"
//                 />
//                 <div className="flex flex-col self-stretch my-auto">
//                   <div className="text-xl leading-none">Huzaifa</div>
//                   <div className="mt-2 text-xs leading-loose">
//                     Snow shoveling
//                   </div>
//                 </div>
//               </div>
//               <div className="self-stretch my-auto text-sm leading-loose text-black w-[42px]">
//                 0.8Km
//               </div>
//             </div>
//             <div className="flex gap-10 justify-between items-center px-4 py-3 mt-1 w-full rounded-lg bg-zinc-100">
//               <div className="flex gap-2 items-center self-stretch my-auto text-zinc-800">
//                 <img
//                   loading="lazy"
//                   srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/cbbaae0db0d05a01e1fe05609a37a79bd82fad33480da6c5339d119d98591928?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/cbbaae0db0d05a01e1fe05609a37a79bd82fad33480da6c5339d119d98591928?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cbbaae0db0d05a01e1fe05609a37a79bd82fad33480da6c5339d119d98591928?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/cbbaae0db0d05a01e1fe05609a37a79bd82fad33480da6c5339d119d98591928?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/cbbaae0db0d05a01e1fe05609a37a79bd82fad33480da6c5339d119d98591928?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cbbaae0db0d05a01e1fe05609a37a79bd82fad33480da6c5339d119d98591928?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/cbbaae0db0d05a01e1fe05609a37a79bd82fad33480da6c5339d119d98591928?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/cbbaae0db0d05a01e1fe05609a37a79bd82fad33480da6c5339d119d98591928?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
//                   className="object-contain shrink-0 self-stretch my-auto aspect-square w-[52px]"
//                 />
//                 <div className="flex flex-col self-stretch my-auto">
//                   <div className="text-xl leading-none">Huzaifa</div>
//                   <div className="mt-2 text-xs leading-loose">
//                     Snow shoveling
//                   </div>
//                 </div>
//               </div>
//               <div className="self-stretch my-auto text-sm leading-loose text-black w-[42px]">
//                 0.8Km
//               </div>
//             </div>
//             <div className="flex gap-10 justify-between items-center px-4 py-3 mt-1 w-full rounded-lg bg-zinc-100">
//               <div className="flex gap-2 items-center self-stretch my-auto text-zinc-800">
//                 <img
//                   loading="lazy"
//                   srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/cbbaae0db0d05a01e1fe05609a37a79bd82fad33480da6c5339d119d98591928?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/cbbaae0db0d05a01e1fe05609a37a79bd82fad33480da6c5339d119d98591928?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cbbaae0db0d05a01e1fe05609a37a79bd82fad33480da6c5339d119d98591928?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/cbbaae0db0d05a01e1fe05609a37a79bd82fad33480da6c5339d119d98591928?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/cbbaae0db0d05a01e1fe05609a37a79bd82fad33480da6c5339d119d98591928?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cbbaae0db0d05a01e1fe05609a37a79bd82fad33480da6c5339d119d98591928?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/cbbaae0db0d05a01e1fe05609a37a79bd82fad33480da6c5339d119d98591928?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/cbbaae0db0d05a01e1fe05609a37a79bd82fad33480da6c5339d119d98591928?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
//                   className="object-contain shrink-0 self-stretch my-auto aspect-square w-[52px]"
//                 />
//                 <div className="flex flex-col self-stretch my-auto">
//                   <div className="text-xl leading-none">Huzaifa</div>
//                   <div className="mt-2 text-xs leading-loose">
//                     Snow shoveling
//                   </div>
//                 </div>
//               </div>
//               <div className="self-stretch my-auto text-sm leading-loose text-black w-[42px]">
//                 0.8Km
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import { useNavigate } from "react-router-dom";

export default function SearchJobByList() {
  const navigate = useNavigate();

  const candidates = [
    { name: "Huzaifa", job: "Snow shoveling", distance: "0.8Km" },
    { name: "Huzaifa", job: "Snow shoveling", distance: "0.8Km" },
    { name: "Huzaifa", job: "Snow shoveling", distance: "0.8Km" },
    { name: "Huzaifa", job: "Snow shoveling", distance: "0.8Km" },
    { name: "Huzaifa", job: "Snow shoveling", distance: "0.8Km" },
  ];

  const handleShovellerMap = () => {
    navigate("/shoveller/searchJobByMap");
  };

  const navigateToHouseOwnerJob = () => {
    navigate("/shoveller/isMatchHouseOwner");
  };

  return (
    <div className="flex overflow-hidden flex-col pb-3 mx-auto w-full bg-white max-w-[480px]">
      <div className="flex flex-col px-5 mt-5 w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e78b2ab3c1b037e4da039a9fa3854323270864886cc09ff5fbbb6ed86eb963e2?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
          className="object-contain w-6 aspect-square"
          alt="Search Icon"
        />
        <div className="flex flex-col mt-4">
          <div className="text-3xl font-medium tracking-wide text-black">
            Search Jobs In Area
          </div>
          {/* Use an input field for search while maintaining the design */}
          <div className="flex gap-4 items-center p-4 mt-3 w-full text-xl tracking-wide rounded-lg bg-zinc-100 text-stone-500">
            <div className="flex gap-3 items-center self-stretch my-auto">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/24150185c539c82e9703719df45b8d931494322e0bbfae370589b7b204138ab1?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
              />
              <input
                type="text"
                placeholder="Search Location"
                className="flex-1 p-2 rounded-lg bg-zinc-100 text-stone-500 focus:outline-none"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mt-6 w-full text-xl leading-none text-center whitespace-nowrap">
          <div className="flex gap-10 justify-between items-center max-w-full w-[211px]">
            <div className="flex gap-2 items-center text-stone-500 cursor-pointer" onClick={handleShovellerMap}>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9dd09a6abf1a68166b7a3c2ea65a50fe520a8497f75825bd00076a8f5326b01a?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                className="object-contain w-4 aspect-square"
                alt="Map Icon"
              />
              <div>Map</div>
            </div>
            <div className="flex gap-2 items-center text-black cursor-pointer">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0bd2b5a75a465655bc5be8b6e7a9691ff635ef742d1258053409dd2bf0cf65d2?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                className="object-contain w-4 aspect-square"
                alt="List Icon"
              />
              <div>List</div>
            </div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/584210f80131546a57f8f37e8fef30ba7d61cc2a8129d155087c8c2c50ae53e0?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
            className="object-contain mt-3 max-w-full w-[350px]"
            alt="Map Image"
          />
        </div>
        <div className="flex flex-col mt-5 w-full tracking-tight">
          {/* List of candidates */}
          {candidates.map((candidate, index) => (
            <div
              key={index}
              onClick={navigateToHouseOwnerJob}
              className="flex cursor-pointer gap-10 justify-between items-center px-4 py-3 w-full rounded-lg bg-zinc-100 mb-2"
            >
              <div className="flex gap-2 items-center text-zinc-800">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/cbbaae0db0d05a01e1fe05609a37a79bd82fad33480da6c5339d119d98591928?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                  className="object-contain aspect-square w-[52px]"
                  alt="Candidate Icon"
                />
                <div className="flex flex-col">
                  <div className="text-xl leading-none">{candidate.name}</div>
                  <div className="mt-2 text-xs leading-loose">{candidate.job}</div>
                </div>
              </div>
              <div className="text-sm leading-loose text-black w-[42px]">
                {candidate.distance}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
