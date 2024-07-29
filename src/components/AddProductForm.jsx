import React, { useState } from 'react';

const AddProductForm = ({ onAddProduct }) => {
    const [form, setForm] = useState({
        nombre: '',
        descripcion: '',
        precio: '',
        cantidad: '',
        categoria: '',
        imagen: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddProduct(form);
        // Limpiar formulario después de enviar
        setForm({
            nombre: '',
            descripcion: '',
            precio: '',
            cantidad: '',
            categoria: '',
            imagen: ''
        });
    };

    return (
        <form onSubmit={handleSubmit} className="p-8 bg-secundary-100 shadow-lg rounded-lg">
            <h1 className="text-xl font-semibold mb-4">Añadir Nuevo Producto</h1>
            <div className="mb-4">
                <label className="block text-white mb-2">Nombre:</label>
                <input
                    type="text"
                    name="nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    className="border border-black rounded-lg w-full p-2 text-black" // Añadida clase text-black
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-white mb-2">Descripción:</label>
                <textarea
                    name="descripcion"
                    value={form.descripcion}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg w-full p-2 text-black" // Añadida clase text-black
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-white mb-2">Precio:</label>
                <input
                    type="number"
                    name="precio"
                    value={form.precio}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg w-full p-2 text-black" // Añadida clase text-black
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-white mb-2">Cantidad:</label>
                <input
                    type="number"
                    name="cantidad"
                    value={form.cantidad}
                    onChange={handleChange}
                    className="border border-blue-600 rounded-lg w-full p-2 text-black" // Añadida clase text-black
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-white mb-2">Categoría:</label>
                <input
                    type="text"
                    name="categoria"
                    value={form.categoria}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg w-full p-2 text-black" // Añadida clase text-black
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-white mb-2">Imagen URL:</label>
                <input
                    type="text"
                    name="imagen"
                    value={form.imagen}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg w-full p-2 text-black" // Añadida clase text-black
                    required
                />
            </div>
            <button
                type="submit"
                className="bg-primary text-white py-2 px-4 rounded hover:bg-blue-600"
            >
                Añadir Producto
            </button>
        </form>
    );
};

export default AddProductForm;
