import React from 'react'
import "./card.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { faCommentAlt } from '@fortawesome/free-regular-svg-icons'


import msi from '../../images/msi.png'


function Card() {
  return (
    
    <div className='card'>
        
        <div className='firstRow'> 
        <div className ="stock">in stock</div>
        <FontAwesomeIcon icon={faHeart} className="heart"/> 
        </div>
        <div className='promotion'> 
        <p >Promotion -20%</p>
        </div>
        <div>
            <img className='msipc' src={msi} alt="aaa"></img>
        </div>
        <div className='alldescription'>
        <p className='titreproduct'>Optix MAG241C</p>
        <p className='nomproduct'> Moniteur 23,6" à résolution Full HD 1920 x 1080</p>
        <div className='stars'>
        <FontAwesomeIcon icon={faStar} className="star"/> 
        <FontAwesomeIcon icon={faStar} className="star"/> 
        <FontAwesomeIcon icon={faStar} className="star"/> 
        <FontAwesomeIcon icon={faStar} className="star"/> 
        <FontAwesomeIcon icon={faStar} className="star"/> </div>
        <p className='descproduct'> Dalle incurvée 1500R pour un meilleur confort taux de reffffff</p>
        </div>
        <div className='pricereview'>
          <div className='price'><p className='prixunit'>560</p><p className='tnd'>TND</p></div>
          <div className='review'><FontAwesomeIcon icon={faCommentAlt} className="facomment"/>  <a href="./" style={{color:"#B4B4B4"}}>2 Reviews</a></div>
        </div>
        <div className='priceaddtocart'>
        <div className='pricetoadd'><p className='prixunitreal'>2500</p><p className='tndreal'>TND</p></div>
        <button className='addtocart'>Add to cart</button>
        </div>
    </div>
  )
}

export default Card