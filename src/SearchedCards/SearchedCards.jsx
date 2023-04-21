import React from 'react'
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './SearchedCard.css'

import { addCard } from '../reducers';


export const SearchedCards = ({card}) => {

    const dispatch = useDispatch();

    const addToDeck = (event) => {
        let cardId = card.id
        dispatch(addCard({ id: cardId}))
    };
    
  return (
    <div className="card">
        <div className="flexBoxLeft">
            <img src={card.image_uris.art_crop} alt={card.name} />
            <button className="buttonAdd" onClick={addToDeck} />
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
