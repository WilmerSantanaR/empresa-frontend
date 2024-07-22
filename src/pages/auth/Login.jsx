import React, { useState } from 'react';
import { RiMailFill, RiKeyLine } from "react-icons/ri";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { Link } from 'react-router-dom';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return ( 
    <div className="min-h-screen flex items-center justify-center p-4">

    <div className="bg-gray-800 p-8 rounded-xl shadow-xl w-auto lg:[450px]">
      <h1 className="text-3xl text-center uppercase font-bold tracking-[5px] text-white mb-8">Iniciar 
        <span className="text-primary">Sesión</span> </h1>
      <form>
        <button className='flex items-center justify-center py-3 px-4 gap-4 bg-secundary-900 w-full rounded-full mb-8 text-gray-100'>
          <img
            src="https://www.keyweo.com/wp-content/uploads/2022/03/el-logo-g-de-google.png"
            className='w-10 h-6'
            alt="Google Logo"
          />
          Ingresa con Google
        </button>
        <div className='relative mb-4'>
          <RiMailFill className='absolute top-1/2 transform -translate-y-1/2 left-1 bg-secundary-900' />
          <input
            type="email"
            className='py-2 pl-8 pr-4 bg-secundary-900 w-full outline-none rounded-lg text-white focus:border focus:border-primary'
            placeholder="Correo Electrónico"
          />
        </div>
        <div className='relative'>
          <RiKeyLine className='absolute top-1/2 transform -translate-y-1/2 left-1 bg-secundary-900 focus:border-primary' />
          <input
            type={showPassword ? "text" : "password"}
            className='py-2 pl-8 pr-12 bg-secundary-900 w-full outline-none rounded-lg text-white focus:border focus:border-primary'
            placeholder="Contraseña"
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 flex items-center px-3 focus:border focus:border-primary"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <LuEye /> : <LuEyeOff />}
          </button>
        </div>
        <div className="mt-12">
          <button type='submit' className="bg-primary text-white uppercase font-bold text-sm w-full py-3 px-4 rounded-lg hover:text-gray-100 transition-colors focus:border focus:border-primary">Ingresar</button>
        </div>
      </form>
      <div className="mt-4 text-white text-center">
        <span style={{ marginRight: '10px' }}>
          <Link to="/olvide-password" className="hover:text-primary transition-colors">¿Olvidaste tu contraseña?</Link>
        </span>
        <span>
          <Link to="/registro" className="text-primary hover:text-gray-100 transition-colors">Regístrate aquí</Link>
        </span>
      </div>
    </div>
    </div>
    
  );
}

export default Login;
