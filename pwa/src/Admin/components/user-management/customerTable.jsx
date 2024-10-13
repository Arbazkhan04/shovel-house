import React, { useState, useEffect, useMemo } from 'react';
import { FaStar, FaSearch } from 'react-icons/fa';
import { useTable, useSortBy } from 'react-table';
import ReactPaginate from 'react-paginate';
import Loader from '../../../sharedComp/loader.jsx'
import { allShovelersInfo, updateShovelerStatus } from '../../../apiManager/admin/ShovelersManagement.js';
import "./UserManagement.css"


function CustomerTable() {
    const [sortBy, setSortBy] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedStatus, setSelectedStatus] = useState({});
    const [currentPage, setCurrentPage] = useState(0);
    const [loading, setLoading] = useState(false);
    const [shovelers, setShovelers] = useState([]);
    const [error, setError] = useState('');
    const rowsPerPage = 8;

    useEffect(() => {
        const getShovelersData = async () => {
            try {
                setLoading(true);
                const res = await allShovelersInfo();
                console.log(res)
                setShovelers(res);
            } catch (error) {
                setError(error.message || "An error occurred while fetching data");
            } finally {
                setLoading(false);
            }
        }
        getShovelersData();
    }, []);


    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

    const renderStars = (rating) => {
        const totalStars = 5;
        return (
            <div className="flex justify-center">
                {[...Array(totalStars)].map((_, i) => (
                    <FaStar
                        key={i}
                        className={i < rating ? 'text-yellow-500' : 'text-gray-300'}
                    />
                ))}
            </div>
        );
    };

    const columns = useMemo(
        () => [
            {
                Header: 'User Name',
                accessor: 'userName',
                Cell: ({ row }) => (
                    <div>
                        {row.original.shovelerDetails.userName}
                        {renderStars(row.original.statistics.averageRating)}
                    </div>
                ),
            },
            {
                Header: 'Address',
                accessor: 'address',
                Cell: ({ row }) => (
                    <div>
                        {row.original.shovelerDetails.address}
                    </div>
                ),
            },
            {
                Header: 'Phone Number',
                accessor: 'phone',
                Cell: ({ row }) => (
                    <div>
                        {row.original.shovelerDetails.phone}
                    </div>
                ),
            },
            {
                Header: 'Email',
                accessor: 'email',
                Cell: ({ row }) => (
                    <div>
                        {row.original.shovelerDetails.email}
                    </div>
                ),
            },
            {
                Header: 'Sign Up Date',
                accessor: 'dateJoined',
                Cell: ({ row }) => (
                    <div>
                        {new Date(row.original.shovelerDetails.dateJoined).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}

                    </div>
                ),
            },
            {
                Header: 'Status',
                accessor: 'status',
                Cell: ({ row }) => {
                    // Determine the current status
                    const currentStatus = selectedStatus[row.index] || row.original.shovelerDetails.status;

                    // Define the className based on the status
                    const className = `px-2 py-1 rounded ${currentStatus === 'Suspend' ? 'bg-yellow-500 text-white'
                        : currentStatus === 'Activate' ? 'bg-green-500 text-white'
                            : currentStatus === 'Deactivate' ? 'bg-red-500 text-white'
                                : 'bg-zinc-500 text-white'// Default for any other status
                        }`;

                    return (
                        <select
                            className={className} // Apply the className based on status
                            value={currentStatus} // Use the current status as the value
                            onChange={(e) => handleStatusChange(row.index, e.target.value)} // Update the status on change
                        >
                            <option value="active">Activate</option>
                            <option value="inactive">Inactive</option>
                            <option value="suspend">Suspend</option>
                        </select>
                    );
                },
            },
            {
                Header: 'Average Price',
                accessor: 'averagePrice',
                Cell: ({ row }) => (
                    <div>
                        {row.original.statistics.averagePrice ? parseInt(row.original.statistics.averagePrice) : 0}
                    </div>
                ),
            },
            {
                Header: 'Completed Jobs',
                accessor: 'completedJobs',
                Cell: ({ row }) => (
                    <div>
                        {row.original.statistics.completedJobs}
                    </div>
                ),
            },
            {
                Header: 'Cancelled Services',
                accessor: 'canceledJobs',
                Cell: ({ row }) => (
                    <div>
                        {row.original.statistics.canceledJobs}
                    </div>
                ),
            },
            {
                Header: 'Received Payments',
                accessor: 'totalPayments',
                Cell: ({ row }) => (
                    <div>
                        {row.original.statistics.totalPayments}
                    </div>
                ),
            },
        ],
        [selectedStatus]
    );

    const data = useMemo(() => {
        return shovelers
            .filter((shoveler) =>
                shoveler.shovelerDetails.userName.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .filter((shoveler) => {
                // Check if "All" is selected, if yes, don't apply the status filter
                if (sortBy.toLowerCase() === 'all') {
                    return true; // Include all shovelers
                }
                return shoveler.shovelerDetails.status.toLowerCase() === sortBy.toLowerCase();
            });
    }, [shovelers, searchTerm, sortBy]);
    

    
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data }, useSortBy);

    const paginatedRows = rows.slice(
        currentPage * rowsPerPage,
        (currentPage + 1) * rowsPerPage
    );

    const handleStatusChange = async (index, value) => {
        // Update the selected status in the state
        setSelectedStatus((prevStatus) => ({
            ...prevStatus,
            [index]: value,
        }));

        // Ensure that the shovelerDetails exists before making the API call
        const shoveler = shovelers[index];
        if (shoveler && shoveler.shovelerDetails) {
            await updateShovelerStatus(shoveler.shovelerDetails._id, value);
        } else {
            console.error(`Shoveler details are missing or undefined for index ${index}`);
        }
    };


    if (!shovelers.length) {
        return <p>No shovelers available</p>;
    }

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return <p className="text-red-500">{error}</p>;
    }

    return (

        // table header
        <div className="p-6">
            <div className="flex justify-between items-center my-10 gap-x-28">
                <div>
                    <h2 className="text-xl font-bold">All Shovelers</h2>
                    <p className="text-gray-500">Active Members</p>
                </div>
                <div className="flex gap-4 w-[80%]">
                    <div className="relative w-[35%]">
                        <input
                            type="text"
                            placeholder="Search"
                            id="gsearch"
                            name="gsearch"
                            className="w-full border bg-gray-100 border-gray-300 rounded-md px-10 py-1"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
                    </div>

                    <select
                        className="border border-gray-300 rounded-md px-4"
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                    >
                        <option value="all">All</option>
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                        <option value="suspend">Suspend</option>
                        {/* Add more sorting options as needed */}
                    </select>
                </div>
            </div>

            {/* table container */}
            <div className='overflow-x-auto'>
                <table {...getTableProps()} className="min-w-full bg-white">
                    <thead>
                        {headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column) => (
                                    <th
                                        {...column.getHeaderProps(column.getSortByToggleProps())}
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        {column.render('Header')}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>

                    <tbody {...getTableBodyProps()}>
                        {paginatedRows.map((row) => {
                            prepareRow(row);
                            return (
                                <tr {...row.getRowProps()} className="hover:bg-gray-100">
                                    {row.cells.map((cell) => (
                                        <td
                                            {...cell.getCellProps()}
                                            className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                                        >
                                            {cell.render('Cell')}
                                        </td>
                                    ))}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            {/* paginator */}
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
                breakClassName='break-me'
                pageCount={Math.ceil(rows.length / rowsPerPage)}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={`flex items-center`}
                pageLinkClassName={`bg-gray-200 px-2 py-1 rounded-md border border-gray-300 hover:bg-gray-300 transition duration-200 ease-in-out`}
                activeLinkClassName={`bg-zinc-900 text-white rounded-md`}
                disabledClassName={`opacity-50 cursor-not-allowed`}
            />

        </div>
    );
}

export default CustomerTable;