import React, { useState } from 'react';
import { useTable, usePagination, useSortBy } from 'react-table';
import ReactPaginate from 'react-paginate';
import { FaSearch, FaStar } from 'react-icons/fa'; // Import icons

const Customers = [
    { name: "Jane Cooper", query: "Payment Stuck", status: "Completed", rating: 5 },
    { name: "Alice Johnson", query: "Service Not Completed", status: "Completed", rating: 4 },
    { name: "Floyd Miles", query: "Payment Stuck", status: "Completed", rating: 3 },
    { name: "Bob Brown", query: "Payment Stuck", status: "Completed", rating: 5 },
    { name: "Charlie Davis", query: "Payment Stuck", status: "Completed", rating: 2 },
    { name: "Daisy Evans", query: "Payment Stuck", status: "Completed", rating: 4 },
    { name: "Edward Harris", query: "Payment Stuck", status: "Completed", rating: 5 },
    { name: "Fiona Green", query: "Payment Stuck", status: "Completed", rating: 3 },
    { name: "George Hill", query: "Payment Stuck", status: "Completed", rating: 2 },
    { name: "Hannah White", query: "Payment Stuck", status: "Completed", rating: 4 },
    { name: "Isaac Black", query: "Payment Stuck", status: "Completed", rating: 3 },
    { name: "Julia Martin", query: "Service Not Completed", status: "Completed", rating: 4 },
    { name: "Kevin Lee", query: "Payment Stuck", status: "Completed", rating: 5 },
    { name: "Laura King", query: "Payment Stuck", status: "Completed", rating: 2 },
    { name: "Michael Wright", query: "Payment Stuck", status: "Completed", rating: 4 },
    { name: "Nina Taylor", query: "Payment Stuck", status: "Completed", rating: 5 },
    { name: "Oliver Scott", query: "Payment Stuck", status: "Completed", rating: 3 },
    { name: "Paula Young", query: "Payment Stuck", status: "Completed", rating: 4 },
    { name: "Quentin Adams", query: "Service Not Completed", status: "Completed", rating: 3 },
    { name: "Rachel Brown", query: "Payment Stuck", status: "Completed", rating: 5 },
    { name: "Steven Miller", query: "Payment Stuck", status: "Completed", rating: 4 },
    { name: "Tina Wilson", query: "Payment Stuck", status: "Completed", rating: 2 },
    { name: "Victor James", query: "Service Not Completed", status: "Completed", rating: 4 },
    { name: "Wendy Clark", query: "Payment Stuck", status: "Completed", rating: 5 },
    { name: "Yvonne Harris", query: "Service Not Completed", status: "Completed", rating: 3 },
    { name: "Zachary Lee", query: "Payment Stuck", status: "Completed", rating: 4 }
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
                accessor: 'query', // Ensure this matches the property in the data
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
            }
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
                <div className="flex flex-wrap gap-5 justify-between max-w-full w-[914px]">
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

                        {/* Dropdown for Sorting by Status */}
                        <div className="flex items-center">
                            <label htmlFor="sortByStatus" className="mr-2 text-gray-600">Sort by: Status</label>
                            <select id="sortByStatus" className="border rounded-md px-2 py-1 bg-white text-gray-700">
                                <option value="">Select Status</option>
                                <option value="active">Completed</option>
                                <option value="inactive">Pending</option>
                            </select>
                        </div>

                        {/* Dropdown for Sorting by Signed Up Date */}
                        <div className="flex items-center">
                            <label htmlFor="sortByDate" className="mr-2 text-gray-600">Sort by: Signed Up Date</label>
                            <select id="sortByDate" className="border rounded-md px-2 py-1 bg-white text-gray-700">
                                <option value="">Sign Up Date</option>
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
            <ReactPaginate
                previousLabel={'Previous'}
                nextLabel={'Next'}
                breakLabel={'...'}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={'flex justify-center my-4'}
                pageClassName={'mx-1'}
                previousClassName={'mx-1'}
                nextClassName={'mx-1'}
                activeClassName={'text-black font-bold'}
                disabledClassName={'text-gray-400'}
            />
        </section >
    );
}

export default CustomerTable;
