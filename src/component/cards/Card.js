import React from "react";
import { data } from "../../helpers/Data";
import "./Card.css";

function Card() {
  return (
    <div className="card-container">
      {data.map((card) => {
          // Map içine yazdığımız arrow func. için return
        return (
          <div className="cards" key={card.id}>
            <div className="title">
              <h2>{card.title}</h2>
            </div>
            <img src={card.image} alt={card.title}></img>
            <div className="card-over">
              <p>{card.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
