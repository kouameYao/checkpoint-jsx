import React from "react";
import Card from "react-bootstrap/Card";

import product from "./product";

export default function Name() {
  return <Card.Title>{product.name}</Card.Title>;
}
