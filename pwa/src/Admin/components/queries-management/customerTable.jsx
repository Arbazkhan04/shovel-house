import React, { useState } from 'react';
import { useTable, usePagination, useSortBy } from 'react-table';
import ReactPaginate from 'react-paginate';
import { FaSearch, FaStar } from 'react-icons/fa'; // Import icons

const Customers = [
    { name: "Jane Cooper", query: "Payment Stuck", status: "Completed", rating: 5, shoveler: "John Smith" },
    { name: "Alice Johnson", query: "Service Not Completed", status: "Completed", rating: 4, shoveler: "Paul Green" },
    { name: "Floyd Miles", query: "Payment Stuck", status: "Completed", rating: 3, shoveler: "Lisa White" },
    { name: "Bob Brown", query: "Payment Stuck", status: "Completed", rating: 5, shoveler: "Mike Black" },
    { name: "Charlie Davis", query: "Payment Stuck", status: "Completed", rating: 2, shoveler: "Nancy Blue" },
    { name: "Daisy Evans", query: "Payment Stuck", status: "Completed", rating: 4, shoveler: "Tom Yellow" },
    { name: "Edward Harris", query: "Payment Stuck", status: "Completed", rating: 5, shoveler: "Sara Orange" },
    { name: "Fiona Green", query: "Payment Stuck", status: "Completed", rating: 3, shoveler: "Jake Red" },
    { name: "George Hill", query: "Payment Stuck", status: "Completed", rating: 2, shoveler: "Ella Purple" },
    { name: "Hannah White", query: "Payment Stuck", status: "Completed", rating: 4, shoveler: "Chris Brown" },
    { name: "Isaac Black", query: "Payment Stuck", status: "Completed", rating: 3, shoveler: "Tina Pink" },
    { name: "Julia Martin", query: "Service Not Completed", status: "Completed", rating: 4, shoveler: "Greg Grey" },
    { name: "Kevin Lee", query: "Payment Stuck", status: "Completed", rating: 5, shoveler: "Laura Silver" },
    { name: "Laura King", query: "Payment Stuck", status: "Completed", rating: 2, shoveler: "Sam Gold" },
    { name: "Michael Wright", query: "Payment Stuck", status: "Completed", rating: 4, shoveler: "Amy Copper" },
    { name: "Nina Taylor", query: "Payment Stuck", status: "Completed", rating: 5, shoveler: "Randy Brass" },
    { name: "Oliver Scott", query: "Payment Stuck", status: "Completed", rating: 3, shoveler: "Betty Iron" },
    { name: "Paula Young", query: "Payment Stuck", status: "Completed", rating: 4, shoveler: "Nina Steel" },
    { name: "Quentin Adams", query: "Service Not Completed", status: "Completed", rating: 3, shoveler: "Larry Lead" },
    { name: "Rachel Brown", query: "Payment Stuck", status: "Completed", rating: 5, shoveler: "Zoe Zinc" },
    { name: "Steven Miller", query: "Payment Stuck", status: "Completed", rating: 4, shoveler: "Frank Nickel" },
    { name: "Tina Wilson", query: "Payment Stuck", status: "Completed", rating: 2, shoveler: "Clara Tin" },
    { name: "Victor James", query: "Service Not Completed", status: "Completed", rating: 4, shoveler: "Daisy Glass" },
    { name: "Wendy Clark", query: "Payment Stuck", status: "Completed", rating: 5, shoveler: "Jake Wood" },
    { name: "Yvonne Harris", query: "Service Not Completed", status: "Completed", rating: 3, shoveler: "Kate Fiber" },
    { name: "Zachary Lee", query: "Payment Stuck", status: "Completed", rating: 4, shoveler: "Mike Fabric" }
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
            {
                Header: 'Query',
                accessor: 'query',
                Cell: ({ row }) => (
                    <span className="text-left">{row.original.query}</span>
                ),
            },
            {
                Header: 'Status',
                accessor: 'status',
                Cell: ({ row }) => {
                    const currentStatus = row.original.status;

                    const handleStatusChange = (newStatus) => {
                        const updatedCustomers = [...customers];
                        updatedCustomers[row.index].status = newStatus;
                        setCustomers(updatedCustomers);
                    };

                    return (
                        <div className="flex space-x-2">
                            <button
                                onClick={() => handleStatusChange('Completed')}
                                className={`px-2 py-1 rounded ${currentStatus === 'Completed' ? 'bg-black text-white' : 'bg-gray-300 text-black'}`}
                            >
                                Completed
                            </button>
                            <button
                                onClick={() => handleStatusChange('Pending')}
                                className={`px-2 py-1 rounded ${currentStatus === 'Pending' ? 'bg-black text-white' : 'bg-gray-300 text-black'}`}
                            >
                                Pending
                            </button>
                        </div>
                    );
                },
            },
            {
                Header: 'Shoveler',
                accessor: 'shoveler',
                Cell: ({ row }) => (
                    <span className="text-left">{row.original.shoveler}</span>
                ),
            },
        ],
        [customers] // Include customers in dependencies to re-render on state change
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
                    <div className="flex flex-wrap flex-auto gap-5 my-auto text-xs tracking-normal text-zinc-500 max-md:max-w-full">
                        <form className=" flex gap-2 px-2 py-2 text-gray-400 whitespace-nowrap rounded-xl bg-neutral-100 ">
                            <FaSearch className="self-center w-5 h-5 text-gray-400" />
                            <label htmlFor="tableSearch" className="sr-only">Search</label>
                            <input
                                type="text"
                                id="tableSearch"
                                placeholder="Search"
                                className="bg-transparent border-none focus:outline-none "
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
                    <table {...getTableProps()} className="w-full mt-10 text-base font-medium tracking-normal text-gray-400 border-collapse">
                        <thead>
                            {headerGroups.map(headerGroup => (
                                <tr {...headerGroup.getHeaderGroupProps()}>
                                    {headerGroup.headers.map(column => (
                                        <th
                                            {...column.getHeaderProps(column.getSortByToggleProps())}
                                            className="px-4 py-2 text-left border-b-0 text-sm" // Increased padding and font size
                                        >
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
                                            return (
                                                <td
                                                    {...cell.getCellProps()}
                                                    className="px-4 py-2 border-b-0 text-sm" // Increased padding and font size
                                                >
                                                    {cell.render('Cell')}
                                                </td>
                                            );
                                        })}
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Pagination */}
            <ReactPaginate className='pagination-container flex justify-end me-32 mt-10 gap-x-5'
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
                containerClassName={'flex items-center'}
                pageLinkClassName={'bg-gray-200 px-2 py-1 rounded-md border border-gray-300 hover:bg-gray-300 transition duration-200 ease-in-out'}
                activeLinkClassName={'bg-zinc-900 text-white rounded-md'}
                disabledClassName={'opacity-50 cursor-not-allowed'}
            />

        </section >
    );
}

export default CustomerTable;
