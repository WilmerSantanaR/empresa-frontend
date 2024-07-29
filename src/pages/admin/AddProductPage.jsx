// src/pages/admin/AddProductPage.js

import React from 'react';
import AddProductForm from '../../components/AddProductForm'; // Asegúrate de que esta ruta sea correcta

const AddProductPage = () => {
    const handleAddProduct = (product) => {
        // Aquí podrías hacer una llamada a una API para guardar el producto
        console.log('Producto añadido:', product);
    };

    return (
        <div className="p-8">
            <AddProductForm onAddProduct={handleAddProduct} />
        </div>
    );
};

export default AddProductPage;
