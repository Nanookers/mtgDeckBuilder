import React from 'react'
import './SearchedCard.css'

export const SearchedCards = ({card}) => {
    // This Maps through the list of objects, if the card is found,  
  return (
    <div className="card">
        <div className="flexBoxLeft">
            <img src={card.image_uris.png} alt={card.name} />
        </div>
        <div className="flexBoxRight">
            <h2>{card.name}</h2>
                <div className="cardOracle">
                    <p>{card.oracle_text}</p>
                </div>
        </div>
    </div>
  )
}
