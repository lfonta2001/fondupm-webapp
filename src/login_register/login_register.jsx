import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import LoginRegister from './Form.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <LoginRegister />
    </StrictMode>
);
