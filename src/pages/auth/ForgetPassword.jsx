import React, { useState } from 'react';
import { RiMailFill, RiKeyLine } from "react-icons/ri";


const ForgetPassword = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar las instrucciones de recuperación por correo electrónico
    console.log('Enviar instrucciones al correo electrónico');
    // También podrías redirigir o mostrar un mensaje de confirmación aquí
  };

  return (
    <div className="bg-gray-800 p-8 rounded-xl shadow-xl w-auto lg:w-[450px]">
      <h1 className="text-3xl text-center uppercase font-bold tracking-[5px] text-white mb-8">
        Recuperar <span className="text-primary">Contraseña</span>
      </h1>
      <form onSubmit={handleSubmit}>
        <div className='relative mb-4'>
          <RiMailFill className='absolute top-1/2 transform -translate-y-1/2 left-1 bg-secundary-900' />
          <input
            type="email"
            className='py-2 pl-8 pr-4 bg-secundary-900 w-full outline-none rounded-lg text-white focus:border focus:border-primary'
            placeholder="Correo Electrónico"
            required
          />
        </div>
        
        <div className="mt-12">
          <button type='submit' className="bg-primary text-white uppercase font-bold text-sm w-full py-3 px-4 rounded-lg hover:text-gray-100 transition-colors focus:border focus:border-primary">Enviar</button>
        </div>
      </form>
      {/* Mensaje de confirmación o redirección */}
      {/* <div className="mt-4 text-white text-center">
        Mensaje de confirmación o redirección después del envío
      </div> */}
    </div>
  );
}

export default ForgetPassword;
