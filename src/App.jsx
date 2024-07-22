import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LayoutAdmin from './layouts/LayoutAdmin';
import LayoutAuth from './layouts/LayoutAuth';

import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgetPassword from './pages/auth/ForgetPassword';

import Home from './pages/admin/Home';
import Profile from './pages/admin/Profile';
import Error404 from './pages/Error404';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/login' element={<Login />} />
      <Route path="/registro" element={<Register />} />
      <Route path="/olvide-password" element={<ForgetPassword />} />

        <Route path="/" element={<LayoutAdmin />}>
          <Route index element={<Home />} />
          <Route path="/perfil" element={<Profile />} />
        </Route>

        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
