import React, { useState }from 'react'
import { BrowserRouter as Router, Link, Route } from "react-router-dom"
import Player from './Components/Player'
import store from './store/index'

function App() {
  const playerName = store(state => state.playerName)
  const setPlayerName = store(state => state.setPlayerName)
  const handleSubmit = (evt) => {
    evt.preventDefault()
    alert(`Submitting ${playerName}`)
  }
   
  return (
    <Router>
      <div className='container'>
        <Link to='/' exact>HOME</Link><br />
          <form onSubmit={handleSubmit}>
            <label>
              Player Name (case sensitive):
            <input
              type="text"
              value={playerName}
              onChange={(evt)=> setPlayerName(evt.target.value)}
            />
          </label>
        </form>
        <Link to={`/player/${playerName}`}><button>GET STATS</button></Link>
        <Route path='/player/:name' component={Player}/> 
      </div>
    </Router>
  );
}



export default App;
