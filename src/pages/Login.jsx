import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Loader from '../components/Loader.jsx';

import './Login.css';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [alert, setAlert] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Hardcoded credentials
  const hardcodedUsername = 'admin';
  const hardcodedPassword = 'password';

  // Check if the user is already logged in (redirect to dashboard if so)
  // Add a timeout to hide the alert message after 5 seconds
  useEffect(() => {
    document.title = 'Login';
    const token = sessionStorage.getItem('token');
    if (token) {
      navigate('/dashboard');
    }
    setLoading(false);
    const alertTimeout = setTimeout(() => {
      setAlert(false);
    }, 5000);

    return () => clearTimeout(alertTimeout);
  }, [navigate]);

  // Toggle the password visibility
  const handleToggle = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  // Handle the form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Verify credentials
    if (username === hardcodedUsername && password === hardcodedPassword) {
      // Create a hardcoded token
      sessionStorage.setItem('token', '200');
      // Redirect to dashboard
      navigate('/dashboard');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <>
      {/* If loading is true, display the Loader component while the token is being verified */}
      {loading ? (
        <Loader />
      ) : (
        <div className='d-flex justify-content-center align-items-center'>
          <div className='form-section text-center'>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
              <input
                type='text'
                id='username'
                className='form-control my-3'
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                placeholder='Username'
                required
              />
              <div className='input-group mb-3'>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id='password'
                  className='form-control'
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder='Password'
                  required
                />
                <button className='btn btn-outline-secondary' type='button' id='button-addon' onClick={handleToggle}>
                  <i className={`fa-solid fa-eye${showPassword ? '-slash' : ''}`}></i>
                </button>
              </div>
              {alert && (
                <div className='alert alert-info' role='alert'>
                  For practice purposes, you can use the following credentials:
                  <br />
                  Username: admin
                  <br />
                  Password: password
                </div>
              )}
              {error && (
                <p className='alert alert-danger' role='alert'>
                  {error}
                </p>
              )}
              <button type='submit' className='btn btn-primary w-100'>
                Login
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
