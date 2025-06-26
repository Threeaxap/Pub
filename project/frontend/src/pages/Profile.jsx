import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from 'react-router'
import ProfileLayout from './ProfileLayout'
import ProfileCart from './ProfileCart';
import Favourite from './Favourite';
import Orders from './Orders';

const Profile = () => {
  return (
    <>
        <ProfileLayout/>
        <Routes>
            <Route path="/cart" element={<ProfileCart/>}/>
            <Route path="/fav" element={<Favourite/>}/>
            <Route path='/orders' element={<Orders/>}/>
        </Routes>
    </>
  )
}

export default Profile