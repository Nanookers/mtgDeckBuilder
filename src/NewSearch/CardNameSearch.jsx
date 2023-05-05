import { card } from 'mtgsdk'
import { useState } from 'react'
import React from 'react'

export const CardNameSearch = ({card}) => {

  // This will hold the image associated with the Name we are hovering over
  const [onHoverCard, setOnHoverCard] = useState(null)

  const handleMouseHover = (image) => {
    setOnHoverCard(image)
    
  }
  console.log(onHoverCard);

  return (
    <div className="domRender">
        <div className="cardInfoAll"
          onMouseEnter={() => handleMouseHover(card.image_uris.normal)}>
            <div className="cardName">
                {card.name} 
            </div>
            <div className="cardMana">
                {card.mana_cost}
            </div>    
        </div>
        <div className="cardImage">
            
        </div>
    </div>
  )
}
