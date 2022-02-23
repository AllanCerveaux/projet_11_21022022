import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../containers/About'
import Errors from '../containers/Errors'
import Home from '../containers/Home'
import Lodging from '../containers/Lodging'


export default function MainRoutes() {
  return (
    <Routes>
      <Route path="" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/lodging/:id" element={<Lodging />}/>
      <Route path="*" element={<Errors />}/>
    </Routes>
  )
}
