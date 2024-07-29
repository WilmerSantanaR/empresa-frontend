import React, { useState, useEffect } from 'react';

// Simulación de datos de productos
const sampleProducts = [
    { id: 1, nombre: 'Producto A', descripcion: 'Descripción del Producto A', precio: 100, imagen: 'https://example.com/imagenA.jpg' },
    { id: 2, nombre: 'Producto B', descripcion: 'Descripción del Producto B', precio: 200, imagen: 'https://example.com/imagenB.jpg' },
    // Agrega más productos según sea necesario
];

const ProductCatalog = ({ onAddToCart }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Aquí podrías hacer una llamada a una API para obtener los datos
        // Por ahora, usamos los datos simulados
        setProducts(sampleProducts);
    }, []);

    const handleAddToCart = (product) => {
        // Implementar la lógica para agregar al carrito
        alert(`Producto ${product.nombre} agregado al carrito`);
    };

    return (
        <div className="p-8">
            <h1 className="text-xl font-semibold mb-4">Catálogo de Productos</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map(product => (
                    <div key={product.id} className="border border-gray-300 rounded-lg shadow-lg p-4">
                        <img src={product.imagen} alt={product.nombre} className="w-full h-48 object-cover mb-4" />
                        <h2 className="text-lg font-medium mb-2">{product.nombre}</h2>
                        <p className="text-white mb-2">{product.descripcion}</p>
                        <p className="text-xl font-semibold mb-4">${product.precio}</p>
                        <button
                            onClick={() => handleAddToCart(product)}
                            className="bg-primary text-white py-2 px-4 rounded hover:bg-blue-600"
                        >
                            Agregar al Carrito
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductCatalog;
