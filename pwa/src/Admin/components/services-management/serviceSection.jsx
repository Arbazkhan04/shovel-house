import React from 'react';
import cutGrassImage from '../../../assets/images/cut-grass.png'; // Adjust the path as necessary
import snowShovelImage from '../../../assets/images/snow-shovel.png'; // Adjust the path as necessary

function ServicesSection() {
  return (
    <section className="flex flex-col max-md:ml-0 w-[50%] overflow-hidden bg-white p-5 rounded-[25px]">
      <h2 className="text-2xl font-semibold tracking-tight text-black">Services</h2>
      <div className="flex relative grow gap-4 items-center justify-start px-4 py-4 min-h-[290px] ">
        <ServiceCard image={cutGrassImage} title="Lawn Mowing" />
        <ServiceCard image={snowShovelImage} title="Snow Shoveling" />
      </div>
    </section>
  );
}

function ServiceCard({ image, title }) {
  return (
    <div className="flex z-0 flex-col items-center self-stretch pt-5 pr-8 pb-9 pl-8 my-auto text-lg font-medium tracking-tight leading-none text-center text-black min-h-[167px] rounded-[30px] w-[181px] max-md:px-5 relative overflow-hidden">
      <div className='flex flex-col justify-center items-center h-[180px] w-[180px] rounded-[25px] bg-gradient-to-b from-gray-300 to-gray-100 p-10'>
        <img
          loading="lazy"
          src={image}
          alt={title}
          className="object-cover w-20 h-20" // Set a fixed height and width
        />
        <p className="mt-4">{title}</p>
      </div>
    </div>
  );
}

export default ServicesSection;
