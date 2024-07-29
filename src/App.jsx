// src/App.js

import React, { useState } from 'react'; // Asegúrate de importar useState aquí
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LayoutAdmin from './layouts/LayoutAdmin';

import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgetPassword from './pages/auth/ForgetPassword';

import Home from './pages/admin/Home';
import Profile from './pages/admin/Profile';
import Inventary from './pages/admin/Inventary';
import Error404 from './pages/Error404';
import VerPQRS from './pages/admin/VerPQRS';
import ActualizarPQR from './pages/admin/ActualizarPQR';
import AdminRoles from './components/AdminRoles';
import UpdateProfile from './components/UpdateProfile';
import ListUser from './components/ListUsers';
import ListProducts from './components/ListProducts';
import ProductCatalog from './components/ProductCatalog';
import AddProductPage from './pages/admin/AddProductPage';

function App() {
    const [cart, setCart] = useState([]); // Ahora useState está definido

    const handleAddToCart = (product) => {
        setCart([...cart, product]);
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path="/registro" element={<Register />} />
                <Route path="/olvide-password" element={<ForgetPassword />} />

                <Route path="/" element={<LayoutAdmin />}>
                    <Route index element={<Home />} />
                    <Route path="/perfil" element={<Profile />} />
                    <Route path="/usuarios/actualizar-datos" element={<UpdateProfile />} />
                    <Route path="/usuarios/listar" element={<ListUser />} />
                    <Route path='/PQR/ver' element={<VerPQRS />} />
                    <Route path='/usuarios/administrar-roles' element={<AdminRoles />} />
                    <Route path='/pqr/actualizar' element={<ActualizarPQR />} />
                    <Route path='/productos/ver' element={<ListProducts />} />
                    <Route path='/productos/ver-catalogo' element={<ProductCatalog onAddToCart={handleAddToCart} />} />
                    <Route path='/productos/anadir-categoria' element={<AddProductPage />} />
                    <Route path='/inventario' element={<Inventary />} />
                </Route>

                <Route path="*" element={<Error404 />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
