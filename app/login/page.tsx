'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-green-600"></div>
    </div>
  );
};

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const { message } = await res.json();
        setError(message);
        setIsLoading(false);
        return;
      }

      const { token } = await res.json();
      localStorage.setItem('token', token);

      toast.success('Login successful!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      setTimeout(() => {
        router.push('/book-appointment'); // Redirecting to book-appointment page
      }, 3000);
    } catch (err) {
      console.error(err);
      setError('An error occurred. Please try again.');
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-950">
      <ToastContainer />
      <div className="w-full max-w-md p-8 bg-gray-800 rounded-xl shadow-lg space-y-8">
        <div className="flex flex-col items-center space-y-4">
          <Image
            src="/medical.jpg"
            alt="Website Logo"
            width={80}
            height={80}
            className="mb-4 rounded-full shadow-md"
          />
          <h2 className="text-3xl font-semibold text-white">Welcome Back!</h2>
          <p className="text-sm text-gray-400">Log in to your account</p>
        </div>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email Address
            </label>
            <div className="relative mt-2">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                <FaEnvelope />
              </span>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-10 px-4 py-3 text-sm text-white border border-gray-600 rounded-lg bg-gray-700 focus:ring-green-500 focus:border-green-500 transition duration-200"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300">
              Password
            </label>
            <div className="relative mt-2">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                <FaLock />
              </span>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full pl-10 px-4 py-3 text-sm text-white border border-gray-600 rounded-lg bg-gray-700 focus:ring-green-500 focus:border-green-500 transition duration-200"
                placeholder="Enter your password"
              />
            </div>
          </div>

          {error && <div className="text-sm text-red-600">{error}</div>}

          <button
            type="submit"
            className="w-full px-6 py-3 text-white bg-green-600 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
          >
            Log In
          </button>
        </form>

        <p className="text-sm text-center text-gray-400">
          Don&apos;t have an account?{' '}
          <Link href="/register" legacyBehavior>
            <a className="text-green-400 hover:underline">Sign up</a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
