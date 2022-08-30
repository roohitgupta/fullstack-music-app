import React, { useState } from "react";

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
      <div className="card">
			<form className='form-group p-4' onSubmit={artistForm}>
        <div className="pb-2">
          <label>Artist Name</label>
				<input
					value={artistName}
					onChange={(e) => setArtistName(e.target.value)}
					type="text"
          className="form-control"
					placeholder="Artist Name"
				/></div>
        <div className="pb-2">
          <label>Date of Birth</label>
				<input
					value={dob}
					onChange={(e) => setDob(e.target.value)}
					type="text"
          className="form-control"
					placeholder="Date of Birth"
				/>
        </div>
        <div className="pb-2">
          <label>Bio</label>
        <input 
          type="text"
          value={bio} 
          placeholder="Boi"
          className="form-control"
          onChange={(e)=> setBio(e.target.value)}
        />
      </div>
        <div className="py-2">
				<input className='submitBtn form-control' type="submit" value="Submit" />
      </div>
			</form>
      </div>
		</div>
  );
};

export default ArtistForm;
