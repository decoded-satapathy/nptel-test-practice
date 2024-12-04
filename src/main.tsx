import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="bg-teal-100 min-h-screen h-auto  w-auto">
      <App />
    </div>
  </StrictMode>,
)
