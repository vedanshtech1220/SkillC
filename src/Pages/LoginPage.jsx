// src/pages/LoginPage.jsx
import React, { useState } from 'react';
// 1. Consolidated the import for Link and useNavigate
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      });
      
      // 2. Save the token to localStorage
      localStorage.setItem('token', response.data.token);

      // 3. Navigate to the dashboard
      navigate('/dashboard');

    } catch (error) {
      console.error('Login failed:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className='w-full h-screen flex items-center justify-center font-["Neue_Montreal"]'>
      <div className='w-full max-w-md p-8 bg-[#2d2d2d] rounded-lg shadow-lg'>
        <h2 className='text-3xl font-semibold text-center text-white mb-6'>Login to SkillC</h2>
        <form onSubmit={handleSubmit}>
          {/* Email input */}
          <div className='mb-4'>
            <label className='block text-zinc-400 text-sm font-bold mb-2' htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='w-full px-3 py-2 bg-zinc-700 text-white border border-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E5005F]'
              required
            />
          </div>
          {/* Password input */}
          <div className='mb-6'>
            <label className='block text-zinc-400 text-sm font-bold mb-2' htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='w-full px-3 py-2 bg-zinc-700 text-white border border-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E5005F]'
              required
            />
          </div>
          <button type='submit' className='w-full bg-[#E5005F] text-white font-bold py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors'>
            Sign In
          </button>
        </form>
        <p className='text-center text-zinc-400 text-sm mt-6'>
          Don't have an account?{' '}
          <Link to='/signup' className='text-[#E5005F] hover:underline'>
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;