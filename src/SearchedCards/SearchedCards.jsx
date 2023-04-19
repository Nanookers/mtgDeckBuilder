import React from 'react'
import './SearchedCard.css'

export const SearchedCards = ({card}) => {
    // This Maps through the list of objects, if the card is found,  
  return (
    <div className="card">
        <div className="flexBoxLeft">
            <img src={card.image_uris.art_crop} alt={card.name} />
            {/* This will also have buttons */}
        </div>
        <div className="flexBoxRight">
            <h2>{card.name}</h2>
                <div className="cardOracle">
                    {/* If the card has no ability, it renders the flavor text in italics*/}
                    <p style={{fontStyle: card.oracle_text ? 'normal' : 'italic'}}>
                        {card.oracle_text ? card.oracle_text : card.flavor_text}
                    </p>
                </div>
        </div>
    </div>
  )
}
