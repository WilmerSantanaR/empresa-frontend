import React from 'react';
import { RiEdit2Fill, RiShieldCheckLine } from "react-icons/ri";

const Profile = () => {
  return (
    <>
      {/* Perfil */}
      <div className='bg-secundary-100 p-8 rounded-xl mb-8'>
        <h1 className='text-xl text-gray-100'>Perfil</h1>
        <hr className='my-8 border-gray-500/30' />
        <form>
          <div className='flex items-center mb-8'>
            <div className='w-1/4'>
              <p>Avatar</p>
            </div>
            <div className='flex-1'>
              <div className='relative mb-2'>
                <img
                  src='https://img.freepik.com/foto-gratis/chico-joven-guapo-posando_176420-29922.jpg'
                  className='w-28 h-28 object-cover rounded-lg'
                  alt='Avatar'
                />
                <label
                  htmlFor='avatar'
                  className='absolute bg-secundary-100 p-2 rounded-full hover:cursor-pointer -top-2 left-24'
                >
                  <RiEdit2Fill />
                </label>
                <input type='file' id='avatar' className='hidden' />
              </div>
              <p className='text-gray-500 text-sm'>Solo se permite en formato .jpg, .png, jpeg.</p>
            </div>
          </div>

          <div className='flex items-center mb-8'>
            <div className='w-1/4'>
              <p>Nombre Completo: <span className='text-red-500'>*</span></p>
            </div>
            <div className='flex-1 flex items-center gap-4'>
              <div className='w-full'>
                <input
                  type='text'
                  className='w-full py-2 px-4 outline-none rounded-lg bg-secundary-900'
                  placeholder='Nombre(s)'
                />
              </div>
              <div className='w-full'>
                <input
                  type='text'
                  className='w-full py-2 px-4 outline-none rounded-lg bg-secundary-900'
                  placeholder='Apellido(s)'
                />
              </div>
            </div>
          </div>

          <div className='flex items-center mb-8'>
            <div className='w-1/4'>
              <p>Empresa: <span className='text-red-500'>*</span></p>
            </div>
            <div className='flex-1'>
              <div className='w-full'>
                <input
                  type='text'
                  className='w-full py-2 px-4 outline-none rounded-lg bg-secundary-900'
                />
              </div>
            </div>
          </div>

          <div className='flex items-center mb-8'>
            <div className='w-1/4'>
              <p>Teléfono de contacto: <span className='text-red-500'>*</span></p>
            </div>
            <div className='flex-1'>
              <div className='w-full'>
                <input
                  type='text'
                  className='w-full py-2 px-4 outline-none rounded-lg bg-secundary-900'
                />
              </div>
            </div>
          </div>

          <div className='flex items-center mb-8'>
            <div className='w-1/4'>
              <p>Sede: <span className='text-red-500'>*</span></p>
            </div>
            <div className='flex-1'>
              <div className='w-full'>
                <input
                  type='text'
                  className='w-full py-2 px-4 outline-none rounded-lg bg-secundary-900'
                />
              </div>
            </div>
          </div>

          <div className='flex items-center mb-8'>
            <div className='w-1/4'>
              <p>Ciudad: <span className='text-red-500'>*</span></p>
            </div>
            <div className='flex-1'>
              <select className='w-full py-2 px-4 outline-none rounded-lg bg-secundary-900 appearance-none'>
                <option value='Bogota'>Bogota</option>
                <option value='Madrid'>Madrid</option>
                <option value='Soacha'>Soacha</option>
                <option value='Facatativa' selected>Facatativa</option>
                <option value='Villeta'>Villeta</option>
                <option value='Medellin'>Medellin</option>
                <option value='Envigado'>Envigado</option>
                <option value='Itagui'>Itagui</option>
                <option value='Quibdo'>Quibdo</option>
                <option value='Cali'>Cali</option>
                <option value='Popayan'>Popayan</option>
                <option value='Pasto'>Pasto</option>
                <option value='Cartagena'>Cartagena</option>
                <option value='Barranquilla'>Barranquilla</option>
                <option value='Santa Marta'>Santa Marta</option>
                <option value='Armenia'>Armenia</option>
                <option value='Manizales'>Manizales</option>
                <option value='Pereira'>Pereira</option>
                <option value='Villavicencio'>Villavicencio</option>
                <option value='Yopal'>Yopal</option>
                <option value='Arauca'>Arauca</option>
                <option value='Tunja'>Tunja</option>
                <option value='Bucaramanga'>Bucaramanga</option>
                <option value='Barrancabermeja'>Barrancabermeja</option>
                <option value='Cucuta'>Cucuta</option>
              </select>
            </div>
          </div>
        </form>
        <hr className='my-8 border-gray-500/30' />
        <div className='flex justify-end'>
          <button className='bg-primary/80 text-black py-2 px-4 rounded-lg hover:bg-primary transition-colors'>
            Guardar
          </button>
        </div>
      </div>

      {/* Cambio Contraseña */}
      <div className='bg-secundary-100 p-8 rounded-xl'>
        <h1 className='text-xl text-gray-100'>Cambio de Credenciales</h1>
        <hr className='my-8 border-gray-500/30' />
        <form className='mb-8'>
          <div className='flex items-center justify-between'>
            <div>
                <h5 className='text-gray-100 text-xl mb-1'>Correo Electronico:</h5>
                <p className='text-gray-500 text-sm'>marcelo1@gmail.com</p>
            </div>
            <div>
                <button className='bg-secundary-900/50 py-3 px-4 rounded-lg hover:bg-secundary-900 hover:text-gray-100 transition-colors'>Cambiar Correo</button>
            </div>
          </div>
          <hr className='my-8 border-gray-500/30 border-dashed'/>
          <div className='flex items-center justify-between'>
            <div>
                <h5 className='text-gray-100 text-xl mb-1'>Contraseña:</h5>
                <p className='text-gray-500 text-sm'>*************</p>
            </div>
            <div>
                <button className='bg-secundary-900/50 py-3 px-4 rounded-lg hover:bg-secundary-900 hover:text-gray-100 transition-colors'>Cambiar Contraseña</button>
            </div>
          </div>
        </form>
        <div className='grid grid-cols-1 md:grid-cols-8 items-center bg-green-600/10 p-4 rounded-lg border border-dashed border-blue-600'>
            <div className='text-center'>
            <RiShieldCheckLine className='text-5xl text-green-600' />
            </div>
            <div className='col-span-6'>
                <h5 className='text-gray-100 text-xl mb-2'>Asegura Tu Cuenta:</h5>
                <p className='text-gray-500'>Activa la verificacion de dos factores para mejorar la seguridad de la cuenta.</p>
            </div>
            <div className='flex justify-center'>
                <button className='bg-green-600/70 hover:bg-green-600 transition-colors py-2 px-6 text-gray-200 rounded-lg'>Activar</button>
            </div>
        </div>
      </div>
      
    </>
  );
};

export default Profile;
