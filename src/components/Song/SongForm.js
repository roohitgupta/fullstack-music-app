import React, { useEffect, useState } from "react";

const SongForm = () => {
  const [songName, setSongName] = useState("");
  const [dateReleased, setDateReleased] = useState("");
  const [artWork, setArtWork] = useState("");
  const [artists, setArtists] = useState("");
  const [artistData, setArtistData] = useState([]);

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
    console.log(data);
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
    getArtistData();
  }, []);

  return (
    <div className="container">
      <div className="card">
        <form className="form-group p-4" onSubmit={songForm}>
          <div>
            <label>Song Name</label>
            <input
              value={songName}
              onChange={(e) => setSongName(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Song Name"
            />
          </div>
          <div>
            <label>Released Date</label>
            <input
              value={dateReleased}
              onChange={(e) => setDateReleased(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Released Date"
            />
          </div>
          <div>
            <label>Artwork</label>
            <input
              type="text"
              value={artWork}
              placeholder="ArtWork"
              className="form-control"
              onChange={(e) => setArtWork(e.target.value)}
            />{" "}
          </div>

          <div>
            <label>Artist</label>
            <select value={0} name="artists" className="form-control" onChange={(e) => setArtists(e.target.value)}>
              {artistData.map((e) => (
                <option key={e._id} value={e._id}>
                  {e.artistName}
                </option>
              ))}
            </select>
          </div>
          <div className="pt-2">
            <input
              className="submitBtn form-control"
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SongForm;
