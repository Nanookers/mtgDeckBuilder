import { useState, useEffect } from 'react'
import './App.css'

import { SearchForm } from './SearchForm/SearchForm'

function App() {
  
  return (
    // Wrap your component tree with Provider and pass the store as a prop
      <div className="App">
        <SearchForm />
      </div>
  )
}

export default App
