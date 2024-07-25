import React from 'react'
import Home from './pages/Homepage/Home'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'

export default function App() {
  return (
    <div> 
    <Header/>
    <Outlet/>
    </div>
  )
}
