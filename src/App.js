import React from "react";
import Card from "react-bootstrap/Card";

import Name from "./Name";
import Description from "./Description";
import Price from "./Price";
import Image from "./Image";

function hello(prenom = "there !") {
  return "Hello " + prenom;
}

const name = "Jean Junior";

export default function App() {
  return (
    <div style={{ margin: "10px" }}>
      <h2> {hello(name)} </h2>
      <Card style={{ width: "18rem" }}>
        <Image />
        <Card.Body>
          <Name />
          <Description />
          <Price />
        </Card.Body>
      </Card>
    </div>
  );
}
