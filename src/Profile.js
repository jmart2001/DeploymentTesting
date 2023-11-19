import React, { useState, useEffect } from 'react';
import Profile from './Profile';

const ProfilePage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!user) {
      setUser({
        name: 'Justin the best',
        email: 'testing@gmail.com',
      });
    }
  }, [user]);

  return (
    <div>
      <h1>My Profile</h1>
      {user ? <Profile user={user} /> : <p>Loading...</p>}
    </div>
  );
};

export default ProfilePage;