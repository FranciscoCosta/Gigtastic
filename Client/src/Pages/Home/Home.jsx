import React from 'react'
import { Featured, Features, Slide } from '../../Components/index'
import './Home.scss'

function Home() {
  return (
    <div className='Home'>
      <Featured/>
      <Slide/>
      <Features/>
    </div>
  )
}

export default Home