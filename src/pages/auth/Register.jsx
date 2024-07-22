import React, { useState } from 'react';
import { RiKeyLine } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { RiMailFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const passwordStrength = () => {
    // Lógica para evaluar la fortaleza de la contraseña (ejemplo simple basado en longitud)
    if (password.length < 6) {
      return 'weak';
    } else if (password.length < 10) {
      return 'medium';
    } else {
      return 'strong';
    }
  };

  const passwordStrengthColor = () => {
    // Retorna el color correspondiente a la fortaleza de la contraseña
    switch (passwordStrength()) {
      case 'weak':
        return 'bg-white'; // Color blanco para contraseñas débiles
      case 'medium':
        return 'bg-yellow-500'; // Cambia este valor según tus estilos
      case 'strong':
        return 'bg-green-500'; // Cambia este valor según tus estilos
      default:
        return 'bg-gray-300'; // Color por defecto
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validación adicional: Verificar si todos los campos requeridos están llenos
    if (!email || !username || !password || !confirmPassword) {
      alert("Por favor completa todos los campos.");
      return;
    }

    // Lógica para comparar las contraseñas antes de enviar
    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    // Lógica para enviar los datos de registro al backend (simulado con un log)
    console.log({ email, username, password });

    // Aquí puedes añadir la lógica real para enviar los datos al backend
    // fetch('/api/register', {
    //   method: 'POST',
    //   body: JSON.stringify({ email, username, password }),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // }).then(response => response.json())
    //   .then(data => console.log(data))
    //   .catch(error => console.error('Error:', error));
  };

  return (
    <div className="bg-gray-800 p-8 rounded-xl shadow-xl w-auto lg:w-[450px]">
      <h1 className="text-3xl text-center uppercase font-bold tracking-[5px] text-white mb-8">
        Crear <span className="text-primary">Cuenta</span>
      </h1>
      <form onSubmit={handleSubmit}>
        <button className='flex items-center justify-center py-3 px-4 gap-4 bg-secundary-900 w-full rounded-full mb-8 text-gray-100'>
          <img
            src="https://www.keyweo.com/wp-content/uploads/2022/03/el-logo-g-de-google.png"
            className='w-10 h-6'
            alt="Google Logo"
          />
          Regístrate con Google
        </button>
        <div className='relative mb-4'>
          <FaUser className='absolute top-1/2 transform -translate-y-1/2 left-1 bg-secundary-900' />
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className='py-2 pl-8 pr-4 bg-secundary-900 w-full outline-none rounded-lg text-white focus:border focus:border-primary'
            placeholder="Nombre de Usuario"
            required
          />
        </div>
        <div className='relative mb-4'>
          <RiKeyLine className='absolute top-1/2 transform -translate-y-1/2 left-1 bg-secundary-900 focus:border-primary' />
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='py-2 pl-8 pr-12 bg-secundary-900 w-full outline-none rounded-lg text-white focus:border focus:border-primary'
            placeholder="Contraseña"
            required
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 flex items-center px-3 focus:border focus:border-primary"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <LuEye /> : <LuEyeOff />}
          </button>
        </div>
        {/* Barra de Indicador de Fortaleza de Contraseña */}
        <div className="relative mb-4">
          {password.length > 0 && (
            <div className="h-1 rounded-lg">
              <div className={`w-full ${passwordStrengthColor()} rounded-lg`}></div>
            </div>
          )}
        </div>
        <div className='relative mb-4'>
          <RiKeyLine className='absolute top-1/2 transform -translate-y-1/2 left-1 bg-secundary-900 focus:border-primary' />
          <input
            type={showPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className='py-2 pl-8 pr-12 bg-secundary-900 w-full outline-none rounded-lg text-white focus:border focus:border-primary'
            placeholder="Confirmar Contraseña"
            required
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 flex items-center px-3 focus:border focus:border-primary"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <LuEye /> : <LuEyeOff />}
          </button>
        </div>
        <div className='relative mb-4'>
          <RiMailFill className='absolute top-1/2 transform -translate-y-1/2 left-1 bg-secundary-900' />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='py-2 pl-8 pr-4 bg-secundary-900 w-full outline-none rounded-lg text-white focus:border focus:border-primary'
            placeholder="Correo Electrónico"
            required
          />
        </div>
        <div className="mt-6">
          <button type='submit' className="bg-primary text-white uppercase font-bold text-sm w-full py-3 px-4 rounded-lg hover:text-gray-100 transition-colors focus:border focus:border-primary">Regístrate</button>
        </div>
        <div className="mt-12 text-center"> {/* Ajuste para centrar el texto */}
          <span className='flex items-center justify-center gap-2'>
            Ya tienes cuenta <Link to="/auth/" className="text-primary hover:text-gray-100 transition-colors">Inicia Sesión</Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Register;
