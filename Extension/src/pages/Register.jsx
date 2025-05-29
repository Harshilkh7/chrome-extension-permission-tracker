import React, { useState } from 'react';
import api from '../services/api';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Register() {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await api.post('/auth/register', form);
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.error || 'Registration failed');
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-100 to-teal-100 px-4 animate-fadeIn">
        <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-[1.02]">
          <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800 animate-fadeIn">
            Create an Account
          </h2>

          {error && (
            <p className="mb-4 text-center text-red-600 font-medium bg-red-100 py-2 rounded animate-fadeIn">
              {error}
            </p>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              name="username"
              placeholder="Username"
              value={form.username}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md
                focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                transition duration-300 ease-in-out
                hover:shadow-md hover:scale-[1.02]"
            />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md
                focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                transition duration-300 ease-in-out
                hover:shadow-md hover:scale-[1.02]"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md
                focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                transition duration-300 ease-in-out
                hover:shadow-md hover:scale-[1.02]"
            />
            <button
              type="submit"
              className="w-full py-3 bg-green-600 text-white font-semibold rounded-md
                hover:bg-green-700 transition duration-300 ease-in-out shadow-md hover:shadow-lg transform hover:scale-[1.03]"
            >
              Register
            </button>
          </form>

          <p className="mt-6 text-center text-gray-600 animate-fadeIn">
            Already have an account?{' '}
            <Link to="/login" className="text-green-600 font-semibold hover:underline">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
