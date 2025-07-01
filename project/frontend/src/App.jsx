import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Layout from './pages/Layout';
import Register from './pages/Register';
import Login from './pages/Login'
import Goods from './pages/Goods';
import Footer from './components/Navigation/Footer';
import Profile from './pages/Profile/Profile';
import ProfileCart from './pages/Profile/ProfileCart';
import Favourite from './pages/Profile/Favourite';
import Orders from './pages/Profile/Orders';
import ProfileInfo from './pages/Profile/ProfileInfo';

function App() {

  return (
  <>
    <Layout/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path='/goods' element={<Goods/>}/>     
        <Route path='/profile' element={<Profile/>}>
          <Route path='cart' element={<ProfileCart/>}/>
          <Route path='fav' element={<Favourite/>}/>
          <Route path='orders' element={<Orders/>}/>
          <Route path='info' element={<ProfileInfo/>}/>
      </Route>
    </Routes>
    <Footer/>

  </>


  )
}

export default App