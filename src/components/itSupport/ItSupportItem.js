import React from 'react'
import "./itsupportItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPiggyBank } from "@fortawesome/free-solid-svg-icons";

const ItSupportItem = ({children,title,description}) => {
  return (
    <div  className='cardsupport'>
{/*  */}{children}
<h4 className='titlesupportitem'>{title}</h4>
<p className='supportcardparagraph'>{description}</p>
 
    </div>
  )
}

export default ItSupportItem