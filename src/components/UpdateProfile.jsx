import React, { useState } from 'react';
import { RiEdit2Fill, RiShieldCheckLine } from "react-icons/ri";

const UpdateProfile = () => {
    const [profileData, setProfileData] = useState({
        fullName: 'Juan Pérez',
        company: 'Tech Solutions',
        phone: '123456789',
        branch: 'Main Office',
        city: 'Bogotá',
    });
    const [email, setEmail] = useState('juan.perez@example.com');
    const [password, setPassword] = useState('********');
    const [showForm, setShowForm] = useState(false); // Estado para mostrar el formulario completo
    const [documentNumber, setDocumentNumber] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfileData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para enviar los datos actualizados al backend
        console.log('Datos actualizados:', profileData);
    };

    const handleSearch = () => {
        // Aquí puedes agregar lógica para buscar el perfil con el número de documento
        setShowForm(true);
    };

    return (
        <>
            {/* Número de documento y botón de buscar */}
            {!showForm ? (
                <div className='bg-secundary-100 p-8 rounded-xl mb-8'>
                    <h1 className='text-xl text-gray-100'>Buscar Perfil</h1>
                    <hr className='my-8 border-gray-500/30' />
                    <div className='flex items-center mb-8'>
                        <div className='w-1/4'>
                            <p>Número de Documento:</p>
                        </div>
                        <div className='flex-1'>
                            <input
                                type='text'
                                value={documentNumber}
                                onChange={(e) => setDocumentNumber(e.target.value)}
                                className='w-full py-2 px-4 outline-none rounded-lg bg-secundary-900'
                                placeholder='Ingrese el número de documento'
                            />
                        </div>
                        <button
                            onClick={handleSearch}
                            className='ml-4 bg-primary/80 text-black py-2 px-4 rounded-lg hover:bg-primary transition-colors'
                        >
                            Buscar
                        </button>
                    </div>
                </div>
            ) : (
                // Mostrar formulario completo
                <div className='bg-secundary-100 p-8 rounded-xl mb-8'>
                    <h1 className='text-xl text-gray-100'>Actualizar Perfil</h1>
                    <hr className='my-8 border-gray-500/30' />
                    <form onSubmit={handleSubmit}>
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
                                        name='fullName'
                                        value={profileData.fullName}
                                        onChange={handleChange}
                                        className='w-full py-2 px-4 outline-none rounded-lg bg-secundary-900'
                                        placeholder='Nombre(s)'
                                        required
                                    />
                                </div>
                                <div className='w-full'>
                                    <input
                                        type='text'
                                        name='lastName'
                                        value={profileData.lastName}
                                        onChange={handleChange}
                                        className='w-full py-2 px-4 outline-none rounded-lg bg-secundary-900'
                                        placeholder='Apellido(s)'
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='flex items-center mb-8'>
                            <div className='w-1/4'>
                                <p>Empresa: <span className='text-red-500'>*</span></p>
                            </div>
                            <div className='flex-1'>
                                <input
                                    type='text'
                                    name='company'
                                    value={profileData.company}
                                    onChange={handleChange}
                                    className='w-full py-2 px-4 outline-none rounded-lg bg-secundary-900'
                                    required
                                />
                            </div>
                        </div>

                        <div className='flex items-center mb-8'>
                            <div className='w-1/4'>
                                <p>Teléfono de contacto: <span className='text-red-500'>*</span></p>
                            </div>
                            <div className='flex-1'>
                                <input
                                    type='text'
                                    name='phone'
                                    value={profileData.phone}
                                    onChange={handleChange}
                                    className='w-full py-2 px-4 outline-none rounded-lg bg-secundary-900'
                                    required
                                />
                            </div>
                        </div>

                        <div className='flex items-center mb-8'>
                            <div className='w-1/4'>
                                <p>Sede: <span className='text-red-500'>*</span></p>
                            </div>
                            <div className='flex-1'>
                                <input
                                    type='text'
                                    name='branch'
                                    value={profileData.branch}
                                    onChange={handleChange}
                                    className='w-full py-2 px-4 outline-none rounded-lg bg-secundary-900'
                                    required
                                />
                            </div>
                        </div>

                        <div className='flex items-center mb-8'>
                            <div className='w-1/4'>
                                <p>Ciudad: <span className='text-red-500'>*</span></p>
                            </div>
                            <div className='flex-1'>
                                <select
                                    name='city'
                                    value={profileData.city}
                                    onChange={handleChange}
                                    className='w-full py-2 px-4 outline-none rounded-lg bg-secundary-900 appearance-none'
                                    required
                                >
                                    <option value='Bogotá'>Bogotá</option>
                                    <option value='Madrid'>Madrid</option>
                                    <option value='Soacha'>Soacha</option>
                                    {/* Añadir más opciones según sea necesario */}
                                </select>
                            </div>
                        </div>

                        <hr className='my-8 border-gray-500/30' />
                        <div className='flex justify-end'>
                            <button type='submit' className='bg-primary/80 text-black py-2 px-4 rounded-lg hover:bg-primary transition-colors'>
                                Guardar
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {/* Cambio Contraseña */}
            <div className='bg-secundary-100 p-8 rounded-xl'>
                <h1 className='text-xl text-gray-100'>Cambio de Credenciales</h1>
                <hr className='my-8 border-gray-500/30' />
                <form className='mb-8'>
                    <div className='flex items-center justify-between'>
                        <div>
                            <h5 className='text-gray-100 text-xl mb-1'>Correo Electrónico:</h5>
                            <p className='text-gray-500 text-sm'>{email}</p>
                        </div>
                        <div>
                            <button className='bg-secundary-900/50 py-3 px-4 rounded-lg hover:bg-secundary-900 hover:text-gray-100 transition-colors'>
                                Cambiar Correo
                            </button>
                        </div>
                    </div>
                    <hr className='my-8 border-gray-500/30 border-dashed' />
                    <div className='flex items-center justify-between'>
                        <div>
                            <h5 className='text-gray-100 text-xl mb-1'>Contraseña:</h5>
                            <p className='text-gray-500 text-sm'>{password}</p>
                        </div>
                        <div>
                            <button className='bg-secundary-900/50 py-3 px-4 rounded-lg hover:bg-secundary-900 hover:text-gray-100 transition-colors'>
                                Cambiar Contraseña
                            </button>
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

export default UpdateProfile;
