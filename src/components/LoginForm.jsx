import { useState } from 'react';
import { useEffect } from 'react';

import UserAccount from '../models/UserAccount';
import { getFromLocalStorage } from '../db/dbInterface';

const LoginForm = ({ onPageChange }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);



  const onSubmit = (e) => {
    e.preventDefault();

    const accounts = getFromLocalStorage();

    const account = accounts.find((account) => account.username === username);

    console.log(account);


    if (account && account.password === password) {
      onPageChange('dashboard', account);
    } else {
      setErrorMessage('Invalid username or password');
    }
  };




  return (
    <section className="section is-large">
      <form onSubmit={onSubmit}>
        <label htmlFor="username">Username</label>
        <input 
          type="text" 
          id="username"
          value={username}
          onChange={handleUsernameChange}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />

        <button type="submit">Log In</button>
        {errorMessage && <p className="error">{errorMessage}</p>}
      </form>
    </section>
  )
};

export default LoginForm;
