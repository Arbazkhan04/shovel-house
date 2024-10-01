import React from 'react';
import { Link } from 'react-router-dom'; // Import Link or NavLink

function SidebarItem({ icon, label, active, to }) {
    return (
        // Use Link to wrap the entire item
        <Link to={to}> 
            <div className={`flex gap-5 justify-between px-2.5 py-3 mt-7 rounded-lg transition duration-200 ${active ? 'text-white bg-zinc-800' : 'text-black hover:bg-gray-200'}`}>

                {/* nav tabs icons */}
                <div className="flex gap-3.5">
                    <img
                        loading="lazy"
                        src={icon}
                        alt={label}
                        className={`object-contain shrink-0 w-6 aspect-square transition duration-200`}
                        style={{
                            filter: active
                                ? 'brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(225deg) brightness(101%) contrast(101%)'
                                : 'brightness(0) saturate(100%) invert(0%) sepia(4%) saturate(15%) hue-rotate(151deg) brightness(103%) contrast(97%)'
                        }} // Apply filter directly
                    />
                    <div className={`basis-auto ${active ? 'text-white' : 'text-black'}`}>{label}</div>
                </div>

                {/* nav tabs arrow icons */}       
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8e195e775766d2c899e594275c312875d7c79728f8d03d0a274ce8648fbe4968?placeholderIfAbsent=true&apiKey=fc6d299c0cd342d3a58ffeb43ac7bebf"
                    alt=""
                    className={`object-contain shrink-0 my-auto w-4 aspect-square transition duration-200`}
                    style={{
                        filter: active
                            ? 'brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(225deg) brightness(101%) contrast(101%)'
                            : 'brightness(0) saturate(100%) invert(0%) sepia(4%) saturate(15%) hue-rotate(151deg) brightness(103%) contrast(97%)'
                    }}
                />
            </div>
        </Link>
    );
}

export default SidebarItem;
