import React, { useState } from "react";
import "./Home.css";
import shortHash from "short-hash";

const Home = () => {
  const [fullLink, setFullLink] = useState("");
  const [shortLink, setShortLink] = useState("");

  const onChangeFullLink = (event) => {
    setFullLink(event.target.value);
  };

  const handleSubmit = (event) => {
    setShortLink(shortHash(fullLink));
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="container">
      <input
        className="fullLinkInput"
        type="text"
        name="fulllink"
        value={fullLink}
        onChange={onChangeFullLink}
        placeholder='https://...'
      />
      <br />
      <input className="submitButton" type="submit" value="Get Short Link" />
      <br />
      <label className="shortLinkLabel">{shortLink ? `http://short.language123.net/${shortLink}` : ''}</label>
    </form>
  );
}

export default Home;
