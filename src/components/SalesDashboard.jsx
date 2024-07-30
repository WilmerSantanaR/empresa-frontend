// src/components/SalesDashboard.jsx
import React, { useMemo } from 'react';
import { useTable } from 'react-table';

const SalesDashboard = () => {
    const data = useMemo(() => [
        { product: 'Producto A', date: '2024-07-01', quantity: 10, amount: 100 },
        { product: 'Producto B', date: '2024-07-02', quantity: 15, amount: 150 },
    ], []);

    const columns = useMemo(() => [
        { Header: 'Producto', accessor: 'product' },
        { Header: 'Fecha', accessor: 'date' },
        { Header: 'Cantidad', accessor: 'quantity' },
        { Header: 'Monto', accessor: 'amount' }
    ], []);

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

    return (
        <div>
            <table {...getTableProps()} className='min-w-full bg-secundary-100 shadow-md rounded'>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th key={column.id} {...column.getHeaderProps()} className='p-3 border-b border-gray-300'>
                                    {column.render('Header')}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                        prepareRow(row);
                        return (
                            <tr key={row.id} {...row.getRowProps()}>
                                {row.cells.map(cell => (
                                    <td key={cell.column.id} {...cell.getCellProps()} className='p-3 border-b border-gray-300'>
                                        {cell.render('Cell')}
                                    </td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default SalesDashboard;
