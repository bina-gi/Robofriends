import React from "react";
import "./card.style.css";

export const Card = (props) => {
  return (
    <div className="card">
      <img
        src={`https://robohash.org/set-set5${props.robots.id}180x180`}
        alt={props.robots.name}
      />
      <h2>{props.robots.name}</h2>
      <p>{props.robots.email}</p>
    </div>
  );
};
