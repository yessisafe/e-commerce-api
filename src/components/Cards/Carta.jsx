import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";

const Carta = ({ name, _id, src, description }) => {
  


  return (
    <>
      <div className="col-2">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={src} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              {description}
            </Card.Text>
            <Button variant="primary">Buy</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Carta;
