import React from "react";
import Navbar from "./components/Navbar";
import SongsList from "./components/Song/SongsList";
import ArtistForm from "./components/Artists/ArtistForm";
import SongForm from "./components/Song/SongForm";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<SongsList />} />
          <Route
            path="/add"
            element={
              <div className="row">
                <div className="col-6">
                  <SongForm />
                </div>
                <div className="col-6">
                  <ArtistForm />
                </div>
              </div>
            }
          />
        </Routes>
      </div>
    </>
  );
};

export default App;
