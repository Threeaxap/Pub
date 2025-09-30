import { StrictMode } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Layout from './pages/Layout';
import Register from './pages/Register';
import Login from './pages/Login'
import Goods from './pages/Goods';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
   <BrowserRouter>
    <App />
   </BrowserRouter>,
)
