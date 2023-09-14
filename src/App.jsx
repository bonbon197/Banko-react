import { useState } from 'react'
import { useEffect } from 'react'
import bankoLogo from './assets/banko_logo.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RegistrationForm from './components/RegistrationForm'
import LoginForm from './components/LoginForm'
import HomePage from './components/HomePage'

function App() {

  const [currentPage, setCurrentPage] = useState('home');

  const pageChange = (page) => {
    setCurrentPage(page);
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
      <RegistrationForm onPageChange={pageChange}/>
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

  return (
    <>
    <h1>????</h1>
    </>
  )
}

export default App
