import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/Header'
import LoginRegister from './components/Login-register'
import SignOutButton from './components/SignOutButton'

createRoot(document.getElementById('root')).render(
    <StrictMode>
      <Header />
      <SignOutButton />
      <LoginRegister />
    </StrictMode>
)
