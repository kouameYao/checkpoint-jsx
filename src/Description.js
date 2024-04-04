import React from "react";
import Card from "react-bootstrap/Card";

import product from "./product";

export default function Description() {
  return <Card.Text>{product.description}</Card.Text>;
}
