import React, { useState, useEffect } from 'react';
import Profile from './Profile';

const ProfilePage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser({
      name: 'John Doe',
      email: 'john.doe@example.com',
    });
  }, []);

  return (
    <div>
      <h1>My Profile</h1>
      {user ? <Profile user={user} /> : <p>Loading...</p>}
    </div>
  );
};

export default ProfilePage;