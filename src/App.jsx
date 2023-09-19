import { useState } from 'react'
import { useEffect } from 'react'

import bankoLogo from './assets/banko_logo.svg'
import viteLogo from '/vite.svg'
import './App.css'

import HomePage from './components/HomePage'
import RegistrationForm from './components/RegistrationForm'
import LoginForm from './components/LoginForm'
import Dashboard from './components/Dashboard'
import initializeDataStorage from './db/accounts'

function App() {

  useEffect(() => {
    initializeDataStorage();
  }, []);


  const [page, setPage] = useState('home')
  const [account, setAccount] = useState(null)


  const onPageChange = (page, account) => {
    if (page === 'dashboard') {
      setAccount(account);
    }

    setPage(page);
  };


  return (
    <>
      {page === 'home' && <HomePage onPageChange={onPageChange} />}
      {page === 'register' && <RegistrationForm onPageChange={onPageChange}/>}
      {page === 'login' && <LoginForm onPageChange={onPageChange} />}
      {page === 'dashboard' && <Dashboard onPageChange={onPageChange} account={account} />}
    </>
  );

}

export default App
