import React from 'react'
import Layout from './Layout'
import { Outlet } from 'react-router'

const WithLayout = () => {
  return (
    <>
      <Outlet/>
    </>
  )
}

export default WithLayout