'use client'
import React, { useState, FormEvent } from 'react';
import axios from 'axios';

interface AuthFormData {
  email: string;
  password: string;
}

const AuthForm: React.FC = () => {
  const [formData, setFormData] = useState<AuthFormData>({ email: '', password: '' });
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post<LoginResponse>('/api/auth/login', formData);
      // Handle successful login (e.g., store token in localStorage)
      console.log('Login successful:', response.data);
      // Redirect to protected route or display success message
    } catch (error) {
      setError(error.response?.data?.message || 'Login failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='container'> {/* Added a container class */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <div className="input-container border-gray-950"> {/* Added a container for input */}
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <label htmlFor="password">Password:</label>
        <div className="input-container bg-black"> {/* Added a container for input */}
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button className='botton' type="submit" disabled={isLoading}>
          {isLoading ? 'Logging in...' : 'Login'}
        </button>

        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};



interface LoginResponse {
  token: string; // Replace with the actual token type from your backend
}

export default AuthForm;
