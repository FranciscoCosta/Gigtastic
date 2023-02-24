import React from 'react'
import { Featured, Slide } from '../../Components/index'
import './Home.scss'

function Home() {
  return (
    <div className='Home'>
      <Featured/>
      <Slide/>
    </div>
  )
}

export default Home