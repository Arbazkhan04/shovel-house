import React from 'react';
import { FaMagnifyingGlass } from "react-icons/fa6";

function SidebarItem({ icon, label, active }) {
    return (
        <div className={`flex gap-5 justify-between px-2.5 py-3 mt-7 w-[95%] ${active ? 'text-white rounded-lg bg-zinc-800' : ''}`}>
            {/* User Info Section */}
            <div className="flex gap-3.5">
                <img loading="lazy" src={icon} alt="" className="object-contain shrink-0 w-6 aspect-square" />
                <p className="basis-auto">{label}</p>
            </div>

            {/* Search Input Section */}
            <div className="relative w-full max-w-xs">
                {/* Search Icon */}
                <FaMagnifyingGlass className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />

                {/* Input Field */}
                <input
                    className="border rounded-lg pl-10 pr-2 py-1 w-full focus:outline-none"
                    type="search"
                    id="gsearch"
                    name="gsearch"
                    placeholder="Search..."
                />
            </div>
        </div>
    );
}

export default SidebarItem;
