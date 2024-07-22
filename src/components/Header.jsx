import React, { useState, useEffect } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import { Link, useNavigate } from 'react-router-dom';
import NotificationsMenu from './NotificationsMenu';

const Header = () => {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState([]);

  const handleLogout = () => {
    navigate('/auth');
  };

  useEffect(() => {
    // Aquí puedes hacer una llamada a una API para obtener las notificaciones
    const fetchNotifications = async () => {
      const newNotifications = [
        "Se ha agregado 10 unidades de la marca X",
        "Se ha eliminado el producto Y",
        "Nueva actualización de inventario disponible",
        "Se ha eliminado el producto a",
      ];
      setNotifications(newNotifications);
    };

    fetchNotifications();
  }, []);

  return (
    <header className="h-[7vh] md:h-[10vh] border-b border-secundary-900 p-8 flex items-center justify-end">
      <nav className="flex items-center gap-x-3">
        {/* Menú de Notificaciones */}
        <NotificationsMenu notifications={notifications} />

        {/* Menú de Usuario */}
        <Menu
          menuButton={
            <MenuButton className="flex items-center gap-x-2 hover:bg-secundary-100 py-2 px-4 rounded-lg">
              <img
                src="https://img.freepik.com/foto-gratis/primer-plano-joven-exitoso-sonriendo-camara-pie-traje-casual-contra-fondo-azul_1258-73370.jpg"
                className="w-6 h-6 object-cover rounded-full"
                alt="User Avatar"
              />
              <div>
                <span className="text-white">Marcelo Garcia</span> {/* Agregado text-white */}
                <RiArrowDropDownLine className="text-white" /> {/* Añadido text-white */}
              </div>
            </MenuButton>
          }
          transition
          menuClassName="bg-gray-800 text-white"
        >
          <MenuItem className="hover:bg-gray-700">
            <Link to="/perfil" className="flex items-center gap-x-2">
              <img
                src="https://img.freepik.com/foto-gratis/primer-plano-joven-exitoso-sonriendo-camara-pie-traje-casual-contra-fondo-azul_1258-73370.jpg"
                className="w-6 h-6 object-cover rounded-full"
                alt="User Avatar"
              />
              <div className="flex flex-col">
                <span>Marcelo Garcia</span>
                <span>marcelo1@gmail.com</span>
              </div>
            </Link>
          </MenuItem>
          <MenuItem className="hover:bg-gray-700">
            <Link to="/configuracion">Configuración</Link>
          </MenuItem>
          <MenuItem className="hover:bg-gray-700" onClick={handleLogout}>
            Salir
          </MenuItem>
        </Menu>
      </nav>
    </header>
  );
};

export default Header;
