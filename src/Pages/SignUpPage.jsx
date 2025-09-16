import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignUpPage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/signup', {
        fullName,
        email,
        password,
      });
      console.log('Sign-up successful:', response.data);
      navigate('/login');
    } catch (error) {
      console.error('Sign-up failed:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className='w-full h-screen flex items-center justify-center font-["Neue_Montreal"]'>
      <div className='w-full max-w-md p-8 bg-[#2d2d2d] rounded-lg shadow-lg'>
        <h2 className='text-3xl font-semibold text-center text-white mb-6'>
          Create an Account
        </h2>
        <form onSubmit={handleSubmit}>
          {/* ---- START: ADD THIS SECTION BACK IN ---- */}
          <div className='mb-4'>
            <label className='block text-zinc-400 text-sm font-bold mb-2' htmlFor='fullName'>
              Full Name
            </label>
            <input
              type='text'
              id='fullName'
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className='w-full px-3 py-2 bg-zinc-700 text-white border border-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E5005F]'
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block text-zinc-400 text-sm font-bold mb-2' htmlFor='email'>
              Email
            </label>
            <input
              type='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='w-full px-3 py-2 bg-zinc-700 text-white border border-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E5005F]'
              required
            />
          </div>
          <div className='mb-6'>
            <label className='block text-zinc-400 text-sm font-bold mb-2' htmlFor='password'>
              Password
            </label>
            <input
              type='password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='w-full px-3 py-2 bg-zinc-700 text-white border border-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E5005F]'
              required
            />
          </div>
          {/* ---- END: ADD THIS SECTION BACK IN ---- */}
          
          <button
            type='submit'
            className='w-full bg-[#E5005F] text-white font-bold py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors'
          >
            Sign Up
          </button>
        </form>
        <p className='text-center text-zinc-400 text-sm mt-6'>
          Already have an account?{' '}
          <Link to='/login' className='text-[#E5005F] hover:underline'>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUpPage;