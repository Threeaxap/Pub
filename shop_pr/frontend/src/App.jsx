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
import Aurora from './components/Test/Bg.jsx';
import TiltedCard from './components/Test/Carddesign.jsx';
import Carousel from './components/Test/Carouesl.jsx';
import Carouselcomp from './components/Test/Carouselcomp.jsx';

function App() {

  return (
  <> 
    <Aurora/>
    <TiltedCard
      imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
      altText="Kendrick Lamar - GNX Album Cover"
      captionText="Kendrick Lamar - GNX"
      containerHeight="300px"
      containerWidth="300px"
      imageHeight="300px"
      imageWidth="300px"
      rotateAmplitude={12}
      scaleOnHover={1.2}
      showMobileWarning={false}
      showTooltip={true}
      displayOverlayContent={true}
      overlayContent={
        <p className="tilted-card-demo-text">
          Kendrick Lamar - GNX
        </p>
      }
    />
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