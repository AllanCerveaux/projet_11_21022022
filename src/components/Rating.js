import React from 'react'
import { IdGenerator } from '../lib/IdGenerator'

export default function Rating({ isActive }) {
  return (
    <span key={IdGenerator()} className={`icon-rating ${ isActive ? 'active' : '' }`}>&#9733;</span>
  )
}
