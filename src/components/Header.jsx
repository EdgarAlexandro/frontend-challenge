import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './Header.css';

export default function Header() {
  const [isLogged, setIsLogged] = useState(false);
  const navigate = useNavigate();

  // Check if the user is logged in to display the logout button
  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (token) {
      setIsLogged(true);
    }
  }, [navigate]);

  // Remove the token from sessionStorage and redirect to the login page when the logout button is clicked
  const handleLogOut = () => {
    sessionStorage.removeItem('token');
    setIsLogged(false);
    navigate('/');
  };

  // Redirect to the main page when the main button is clicked
  const handleMainButton = () => {
    navigate('/');
  };

  return (
    <header>
      <div className='row'>
        <h4 className='col-6'>
          <button id='mainButton' type='button' className='btn' onClick={handleMainButton}>
            <h5>Edgar Castillo</h5>
          </button>
        </h4>
        <p className='col-6 text-end'>
          {isLogged && (
            <button type='button' className='btn btn-light' onClick={handleLogOut}>
              <i className='fa-solid fa-right-from-bracket'></i>
            </button>
          )}
        </p>
      </div>
    </header>
  );
}
