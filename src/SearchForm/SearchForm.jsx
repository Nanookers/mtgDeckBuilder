import React from 'react'
import { useState, useEffect } from 'react';

import './SearchForm.css'

import { SearchedCards } from '../SearchedCards/SearchedCards';

export const SearchForm = () => {

    // This Sets the search bar.
    const [cardToSearch, setCardToSearch] = useState('')

    // This allows for the search to be rendered on the screen
    const [apiResponse, setApiResponse] = useState(null)

    // This is for the loading... while we wait for the MTG api to return info
    const [isLoading, setIsLoading] = useState(false)

    // This handles the change for the search bar
    const handleSearchInput = (event) =>{
        setCardToSearch(event.target.value)
    }

    // This is the fetch request to grab the single Searched Card
    const searchForCard = async (event) => {
        event.preventDefault();
        setIsLoading(true); //Waiting for the API to return
        try {
            const response = await fetch(`https://api.scryfall.com/cards/search?q=${cardToSearch}`);
            const data = await response.json();
            setApiResponse(data.data)
            console.log(apiResponse);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
    }

    useEffect(() => {
        console.log(apiResponse);
    }, [apiResponse]);

  return (
    <>
    <form onSubmit={searchForCard}>
        <input type="text"
                placeholder='Search Card'
                    value={cardToSearch}
                        onChange={handleSearchInput}/>
        <button type='submit'>Search</button>
    </form>
    {/* Draw a Card Waits for the API to Load */}
    {!apiResponse ? <p>Tutor for a card</p> : null} 
    <div className="list">
        {apiResponse && apiResponse.map((card) => {
            return (
                <div className="cardSize">
                    <SearchedCards card={card} key={card.id} />
                </div>
            )
        })}
    </div>
    </>
  )
}
