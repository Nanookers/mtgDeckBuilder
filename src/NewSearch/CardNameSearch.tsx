import { card } from 'mtgsdk'
import React from 'react'

export const CardNameSearch = ({card}) => {
  return (
    <div className="cardInfoAll">
        <div className="cardName">
            {card.name} 
        </div>
        <div className="cardMana">
            {card.mana_cost}
        </div>    
    </div>
  )
}
