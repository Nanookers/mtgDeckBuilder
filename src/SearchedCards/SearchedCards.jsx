import React from 'react'

export const SearchedCards = ({card}) => {
    // This Maps through the list of objects, if the card is found,  
  return (
    <>
        <img src={card.image_uris.png} alt={card.name} />
    </>
  )
}
