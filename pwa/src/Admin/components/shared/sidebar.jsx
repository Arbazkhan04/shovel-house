import React from 'react';
import { useLocation } from 'react-router-dom'; // For determining the current path
import SidebarItem from '../shared/sidebarItem';

function Sidebar() {
    const location = useLocation(); // Get the current location
    const menuItems = [
        { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f59f55fecaa19395323b60794e479c8c915e2572f3f98ff2a48109bad571f9a6?placeholderIfAbsent=true&apiKey=fc6d299c0cd342d3a58ffeb43ac7bebf", label: "User Management", to: "/admin/Dashboard" },
        { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/14deeb521df38342947304b41e7ab52385d7b5f4272f3507befe776e01d84543?placeholderIfAbsent=true&apiKey=fc6d299c0cd342d3a58ffeb43ac7bebf", label: "Services Management", to: "/admin/ServiceDashboard" },
        { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/23802196c9edb9abe1625e5dde6bf76d00fab0b05e993bf0eac2bed62ff0fa8e?placeholderIfAbsent=true&apiKey=fc6d299c0cd342d3a58ffeb43ac7bebf", label: "Queries", to: "/admin/QueryDashboard" }
    ];

    // Check if the current path is not one of the defined routes
    const isDefaultActive = !menuItems.some(item => item.to === location.pathname);

    return (
        <nav className="flex flex-col w-[22%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col px-7 pt-9 mx-auto w-full text-sm font-medium tracking-normal bg-white pb-[714px] shadow-[0px_10px_60px_rgba(226,236,249,0.5)] text-neutral-500 max-md:px-5 max-md:pb-24 max-md:mt-10">
                <div className="flex gap-2 self-start text-2xl font-semibold tracking-wide text-black whitespace-nowrap">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/bca6b3d1f90db53f6c6c8aa1d74d67dd9e8aff4fdfe17e81eb746ab863eb3c11?placeholderIfAbsent=true&apiKey=fc6d299c0cd342d3a58ffeb43ac7bebf" alt="" className="object-contain shrink-0 self-start aspect-square w-[37px]" />
                    <div className="basis-auto mb-20">Dashboard</div>
                </div>
                {menuItems.map((item, index) => (
                    <SidebarItem
                        key={index}
                        icon={item.icon}
                        label={item.label}
                        active={isDefaultActive && item.to === "/admin/Dashboard" || location.pathname === item.to} // Set active based on the current path or if default
                        to={item.to}
                    />
                ))}
            </div>
        </nav>
    );
}

export default Sidebar;
