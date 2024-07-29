import React from 'react';
import { RiShieldCheckLine } from "react-icons/ri";

const Profile = () => {
    return (
        <>
            {/* Perfil */}
            <div className='bg-secundary-100 p-8 rounded-xl mb-8'>
                <h1 className='text-xl text-gray-100'>Perfil</h1>
                <hr className='my-8 border-gray-500/30' />
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
                        </div>
                        <p className='text-gray-500 text-sm'>Solo se permite en formato .jpg, .png, jpeg.</p>
                    </div>
                </div>

                <div className='flex items-center mb-8'>
                    <div className='w-1/4'>
                        <p>Nombre Completo:</p>
                    </div>
                    <div className='flex-1 flex items-center gap-4'>
                        <div className='w-full'>
                            <p className='w-full py-2 px-4 bg-secundary-900 rounded-lg'>Juan Pérez</p>
                        </div>
                    </div>
                </div>

                <div className='flex items-center mb-8'>
                    <div className='w-1/4'>
                        <p>Empresa:</p>
                    </div>
                    <div className='flex-1'>
                        <p className='w-full py-2 px-4 bg-secundary-900 rounded-lg'>Tech Solutions</p>
                    </div>
                </div>

                <div className='flex items-center mb-8'>
                    <div className='w-1/4'>
                        <p>Teléfono de contacto:</p>
                    </div>
                    <div className='flex-1'>
                        <p className='w-full py-2 px-4 bg-secundary-900 rounded-lg'>123456789</p>
                    </div>
                </div>

                <div className='flex items-center mb-8'>
                    <div className='w-1/4'>
                        <p>Sede:</p>
                    </div>
                    <div className='flex-1'>
                        <p className='w-full py-2 px-4 bg-secundary-900 rounded-lg'>Main Office</p>
                    </div>
                </div>

                <div className='flex items-center mb-8'>
                    <div className='w-1/4'>
                        <p>Ciudad:</p>
                    </div>
                    <div className='flex-1'>
                        <p className='w-full py-2 px-4 bg-secundary-900 rounded-lg'>Bogotá</p>
                    </div>
                </div>
            </div>

            {/* Cambio Contraseña */}
            <div className='bg-secundary-100 p-8 rounded-xl'>
                <h1 className='text-xl text-gray-100'>Cambio de Credenciales</h1>
                <hr className='my-8 border-gray-500/30' />
                <form className='mb-8'>
                    <div className='flex items-center justify-between'>
                        <div>
                            <h5 className='text-gray-100 text-xl mb-1'>Correo Electrónico:</h5>
                            <p className='text-gray-500 text-sm'>juan.perez@example.com</p>
                        </div>
                        <div>
                            <button className='bg-secundary-900/50 py-3 px-4 rounded-lg hover:bg-secundary-900 hover:text-gray-100 transition-colors' disabled>Cambiar Correo</button>
                        </div>
                    </div>
                    <hr className='my-8 border-gray-500/30 border-dashed' />
                    <div className='flex items-center justify-between'>
                        <div>
                            <h5 className='text-gray-100 text-xl mb-1'>Contraseña:</h5>
                            <p className='text-gray-500 text-sm'>********</p>
                        </div>
                        <div>
                            <button className='bg-secundary-900/50 py-3 px-4 rounded-lg hover:bg-secundary-900 hover:text-gray-100 transition-colors' disabled>Cambiar Contraseña</button>
                        </div>
                    </div>
                </form>
                <div className='grid grid-cols-1 md:grid-cols-8 items-center bg-green-600/10 p-4 rounded-lg border border-dashed border-blue-600'>
                    <div className='text-center'>
                        <RiShieldCheckLine className='text-5xl text-green-600' />
                    </div>
                    <div className='col-span-6'>
                        <h5 className='text-gray-100 text-xl mb-2'>Asegura Tu Cuenta:</h5>
                        <p className='text-gray-500'>Activa la verificación de dos factores para mejorar la seguridad de la cuenta.</p>
                    </div>
                    <div className='flex justify-center'>
                        <button className='bg-green-600/70 hover:bg-green-600 transition-colors py-2 px-6 text-gray-200 rounded-lg'>
                            Activar
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile
