import React from 'react'
import './Gigs.scss'
import down from '../../assets/down.png'

function Gigs() {
  return (
    <div className='Gigs'>
      <div className="Gigs__container">
        <span className='Gigs__title-info'>Gigtastic: Graphic & Design</span>
        <h1>AI Artist</h1>
        <p>
          Explore BLA BLA BLA BLA BLA BLA
        </p>
        <div className="Gigs__menu">
          <div className="Gigs__menu-left">
            <span>Budged</span>
            <input type="text" name="" id="" placeholder='min'/>
            <input type="text" name="" id="" placeholder='max'/>
            <button>Apply</button>
          </div>
          <div className="Gigs__menu-right">
            <span className='Menu__sortBy'>SortBy</span>
            <span className='Menu__sortType'>Best Selling</span>
            <img src={down} alt="down-arrow-icon" />
            <div className="Sort__menu">
              <span>Newest</span>
              <span>Best Selling</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gigs