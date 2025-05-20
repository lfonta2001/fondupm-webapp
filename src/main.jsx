import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Header from './components/Header';
import SignOutButton from './components/SignOutButton';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Header />
        <SignOutButton />
        <h1 className='mt-16'> Main page </h1>
        <a
            href='/login_register/login_register.html'
            className='cursor-pointer'>
            Login/Register
        </a>
    </StrictMode>
);
