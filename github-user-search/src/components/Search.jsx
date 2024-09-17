// src/components/Search.jsx
import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const data = await fetchUserData(username);
      setUserData(data);
      if (!data.login) {
        throw new Error('User not found');
      }
    } catch (err) {
      setError("Looks like we can't find the user");
      setUserData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={username}
          onChange={handleInputChange}
          placeholder="Search GitHub username"
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {userData && (
        <div>
          <img src={userData.avatar_url} alt="User Avatar" width="100" />
          <h3>{userData.name}</h3>
          <p>Username: {userData.login}</p>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            View GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;

