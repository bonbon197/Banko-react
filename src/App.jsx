import { useState } from 'react'
import bankoLogo from './assets/banko_logo.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RegistrationForm from '/components/RegistrationForm'

function App() {

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
      </div>
    </section>
    </>
  )
}

export default App
