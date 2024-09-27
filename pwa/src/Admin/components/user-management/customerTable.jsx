import React, { useState, useMemo } from 'react';
import { FaStar, FaSearch } from 'react-icons/fa';
import { useTable, useSortBy } from 'react-table';

function CustomerTable() {
    const [sortBy, setSortBy] = useState('Status');
    const [selectedStatus, setSelectedStatus] = useState({});

    // Dummy data for table rows
    const customers = [
        { name: 'Jane Cooper', address: '56/11-A', phone: '(225) 555-0118', email: 'jane@microsoft.com', signUpDate: '12/4/2024', status: 'Active', rating: 4, avgPrice: '$200', servicesPrice: '$150', cancelledServices: 2, receivedPayments: '$500' },
        { name: 'Floyd Miles', address: '56/11-A', phone: '(205) 555-0100', email: 'floyd@yahoo.com', signUpDate: '08/04/2024', status: 'Inactive', rating: 3, avgPrice: '$180', servicesPrice: '$120', cancelledServices: 1, receivedPayments: '$400' },
        { name: 'Ronald Richards', address: '56/11-A', phone: '(302) 555-0107', email: 'ronald@adobe.com', signUpDate: '20/05/2024', status: 'Inactive', rating: 5, avgPrice: '$220', servicesPrice: '$160', cancelledServices: 0, receivedPayments: '$600' },
        { name: 'Marvin McKinney', address: '56/11-A', phone: '(252) 555-0126', email: 'marvin@tesla.com', signUpDate: '28/05/2024', status: 'Active', rating: 4, avgPrice: '$210', servicesPrice: '$140', cancelledServices: 1, receivedPayments: '$450' },
        { name: 'Jerome Bell', address: '56/11-A', phone: '(629) 555-0129', email: 'jerome@google.com', signUpDate: '09/06/2024', status: 'Active', rating: 4, avgPrice: '$230', servicesPrice: '$170', cancelledServices: 0, receivedPayments: '$700' },
        { name: 'Kathryn Murphy', address: '56/11-A', phone: '(406) 555-0120', email: 'kathryn@microsoft.com', signUpDate: '17/06/2024', status: 'Active', rating: 3, avgPrice: '$190', servicesPrice: '$130', cancelledServices: 2, receivedPayments: '$300' },
        { name: 'Jacob Jones', address: '56/11-A', phone: '(208) 555-0112', email: 'jacob@yahoo.com', signUpDate: '20/07/2024', status: 'Active', rating: 5, avgPrice: '$240', servicesPrice: '$180', cancelledServices: 1, receivedPayments: '$550' },
        { name: 'Kristin Watson', address: '56/11-A', phone: '(704) 555-0127', email: 'kristin@facebook.com', signUpDate: '29/07/2024', status: 'Inactive', rating: 4, avgPrice: '$200', servicesPrice: '$150', cancelledServices: 0, receivedPayments: '$400' },
        { name: 'Kristin Watson', address: '56/11-A', phone: '(704) 555-0127', email: 'kristin@facebook.com', signUpDate: '29/07/2024', status: 'Inactive', rating: 4, avgPrice: '$200', servicesPrice: '$150', cancelledServices: 0, receivedPayments: '$400' },
        { name: 'Kristin Watson', address: '56/11-A', phone: '(704) 555-0127', email: 'kristin@facebook.com', signUpDate: '29/07/2024', status: 'Inactive', rating: 4, avgPrice: '$200', servicesPrice: '$150', cancelledServices: 0, receivedPayments: '$400' },
        { name: 'Kristin Watson', address: '56/11-A', phone: '(704) 555-0127', email: 'kristin@facebook.com', signUpDate: '29/07/2024', status: 'Inactive', rating: 4, avgPrice: '$200', servicesPrice: '$150', cancelledServices: 0, receivedPayments: '$400' },
        { name: 'Kristin Watson', address: '56/11-A', phone: '(704) 555-0127', email: 'kristin@facebook.com', signUpDate: '29/07/2024', status: 'Inactive', rating: 4, avgPrice: '$200', servicesPrice: '$150', cancelledServices: 0, receivedPayments: '$400' },
        { name: 'Kristin Watson', address: '56/11-A', phone: '(704) 555-0127', email: 'kristin@facebook.com', signUpDate: '29/07/2024', status: 'Inactive', rating: 4, avgPrice: '$200', servicesPrice: '$150', cancelledServices: 0, receivedPayments: '$400' },
        { name: 'Kristin Watson', address: '56/11-A', phone: '(704) 555-0127', email: 'kristin@facebook.com', signUpDate: '29/07/2024', status: 'Inactive', rating: 4, avgPrice: '$200', servicesPrice: '$150', cancelledServices: 0, receivedPayments: '$400' },
        { name: 'Kristin Watson', address: '56/11-A', phone: '(704) 555-0127', email: 'kristin@facebook.com', signUpDate: '29/07/2024', status: 'Inactive', rating: 4, avgPrice: '$200', servicesPrice: '$150', cancelledServices: 0, receivedPayments: '$400' },
        { name: 'Kristin Watson', address: '56/11-A', phone: '(704) 555-0127', email: 'kristin@facebook.com', signUpDate: '29/07/2024', status: 'Inactive', rating: 4, avgPrice: '$200', servicesPrice: '$150', cancelledServices: 0, receivedPayments: '$400' },
        { name: 'Kristin Watson', address: '56/11-A', phone: '(704) 555-0127', email: 'kristin@facebook.com', signUpDate: '29/07/2024', status: 'Inactive', rating: 4, avgPrice: '$200', servicesPrice: '$150', cancelledServices: 0, receivedPayments: '$400' },
        { name: 'Kristin Watson', address: '56/11-A', phone: '(704) 555-0127', email: 'kristin@facebook.com', signUpDate: '29/07/2024', status: 'Inactive', rating: 4, avgPrice: '$200', servicesPrice: '$150', cancelledServices: 0, receivedPayments: '$400' },
        { name: 'Kristin Watson', address: '56/11-A', phone: '(704) 555-0127', email: 'kristin@facebook.com', signUpDate: '29/07/2024', status: 'Inactive', rating: 4, avgPrice: '$200', servicesPrice: '$150', cancelledServices: 0, receivedPayments: '$400' },
        { name: 'Kristin Watson', address: '56/11-A', phone: '(704) 555-0127', email: 'kristin@facebook.com', signUpDate: '29/07/2024', status: 'Inactive', rating: 4, avgPrice: '$200', servicesPrice: '$150', cancelledServices: 0, receivedPayments: '$400' },
        { name: 'Kristin Watson', address: '56/11-A', phone: '(704) 555-0127', email: 'kristin@facebook.com', signUpDate: '29/07/2024', status: 'Inactive', rating: 4, avgPrice: '$200', servicesPrice: '$150', cancelledServices: 0, receivedPayments: '$400' },
        { name: 'Kristin Watson', address: '56/11-A', phone: '(704) 555-0127', email: 'kristin@facebook.com', signUpDate: '29/07/2024', status: 'Inactive', rating: 4, avgPrice: '$200', servicesPrice: '$150', cancelledServices: 0, receivedPayments: '$400' },
        { name: 'Kristin Watson', address: '56/11-A', phone: '(704) 555-0127', email: 'kristin@facebook.com', signUpDate: '29/07/2024', status: 'Inactive', rating: 4, avgPrice: '$200', servicesPrice: '$150', cancelledServices: 0, receivedPayments: '$400' },
    ];

    // Function to render stars based on customer rating
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

    // Define columns using useMemo
    const columns = useMemo(() => [
        {
            Header: 'User Name',
            accessor: 'name', // accessor is the key of the data
            Cell: ({ row }) => (
                <div>
                    {row.original.name}
                    {renderStars(row.original.rating)}
                </div>
            ),
        },
        {
            Header: 'Address',
            accessor: 'address',
        },
        {
            Header: 'Phone Number',
            accessor: 'phone',
        },
        {
            Header: 'Email',
            accessor: 'email',
        },
        {
            Header: 'Sign Up Date',
            accessor: 'signUpDate',
        },
        {
            Header: 'Status',
            accessor: 'status',
            Cell: ({ row }) => (
                <select
                    className={`px-3 py-1 rounded ${selectedStatus[row.index] === 'Active' || row.original.status === 'Active'
                        ? 'bg-black text-white'
                        : 'bg-gray-300 text-black'
                        }`}
                    value={selectedStatus[row.index] || row.original.status}
                    onChange={(e) => handleStatusChange(row.index, e.target.value)}
                >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                </select>
            ),
        },
        {
            Header: 'Average Price',
            accessor: 'avgPrice',
        },
        {
            Header: 'Services Price',
            accessor: 'servicesPrice',
        },
        {
            Header: 'Cancelled Services',
            accessor: 'cancelledServices',
        },
        {
            Header: 'Received Payments',
            accessor: 'receivedPayments',
        },
    ], [selectedStatus]);

    const data = useMemo(() => customers, []);

    // Use react-table hook to set up the table
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data }, useSortBy);

    const handleStatusChange = (index, value) => {
        setSelectedStatus((prevStatus) => ({
            ...prevStatus,
            [index]: value,
        }));
    };

    return (
        <div className="p-6">
            <div className="flex justify-between items-center my-10 gap-x-28">
                <div>
                    <h2 className="text-xl font-bold">All Customers</h2>
                    <p className="text-gray-500">Active Members</p>
                </div>
                <div className="flex gap-4 w-[80%]">
                    <div className="relative w-[35%]">
                        <input
                            type="text"
                            placeholder="Search"
                            id="gsearch"
                            name="gsearch"
                            className="w-full border bg-gray-100 border-gray-300 rounded-md px-10 py-2"
                        />
                        <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
                    </div>

                    <select
                        className="border border-gray-300 rounded-md px-4 "
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                    >
                        <option value="Status">Sort by: Status</option>
                        <option value="SignUpDate">Sort by: SignUp Date</option>
                    </select>

                    <select
                        className="border border-gray-300 rounded-md px-4 "
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                    >
                        <option value="Status">Sort by: Status</option>
                        <option value="SignUpDate">Sort by: SignUp Date</option>
                    </select>
                </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table {...getTableProps()} className="min-w-[1200px] w-full">
                    <thead>
                        {headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()} className="bg-white">
                                {headerGroup.headers.map(column => (
                                    <th {...column.getHeaderProps(column.getSortByToggleProps())} className="px-4 py-2 text-left">
                                        {column.render('Header')}
                                        <span>
                                            {column.isSorted
                                                ? column.isSortedDesc
                                                    ? ' 🔽'
                                                    : ' 🔼'
                                                : ''}
                                        </span>
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {rows.map(row => {
                            prepareRow(row);
                            return (
                                <tr {...row.getRowProps()} className="border-b">
                                    {row.cells.map(cell => (
                                        <td {...cell.getCellProps()} className="px-4 py-2">
                                            {cell.render('Cell')}
                                        </td>
                                    ))}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-between items-center py-4 text-sm">
                <div>Showing data 1 to 8 of 256K entries</div>
                <div className="flex gap-2">
                    <button className="px-3 py-1 border border-gray-300 rounded-md">1</button>
                    <button className="px-3 py-1 border border-gray-300 rounded-md bg-black text-white">2</button>
                    <button className="px-3 py-1 border border-gray-300 rounded-md">3</button>
                    <button className="px-3 py-1 border border-gray-300 rounded-md">...</button>
                </div>
            </div>
        </div>
    );
}

export default CustomerTable;
