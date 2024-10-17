import React from 'react';
import Sidebar from '../shared/sidebar';
import Header from '../shared/header';
import CustomerTable from './customerTable';


function ReferralDashboard() {
    return (
        <div className="overflow-hidden bg-zinc-50">
            <div className="flex gap-5 max-md:flex-col">
                <Sidebar />
                <main className="flex flex-col ml-5 w-[78%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col items-start self-stretch w-full max-md:mt-10 max-md:max-w-full">
                        <section className='w-[97%]' >
                            <CustomerTable />
                        </section>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default ReferralDashboard;