import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

console.log(
  '%c Crafted by Kushagra Kumar %c https://github.com/kk376/portfolio ',
  'background: #89b4fa; color: #1e1e2e; font-weight: bold; padding: 4px 8px; border-radius: 4px 0 0 4px;',
  'background: #313244; color: #cdd6f4; padding: 4px 8px; border-radius: 0 4px 4px 0;'
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

