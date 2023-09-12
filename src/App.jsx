import { useState } from 'react'
import { useEffect } from 'react'
import bankoLogo from './assets/banko_logo.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RegistrationForm from './components/RegistrationForm'
import LoginForm from './components/LoginForm'

function App() {

  useEffect(() => {
    const accounts = [
      {
        username: 'admin',
        password: 'admin',
      },
      {
        username: 'user',
        password: 'user',
      },
    ]

    localStorage.setItem('accounts', JSON.stringify(accounts))
  }, [])

  return (
    <>
    <section className="section is-large">
      <div className="card">
      <div className="logo-container">

        <a href="#" target="_blank">
          <img src={bankoLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="title">Banko</h1>
      <h2 className="subtitle">Some Tagline relating sa upuan</h2>
      <div className="container">
        <RegistrationForm />
      </div>

      <div className="container">
        <LoginForm />
      </div>
      </div>
    </section>
    </>
  )
}

export default App
