import React from 'react';

const UserCard = ({ user }) => {
  return (
    <div>
      <div>
        <p>{user.first_name} {user.last_name}</p>
        <img src={user.avatar} alt={`${user.first_name}`} />
      </div>
      <div>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone_number}</p>
        <p>Address: {user.address.street_address}, {user.address.city}</p>
      </div>
    </div>
  );
};

export default UserCard;
