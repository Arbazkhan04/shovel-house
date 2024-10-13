import React, { useState, useEffect } from 'react';
import { useTable, usePagination, useSortBy } from 'react-table';
import ReactPaginate from 'react-paginate';
import { FaSearch, FaStar } from 'react-icons/fa'; // Import icons
import { allQueries, sendQueryResponse } from '../../../apiManager/admin/QueriesManagement.js';
import Loader from '../../../sharedComp/loader.jsx'
import Modal from './queryComponent.jsx'
import ReplyModal from './replyComponent.jsx'

function CustomerTable() {
    const [queries, setQueries] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState('');
    const [isReplyModalOpen, setIsReplyModalOpen] = useState(false);
    const [selectedQueryId, setSelectedQueryId] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');


    useEffect(() => {
        const getQueriesData = async () => {
            try {
                setLoading(true);
                const res = await allQueries();
                console.log(res)
                setQueries(res);
            } catch (error) {
                setError(error.message || "An error occurred while fetching data");
            } finally {
                setLoading(false);
            }
        }
        getQueriesData();
    }, []);

    const handleTitleClick = (content, queryId) => {
        setModalContent(content);
        setSelectedQueryId(queryId);
        setIsModalOpen(true);
    };

    const handleReplyClick = () => {
        setIsModalOpen(false);
        setIsReplyModalOpen(true);
    };

    const handleSubmitReply = async (replyText) => {
        if (!replyText.trim()) {
            alert("Reply can't be empty");
            return;
        }

        // Call your function to send the reply to the backend
        await sendQueryResponse(selectedQueryId, replyText);

        // Close the reply modal after submitting
        setIsReplyModalOpen(false);
        alert('Reply submitted successfully');
    };

    const columns = React.useMemo(
        () => [
            {
                Header: 'User Name',
                accessor: 'name',
                Cell: ({ row }) => (
                    <span className="text-left">{row.original.name}</span>
                ),

            },
            {
                Header: 'Title',
                accessor: 'title',
                Cell: ({ row }) => (
                    <span className="text-left"
                    onClick={() => handleTitleClick(row.original.query.query, row.original.query._id)}
                    >
                        {row.original.query.title}
                    </span>
                ),
            },
            {
                Header: 'Status',
                accessor: 'status',
                Cell: ({ row }) => {
                    const currentStatus = row.original.query.status;

                    const handleStatusChange = (newStatus) => {
                        const updatedCustomers = [...queries];
                        updatedCustomers[row.index].status = newStatus;
                        setQueries(updatedCustomers);
                    };

                    return (
                        <div className="flex space-x-2">
                            <button
                                className={`px-2 py-1 rounded bg-zinc-900 text-white`}
                            >
                                {row.original.query.status}
                            </button>
                        </div>
                    );
                },
            },
            {
                Header: 'Role',
                accessor: 'role',
                Cell: ({ row }) => (
                    <span className="text-left">{row.original.role}</span>
                ),
            },
            {
                Header: 'Enable Cancel',
                accessor: 'enable cancel',
                Cell: ({ row }) => (
                    <button className="bg-black text-white px-1 py-1 rounded-md">Enable</button>
                ),
            }
        ],
        [queries] // Include customers in dependencies to re-render on state change
    );

    const data = React.useMemo(() => {
        return queries
            .filter((query) =>
                query.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
    }, [queries, searchTerm]);

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

    if (!queries.length) {
        return <p>No queries available</p>;
    }

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return <p className="text-red-500">{error}</p>;
    }

    return (
        <section className="flex flex-col self-stretch py-9 mt-10 w-full bg-white rounded-[30px] shadow-[0px_10px_60px_rgba(226,236,249,0.5)] max-md:max-w-full">
            <div className="flex flex-col pr-0.5 pl-10 w-full max-md:pl-5 max-md:max-w-full">
                <div className="flex flex-wrap gap-24 justify-between max-w-full w-[914px]">
                    <div className="flex flex-col">
                        <h2 className="text-2xl font-semibold tracking-tight text-black">All Queries</h2>
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
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </form>

                        {/* Status Sorting Field */}
                        <div className="flex gap-3.5 px-3.5 py-2.5 rounded-xl bg-neutral-100">
                            <label htmlFor="statusSort" className="font-semibold text-zinc-700 flex justify-center items-center">Sort by:</label>
                            <select id="statusSort" className="bg-neutral-100 text-zinc-700 font-semibold rounded-lg px-2 py-1">
                                <option value="status">Status</option>
                                <option value="completed">Closed</option>
                                <option value="canceled">Open</option>
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

            {/* Modal component */}
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                content={modalContent}
                onReplyClick={handleReplyClick}
            />

            {/* Modal for replying to the query */}
            <ReplyModal
                isOpen={isReplyModalOpen}
                onClose={() => setIsReplyModalOpen(false)}
                onSubmitReply={handleSubmitReply}
            />

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
