import React from 'react';
import SidebarItem from '../shared/sidebarItem';

function Sidebar() {
    const menuItems = [
        { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f59f55fecaa19395323b60794e479c8c915e2572f3f98ff2a48109bad571f9a6?placeholderIfAbsent=true&apiKey=fc6d299c0cd342d3a58ffeb43ac7bebf", label: "User Management", active: true, to: "/communications" },
        { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/14deeb521df38342947304b41e7ab52385d7b5f4272f3507befe776e01d84543?placeholderIfAbsent=true&apiKey=fc6d299c0cd342d3a58ffeb43ac7bebf", label: "Services Request", to: "/services-request" },
        { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/265550a4a888f445a0bb2eeb5c6925a6a2d35db492f8d06f7e3d5292449e464e?placeholderIfAbsent=true&apiKey=fc6d299c0cd342d3a58ffeb43ac7bebf", label: "Payment", to: "/payment-management" },
        { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ee619a1c94e9930081c8a0ab3ce1453e44df47b07a15114e07eca83974363c82?placeholderIfAbsent=true&apiKey=fc6d299c0cd342d3a58ffeb43ac7bebf", label: "Communication", to: "/communications" },
        { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/23802196c9edb9abe1625e5dde6bf76d00fab0b05e993bf0eac2bed62ff0fa8e?placeholderIfAbsent=true&apiKey=fc6d299c0cd342d3a58ffeb43ac7bebf", label: "Queries", to: "/queries-management" }
    ];

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
                        active={item.active}
                        to={item.to} // Pass the route
                    />
                ))}
            </div>
        </nav>
    );
}

export default Sidebar;
