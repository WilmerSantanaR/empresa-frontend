import React from 'react';

const Error404 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            404 - Página no encontrada
          </h2>
        </div>
        <p className="text-center text-xl text-gray-600">
          La página que estás buscando no se encuentra disponible.
        </p>
        <div className="mt-8">
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Regresar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error404;
