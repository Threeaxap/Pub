import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Layout from './pages/Layout';
import Register from './pages/Register';
import Login from './pages/Login'
import Goods from './pages/Goods';
import Footer from './components/Footer';
import Profile from './pages/Profile';
import WithLayout from './pages/WithLayout';


function App() {

  return (
  <>
    <Layout/>
    <Routes>
      <Route element={<WithLayout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path='/goods' element={<Goods/>}/>
      </Route>
      
      <Route path='/profile' element={<Profile/>}/>
    </Routes>
    <Footer/>

  </>


  )
}

export default App