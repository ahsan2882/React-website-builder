import React from 'react'
import Navbar05Css from './Navbar05.module.css'
export default function Nav5Asset() {
    return (
        <>
<div className={`${Navbar05Css['menu-bars']}`}>
  <ul>
  <li className={`${Navbar05Css.active}`}><a href={2}><i className="fas fa-home"></i> Home</a></li>
  <li><a href={2}><i className="fas fa-id-card-alt mr-2"></i>About US</a>
  
  <div className={`${Navbar05Css['sub-menu']}`}>
  <ul>
  <li> <a href={2}> Mission </a> </li>
  <li> <a href={2}> vision </a> </li>
  <li> <a href={2}> team </a> </li>
  </ul>
  </div>
  </li>
  

  <li><a href={2}><i className="fab fa-servicestack mr-2"></i>Serices</a>
      <div className={`${Navbar05Css['sub-menu']}`}>
          <ul>
          <li> <a href={2}> Web designing  </a> </li>
          <li className={`${Navbar05Css['hover-me']}`}> <a href={2}> Marketing <i className="fas fa-angle-right"></i> </a> 
         <div className={`${Navbar05Css['sub-menu-2']}`}>
          <ul>
              <li> <a href={2}> Social Media  </a> </li>
              <li> <a href={2}> SEO </a> </li>
              <li> <a href={2}> Emial Marketing </a> </li>
              </ul>
          </div> 
          </li>
          <li className={`${Navbar05Css['hover-me']}`}> <a href={2}> Mobile app <i className="fas fa-angle-right"></i></a>
          
          </li>
              <div className={`${Navbar05Css['sub-menu-2']}`}>
                  <ul>
                      <li> <a href={2}> Andriode app  </a> </li>
                      <li> <a href={2}> ios app </a> </li>
                      <li> <a href={2}> iconic app </a> </li>
                      <li> <a href={2}> Flutter app </a> </li>
                      <li> <a href={2}> Unity app </a> </li>
                      </ul>
                  </div> 
           
          
      
      
  
  
  
      
      </ul>
          </div>
  </li>
  <li><a href={2}><i className="fas fa-user-alt mr-2"></i>Clients</a></li>
  <li><a href={2}><i className="fas fa-warehouse mr-2"></i>Invedtors</a></li>
  <li><a href={2}><i className="fas fa-tags mr-2"></i>Pricing</a></li>
  <li><a href={2}><i className="fas fa-allergies mr-2"></i>Trainings</a></li>
  <li><a href={2}><i classNameName="far fa-id-card mr-2"></i>Contact</a></li>
  </ul>    
  </div>

        </>
    )
}
