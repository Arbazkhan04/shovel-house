import React from 'react';

function StatCard({ icon, title, value, change, changeType, showGraph }) {
    return (
        <div className="flex gap-5">
            <img loading="lazy" src={icon} alt="" className="object-contain shrink-0 aspect-square w-[84px]" />
            <div className="flex flex-col items-start">
                <div className="text-sm tracking-normal text-neutral-400">{title}</div>
                <div className="mt-1 text-3xl font-semibold tracking-tight leading-none text-zinc-800">{value}</div>
                {change !== undefined && (
                    <div className="flex gap-1 mt-1.5 text-xs tracking-normal text-zinc-800">
                        <img
                            loading="lazy"
                            src={changeType === 'increase' ? "https://cdn.builder.io/api/v1/image/assets/TEMP/298338e848053da3d4628420fd3fd71300379bbcc0318ccc0a1c3bb885e04a01?placeholderIfAbsent=true&apiKey=fc6d299c0cd342d3a58ffeb43ac7bebf" : "https://cdn.builder.io/api/v1/image/assets/TEMP/7545931e3b1128759e023d2f442a0ff7d89482f214681778aa3a7af111a55b1c?placeholderIfAbsent=true&apiKey=fc6d299c0cd342d3a58ffeb43ac7bebf"}
                            alt=""
                            className="object-contain shrink-0 w-5 aspect-square"
                        />
                        <div>
                            <span className={`font-bold ${changeType === 'increase' ? 'text-black' : 'text-zinc-800'}`}>{change}%</span> this month
                        </div>
                    </div>
                )}
                {showGraph && (
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/82d317d7-c1d0-4a76-9835-3f69c233895e?placeholderIfAbsent=true&apiKey=fc6d299c0cd342d3a58ffeb43ac7bebf" alt="Activity graph" className="object-contain self-stretch w-full rounded-full aspect-[3.8]" />
                )}
            </div>
        </div>
    );
}

export default StatCard;