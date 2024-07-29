import React, { useState, useEffect } from 'react';
import { RiEdit2Fill, RiShieldCheckLine } from "react-icons/ri";

const VerPQRS = () => {
    // Supongamos que tienes una lista de PQRS como ejemplo
    const [pqrsList, setPqrsList] = useState([]);

    // Ejemplo de datos de PQRS (puedes cargarlos desde una API o localmente)
    useEffect(() => {
        // Simulando datos cargados
        const data = [
            {
                id: 1,
                tipo: 'Queja',
                detalle: 'El producto que recibí está dañado.',
                adjuntos: ['imagen1.jpg', 'documento.pdf'],
                estado: 'Pendiente'
            },
            {
                id: 2,
                tipo: 'Reclamo',
                detalle: 'No he recibido el reembolso de mi pedido cancelado.',
                adjuntos: ['comprobante.pdf'],
                estado: 'Resuelto'
            }
            // Agrega más objetos según tus necesidades
        ];
        setPqrsList(data);
    }, []);

    return (
        <>
            {/* Lista de PQRS */}
            <div className='bg-secundary-100 p-8 rounded-xl mb-8'>
                <h1 className='text-xl text-gray-100'>Ver PQRS</h1>
                <hr className='my-8 border-gray-500/30' />
                <div>
                    {pqrsList.map((pqr) => (
                        <div key={pqr.id} className='mb-4'>
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
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default VerPQRS;
