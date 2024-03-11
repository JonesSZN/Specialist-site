import { useState } from "react";
import ItemDescription from "./ItemDescription";

const Card = ({ name, description }) => {
  return (
    <div className="grid grid-cols-1 gap-2">
      <ItemDescription name={name} description={description} />
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  );
};

export { Card };
