import React from "react";
import Card from "./card";

const listarobota = props => {
  return (
    <div className="flex">
      {props.robots.map((robot, ri) => {
        return <Card key={ri} id={robot.id} name={robot.name} />;
      })}
    </div>
  );
};
export default listarobota;
