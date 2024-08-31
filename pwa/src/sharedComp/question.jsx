
import { useNavigate } from "react-router-dom";

function Question() {
    const navigate = useNavigate();
    const handleShoveller = () => {
        navigate('/shoveller/');
    }
  return (
    <div className="flex flex-col pb-16 mx-auto w-full bg-white max-w-[480px]">
      <div className="flex gap-2 items-center px-5 mt-7">
        <div className="flex flex-1 shrink self-stretch my-auto w-16 h-2 bg-black rounded-md basis-0" />
        <div className="flex flex-1 shrink self-stretch my-auto w-16 h-2 rounded-md basis-0 bg-zinc-100" />
        <div className="flex flex-1 shrink self-stretch my-auto h-2 rounded-md basis-0 bg-zinc-100 w-[65px]" />
        <div className="flex flex-1 shrink self-stretch my-auto w-16 h-2 rounded-md basis-0 bg-zinc-100" />
        <div className="flex flex-1 shrink self-stretch my-auto h-2 rounded-md basis-0 bg-zinc-100 w-[65px]" />
      </div>
      <div className="flex flex-col self-center mt-12 w-full text-4xl text-center text-black capitalize max-w-[331px] min-h-[224px] mx-auto">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/cb339dc9a566b0b3d1b9882948f8999b484139269cfad312d4cb2ea862c57cf1?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
          className="object-contain max-w-[100px] mx-auto"
          alt="Shovel House"
        />
        <div className="mt-5 text-xl">Shovel House</div>
      </div>
      <div className="flex flex-col self-center mt-8 w-full text-xl font-medium tracking-wider text-center whitespace-nowrap max-w-[350px] mx-auto">
        <div className="px-12 py-4 text-white bg-black rounded-lg cursor-pointer">
          Homeowner
        </div>
        <div className="px-12 py-4 mt-3 text-black bg-zinc-100 rounded-lg cursor-pointer">
          Shoveller
        </div>
      </div>
    </div>
  );
}

export default Question;
