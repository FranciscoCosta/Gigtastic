import React, {useContext} from 'react'
import './CatCard.scss'
import { Context } from '../../Context/context';
import { useNavigate } from 'react-router-dom';


function CatCard({item}) {

  const navigate = useNavigate();
  const { setCategory, setSearch, setuserFilter } = useContext(Context);

  const handleClick = (category) => {
    setCategory(category);
    setSearch("");
    setuserFilter([]);
    navigate("/gigs");
    

  }
  return (
        <div 
        onClick={()=>handleClick(item.category)}
        className='CatCard'>
            <img src={item.img} alt="" />
            <p className='descripton'>{item.desc} </p>
            <h2 className='title'>{item.title}</h2>
            </div>
  )
}

export default CatCard