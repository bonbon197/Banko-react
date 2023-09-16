import { useState } from 'react'
import { useEffect } from 'react'
import bankoLogo from './assets/banko_logo.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RegistrationForm from './components/RegistrationForm'
import LoginForm from './components/LoginForm'
import HomePage from './components/HomePage'
import Dashboard from './components/Dashboard'

function App() {

  const [currentPage, setCurrentPage] = useState('home');
  const [username, setUsername] = useState('');
  const [accounts, setAccounts] = useState([]);

  const handleRegistration = (newAccount) => {
    setAccounts((prevAccounts) => [...prevAccounts, newAccount]);
    localStorage.setItem('accounts', JSON.stringify([...accounts, newAccount]));
  }

  const pageChange = (page, newUsername = '') => {
    setCurrentPage(page);
    setUsername(newUsername);
  }

  if (currentPage === 'home') {
    return (
      <>
      <HomePage onPageChange={pageChange}/>
      </>
    );
  }

  if (currentPage === 'register') {
    return (
      <>
      <RegistrationForm onPageChange={pageChange} onRegistration={handleRegistration}/>
      </>
    );
  }

  if (currentPage === 'login') {
    return (
      <>
      <LoginForm onPageChange={pageChange}/>
      </>
    );
  }

  if (currentPage === 'dashboard') {
    return (
      <>
      <Dashboard onPageChange={pageChange} username={username} />
      </>
    );
  }

  return (
    <>
    <h1>????</h1>
    </>
  )
}

export default App
