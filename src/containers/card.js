import React from "react";
import "./cards.css";

const Card = props => {
  return (
    <div className="card">
      <img alt={props.id} src={`https://robohash.org/${props.name}?200x200`}></img>
      <div>
        <h2>{props.name}</h2>
      </div>
    </div>
  );
};
export default Card;
