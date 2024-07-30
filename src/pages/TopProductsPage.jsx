// src/pages/TopProductsPage.jsx

import React, { useState, useEffect } from 'react';
import { useTable } from 'react-table';
import { topProductsMock, topProductsByCategoryMock } from '../mockData'; // Verifica la ruta correcta

const TopProductsPage = () => {
  const [topProducts, setTopProducts] = useState([]);
  const [topProductsByCategory, setTopProductsByCategory] = useState({});

  useEffect(() => {
    // Simular la asignación de datos
    setTopProducts(topProductsMock);
    setTopProductsByCategory(topProductsByCategoryMock);
  }, []);

  // Configuración de la tabla para productos generales
  const columnsGeneral = React.useMemo(
    () => [
      { Header: 'Nombre del Producto', accessor: 'name' },
      { Header: 'Ventas', accessor: 'sales' },
    ],
    []
  );

  const dataGeneral = React.useMemo(() => topProducts, [topProducts]);

  // Configuración de la tabla para productos por categoría
  const columnsByCategory = React.useMemo(
    () => [
      { Header: 'Nombre del Producto', accessor: 'name' },
      { Header: 'Ventas', accessor: 'sales' },
    ],
    []
  );

  const dataByCategory = Object.entries(topProductsByCategory).map(([category, products]) => ({
    category,
    products,
  }));

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Productos Más Vendidos</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">General</h2>
        <Table columns={columnsGeneral} data={dataGeneral} />
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Por Categoría</h2>
        {dataByCategory.map(({ category, products }) => (
          <div key={category} className="mb-6">
            <h3 className="text-lg font-semibold mb-2">{category}</h3>
            <Table columns={columnsByCategory} data={products} />
          </div>
        ))}
      </section>
    </div>
  );
};

const Table = ({ columns, data }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

  return (
    <table {...getTableProps()} className="min-w-full divide-y divide-secundary-100">
      <thead className="bg-primary">
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th
                {...column.getHeaderProps()}
                className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider"
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()} className="bg-white divide-y divide-gray-200">
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => (
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
  );
};

export default TopProductsPage;
