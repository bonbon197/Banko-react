import { useState } from 'react';
import { Button } from 'react-bulma-components';

const RegistrationForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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

  const onSubmit = (e) => {
    e.preventDefault();

    if (isEmailValid) {
      const newAccount = {
        email: email,
        password: password,
      };
      onRegistration(newAccount);

      setEmail('');
      setPassword('');

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

      <Button type="submit" color="primary">Register</Button>
      </form>
    </>
  );
};

export default RegistrationForm;
