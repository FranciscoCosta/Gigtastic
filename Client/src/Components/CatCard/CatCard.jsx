import React from 'react'
import './CatCard.scss'
import { Link } from 'react-router-dom'

function CatCard({item}) {
  return (
        <Link to="/gigs">
        <div className='CatCard'>
            <img src={item.img} alt="" />
            <p className='descripton'>{item.desc} </p>
            <h2 className='title'>{item.title}</h2>
            </div>
            </Link>
  )
}

export default CatCard