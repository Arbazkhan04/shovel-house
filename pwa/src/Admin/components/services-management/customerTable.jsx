import React, { useState } from 'react';
import { useTable, usePagination, useSortBy } from 'react-table';
import ReactPaginate from 'react-paginate';
import { FaSearch, FaStar } from 'react-icons/fa'; // Import icons

const Customers = [
    { name: "Jane Cooper", address: "56/11-A", phone: "(225) 555-0118", email: "jane@microsoft.com", signUpDate: "12/04/2024", rating: 4, service: "Consulting", price: "$100", chat: "Canceled", payment: "Manual Capture", status: "Pending", shovelStatus: "Pending" },
    { name: "Alice Johnson", address: "24/C-12", phone: "(234) 555-0123", email: "alice@gmail.com", signUpDate: "01/15/2024", rating: 5, service: "Marketing", price: "$200", chat: "Canceled", payment: "Manual Capture", status: "Completed", shovelStatus: "Completed" },
    { name: "Floyd Miles", address: "89/B-10", phone: "(205) 555-0100", email: "floyd@yahoo.com", signUpDate: "08/04/2024", rating: 3, service: "Design", price: "$150", chat: "Canceled", payment: "Manual Capture", status: "In-progress", shovelStatus: "In-progress" },
    { name: "Bob Brown", address: "45/D-23", phone: "(243) 555-0456", email: "bob@hotmail.com", signUpDate: "05/10/2024", rating: 2, service: "Development", price: "$300", chat: "Canceled", payment: "Manual Capture", status: "Canceled", shovelStatus: "Canceled" },
    { name: "Charlie Davis", address: "78/E-34", phone: "(252) 555-0789", email: "charlie@yahoo.com", signUpDate: "09/22/2024", rating: 1, service: "Consulting", price: "$50", chat: "Canceled", payment: "Manual Capture", status: "Pending", shovelStatus: "Pending" },
    { name: "Daisy Evans", address: "91/F-45", phone: "(261) 555-0101", email: "daisy@gmail.com", signUpDate: "03/30/2024", rating: 4, service: "Design", price: "$120", chat: "Canceled", payment: "Manual Capture", status: "Completed", shovelStatus: "Completed" },
    { name: "Edward Harris", address: "32/G-56", phone: "(270) 555-0122", email: "edward@outlook.com", signUpDate: "06/15/2024", rating: 5, service: "Marketing", price: "$250", chat: "Canceled", payment: "Manual Capture", status: "In-progress", shovelStatus: "In-progress" },
    { name: "Fiona Green", address: "15/H-67", phone: "(279) 555-0345", email: "fiona@hotmail.com", signUpDate: "07/22/2024", rating: 3, service: "Development", price: "$350", chat: "Canceled", payment: "Manual Capture", status: "Canceled", shovelStatus: "Canceled" },
    { name: "George Hill", address: "62/I-78", phone: "(288) 555-0567", email: "george@gmail.com", signUpDate: "11/11/2024", rating: 4, service: "Consulting", price: "$90", chat: "Canceled", payment: "Manual Capture", status: "Pending", shovelStatus: "Pending" },
    { name: "Hannah White", address: "19/J-89", phone: "(297) 555-0780", email: "hannah@yahoo.com", signUpDate: "04/04/2024", rating: 5, service: "Design", price: "$180", chat: "Canceled", payment: "Manual Capture", status: "Completed", shovelStatus: "Completed" },
    { name: "Isaac Black", address: "76/K-90", phone: "(306) 555-0901", email: "isaac@gmail.com", signUpDate: "02/02/2024", rating: 2, service: "Marketing", price: "$130", chat: "Canceled", payment: "Manual Capture", status: "In-progress", shovelStatus: "In-progress" },
    { name: "Julia Martin", address: "38/L-01", phone: "(315) 555-1123", email: "julia@hotmail.com", signUpDate: "10/10/2024", rating: 3, service: "Development", price: "$200", chat: "Canceled", payment: "Manual Capture", status: "Canceled", shovelStatus: "Canceled" },
    { name: "Kevin Lee", address: "20/M-12", phone: "(324) 555-1345", email: "kevin@gmail.com", signUpDate: "12/15/2024", rating: 1, service: "Consulting", price: "$75", chat: "Canceled", payment: "Manual Capture", status: "Pending", shovelStatus: "Pending" },
    { name: "Laura King", address: "44/N-23", phone: "(333) 555-1567", email: "laura@yahoo.com", signUpDate: "08/20/2024", rating: 4, service: "Design", price: "$220", chat: "Canceled", payment: "Manual Capture", status: "Completed", shovelStatus: "Completed" },
    { name: "Michael Wright", address: "57/O-34", phone: "(342) 555-1789", email: "michael@hotmail.com", signUpDate: "09/30/2024", rating: 3, service: "Marketing", price: "$160", chat: "Canceled", payment: "Manual Capture", status: "In-progress", shovelStatus: "In-progress" },
    { name: "Nina Taylor", address: "30/P-45", phone: "(351) 555-1900", email: "nina@gmail.com", signUpDate: "01/22/2024", rating: 5, service: "Development", price: "$400", chat: "Canceled", payment: "Manual Capture", status: "Canceled", shovelStatus: "Canceled" },
    { name: "Oliver Scott", address: "82/Q-56", phone: "(360) 555-2123", email: "oliver@yahoo.com", signUpDate: "04/14/2024", rating: 2, service: "Consulting", price: "$110", chat: "Canceled", payment: "Manual Capture", status: "Pending", shovelStatus: "Pending" },
    { name: "Paula Young", address: "49/R-67", phone: "(369) 555-2345", email: "paula@gmail.com", signUpDate: "05/05/2024", rating: 4, service: "Design", price: "$140", chat: "Canceled", payment: "Manual Capture", status: "Completed", shovelStatus: "Completed" },
    { name: "Quentin Adams", address: "61/S-78", phone: "(378) 555-2567", email: "quentin@hotmail.com", signUpDate: "06/25/2024", rating: 3, service: "Marketing", price: "$190", chat: "Canceled", payment: "Manual Capture", status: "In-progress", shovelStatus: "In-progress" },
    { name: "Rachel Brown", address: "29/T-89", phone: "(387) 555-2789", email: "rachel@gmail.com", signUpDate: "03/01/2024", rating: 5, service: "Development", price: "$270", chat: "Canceled", payment: "Manual Capture", status: "Canceled", shovelStatus: "Canceled" },
    { name: "Steven Miller", address: "12/U-90", phone: "(396) 555-2901", email: "steven@yahoo.com", signUpDate: "07/11/2024", rating: 1, service: "Consulting", price: "$60", chat: "Canceled", payment: "Manual Capture", status: "Pending", shovelStatus: "Pending" },
    { name: "Tina Wilson", address: "90/V-01", phone: "(405) 555-3111", email: "tina@hotmail.com", signUpDate: "11/29/2024", rating: 4, service: "Design", price: "$230", chat: "Canceled", payment: "Manual Capture", status: "Completed", shovelStatus: "Completed" },
    { name: "Victor James", address: "33/W-12", phone: "(414) 555-3333", email: "victor@gmail.com", signUpDate: "02/13/2024", rating: 3, service: "Marketing", price: "$180", chat: "Canceled", payment: "Manual Capture", status: "In-progress", shovelStatus: "In-progress" },
    { name: "Wendy Clark", address: "71/X-23", phone: "(423) 555-3555", email: "wendy@yahoo.com", signUpDate: "12/18/2024", rating: 5, service: "Development", price: "$320", chat: "Canceled", payment: "Manual Capture", status: "Canceled", shovelStatus: "Canceled" },
    { name: "Xavier Davis", address: "55/Y-34", phone: "(432) 555-3777", email: "xavier@hotmail.com", signUpDate: "09/05/2024", rating: 2, service: "Consulting", price: "$80", chat: "Canceled", payment: "Manual Capture", status: "Pending", shovelStatus: "Pending" }
];

function CustomerTable() {
    const [customers, setCustomers] = useState(Customers);

    const columns = React.useMemo(
        () => [
            {
                Header: 'User Name',
                accessor: 'name',
                Cell: ({ row }) => {
                    const customerRating = row.original.rating;
                    return (
                        <div className="flex flex-col items-left">
                            <span className="text-left">{row.original.name}</span>
                            <div className="flex mt-1">
                                {[...Array(5)].map((_, index) => (
                                    <FaStar
                                        key={index}
                                        className={`w-5 h-5 ${index < customerRating ? 'text-yellow-400' : 'text-gray-300'}`}
                                    />
                                ))}
                            </div>
                        </div>
                    );
                },
            },
            { Header: 'Address', accessor: 'address' },
            { Header: 'Phone Number', accessor: 'phone' },
            { Header: 'Email', accessor: 'email' },
            { Header: 'Sign Up Date', accessor: 'signUpDate' },

            {
                Header: 'House Owner Job Status',
                accessor: 'status',
                Cell: ({ row }) => {
                    const statusArray = ['Pending', 'Completed', 'In-progress', 'Canceled'];
                    const currentStatus = row.original.status;
                    const currentIndex = statusArray.indexOf(currentStatus);
                    const nextStatus = statusArray[(currentIndex + 1) % statusArray.length];

                    return (
                        <button
                            className={`px-3 py-1 rounded cursor-pointer ${currentStatus === 'Pending' ? 'bg-yellow-500' : currentStatus === 'Completed' ? 'bg-green-500' : currentStatus === 'In-progress' ? 'bg-blue-500' : 'bg-red-500'} text-white`}
                            onClick={() => {
                                const updatedCustomers = [...customers];
                                updatedCustomers[row.index].status = nextStatus;
                                setCustomers(updatedCustomers);
                            }}
                        >
                            {currentStatus}
                        </button>
                    );
                },
            },

            {
                Header: 'Shovel Job Status',
                accessor: 'shovelStatus',
                Cell: ({ row }) => {
                    const statusArray = ['Pending', 'Completed', 'In-progress', 'Canceled'];
                    const currentShovelStatus = row.original.shovelStatus;
                    const currentShovelIndex = statusArray.indexOf(currentShovelStatus);
                    const nextShovelStatus = statusArray[(currentShovelIndex + 1) % statusArray.length];

                    return (
                        <button
                            className={`px-3 py-1 rounded cursor-pointer ${currentShovelStatus === 'Pending' ? 'bg-yellow-500' : currentShovelStatus === 'Completed' ? 'bg-green-500' : currentShovelStatus === 'In-progress' ? 'bg-blue-500' : 'bg-red-500'} text-white`}
                            onClick={() => {
                                const updatedCustomers = [...customers];
                                updatedCustomers[row.index].shovelStatus = nextShovelStatus;
                                setCustomers(updatedCustomers);
                            }}
                        >
                            {currentShovelStatus}
                        </button>
                    );
                },
            },

            { Header: 'Type of Service', accessor: 'service' },
            { Header: 'Price Offered', accessor: 'price' },

            {
                Header: 'Chat',
                accessor: 'chat',
                Cell: ({ row }) => (
                    <button className="bg-red-500 text-white p-1 rounded-md">{row.original.chat}</button>
                ),
            },
            {
                Header: 'Payment Capture',
                accessor: 'payment',
                Cell: ({ row }) => (
                    <button className="bg-black text-white px-1 py-1 rounded-md">{row.original.payment}</button>
                ),
            },
        ],
        [customers]
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize },
    } = useTable(
        {
            columns,
            data: customers,
            initialState: { pageIndex: 0, pageSize: 8 },
        },
        useSortBy,
        usePagination
    );

    const handlePageClick = (event) => {
        gotoPage(event.selected);
    };

    return (
        <section className="flex flex-col self-stretch py-9 mt-10 w-full bg-white rounded-[30px] shadow-[0px_10px_60px_rgba(226,236,249,0.5)] max-md:max-w-full">
            <div className="flex flex-col pr-0.5 pl-10 w-full max-md:pl-5 max-md:max-w-full">
                <div className="flex flex-wrap gap-24 justify-between max-w-full w-[914px]">
                    <div className="flex flex-col">
                        <h2 className="text-2xl font-semibold tracking-tight text-black">All Customers</h2>
                        <div className="self-start mt-2 text-sm tracking-normal text-zinc-800">Active Members</div>
                    </div>
                    <div className="flex flex-wrap flex-auto gap-3.5 my-auto text-xs tracking-normal text-zinc-500 max-md:max-w-full">
                        <form className="flex gap-2 px-2 py-2 text-gray-400 whitespace-nowrap rounded-xl bg-neutral-100">
                            <FaSearch className="self-center w-5 h-5 text-gray-400" />
                            <label htmlFor="tableSearch" className="sr-only">Search</label>
                            <input
                                type="text"
                                id="tableSearch"
                                placeholder="Search"
                                className="bg-transparent border-none focus:outline-none"
                            />
                        </form>

                        {/* Status Sorting Field */}
                        <div className="flex gap-3.5 px-3.5 py-2.5 rounded-xl bg-neutral-100">
                            <label htmlFor="statusSort" className="font-semibold text-zinc-700 flex justify-center items-center">Sort by:</label>
                            <select id="statusSort" className="bg-neutral-100 text-zinc-700 font-semibold rounded-lg px-2 py-1">
                                <option value="status">Status</option>
                                <option value="pending">Pending</option>
                                <option value="completed">Completed</option>
                                <option value="canceled">Canceled</option>
                                <option value="in-progress">In-progress</option>
                            </select>
                        </div>

                        {/* SignUp Date Sorting Field */}
                        <div className="flex gap-5 py-2.5 pl-4 rounded-xl bg-neutral-100">
                            <label htmlFor="signupDateSort" className="font-semibold text-zinc-700 flex justify-center items-center">Sort by:</label>
                            <select id="signupDateSort" className="bg-neutral-100 text-zinc-700 font-semibold rounded-lg px-2 py-1">
                                <option value="signupDate">SignUp Date</option>
                                <option value="newest">Newest First</option>
                                <option value="oldest">Oldest First</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Table */}
                <div className='overflow-x-auto'>
                    <table {...getTableProps()} className="w-full mt-10 text-sm font-medium tracking-normal text-gray-400 border-collapse">
                        <thead>
                            {headerGroups.map(headerGroup => (
                                <tr {...headerGroup.getHeaderGroupProps()}>
                                    {headerGroup.headers.map(column => (
                                        <th {...column.getHeaderProps(column.getSortByToggleProps())} className="px-4 py-2 text-left border-b-0">
                                            {column.render('Header')}
                                            {column.canSort && (
                                                <span className={`ml-2 ${column.isSorted ? '' : 'invisible'}`}>
                                                    {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                                                </span>
                                            )}
                                        </th>
                                    ))}
                                </tr>
                            ))}
                        </thead>
                        <tbody {...getTableBodyProps()} className="border-b-0">
                            {page.map(row => {
                                prepareRow(row);
                                return (
                                    <tr {...row.getRowProps()} className="border-b-0">
                                        {row.cells.map(cell => {
                                            return <td {...cell.getCellProps()} className="px-4 py-2 border-b-0">{cell.render('Cell')}</td>;
                                        })}
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <ReactPaginate
                    className='pagination-container flex justify-end me-32 mt-10 gap-x-5'
                    previousLabel={
                        <span className="flex items-center justify-center px-2 rounded-md border border-gray-300 hover:bg-gray-300 transition duration-200 ease-in-out">
                            &lt;
                        </span>
                    }
                    nextLabel={
                        <span className="flex items-center justify-center px-2 rounded-md border border-gray-300 hover:bg-gray-300 transition duration-200 ease-in-out">
                            &gt;
                        </span>
                    }
                    breakLabel={<span className="mx-2 text-gray-600">...</span>}
                    breakClassName={`break-me`}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={`flex items-center`}
                    pageLinkClassName={`bg-gray-200 px-2 py-1 rounded-md border border-gray-300 hover:bg-gray-300 transition duration-200 ease-in-out`}
                    activeLinkClassName={`bg-zinc-900 text-white rounded-md`}
                    disabledClassName={`opacity-50 cursor-not-allowed`}
                />

            </div>
        </section>
    );
}

export default CustomerTable;
