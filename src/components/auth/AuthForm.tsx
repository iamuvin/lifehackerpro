import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';
import { AlertCircle } from 'lucide-react';
import Logo from './Logo';
import toast from 'react-hot-toast';

export default function AuthForm() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { signIn, signUp } = useAuthStore();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isSignUp) {
        await signUp(email, password);
        toast.success('Account created successfully!');
      } else {
        await signIn(email, password);
        toast.success('Welcome back!');
      }
      navigate('/');
    } catch (err: any) {
      setError(err.message);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-gradient-to-br from-indigo-50 via-white to-coral-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <div className="bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-xl">
          <div className="space-y-4 sm:space-y-6">
            <Logo />
            <h2 className="text-center text-xl sm:text-2xl font-extrabold text-gray-900">
              {isSignUp ? 'Create your account' : 'Sign in to your account'}
            </h2>
          </div>
          
          <form className="mt-6 sm:mt-8 space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded flex items-start">
                <AlertCircle className="h-5 w-5 text-red-400 mt-0.5 mr-2 flex-shrink-0" />
                <p className="text-sm text-red-700">{error}</p>
              </div>
            )}
            
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="sr-only">Email address</label>
                <input
                  id="email"
                  type="email"
                  required
                  className="appearance-none relative block w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-lg placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-base"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
                />
              </div>
              
              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <input
                  id="password"
                  type="password"
                  required
                  className="appearance-none relative block w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-lg placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-base"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={loading}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center py-2.5 sm:py-3 px-4 border border-transparent rounded-lg text-white bg-gradient-to-r from-indigo-600 to-coral-500 hover:from-indigo-700 hover:to-coral-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 ease-in-out transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed text-base sm:text-lg font-semibold"
            >
              {loading ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                isSignUp ? 'Create Account' : 'Sign in'
              )}
            </button>

            <div className="text-center">
              <button
                type="button"
                className="text-sm sm:text-base text-indigo-600 hover:text-indigo-500 font-medium focus:outline-none focus:underline transition-colors duration-200"
                onClick={() => {
                  setIsSignUp(!isSignUp);
                  setError('');
                }}
                disabled={loading}
              >
                {isSignUp ? 'Already have an account? Sign in' : "Don't have an account? Sign up"}
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="mt-8 text-center px-4">
        <p className="text-gray-600 text-sm sm:text-base">
          App Designed and Created by{' '}
          <a 
            href="https://iamuvin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-indigo-700 font-medium"
          >
            Uvin Vindula
          </a>
        </p>
        <p className="text-gray-600 mt-2 text-sm sm:text-base">
          Contact:{' '}
          <a 
            href="tel:+94778888897" 
            className="text-indigo-600 hover:text-indigo-700 font-medium"
          >
            +94 77 888 8897
          </a>
        </p>
      </div>
    </div>
  );
}