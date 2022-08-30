import React from 'react'
import Navbar from "./components/Navbar"
import SongsList from './components/Song/SongsList';
import ArtistForm from './components/Artists/ArtistForm'
import SongForm from './components/Song/SongForm'

const App = () => {
  return (
    <div>
    <Navbar />
    <SongForm />
    <ArtistForm />

    </div>
  )
}

export default App
