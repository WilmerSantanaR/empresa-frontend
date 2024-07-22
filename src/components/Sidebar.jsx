import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { RiBarChart2Line, RiUserLine, RiMailCheckFill, RiLogoutBoxLine, RiArrowRightSLine } from "react-icons/ri";
import { MdInventory } from "react-icons/md";

const Sidebar = () => {
  const [showSubMenu, setShowSubMenu] = useState({
    ventas: false,
    usuarios: false,
    productos: false,
    pqr: false
  });

  const [activeLink, setActiveLink] = useState(null);
  const location = useLocation();

  const toggleSubMenu = (menu) => {
    setShowSubMenu((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu]
    }));
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="xl:h-screen overflow-y-scroll fixed xl:static w-full h-full -left-full top-0 bg-secondary-100 p-4 flex flex-col justify-between">
      <div>
        <h1 className='text-center text-2xl font-bold text-white mb-10'>
          Admin<span className='text-primary text-4xl'>.</span>
        </h1>
        <ul>
          <li>
            <button 
              className={`w-full flex items-center justify-between py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors ${location.pathname.includes("/ventas") ? 'bg-secondary-900' : ''}`}
              onClick={() => toggleSubMenu('ventas')}
            >
              <span className="flex items-center gap-4">
                <RiBarChart2Line className='text-primary' />Ventas
              </span>
              <RiArrowRightSLine className={`mr-2 ${showSubMenu.ventas ? "rotate-90" : ""} transition-all`} />
            </button>
            <ul className={`my-2 ${!showSubMenu.ventas && "hidden"}`}>
              <li>
                <Link 
                  to="/ventas/ver" 
                  className={`py-2 px-4 ml-5 block relative before:w-3 before:h-3 before:absolute before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 ${activeLink === '/ventas/ver' ? 'text-primary' : ''}`}
                  onClick={() => handleLinkClick('/ventas/ver')}
                >
                  Ver Ventas
                </Link>
              </li>
              <li>
                <Link 
                  to="/ventas/top-productos" 
                  className={`py-2 px-4 border-l border-gray-500 ml-5 block relative before:w-3 before:h-3 before:absolute before:bg-gray-500 before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 ${activeLink === '/ventas/top-productos' ? 'text-primary' : ''}`}
                  onClick={() => handleLinkClick('/ventas/top-productos')}
                >
                  Top de Productos vendidos
                </Link>
              </li>
              <li>
                <Link 
                  to="/ventas/crear" 
                  className={`py-2 px-4 border-l border-gray-500 ml-5 block relative before:w-3 before:h-3 before:absolute before:bg-gray-500 before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 ${activeLink === '/ventas/crear' ? 'text-primary' : ''}`}
                  onClick={() => handleLinkClick('/ventas/crear')}
                >
                  Crear Venta
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <button 
              onClick={() => toggleSubMenu('usuarios')}
              className={`flex items-center justify-between py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors ${location.pathname.includes("/usuarios") ? 'bg-secondary-900' : ''}`}
            >
              <span className="flex items-center gap-4">
                <RiUserLine className='text-primary' />Usuarios
              </span>
              <RiArrowRightSLine className={`mr-2 ${showSubMenu.usuarios ? "rotate-90" : ""} transition-all`} />
            </button>
            <ul className={`my-2 ${!showSubMenu.usuarios && "hidden"}`}>
              <li>
                <Link 
                  to="/usuarios/administrar-roles" 
                  className={`py-2 px-4 border-l border-gray-500 ml-5 block relative before:w-3 before:h-3 before:absolute before:bg-gray-500 before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 ${activeLink === '/usuarios/administrar-roles' ? 'text-primary' : ''}`}
                  onClick={() => handleLinkClick('/usuarios/administrar-roles')}
                >
                  Administrar Roles
                </Link>
              </li>
              <li>
                <Link 
                  to="/usuarios/actualizar-datos" 
                  className={`py-2 px-4 border-l border-gray-500 ml-5 block relative before:w-3 before:h-3 before:absolute before:bg-gray-500 before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 ${activeLink === '/usuarios/actualizar-datos' ? 'text-primary' : ''}`}
                  onClick={() => handleLinkClick('/usuarios/actualizar-datos')}
                >
                  Actualizar Datos
                </Link>
              </li>
              <li>
                <Link 
                  to="/usuarios/listar" 
                  className={`py-2 px-4 border-l border-gray-500 ml-5 block relative before:w-3 before:h-3 before:absolute before:bg-gray-500 before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 ${activeLink === '/usuarios/listar' ? 'text-primary' : ''}`}
                  onClick={() => handleLinkClick('/usuarios/listar')}
                >
                  Listar Usuarios
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <button 
              onClick={() => toggleSubMenu('productos')}
              className={`flex items-center justify-between py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors ${location.pathname.includes("/productos") ? 'bg-secondary-900' : ''}`}
            >
              <span className="flex items-center gap-4">
                <MdInventory className='text-primary' />Productos
              </span>
              <RiArrowRightSLine className={`mr-2 ${showSubMenu.productos ? "rotate-90" : ""} transition-all`} />
            </button>
            <ul className={`my-2 ${!showSubMenu.productos && "hidden"}`}>
              <li>
                <Link 
                  to="/productos/ver" 
                  className={`py-2 px-4 border-l border-gray-500 ml-5 block relative before:w-3 before:h-3 before:absolute before:bg-gray-500 before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 ${activeLink === '/productos/ver' ? 'text-primary' : ''}`}
                  onClick={() => handleLinkClick('/productos/ver')}
                >
                  Ver Productos
                </Link>
              </li>
              <li>
                <Link 
                  to="/productos/ver-catalogo" 
                  className={`py-2 px-4 border-l border-gray-500 ml-5 block relative before:w-3 before:h-3 before:absolute before:bg-gray-500 before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 ${activeLink === '/productos/ver-catalogo' ? 'text-primary' : ''}`}
                  onClick={() => handleLinkClick('/productos/ver-catalogo')}
                >
                  Ver Catálogo
                </Link>
              </li>
              <li>
                <Link 
                  to="/productos/anadir-categoria" 
                  className={`py-2 px-4 border-l border-gray-500 ml-5 block relative before:w-3 before:h-3 before:absolute before:bg-gray-500 before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 ${activeLink === '/productos/anadir-categoria' ? 'text-primary' : ''}`}
                  onClick={() => handleLinkClick('/productos/anadir-categoria')}
                >
                  Añadir Categoría
                </Link>
              </li>
              <li>
                <Link 
                  to="/productos/actualizar-inventario" 
                  className={`py-2 px-4 border-l border-gray-500 ml-5 block relative before:w-3 before:h-3 before:absolute before:bg-gray-500 before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 ${activeLink === '/productos/actualizar-inventario' ? 'text-primary' : ''}`}
                  onClick={() => handleLinkClick('/productos/actualizar-inventario')}
                >
                  Actualizar Inventario
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <button 
              onClick={() => toggleSubMenu('pqr')}
              className={`flex items-center justify-between py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors ${location.pathname.includes("/pqr") ? 'bg-secondary-900' : ''}`}
            >
              <span className="flex items-center gap-4">
                <RiMailCheckFill className='text-primary' />PQR
              </span>
              <RiArrowRightSLine className={`mr-2 ${showSubMenu.pqr ? "rotate-90" : ""} transition-all`} />
            </button>
            <ul className={`my-2 ${!showSubMenu.pqr && "hidden"}`}>
              <li>
                <Link 
                  to="/pqr/ver" 
                  className={`py-2 px-4 border-l border-gray-500 ml-5 block relative before:w-3 before:h-3 before:absolute before:bg-gray-500 before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 ${activeLink === '/pqr/ver' ? 'text-primary' : ''}`}
                  onClick={() => handleLinkClick('/pqr/ver')}
                >
                  Ver PQR
                </Link>
              </li>
              <li>
                <Link 
                  to="/pqr/actualizar" 
                  className={`py-2 px-4 border-l border-gray-500 ml-5 block relative before:w-3 before:h-3 before:absolute before:bg-gray-500 before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 ${activeLink === '/pqr/actualizar' ? 'text-primary' : ''}`}
                  onClick={() => handleLinkClick('/pqr/actualizar')}
                >
                  Gestionar PQR
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
