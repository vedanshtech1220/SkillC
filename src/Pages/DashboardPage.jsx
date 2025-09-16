import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DashboardPage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // 1. Get the token from localStorage
        const token = localStorage.getItem('token');
        if (!token) {
          setLoading(false);
          return;
        }

        // 2. Make an authenticated request to the backend
        const response = await axios.get('http://localhost:5000/api/user/me', {
          headers: {
            'x-auth-token': token, // Send the token in the header
          },
        });

        setUser(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch user data:", error);
        setLoading(false);
      }
    };

    fetchUserData();
  }, []); // The empty array means this effect runs once when the component mounts

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='p-10 w-full h-screen'>
      {/* 3. Display the real user data */}
      <h1 className='text-3xl font-bold mb-8'>
        Welcome, {user ? user.email : 'Guest'}!
      </h1>
      
      {/* The rest of your Trello board can go here */}
      <p>This is your protected dashboard.</p>
    </div>
  );
}

export default DashboardPage;