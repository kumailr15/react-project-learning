import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

let arr=["Kumail","Haani","Haider"];
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App Arr={arr} />
    <App Arr={arr}/>
  </StrictMode>,
)
