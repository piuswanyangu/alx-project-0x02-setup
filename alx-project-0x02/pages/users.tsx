// pages/users.tsx

import React, { useState, useEffect } from 'react';
import Header from '../components/layout/Header';
import UserCard from '../components/common/UserCard';
import { UserProps } from '../interfaces'; // Import the new interface

const Users: React.FC = () => {
  const [users, setUsers] = useState<UserProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const data: UserProps[] = await response.json();
        setUsers(data);
      } catch (error) {
        // Safe Type Guard Check for error handling
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('An unknown network or parsing error occurred.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <>
      <Header />
      <div className="p-8 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">👥 User Directory</h1>
        
        {loading && (
          <div className="text-center p-10">
            <p className="text-indigo-600 font-semibold">Loading user data...</p>
            <div className="mt-4 animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600 mx-auto"></div>
          </div>
        )}

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
            <strong className="font-bold">Error:</strong>
            <span className="block sm:inline"> {error}</span>
          </div>
        )}

        {!loading && users.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {users.map((user) => (
              <UserCard 
                key={user.id} 
                {...user} // Spread all properties from the fetched user object
              />
            ))}
          </div>
        )}

        {!loading && users.length === 0 && !error && (
          <p className="text-gray-500">No users found.</p>
        )}
      </div>
    </>
  );
};

export default Users;