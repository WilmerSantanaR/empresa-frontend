import React, { useState } from 'react';
import { FaUser, FaEdit } from 'react-icons/fa';
import { RiMailFill } from 'react-icons/ri';

const roles = ['Administrador', 'Vendedor', 'Cliente'];

const AdminRoles = () => {
  const [users, setUsers] = useState([
    { id: 1, username: 'juan123', email: 'juan@example.com', role: 'Administrador' },
    { id: 2, username: 'maria456', email: 'maria@example.com', role: 'Vendedor' },
    { id: 3, username: 'pedro789', email: 'pedro@example.com', role: 'Cliente' },
  ]);

  const [editUserId, setEditUserId] = useState(null);
  const [newRole, setNewRole] = useState('');

  const handleRoleChange = (userId) => {
    setEditUserId(userId);
    const user = users.find(u => u.id === userId);
    setNewRole(user.role);
  };

  const handleSaveRole = () => {
    setUsers(users.map(user =>
      user.id === editUserId ? { ...user, role: newRole } : user
    ));
    setEditUserId(null);
    setNewRole('');
  };

  const handleCancelEdit = () => {
    setEditUserId(null);
    setNewRole('');
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-4">
      <div className="bg-gray-800 p-8 rounded-xl shadow-xl w-full lg:w-[650px]">
        <h1 className="text-3xl text-center uppercase font-bold tracking-[5px] text-white mb-8">
          Administrar <span className="text-primary">Roles</span>
        </h1>
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Nombre de Usuario</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Correo Electrónico</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Rol</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Acciones</th>
            </tr>
          </thead>
          <tbody className="bg-gray-800 divide-y divide-gray-700">
            {users.map(user => (
              <tr key={user.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                  <FaUser className="inline-block mr-2" />
                  {user.username}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                  <RiMailFill className="inline-block mr-2" />
                  {user.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                  {editUserId === user.id ? (
                    <select
                      value={newRole}
                      onChange={(e) => setNewRole(e.target.value)}
                      className="bg-gray-700 text-white py-1 px-2 rounded-lg"
                    >
                      {roles.map(role => (
                        <option key={role} value={role}>
                          {role}
                        </option>
                      ))}
                    </select>
                  ) : (
                    user.role
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  {editUserId === user.id ? (
                    <>
                      <button
                        onClick={handleSaveRole}
                        className="bg-green-500 text-white py-1 px-2 rounded-lg mr-2"
                      >
                        Guardar
                      </button>
                      <button
                        onClick={handleCancelEdit}
                        className="bg-red-500 text-white py-1 px-2 rounded-lg"
                      >
                        Cancelar
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => handleRoleChange(user.id)}
                      className="bg-blue-500 text-white py-1 px-2 rounded-lg"
                    >
                      Editar
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-6 text-center">
          <a href="/" className="text-primary hover:text-gray-100 transition-colors">
            Volver a la página principal
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdminRoles;
