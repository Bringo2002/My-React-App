import React, { useState } from 'react';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Logging in with:', { username, password });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <h1 className="text-2xl mb-4">Login</h1>
      <div className="flex space-x-4 mb-4">
        <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700">Login with Google</button>
        <button className="bg-blue-600 text-white p-2 rounded hover:bg-blue-800">Login with Facebook</button>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 border border-gray-300 rounded"
          required
        />
        <button type="submit" className="bg-gray-500 text-white p-2 rounded hover:bg-black">
          Submit

        </button>
        <a href="#" className="text-blue-500 hover:underline">Forgot your password?</a>

      </form>
    </div>
  );
};

export default LoginPage;
