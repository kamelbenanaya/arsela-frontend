import React, { useState } from 'react'
import './hamburgerMenu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
export const HamburgerMenu = () => {
    const [menulist,setMenuList] = useState(false)
    const [sousMenuList,setSousMenuList] = useState(false)

  return (
    // && ||
    <div className='wrapper-hamburger'>
        <FontAwesomeIcon icon={faBars} className="hamburgerIcon" onClick={()=>setMenuList(!menulist)}/>
        <ul className="menulist"  style={{display: menulist ? "block" : "none" }}>
             
                    <li><a href="./">Home</a></li>
                    <li><a href="./">About us</a></li>
                    <li><a href="./">Contact us</a></li>
                    <li><a href="#">Categories <i className="arrow down-hamburger" onClick={()=>setSousMenuList(!sousMenuList)}></i></a>
                        { sousMenuList && <ul className="sousmenulist" 
                        // style={{display: sousMenuList ? "block" : "none" }} 
                        > 
                        <li><a href="./">Laptop</a></li>
                        <li><a href="./">Phone</a></li>
                        <li><a href="./">Accessoires</a></li>
                        </ul>}
                    </li>

                </ul>
    
    
    
     </div>
    
  )
}
