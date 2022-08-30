import React, { useState, useEffect } from "react";

const SongsList = () => {
  const [songData, setSongData] = useState([]);
  const [artistData, setArtistData] = useState([]);

  async function songListData() {
    try {
      const response = await fetch("http://localhost:5000/api/songlist");
      const data = await response.json();
      console.log(data);
      setSongData(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getArtistData() {
    try {
      const response = await fetch("http://localhost:5000/api/artists");
      const data = await response.json();
      console.log(data);
      setArtistData(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    songListData();
    getArtistData()
  }, []);

  return (
    <div className="song-container">
      <table className="table">
        <thead>
          <tr>
            <th>Artwork</th>
            <th>Song Name</th>
            <th>Date of Release</th>
            <th>Artists</th>
            <th>Rate</th>
          </tr>
        </thead>
        {songData.map((e) => (
          <tbody key={e._id}>
            <tr>
              <th>{e.artWork}</th>
              <td>{e.songName}</td>
              <td>{e.dateReleased}</td>
              <td>{e.artists}</td>
              <td>ajfnudf</td>
            </tr>
          </tbody>
        ))}
      </table>
      <br />
      <br />
      <table className="table">
        <thead>
          <tr>
            <th>Artists Name</th>
            <th>Date of Birth</th>
            <th>songs</th>
          </tr>
        </thead>
        {artistData.map((e) => (
          <tbody key={e._id}>
            <tr>
              <th>{e.artistName}</th>
              <td>{e.dob}</td>
              <td>{e.bio}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default SongsList;
