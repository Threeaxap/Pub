import React from 'react'
import Layout from './Layout'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'

const WithLayout = () => {
  return (
    <>
      <Layout/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default WithLayout