import React from 'react'
import './Footer.scss'
import {BsInstagram, BsGithub, BsLinkedin} from 'react-icons/bs'


function Footer() {
  return (
    <div className='Footer'>
      <div className="Footer__container">
        <div className="Footer__container__top">
          <div className='Footer-categories'>
            <h1>Categories:</h1>
              <span>Web and Mobile Design</span>
              <span>Logo Design</span>
              <span>Build Api</span>
              <span>Build Website</span>
              <span>Social Media Design</span>
              <span>Illustration</span>
              <span>AI Art</span>
              <span>Digital Marketing</span>
          </div>
          </div>
        <div className="Footer__container__bottom">
          <div className="Footer-container-social">
          <div className="copyright">
          <p className="p-text">@2023 Francisco Costa</p>
          <p className="p-text">Todos os direitos reservados.</p>
        </div>
        <div className="social">
        <div>
            <BsLinkedin
            style={{cursor: "pointer"}}
            onClick={(e) => {
              window.open("https://www.linkedin.com/in/francisco-costa-dev/", "_blank");
      }}/>
        </div>
        <div>
            <BsGithub
            style={{cursor: "pointer"}}
            onClick={(e) => {
              window.open("https://github.com/FranciscoCosta", "_blank");
      }} 
            />
        </div>
        <div>
            <BsInstagram
            style={{cursor: "pointer"}}
            onClick={(e) => {
              window.open("https://www.instagram.com/tuga_no_brasil/", "_blank");
      }}/>

          </div>
          </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Footer