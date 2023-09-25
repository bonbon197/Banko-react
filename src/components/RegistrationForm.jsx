import { useState } from 'react';
import { Button } from 'react-bulma-components';
// import { generateUniqueId } from '../helpers/generateUniqueId';
import { getFromLocalStorage } from '../db/dbInterface';
import { saveToLocalStorage } from '../db/dbInterface';

const RegistrationForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);







  const validateEmail = (input) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(input);
  };






  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);

    setIsEmailValid(validateEmail(inputEmail));
  };

  const handlePasswordChange = (e) => {
    const inputPassword = e.target.value;
    setPassword(inputPassword);
  };

  const handleUsernameChange = (e) => {
    const inputUsername = e.target.value;
    setUsername(inputUsername);
  };

  const handleFirstNameChange = (e) => {
    const inputFirstName = e.target.value;
    setFirstName(inputFirstName);
  };

  const handleLastNameChange = (e) => {
    const inputLastName = e.target.value;
    setLastName(inputLastName);
  };






  const generateUniqueId = () => {
    return Math.random().toString(36).substr(2, 16);
  };







  


  const onRegistration = (newAccount) => {
    const existingAccounts = getFromLocalStorage();
    
    const newAccountId = generateUniqueId();
    const accountData = {
      id: newAccountId,
      ...newAccount,
    };

    existingAccounts.push(accountData);

    saveToLocalStorage(existingAccounts);


    console.log('Registration data received in App.jsx:', accountData);
  };






  const onSubmit = (e) => {
    e.preventDefault();

    if (isEmailValid) {
      const newAccount = {
        email: email,
        password: password,
        username: username,
        firstName: firstName,
        lastName: lastName,
        balance: 0,
      };
      
      onRegistration(newAccount);

      setEmail('');
      setPassword('');
      setUsername('');
      setFirstName('');
      setLastName('');
      setIsEmailValid(true);

      console.log('Registration successful');
      console.log(newAccount);
    }
  };







  return (
    <>
    <form onSubmit={onSubmit}>
      <div className="field">
        <div className={`control has-icons-left has-icons-right${isEmailValid ? '' : ' has-icons-danger'}`}>
          <input
            className={`input${isEmailValid ? '' : ' is-danger'}`}
            type="text"
            placeholder="Email Address"
            value={email}
            onChange={handleEmailChange}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-envelope"></i>
          </span>
          <span className="icon is-small is-right">
            {isEmailValid ? (
              <i className="fas fa-check"></i>
            ) : (
              <i className="fas fa-exclamation-triangle"></i>
            )}
          </span>
        </div>
        {!isEmailValid && (
          <p className="help is-danger">Invalid email format</p>
        )}
      </div>

      <div className="field">
        <div className="control has-icons-left has-icons-right">
          <input 
            className="input" 
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Password" />
          <span className="icon is-small is-left">
            <i className="fas fa-lock"></i>
          </span>
          <span className="icon is-small is-right">
            <i className="fas fa-eye"></i>
          </span>
        </div>
      </div>

      <div className="field">
        <div className="control">
          <input 
            className="input" 
            type="text"
            placeholder="Username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
      </div>

      <div className="field">
        <div className="control">
          <input 
            className="input" 
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={handleFirstNameChange}
          />
        </div>
      </div>

      <div className="field">
        <div className="control">
          <input 
            className="input" 
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={handleLastNameChange}
          />
        </div>
      </div>

      <Button type="submit" color="primary">Register</Button>
      </form>
    </>
  );};

export default RegistrationForm;
