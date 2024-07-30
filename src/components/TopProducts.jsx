// src/pages/TopProductsPage.jsx

import React, { useState, useEffect } from 'react';
import { topProductsMock, topProductsByCategoryMock } from '../mockData'; // Asegúrate de que la ruta sea correcta

const TopProductsPage = () => {
  const [topProducts, setTopProducts] = useState([]);
  const [topProductsByCategory, setTopProductsByCategory] = useState({});

  useEffect(() => {
    // Simulamos una respuesta de API con datos mock
    setTopProducts(topProductsMock);
    setTopProductsByCategory(topProductsByCategoryMock);
  }, []);

  return (
    <div>
      <h1>Productos Más Vendidos</h1>
      <section>
        <h2>General</h2>
        <ul>
          {Array.isArray(topProducts) && topProducts.length > 0 ? (
            topProducts.map(product => (
              <li key={product.id}>
                {product.name} - Ventas: {product.sales}
              </li>
            ))
          ) : (
            <p>No hay datos disponibles.</p>
          )}
        </ul>
      </section>
      <section>
        <h2>Por Categoría</h2>
        {Object.keys(topProductsByCategory).length > 0 ? (
          Object.keys(topProductsByCategory).map(category => (
            <div key={category}>
              <h3>{category}</h3>
              <ul>
                {Array.isArray(topProductsByCategory[category]) ? (
                  topProductsByCategory[category].map(product => (
                    <li key={product.id}>
                      {product.name} - Ventas: {product.sales}
                    </li>
                  ))
                ) : (
                  <p>No hay datos disponibles.</p>
                )}
              </ul>
            </div>
          ))
        ) : (
          <p>No hay datos disponibles.</p>
        )}
      </section>
    </div>
  );
};

export default TopProductsPage;
