import React from 'react'
import LoginForm from '../components/LoginForm'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Link to="/"><LoginForm /></Link>
    </div>
  )
}

export default Home
