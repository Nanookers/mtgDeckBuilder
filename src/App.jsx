import { useState, useEffect } from 'react'
import './App.css'
import store from './store';
import { SearchForm } from './SearchForm/SearchForm'
import { useSelector } from 'react-redux';

function App() {

  console.log(store.getState());
  
  return (
    // Wrap your component tree with Provider and pass the store as a prop
      <div className="App">
        <SearchForm />
      </div>
  )
}

export default App
