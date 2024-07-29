// src/components/ListProducts.js

import React, { useState, useEffect } from 'react';

// Simulación de datos de productos
const sampleProducts = [
    { id: 1, descripcion: 'Producto A', nombre: 'Nombre A', precio: 100, cantidad: 10, categoria: 'Categoría 1' },
    { id: 2, descripcion: 'Producto B', nombre: 'Nombre B', precio: 200, cantidad: 20, categoria: 'Categoría 2' },
    // Agrega más datos de productos según sea necesario
];

const ListProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Aquí podrías hacer una llamada a una API para obtener los datos
        // Por ahora, usamos los datos simulados
        setProducts(sampleProducts);
    }, []);

    return (
        <div className="p-8">
            <h1 className="text-xl font-semibold mb-4">Listado de Productos</h1>
            
            {/* Tabla de Productos */}
            <div>
                <h2 className="text-lg font-medium mb-2">Productos Disponibles</h2>
                <table className="min-w-full bg-black border border-gray-300 rounded-lg">
                    <thead className="bg-primary border-b border-gray-300">
                        <tr>
                            <th className="py-2 px-4 text-left">ID</th>
                            <th className="py-2 px-4 text-left">Descripción</th>
                            <th className="py-2 px-4 text-left">Nombre</th>
                            <th className="py-2 px-4 text-left">Precio</th>
                            <th className="py-2 px-4 text-left">Cantidad</th>
                            <th className="py-2 px-4 text-left">Categoría</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => (
                            <tr key={product.id}>
                                <td className="py-2 px-4 border-b">{product.id}</td>
                                <td className="py-2 px-4 border-b">{product.descripcion}</td>
                                <td className="py-2 px-4 border-b">{product.nombre}</td>
                                <td className="py-2 px-4 border-b">${product.precio}</td>
                                <td className="py-2 px-4 border-b">{product.cantidad}</td>
                                <td className="py-2 px-4 border-b">{product.categoria}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListProducts;
