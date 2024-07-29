import React, { useState, useEffect } from 'react';

// Simulación de datos
const sampleUsers = [
    { id: 1, name: 'Juan Pérez', email: 'juan.perez@example.com', phone: '123456789' },
    { id: 2, name: 'Ana Martínez', email: 'ana.martinez@example.com', phone: '987654321' },
    // Agrega más datos de usuarios según sea necesario
];

const sampleClients = [
    { id: 1, company: 'Tech Solutions', contact: 'Juan Pérez', city: 'Bogotá' },
    { id: 2, company: 'Innovatech', contact: 'Ana Martínez', city: 'Madrid' },
    // Agrega más datos de clientes según sea necesario
];

const ListUsers = () => {
    const [users, setUsers] = useState([]);
    const [clients, setClients] = useState([]);

    useEffect(() => {
        // Aquí podrías hacer una llamada a una API para obtener los datos
        // Por ahora, usamos los datos simulados
        setUsers(sampleUsers);
        setClients(sampleClients);
    }, []);

    return (
        <div className="p-8">
            <h1 className="text-xl font-semibold mb-4">Listado de Usuarios</h1>
            
            {/* Tabla de Usuarios */}
            <div className="mb-8">
                <h2 className="text-lg font-medium mb-2">Usuarios Registrados</h2>
                <table className="min-w-full bg-black border border-gray-300 rounded-lg">
                    <thead className="bg-primary border-b border-gray-300">
                        <tr>
                            <th className="py-2 px-4 text-left">ID</th>
                            <th className="py-2 px-4 text-left">Nombre</th>
                            <th className="py-2 px-4 text-left">Correo Electrónico</th>
                            <th className="py-2 px-4 text-left">Teléfono</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id}>
                                <td className="py-2 px-4 border-b">{user.id}</td>
                                <td className="py-2 px-4 border-b">{user.name}</td>
                                <td className="py-2 px-4 border-b">{user.email}</td>
                                <td className="py-2 px-4 border-b">{user.phone}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Tabla de Clientes */}
            <div>
                <h2 className="text-lg font-medium mb-2">Datos de Clientes</h2>
                <table className="min-w-full bg-black border border-black-300 rounded-lg">
                    <thead className="bg-primary border border-gray-300">
                        <tr>
                            <th className="py-2 px-4 text-left">ID</th>
                            <th className="py-2 px-4 text-left">Empresa</th>
                            <th className="py-2 px-4 text-left">Contacto</th>
                            <th className="py-2 px-4 text-left">Ciudad</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clients.map(client => (
                            <tr key={client.id}>
                                <td className="py-2 px-4 border-b">{client.id}</td>
                                <td className="py-2 px-4 border-b">{client.company}</td>
                                <td className="py-2 px-4 border-b">{client.contact}</td>
                                <td className="py-2 px-4 border-b">{client.city}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListUsers;
