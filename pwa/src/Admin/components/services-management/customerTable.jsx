import React, { useState, useEffect } from 'react';
import { useTable, usePagination, useSortBy } from 'react-table';
import ReactPaginate from 'react-paginate';
import { FaSearch } from 'react-icons/fa'; // Import icons
import { allJobsInfo, manualCapture } from '../../../apiManager/admin/JobsManagement.js';
import Loader from '../../../sharedComp/loader.jsx'
import ConfirmationModal from '../../../sharedComp/customModal.jsx'

function CustomerTable() {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [dateSortBy, setDateSortBy] = useState('Newest First');
    const [showCancelModal, setShowCancelModal] = useState(false); //
    const [jobId, setJobId] = useState(''); //
    const [shovelerId, setShovelerId] = useState(''); //


    useEffect(() => {
        const getJobsData = async () => {
            try {
                setLoading(true);
                const res = await allJobsInfo();
                console.log(res)
                setJobs(res);
            } catch (error) {
                setError(error.message || "An error occurred while fetching data");
            } finally {
                setLoading(false);
            }
        }
        getJobsData();
    }, [jobId]);

    const handleCapture = async () => {
        try {
            setLoading(true);
            
            const res = await manualCapture(jobId, shovelerId, 'admin');
            if (res && res.error) {
                setError(res.error);
                setLoading(false);
                setJobId('');
                setShovelerId('');
                return
            }
            
            alert('Payment Captured Successfully');
            setShowCancelModal(false); // Close the modal before performing the action
            setLoading(false);
        } catch (error) {
            setError(error.message || "An error occurred while capturing payment");
        }
        finally {
            setLoading(false);
            setJobs(jobs.filter((referral) => referral._id !== jobId));
        }
        setJobId('');
        setShovelerId('');
    }

    const handleManualCaptureClick = (row) => {
        setShowCancelModal(true);
        setJobId(row.original.jobDetails._id);
        setShovelerId(row.original.shovelerId);
    }


    const columns = React.useMemo(
        () => [
            {
                Header: 'User Name',
                accessor: 'userName',
                Cell: ({ row }) => (
                    <div>
                        {row.original.userDetails.userName}
                    </div>
                ),
            },
            {
                Header: 'Address', accessor: 'address',
                Cell: ({ row }) => (
                    <div>
                        {row.original.userDetails.address}
                    </div>
                ),
            },
            {
                Header: 'Phone Number', accessor: 'phone',
                Cell: ({ row }) => (
                    <div>
                        {row.original.userDetails.phone}
                    </div>
                ),
            },
            {
                Header: 'Email', accessor: 'email',
                Cell: ({ row }) => (
                    <div>
                        {row.original.userDetails.email}
                    </div>
                ),
            },
            {
                Header: 'Post Date', accessor: 'PostDate',
                Cell: ({ row }) => (
                    <div>
                        {new Date(row.original.jobDetails.createdAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}
                    </div>
                ),
            },

            {
                Header: 'House Owner Job Status',
                accessor: 'status',
                Cell: ({ row }) => {
                    const statusArray = ['Pending', 'Completed', 'In-progress', 'Canceled'];
                    const currentStatus = row.original.houseOwnerAction;
                    const currentIndex = statusArray.indexOf(currentStatus);
                    const nextStatus = statusArray[(currentIndex + 1) % statusArray.length];

                    return (
                        <button
                            className={`px-3 py-1 rounded cursor-pointer bg-zinc-900 text-white`}
                            onClick={() => {
                                const updatedCustomers = [...jobs];
                                updatedCustomers[row.index].status = nextStatus;
                                setJobs(updatedCustomers);
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
                    const currentShovelStatus = row.original.shovelerAction;
                    const currentShovelIndex = statusArray.indexOf(currentShovelStatus);
                    const nextShovelStatus = statusArray[(currentShovelIndex + 1) % statusArray.length];

                    return (
                        <button
                            className={`px-3 py-1 rounded cursor-pointer bg-zinc-900 text-white`}
                            onClick={() => {
                                const updatedCustomers = [...jobs];
                                updatedCustomers[row.index].shovelStatus = nextShovelStatus;
                                setJobs(updatedCustomers);
                            }}
                        >
                            {currentShovelStatus}
                        </button>
                    );
                },
            },

            {
                Header: 'Type of Service', accessor: 'service',
                Cell: ({ row }) => (
                    <div>
                        {row.original.jobDetails.services[0]}
                    </div>
                ),
            },
            {
                Header: 'Price Offered', accessor: 'price',
                Cell: ({ row }) => (
                    <div>
                        {row.original.jobDetails.paymentInfo.amount / 100}
                    </div>
                ),
            },
            {
                Header: 'Payment Capture',
                accessor: 'payment',
                Cell: ({ row }) => (
                    <button onClick={() => handleManualCaptureClick(row)} className="bg-black text-white px-1 py-1 rounded-md">Capture</button>
                ),
            },
        ],
        [jobs]
    );

    const data = React.useMemo(() => {
        return jobs
            .filter((job) =>
                job.userDetails.userName.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .sort((a, b) => {
                // Convert dates to JavaScript Date objects (if not already)
                const dateA = new Date(a.userDetails.dateJoined);
                const dateB = new Date(b.userDetails.dateJoined);

                // Handle invalid date parsing
                if (isNaN(dateA) || isNaN(dateB)) {
                    return 0; // If either date is invalid, keep the order unchanged
                }

                // Sort by "Newest First" or "Oldest First"
                if (dateSortBy === 'Newest First') {
                    return dateB - dateA; // Newest dates first
                } else if (dateSortBy === 'Oldest First') {
                    return dateA - dateB; // Oldest dates first
                } else {
                    return 0; // If dateSortBy is not valid, don't change order
                }
            });
    }, [jobs, searchTerm, dateSortBy]);


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
            data: data,
            initialState: { pageIndex: 0, pageSize: 8 },
        },
        useSortBy,
        usePagination
    );

    const handlePageClick = (event) => {
        gotoPage(event.selected);
    };



    if (loading) {
        return <Loader />;
    }

    if (error) {
        return <p className="text-red-500">{error}</p>;
    }

    if (!jobs.length) {
        return <p>No jobs available</p>;
    }

    return (
        <section className="flex flex-col self-stretch py-9 mt-10 w-full bg-white rounded-[30px] shadow-[0px_10px_60px_rgba(226,236,249,0.5)] max-md:max-w-full">
            <div className="flex flex-col pr-0.5 pl-10 w-full max-md:pl-5 max-md:max-w-full">
                <div className="flex flex-wrap gap-24 justify-between max-w-full w-[914px]">
                    <div className="flex flex-col">
                        <h2 className="text-2xl font-semibold tracking-tight text-black">All Jobs</h2>
                        <div className="self-start mt-2 text-sm tracking-normal text-zinc-800">Active Jobs</div>
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
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </form>

                        {/* Status Sorting Field }
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
                        */}

                        {/* SignUp Date Sorting Field */}
                        <div className="flex gap-5 py-2.5 pl-4 rounded-xl bg-neutral-100">
                            <label htmlFor="signupDateSort" className="font-semibold text-zinc-700 flex justify-center items-center">Sort by:</label>
                            <select id="signupDateSort" className="bg-neutral-100 text-zinc-700 font-semibold rounded-lg px-2 py-1"
                                value={dateSortBy}
                                onChange={(e) => setDateSortBy(e.target.value)}
                            >
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
            {/* Use the reusable confirmation modal */}
            <ConfirmationModal
                showModal={showCancelModal}
                onClose={() => setShowCancelModal(false)}
                onConfirm={handleCapture}
                title="Capture Payment"
                message="Are you sure you want to capture the paymnent for this job?"
            />
        </section>


    );
}

export default CustomerTable;
