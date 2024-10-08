import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import DashboardCard from '../components/DashboardCard.jsx';

import './Dashboard.css';

export default function Dashboard() {
  const navigate = useNavigate();

  // Check if the user is logged (redirect to login if not)
  useEffect(() => {
    document.title = 'Dashboard';
    const token = sessionStorage.getItem('token');
    if (!token) {
      navigate('/');
    }
  }, [navigate]);

  // Static values for metrics
  const [metrics, setMetrics] = useState({
    totalUsers: 100,
    activeSessions: 50,
    totalRevenue: 1000,
  });

  // Function to refresh the metrics with random values when the refresh button is clicked
  const refreshMetrics = () => {
    setMetrics({
      totalUsers: metrics.totalUsers + Math.floor(Math.random() * 100),
      activeSessions: Math.floor(Math.random() * metrics.totalUsers),
      totalRevenue: metrics.totalRevenue + Math.floor(Math.random() * 1000),
    });
  };

  return (
    <div className='container py-3'>
      <div className='text-end'>
        <h1 className='text-center'>Dashboard</h1>
        {/* Button to refresh the metrics */}
        <button id='refreshButton' type='button' className='btn btn-success' onClick={refreshMetrics}>
          <i className='fa-solid fa-arrow-rotate-right'></i>
        </button>
      </div>
      <br />
      <div className='row'>
        {/* Card 1: Total users */}
        <DashboardCard
          title='Total Users'
          description='This card displays the total number of users registered in the system.'
          value={metrics.totalUsers}
        />
        <div className='d-block d-lg-none col-lg-4'>
          <br />
        </div>
        {/* Card 2: Active sessions */}
        <DashboardCard
          title='Active Sessions'
          description='This card shows the current number of active sessions in the application.'
          value={metrics.activeSessions}
        />
        <div className='d-block d-lg-none col-lg-4'>
          <br />
        </div>
        {/* Card 3: Total revenue */}
        <DashboardCard
          title='Total Revenue'
          description='This card provides information on the total revenue generated by the application. It includes all income sources.'
          value={metrics.totalRevenue}
        />
      </div>
    </div>
  );
}
