import React from "react";
import "./../css/card.css";
import image2 from "./../img/2.jpg";

function Card(props) {
  return (
    <div className="card-container">
      <header></header>
      <h2 className="image">
        <img className="avatar-img" src={image2} alt={props.name} />
      </h2>
      <h1 className="personal-details">
        {props.name} {props.surname}
      </h1>
      <div>
        <h1 className="heading">Rewards</h1>
        <div className="rewards-container">
          <div className="bronze-medals">
            <h2 className="medal-category">Bronze</h2>
            <h1 className="number">{props.bronze}</h1>
          </div>
          <div className="silver-medals">
            <h2 className="medal-category">Silver</h2>
            <h1 className="number">{props.silver}</h1>
          </div>
          <div className="gold-medals">
            <h2 className="medal-category">Gold</h2>
            <h1 className="number">{props.gold}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
