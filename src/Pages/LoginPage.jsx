import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState('');
  const navigate = useNavigate();

  // Email regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateForm = () => {
    const newErrors = {};
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Enter a valid email';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setServerError('');

    if (!validateForm()) return;

    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      });

      // Save the token to localStorage
      localStorage.setItem('token', response.data.token);

      // Navigate to dashboard
      navigate('/dashboard');
    } catch (error) {
      console.error('Login failed:', error.response ? error.response.data : error.message);
      setServerError(error.response?.data?.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='w-full h-screen flex items-center justify-center font-["Neue_Montreal"]'>
      <div className='w-full max-w-md p-8 bg-[#2d2d2d] rounded-lg shadow-lg'>
        <h2 className='text-3xl font-semibold text-center text-white mb-6'>
          Login to SkillC
        </h2>

        {serverError && (
          <p className='text-red-500 text-sm mb-4 text-center'>{serverError}</p>
        )}

        <form onSubmit={handleSubmit} noValidate>
          {/* Email input */}
          <div className='mb-4'>
            <label
              className='block text-zinc-400 text-sm font-bold mb-2'
              htmlFor='email'
            >
              Email
            </label>
            <input
              type='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full px-3 py-2 bg-zinc-700 text-white border ${
                errors.email ? 'border-red-500' : 'border-zinc-600'
              } rounded-md focus:outline-none focus:ring-2 focus:ring-[#E5005F]`}
              required
            />
            {errors.email && (
              <p className='text-red-500 text-xs mt-1'>{errors.email}</p>
            )}
          </div>

          {/* Password input */}
          <div className='mb-6'>
            <label
              className='block text-zinc-400 text-sm font-bold mb-2'
              htmlFor='password'
            >
              Password
            </label>
            <input
              type='password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full px-3 py-2 bg-zinc-700 text-white border ${
                errors.password ? 'border-red-500' : 'border-zinc-600'
              } rounded-md focus:outline-none focus:ring-2 focus:ring-[#E5005F]`}
              required
            />
            {errors.password && (
              <p className='text-red-500 text-xs mt-1'>{errors.password}</p>
            )}
          </div>

          {/* Submit button */}
          <button
            type='submit'
            disabled={loading}
            className={`w-full bg-[#E5005F] text-white font-bold py-2 px-4 rounded-md transition-colors ${
              loading
                ? 'opacity-70 cursor-not-allowed'
                : 'hover:bg-opacity-90'
            }`}
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <p className='text-center text-zinc-400 text-sm mt-6'>
          Don&apos;t have an account?{' '}
          <Link to='/signup' className='text-[#E5005F] hover:underline'>
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
