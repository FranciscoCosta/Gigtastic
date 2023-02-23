import React from 'react'
import './Featured.scss'
import hero from '../../assets/hero.png'
import search from '../../assets/search.png'
function Featured() {
  return (
    <div className='Featured'>
      <div className="Featured__container">
        <div className="Featured-left">
          <h1>Find the Perfect services for <span>YOUR</span> business.</h1>
          <div className="Featured__search">
            <div className="Featured__search-input">
              <img src={search} alt="search-icon" />
              <input type="text" placeholder='Try "Buliding a Website"' />
            </div>
            <button>Search</button>
          </div>
          <div className="Featured__popular">
            <span>Popular: </span>
            <button>Web Design</button>
            <button>Logo Design</button>
            <button>Build Api</button>
            <button>AI Services</button>

          </div>
          
        </div>
        <div className="Featured-right">
          <img src={hero} alt="hero" />
          </div>
        </div>
    </div>
  )
}

export default Featured