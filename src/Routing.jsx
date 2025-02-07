import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './Pages/Landing/Landing'
import Orders from './Pages/Orders/Orders'
import Payment from './Pages/Payment/Payment'
import SignUp from './Pages/Auth/SignUp'
import Cart from './Pages/Cart/Cart'

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/payment" element={<Payment/>} />
        <Route path="/auth" element={<SignUp/>} />
        <Route path="/cart" element={<Cart/>} />  
      </Routes>
    </Router>
  )
}

export default Routing