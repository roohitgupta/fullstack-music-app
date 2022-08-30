import React, { useState } from "react";
import "./Song.css";

const SongForm = () => {
  const [songName, setSongName] = useState("");
  const [dateReleased, setDateReleased] = useState("");
  const [artWork, setArtWork] = useState("");
  const [artists, setArtists] = useState("");

  async function songForm(event) {
    event.preventDefault();

    const response = await fetch("http://localhost:5000/api/song/form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        songName,
        dateReleased,
        artWork,
        artists,
      }),
    });

    const data = await response.json();
  }

  return (
    <div className="container">
      <form className="form" onSubmit={songForm}>
        <h5>Artist Name</h5>
        <input
          value={songName}
          onChange={(e) => setSongName(e.target.value)}
          type="text"
          placeholder="Artist Name"
        />
        <br />
        <h5>Date of Birth</h5>
        <input
          value={dateReleased}
          onChange={(e) => setDateReleased(e.target.value)}
          type="text"
          placeholder="Date of Birth"
        />
        <br />
        <h5>Boi</h5>
        <input
          type="text"
          value={artWork}
          placeholder="Boi"
          onChange={(e) => setArtWork(e.target.value)}
        />
         <h5>Boi</h5>
        <input
          type="text"
          value={artists}
          placeholder="Boi"
          onChange={(e) => setArtists(e.target.value)}
        />
        <input className="submitBtn" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default SongForm;
