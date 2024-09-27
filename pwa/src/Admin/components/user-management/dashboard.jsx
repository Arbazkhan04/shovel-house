import React from 'react';
import Sidebar from '../shared/sidebar';
import Header from './header';
import StatCard from '../user-management/statCard';
import CustomerTable from './customerTable';



function Dashboard() {
  return (

    <div className="overflow-hidden bg-white">
      <div className="flex gap-5 max-md:flex-col">
        <Sidebar />
        <main className="flex flex-col ml-5 w-[78%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col items-start self-stretch w-full max-md:mt-10 max-md:max-w-full">
            <Header />
            <section className="flex flex-wrap gap-5 justify-between items-start px-14 py-8 mt-[4%] w-[97%] bg-white rounded-[30px] shadow-[0px_10px_60px_rgba(226,236,249,0.5)] w-[968px] max-md:px-5">
              <StatCard
                icon="https://cdn.builder.io/api/v1/image/assets/TEMP/b0489c768a4ac04ebfd0018b0f3b14884f53581df7f4d1f5c07e429ae2e6f764?placeholderIfAbsent=true&apiKey=fc6d299c0cd342d3a58ffeb43ac7bebf"
                title="Total Customers"
                value="5,423"
                change={16}
                changeType="increase"
              />
              <div className="shrink-0 w-px border border-solid border-zinc-100 h-[87px]" />
              <StatCard
                icon="https://cdn.builder.io/api/v1/image/assets/TEMP/a9b4ebfeb4edf964b488842339380dd34f49ca91c213f6f02094a33aa263afac?placeholderIfAbsent=true&apiKey=fc6d299c0cd342d3a58ffeb43ac7bebf"
                title="Members"
                value="1,893"
                change={1}
                changeType="increase"
              />
              <div className="shrink-0 w-px border border-solid border-zinc-100 h-[87px]" />
              <StatCard
                icon="https://cdn.builder.io/api/v1/image/assets/TEMP/a6cbdc2eea27a9bf77015f6f0dc8cff6994a03a9857c7d437eed9c5a7f17c856?placeholderIfAbsent=true&apiKey=fc6d299c0cd342d3a58ffeb43ac7bebf"
                title="Active Now"
                value="189"
                showGraph={true}
              />
            </section>
            <section className='w-[97%]' >
              <CustomerTable />
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;