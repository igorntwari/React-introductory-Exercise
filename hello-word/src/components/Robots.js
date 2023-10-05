import React, { useState, useEffect } from 'react';
import UserCard from './UserCard';

export default function Robots() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    fetch('https://random-data-api.com/api/users/random_user?size=10')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  };

  return (
    <div>
    <button onClick={fetchUsers}>Fetch Random</button>
      <div>
        {users.map((user, index) => (
          <UserCard key={index} user={user} />
        ))}
      </div>
    </div>
  );
}
