import React from 'react'
import { Route, Routes } from 'react-router'
import NavBar from './components/NavBar'
import Cart from './pages/Cart'
import Home from './pages/Home'
import Login from './pages/Login'
import MyScans from './pages/MyScans'
import PhysicianHome from './pages/physician/PhysicianHome'
import PhysicianLogin from './pages/physician/PhysicianLogin'
import TransactionLists from './pages/physician/TransactionLists'
import Register from './pages/Register'


const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/physician/login" element={<PhysicianLogin/>} />
        <Route path="/physician/scans" element={<TransactionLists/>} />
        <Route path="/physician" element={<PhysicianHome/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/scans" element={<MyScans/>} />
        <Route path="/" element={<Home/>} />
      </Routes>
    </div>
  )
}

export default App
