import React, { useState, useEffect } from 'react';

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
      {user ? (
        <div>
          <h1>{user.name}</h1>
          <p>Email: {user.email}</p>
          {/* place to add more fields later */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProfilePage;