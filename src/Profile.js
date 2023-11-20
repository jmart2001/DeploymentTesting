import React, { useState, useEffect } from 'react';
import './App.css'; 

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

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUser((prevUser) => ({...prevUser, profilePicture: reader.result,}));
        // using local storage to save picture
        localStorage.setItem('profilePicture', reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleUploadButtonClick = () => {
    document.getElementById('fileInput').click();
  };

  useEffect(() => {
    setUser((prevUser) => ({...prevUser,profilePicture: localStorage.getItem('profilePicture'),}));
  }, []);

  return (
    <div className="profile-centering">
      <div>
        <input
          type="file"
          id="fileInput"
          onChange={handleImageChange}
          accept="image/*"
          style={{ display: 'none' }}
        />
        <button onClick={handleUploadButtonClick}>Upload Image</button>
        {user.profilePicture && (
          <img
            src={user.profilePicture}
            alt="Profile"
            style={{ width: '100px', borderRadius: '50%', margin: '10px' }}
          />
        )}
      </div>
      <h1>My Profile</h1>
      {user ? (
        <div>
          <h1>{user.name}</h1>
          <p>Email: {user.email}</p>
          {/* Add more fields as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProfilePage;