import * as React from "react";

export default function SearchJobByArea() {
  return (
    <div className="flex overflow-hidden flex-col pb-8 mx-auto w-full bg-white max-w-[480px]">
      <div className="flex flex-col px-5 mt-5 w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e78b2ab3c1b037e4da039a9fa3854323270864886cc09ff5fbbb6ed86eb963e2?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
          className="object-contain w-6 aspect-square"
        />
        <div className="flex flex-col mt-4">
          <div className="flex flex-col w-full">
            <div className="flex flex-col w-full">
              <div className="text-3xl font-medium tracking-wide text-black">
                Search Jobs In Area
              </div>
              <div className="flex gap-4 items-center p-4 mt-3 w-full text-xl tracking-wide rounded-lg bg-zinc-100 text-stone-500">
                <div className="flex gap-3 items-center self-stretch my-auto">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/24150185c539c82e9703719df45b8d931494322e0bbfae370589b7b204138ab1?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                  />
                  <div className="self-stretch my-auto">Search Location</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center mt-6 w-full text-xl leading-none text-center whitespace-nowrap">
              <div className="flex gap-10 justify-between items-center max-w-full w-[211px]">
                <div className="flex gap-2 items-center self-stretch my-auto text-black">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c17ea213ae3718c167cd5b8621e35cf5dfdf20649f9c98385a2c4a3b37d75d32?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                    className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                  />
                  <div className="self-stretch my-auto w-[41px]">Map</div>
                </div>
                <div className="flex gap-2 items-center self-stretch my-auto text-stone-500">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7771b5892dc0009e9473ba2883081ac19512249ff0fb66321dfd9a26cc399c68?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                    className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                  />
                  <div className="self-stretch my-auto">List</div>
                </div>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5f60652455ee921b503bb8b97b6f3e7bcf76f78f82f1ae30765aff3356aad0a2?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                className="object-contain mt-3 max-w-full w-[350px]"
              />
            </div>
          </div>
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e88f6f984dd1a0953ea51d15c39a4b306a63fbc437f41ad5dbe1a84191ac0c11?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e88f6f984dd1a0953ea51d15c39a4b306a63fbc437f41ad5dbe1a84191ac0c11?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e88f6f984dd1a0953ea51d15c39a4b306a63fbc437f41ad5dbe1a84191ac0c11?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e88f6f984dd1a0953ea51d15c39a4b306a63fbc437f41ad5dbe1a84191ac0c11?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e88f6f984dd1a0953ea51d15c39a4b306a63fbc437f41ad5dbe1a84191ac0c11?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e88f6f984dd1a0953ea51d15c39a4b306a63fbc437f41ad5dbe1a84191ac0c11?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e88f6f984dd1a0953ea51d15c39a4b306a63fbc437f41ad5dbe1a84191ac0c11?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e88f6f984dd1a0953ea51d15c39a4b306a63fbc437f41ad5dbe1a84191ac0c11?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
            className="object-contain mt-5 max-w-full rounded-none aspect-[0.66] w-[350px]"
          />
        </div>
      </div>
    </div>
  );
}