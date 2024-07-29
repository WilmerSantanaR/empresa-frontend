import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { RiEdit2Fill, RiShieldCheckLine } from "react-icons/ri";

const ActualizarPQR = () => {
    const { id } = useParams(); // Obtiene el parámetro ID de la URL
    const [pqr, setPqr] = useState(null);

    // Simulación de carga de datos de la PQR específica
    useEffect(() => {
        const obtenerPQR = async () => {
            try {
                // Lógica para obtener los detalles de la PQR con el ID `id`
                // Simulación de datos de PQR
                const pqrData = {
                    id: id,
                    tipo: 'Reclamo',
                    detalle: 'No he recibido el reembolso de mi pedido cancelado.',
                    adjuntos: ['comprobante.pdf'],
                    estado: 'Pendiente',
                    respuesta: '',
                    fechaRespuesta: ''
                };
                setPqr(pqrData);
            } catch (error) {
                console.error('Error al obtener la PQR:', error);
            }
        };

        obtenerPQR();
    }, [id]);

    // Función para manejar la respuesta de la PQR
    const handleResponderPQR = () => {
        // Lógica para enviar la respuesta de la PQR (por ejemplo, a través de una API)
        // Actualización del estado de la PQR después de responder
        setPqr({
            ...pqr,
            estado: 'Resuelto',
            respuesta: 'Hemos procesado su solicitud y el reembolso ha sido emitido correctamente.',
            fechaRespuesta: new Date().toLocaleDateString()
        });
        // Aquí podrías redirigir al usuario a otra página o mostrar un mensaje de éxito
    };

    if (!pqr) {
        return <p>Cargando...</p>;
    }

    return (
        <>
            {/* Detalles de la PQR */}
            <div className='bg-secundary-100 p-8 rounded-xl mb-8'>
                <h1 className='text-xl text-gray-100'>Actualizar PQR</h1>
                <hr className='my-8 border-gray-500/30' />
                <div>
                    <h2 className='text-lg text-gray-100'>{pqr.tipo}</h2>
                    <p className='text-gray-500'>{pqr.detalle}</p>
                    <div className='flex items-center mt-2'>
                        <div className='mr-4'>
                            <h3 className='text-gray-100'>Adjuntos:</h3>
                            <ul className='list-disc list-inside text-gray-500'>
                                {pqr.adjuntos.map((adjunto, index) => (
                                    <li key={index}>{adjunto}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className='text-gray-100'>Estado:</h3>
                            <p className='text-gray-500'>{pqr.estado}</p>
                        </div>
                    </div>
                    <hr className='my-4 border-gray-500/30' />

                    {/* Formulario de respuesta */}
                    <form className='mb-8'>
                        <div className='mb-4'>
                            <label htmlFor='respuesta' className='text-gray-100 block mb-2'>Respuesta:</label>
                            <textarea
                                id='respuesta'
                                rows='4'
                                className='w-full py-2 px-4 outline-none rounded-lg bg-secundary-900'
                                placeholder='Escribe aquí tu respuesta...'
                                value={pqr.respuesta}
                                onChange={(e) => setPqr({ ...pqr, respuesta: e.target.value })}
                            ></textarea>
                        </div>
                        <button
                            type='button'
                            className='bg-primary/80 text-black py-2 px-4 rounded-lg hover:bg-primary transition-colors'
                            onClick={handleResponderPQR}
                        >
                            Enviar Respuesta
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ActualizarPQR;
