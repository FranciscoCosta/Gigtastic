import React, {useState} from 'react'
import './Gigs.scss'
import down from '../../assets/down.png'
import {gigs} from '../../data'
import GigCards from '../../Components/GigCards/GigCards'

function Gigs() {
  const [sort, setSort] = useState("sales")
  const [open, setOpen] = useState(false)


  const reSort = (type)=>{
    setSort(type)
  }

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
            <span>Budget</span>
            <input type="text" name="" id="" placeholder='min'/>
            <input type="text" name="" id="" placeholder='max'/>
            <button>Apply</button>
          </div>
          <div className="Gigs__menu-right">
            <span className='Menu__sortBy'>SortBy</span>
            <span className='Menu__sortType'>{sort === "sales" ? "Best Selling" : "Newest"}</span>
            <img src={down} alt="down-arrow-icon"  onClick={()=>setOpen(!open)}/>
            {open && <div className="Sort__menu">
              <span onClick={()=>reSort("createdAt")}>Newest</span>
              <span onClick={()=>reSort("sales")}>Best Selling</span>
            </div>}
          </div>
        </div>
        <div className="Gigs__cards">
          {gigs.map((gig)=>(
            <GigCards key={gig.id} item={gig}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Gigs