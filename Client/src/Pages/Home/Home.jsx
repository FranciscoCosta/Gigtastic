import React from 'react'
import { Featured, Features, ProjCard, Slide } from '../../Components/index'
import './Home.scss'

function Home() {
  return (
    <div className='Home'>
      <Featured/>
      <Slide/>
      <Features/>
      <ProjCard/>
    </div>
  )
}

export default Home