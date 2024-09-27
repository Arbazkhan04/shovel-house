import React from 'react';
import { Link } from 'react-router-dom'; // Import Link or NavLink

function SidebarItem({ icon, label, active, to }) {
    return (
        <Link to={to}> {/* Use Link to wrap the entire item */}
            <div className={`flex gap-5 justify-between px-2.5 py-3 mt-7 ${active ? 'text-white rounded-lg bg-zinc-800' : ''}`}>
                <div className="flex gap-3.5">
                    <img loading="lazy" src={icon} alt="" className="object-contain shrink-0 w-6 aspect-square" />
                    <div className="basis-auto">{label}</div>
                </div>
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8e195e775766d2c899e594275c312875d7c79728f8d03d0a274ce8648fbe4968?placeholderIfAbsent=true&apiKey=fc6d299c0cd342d3a58ffeb43ac7bebf" alt="" className="object-contain shrink-0 my-auto w-4 aspect-square" />
            </div>
        </Link>
    );
}

export default SidebarItem;
