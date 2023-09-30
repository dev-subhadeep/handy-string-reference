import React from "react"
import { Route, Routes } from "react-router-dom"
import Login from "../pages/Login"
import Profile from "../pages/Profile"
import Home from "../pages/Home"
import PrivateRoutes from "./PrivateRoutes"
import Register from "../pages/Register"

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<PrivateRoutes />}>
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  )
}

export default AllRoutes
