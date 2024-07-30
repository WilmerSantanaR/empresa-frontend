import React, { useState } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const CreateSalePage = () => {
  const [products, setProducts] = useState([{ name: '', quantity: '', price: '' }]);
  const [customerDocument, setCustomerDocument] = useState('');
  const [sellerId, setSellerId] = useState('');
  const [customerInfo, setCustomerInfo] = useState({});
  const [sellerName, setSellerName] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [subtotal, setSubtotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);

  const handleProductChange = (index, e) => {
    const { name, value } = e.target;
    const updatedProducts = [...products];
    updatedProducts[index][name] = value;
    setProducts(updatedProducts);
    calculateTotals(updatedProducts);
  };

  const handleAddProduct = () => {
    setProducts([...products, { name: '', quantity: '', price: '' }]);
  };

  const handleRemoveProduct = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
    calculateTotals(updatedProducts);
  };

  const calculateTotals = (updatedProducts) => {
    const newSubtotal = updatedProducts.reduce((acc, product) => acc + (parseFloat(product.quantity || 0) * parseFloat(product.price || 0)), 0);
    const newTax = newSubtotal * 0.19;
    const newTotal = newSubtotal + newTax;

    setSubtotal(newSubtotal.toFixed(2));
    setTax(newTax.toFixed(2));
    setTotal(newTotal.toFixed(2));
  };

  const handleSearchCustomer = async () => {
    try {
      const response = await axios.get(`/api/customers/${customerDocument}`);
      setCustomerInfo(response.data);
      setShowForm(true); // Mostrar el formulario después de obtener la información del cliente
    } catch (error) {
      console.error('Error fetching customer information:', error);
    }
  };

  const handleSearchSeller = async () => {
    try {
      const response = await axios.get(`/api/sellers/${sellerId}`);
      setSellerName(response.data.name);
    } catch (error) {
      console.error('Error fetching seller information:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      generatePDF();
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    const tableColumn = ['Descripción', 'Cantidad', 'Precio Unitario', 'Total'];
    const tableRows = products.map(product => [
      product.name || '',
      product.quantity || '',
      `$${(parseFloat(product.price || 0)).toFixed(2)}`,
      `$${(parseFloat(product.quantity || 0) * parseFloat(product.price || 0)).toFixed(2)}`
    ]);

    // Encabezado de la factura
    doc.setFontSize(22);
    doc.text('Factura de Venta', 20, 20);

    // Información del cliente y vendedor
    doc.setFontSize(14);
    doc.text(`Cliente: ${customerInfo.name || 'N/A'}`, 20, 30);
    doc.text(`Documento del Cliente: ${customerDocument}`, 20, 40);
    doc.text(`Vendedor: ${sellerName || 'N/A'}`, 20, 50);

    // Tabla de productos
    doc.setFontSize(12);
    doc.autoTable({
      startY: 60,
      head: [tableColumn],
      body: tableRows,
      theme: 'striped',
      styles: {
        fontSize: 10,
        cellPadding: 5,
        valign: 'middle'
      },
      headStyles: {
        fillColor: [0, 0, 0],
        textColor: [255, 255, 255]
      },
      margin: { top: 10 }
    });

    // Totales
    const finalY = doc.lastAutoTable.finalY;
    doc.setFontSize(12);
    doc.text(`Subtotal: $${subtotal}`, 20, finalY + 10);
    doc.text(`Impuesto (19%): $${tax}`, 20, finalY + 20);
    doc.text(`Total: $${total}`, 20, finalY + 30);

    doc.save('factura.pdf');
  };

  return (
    <div className="p-8">
      {!showForm ? (
        <div className="bg-secundary-100 p-8 rounded-xl mb-8">
          <h1 className="text-xl text-gray-100">Buscar Cliente</h1>
          <hr className="my-8 border-gray-500/30" />
          <div className="flex items-center mb-8">
            <div className="w-1/4">
              <p>Número de Documento:</p>
            </div>
            <div className="flex-1">
              <input
                type="text"
                value={customerDocument}
                onChange={(e) => setCustomerDocument(e.target.value)}
                onBlur={handleSearchCustomer}
                className="w-full py-2 px-4 outline-none rounded-lg bg-secundary-900"
                placeholder="Ingrese el número de documento"
              />
            </div>
            <button
              onClick={handleSearchCustomer}
              className="ml-4 bg-primary/80 text-black py-2 px-4 rounded-lg hover:bg-primary transition-colors"
            >
              Buscar
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-secundary-100 p-8 rounded-xl mb-8">
          <h1 className="text-xl text-gray-100">Generar Factura</h1>
          <hr className="my-8 border-gray-500/30" />
          <form onSubmit={handleSubmit}>
            {products.map((product, index) => (
              <div key={index} className="mb-8">
                <div className="flex items-center mb-4">
                  <div className="w-1/4">
                    <p>Producto:</p>
                  </div>
                  <div className="flex-1">
                    <input
                      type="text"
                      name="name"
                      value={product.name}
                      onChange={(e) => handleProductChange(index, e)}
                      className="w-full py-2 px-4 outline-none rounded-lg bg-secundary-900"
                      placeholder="Nombre del producto"
                    />
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <div className="w-1/4">
                    <p>Cantidad:</p>
                  </div>
                  <div className="flex-1">
                    <input
                      type="number"
                      name="quantity"
                      value={product.quantity}
                      onChange={(e) => handleProductChange(index, e)}
                      className="w-full py-2 px-4 outline-none rounded-lg bg-secundary-900"
                      placeholder="Cantidad"
                    />
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <div className="w-1/4">
                    <p>Precio:</p>
                  </div>
                  <div className="flex-1">
                    <input
                      type="number"
                      name="price"
                      value={product.price}
                      onChange={(e) => handleProductChange(index, e)}
                      className="w-full py-2 px-4 outline-none rounded-lg bg-secundary-900"
                      placeholder="Precio por unidad"
                    />
                  </div>
                </div>
                <div className="flex items-center mb-8">
                  <button
                    type="button"
                    onClick={() => handleRemoveProduct(index)}
                    className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors"
                  >
                    Eliminar Producto
                  </button>
                  {products.length - 1 === index && (
                    <button
                      type="button"
                      onClick={handleAddProduct}
                      className="ml-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
                    >
                      Agregar Otro Producto
                    </button>
                  )}
                </div>
              </div>
            ))}

            <div className="flex items-center mb-8">
              <div className="w-1/4">
                <p>ID del Vendedor:</p>
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  value={sellerId}
                  onChange={(e) => setSellerId(e.target.value)}
                  onBlur={handleSearchSeller}
                  className="w-full py-2 px-4 outline-none rounded-lg bg-secundary-900"
                  placeholder="Ingrese el ID del vendedor"
                />
              </div>
            </div>

            <div className="flex justify-between items-center mb-8">
              <p className="text-lg font-semibold">Subtotal: ${subtotal}</p>
              <p className="text-lg font-semibold">Impuesto (19%): ${tax}</p>
              <p className="text-lg font-semibold">Total: ${total}</p>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-primary/80 text-black py-2 px-4 rounded-lg hover:bg-primary transition-colors"
              >
                Generar Factura
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default CreateSalePage;