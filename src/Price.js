import React from "react";
import Button from "react-bootstrap/Button";

import product from "./product";

export default function Price() {
  return <Button variant="primary">{product.price}$</Button>;
}
