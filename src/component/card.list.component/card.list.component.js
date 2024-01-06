import React from "react";
import { Card } from "../card.component/card.component";
import "./card.list.style.css";

export const CardList = (props) => {
  return (
    <div className="card-list">
      {props.robots.map((robots) => (
        <Card robots={robots} key="robots.id" />
      ))}
    </div>
  );
};
