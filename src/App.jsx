import { useState } from 'react'
import bankoLogo from './assets/banko_logo.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RegistrationForm from '/components/RegistrationForm'

function App() {

  return (
    <>
      <div>

        <a href="#" target="_blank">
          <img src={bankoLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Banko</h1>
      <h2>Upo ka muna habang naghihintay</h2>
      <div className="formContainer">
        <RegistrationForm />
      </div>
      <div className="card">
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
