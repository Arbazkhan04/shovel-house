import React from 'react';
import Chart from 'react-apexcharts';
import { BiFontSize } from 'react-icons/bi';
import './ServiceManagement.css';

function UsersSection() {
    const userTypes = [
        { label: "Active Users", color: "bg-zinc-600" },
        { label: "New Users", color: "bg-zinc-300" },
        { label: "Deactivate Users", color: "bg-zinc-800" },
    ];

    // ApexCharts configuration
    const chartOptions = {
        chart: {
            type: 'donut',
            height: '100%',
            background: 'transparent',
        },
        colors: ['#404040', '#71717A', '#A1A1AA'], // Use valid color codes (e.g., Zinc-900: #1F2937, Zinc-700: #374151, Gray-300: #D1D5DB)
        dataLabels: {
            enabled: false
        },
        legend: {
            show: false
        },
        fill: {
            type: 'gradient',
        },
        plotOptions: {
            pie: {
                donut: {
                    size: '60%',
                    labels: {
                        show: true,
                        fontSize: 30,
                        color: 'red',
                        showAlways: true
                    }
                }
            }
        },
        series: [45, 67, 89],
        labels: ['Active Users', 'New Users', 'Deactivated Users'],
    };


    return (
        // users status
        <section className="flex flex-col max-md:ml-0 w-full overflow-hidden bg-white p-5 rounded-[25px]">
            <h2 className="text-2xl font-semibold tracking-tight text-black">Users</h2>
            <div className="flex flex-col xl:flex-row flex-wrap grow gap-x-32  items-center px-4 py-4 w-full min-h-[290px] max-md:px-5 max-md:mt-8 max-md:max-w-full">
                <div className="flex flex-col self-stretch my-auto text-lg font-medium tracking-tight leading-none text-center w-[174px]">
                    {userTypes.map((type, index) => (
                        <div key={index} className="flex gap-3 mt-11 first:mt-0 max-md:mt-10">
                            <div className={`flex shrink-0 self-stretch my-auto rounded-full h-[15px] w-[15px] ${type.color}`} />
                            <div className="self-stretch my-auto">{type.label}</div>
                        </div>
                    ))}
                </div>

                {/* Gradient Donut Pie Chart with Centered Box Shadow */}
                <div className="chart-container flex flex-col justify-center lg:mt-5 items-center self-stretch my-auto rounded-full">
                    <Chart
                        options={chartOptions}
                        series={chartOptions.series}
                        type="donut"
                        height={310}
                        width={310}
                    />
                </div>
            </div>
        </section>
    );
}

export default UsersSection;
