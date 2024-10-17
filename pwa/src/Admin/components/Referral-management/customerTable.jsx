import React, { useState, useEffect } from 'react';
import { useTable, usePagination, useSortBy } from 'react-table';
import ReactPaginate from 'react-paginate';
import { FaSearch } from 'react-icons/fa'; // Import icons
import Loader from '../../../sharedComp/loader.jsx'
import { allReferralShovelers, sendPaymentToReferer } from '../../../apiManager/admin/ReferralManagement.js';

function CustomerTable() {
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [referrals, setReferrals] = useState([]);


    useEffect(() => {
        const getReferralsData = async () => {
            try {
                setLoading(true);
                const res = await allReferralShovelers();
                if (res && res.error) {
                    setError(res.error);
                    return;
                }
                console.log(res)
                setReferrals(res.users);
            } catch (error) {
                setError(error.message || "An error occurred while fetching data");
            } finally {
                setLoading(false);
            }
        }
        getReferralsData();
    }, []);


    const handleSendMoney = async (userId) => {
        try {
            setLoading(true);
            const res = await sendPaymentToReferer(userId);
            if (res.error) {
                setError(res.error);
                return;
            }
            console.log(res)
            alert('Payment sent successfully')
            setReferrals(referrals.filter((referral) => referral._id !== userId))
        } catch (error) {
            setError(error.message || "An error occurred while sending payment");
        } finally {
            setLoading(false);
        }
    }
    

   

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
                Header: 'No. of Jobs',
                accessor: 'no of jobs',
                Cell: ({ row }) => (
                    <span className="text-left"
                    >
                        {row.original.jobCount}
                    </span>
                ),
            },
            {
                Header: 'Send Referer Money',
                accessor: 'send referer money',
                Cell: ({ row }) => (
                    <button
                        onClick={() => handleSendMoney(row.original._id)}
                        className="bg-black text-white px-1 py-1 rounded-md">Send Money</button>
                ),
            }
        ],
        [referrals] // Include customers in dependencies to re-render on state change
    );

    const data = React.useMemo(() => {
        return referrals ? referrals
            .filter((query) =>
                query.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            :
            [];
    }, [referrals, searchTerm]);

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

    if (!referrals || !referrals.length) {
        return <p>No Shovelers available with completed probation</p>;
    }

    return (
        <section className="flex flex-col self-stretch py-9 mt-10 w-full bg-white rounded-[30px] shadow-[0px_10px_60px_rgba(226,236,249,0.5)] max-md:max-w-full">
            <div className="flex flex-col pr-0.5 pl-10 w-full max-md:pl-5 max-md:max-w-full">
                <div className="flex flex-wrap gap-24 justify-between max-w-full w-[914px]">
                    <div className="flex flex-col">
                        <h2 className="text-2xl font-semibold tracking-tight text-black">All Referrals</h2>
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
