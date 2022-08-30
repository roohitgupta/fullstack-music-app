import React, { useState } from "react";
import "./Artist.css";

const ArtistForm = () => {
  const [artistName, setArtistName] = useState("");
  const [dob, setDob] = useState("");
  const [bio, setBio] = useState("");

  async function artistForm(event) {
    event.preventDefault();

    const response = await fetch("http://localhost:5000/api/artist/form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        artistName,
        dob,
        bio,
      }),
    });

    const data = await response.json();
  }

  return (
    <div className='container'>
			
			<form className='form' onSubmit={artistForm}>
        <h5>Artist Name</h5>
				<input
					value={artistName}
					onChange={(e) => setArtistName(e.target.value)}
					type="text"
					placeholder="Artist Name"
				/>
				<br />
        <h5>Date of Birth</h5>
				<input
					value={dob}
					onChange={(e) => setDob(e.target.value)}
					type="text"
					placeholder="Date of Birth"
				/>
				<br />
        <h5>Boi</h5>
        <input 
          type="text"
          value={bio} 
          placeholder="Boi"
          onChange={(e)=> setBio(e.target.value)}
        />
				<input className='submitBtn' type="submit" value="Submit" />
			</form>
		</div>
  );
};

export default ArtistForm;
