import React from 'react';
import Chart from 'react-apexcharts';

function UsersSection() {
    const userTypes = [
        { label: "Active Users", color: "" },
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
        colors: ['zinc-900', 'zinc-700', 'Gray-300'], // Example colors
        dataLabels: {
            enabled: false
        },
        legend: {
            show: false
        },
        plotOptions: {
            pie: {
                donut: {
                    size: '70%',
                },
            },
        },
        series: [60, 30, 10], // Example data for each user type
    };

    return (
        // users status
        <section className="flex flex-col  max-md:ml-0 w-full overflow-hidden bg-white p-5 rounded-[25px]">
            <h2 className="text-2xl font-semibold tracking-tight text-black">Users</h2>
            <div className="flex flex-wrap grow gap-5 justify-start items-center px-4 py-4 w-full min-h-[290px] max-md:px-5 max-md:mt-8 max-md:max-w-full">
                <div className="flex flex-col items-start self-stretch my-auto text-lg font-medium tracking-tight leading-none text-center text-black w-[174px]">
                    {userTypes.map((type, index) => (
                        <div key={index} className="flex gap-3 items-center mt-11 first:mt-0 max-md:mt-10">
                            <div className={`flex shrink-0 self-stretch my-auto rounded-full h-[15px] w-[15px] ${type.color}`} />
                            <div className="self-stretch my-auto">{type.label}</div>
                        </div>
                    ))}
                </div>

                {/* Gradient Donut Pie Chart with Centered Box Shadow */}
                <div className="flex flex-col justify-center items-center self-stretch my-auto rounded-full w-[250px] h-[250px]">
                    <div className="flex justify-center items-center h-[150px] w-[150px]  rounded-full shadow-[0px_4px_30px_rgba(0,0,0,0.15)]">
                        <Chart options={chartOptions} series={chartOptions.series} type="donut" height={150} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default UsersSection;
