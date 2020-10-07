import React, { useState, useEffect } from "react";
import "./Home.css";

const cards = [
  require("../../images/1H.png"),
  require("../../images/2H.png"),
  require("../../images/3H.png"),
  require("../../images/4H.png"),
  require("../../images/5H.png"),
  require("../../images/6H.png"),
  require("../../images/7H.png"),
  require("../../images/8H.png"),
  require("../../images/9H.png"),
  require("../../images/1D.png"),
  require("../../images/2D.png"),
  require("../../images/3D.png"),
  require("../../images/4D.png"),
  require("../../images/5D.png"),
  require("../../images/6D.png"),
  require("../../images/7D.png"),
  require("../../images/8D.png"),
  require("../../images/9D.png"),
  require("../../images/1C.png"),
  require("../../images/2C.png"),
  require("../../images/3C.png"),
  require("../../images/4C.png"),
  require("../../images/5C.png"),
  require("../../images/6C.png"),
  require("../../images/7C.png"),
  require("../../images/8C.png"),
  require("../../images/9C.png"),
  require("../../images/1S.png"),
  require("../../images/2S.png"),
  require("../../images/3S.png"),
  require("../../images/4S.png"),
  require("../../images/5S.png"),
  require("../../images/6S.png"),
  require("../../images/7S.png"),
  require("../../images/8S.png"),
  require("../../images/9S.png"),
];

const Home = () => {
  const [card1, setCard1] = useState(undefined);
  const [card2, setCard2] = useState(undefined);
  const [card3, setCard3] = useState(undefined);

  useEffect(() => {
    random3Cards();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    random3Cards();
  };

  const randomNumber = (number) =>
    Math.floor(Math.random() * Math.floor(number));

  const random3Cards = () => {
    const MAX_NUMBER = 36;
    const number1 = randomNumber(MAX_NUMBER);
    let number2 = randomNumber(MAX_NUMBER);
    while (number2 === number1) {
      number2 = randomNumber(MAX_NUMBER);
    }
    let number3 = randomNumber(MAX_NUMBER);
    while (number3 === number1 || number3 === number2) {
      number3 = randomNumber(MAX_NUMBER);
    }

    setCard1(cards[number1]);
    setCard2(cards[number2]);
    setCard3(cards[number3]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="container">
        <div className="images">
          <img src={card1} className="App-logo" alt="logo" />
          <img src={card2} className="App-logo" alt="logo" />
          <img src={card3} className="App-logo" alt="logo" />
        </div>
        <input className="submitButton" type="submit" value="Random" />
      </form>
    </div>
  );
};

export default Home;
