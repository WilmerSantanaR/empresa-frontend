import React from 'react';
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import { PiBellSimpleRingingBold } from "react-icons/pi";
import { FaBell } from "react-icons/fa"; // Importa el ícono por defecto (ejemplo: campana sin notificaciones)

const NotificationsMenu = ({ notifications }) => {
  return (
    <Menu
      menuButton={
        <MenuButton className="relative">
          {notifications.length > 0 ? (
            <>
              <PiBellSimpleRingingBold /> {/* Ícono cuando hay notificaciones */}
              <span>
                {notifications.length}
              </span>
            </>
          ) : (
            <FaBell />
          )}
        </MenuButton>
      }
      transition
      menuClassName="bg-gray-800 text-white"
    >
      {notifications.length > 0 ? (
        notifications.map((notification, index) => (
          <MenuItem key={index} className="hover:bg-gray-700">
            {notification}
          </MenuItem>
        ))
      ) : (
        <MenuItem className="hover:bg-gray-700">No hay notificaciones</MenuItem>
      )}
    </Menu>
  );
};

export default NotificationsMenu;
