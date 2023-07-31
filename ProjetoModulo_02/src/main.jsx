import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import Bootstrap from './pages/Bootstrap/Bootstrap.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>       
      </ThemeProvider>
    </AuthProvider> 
  </React.StrictMode>,
)
