import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import imagenVacio from "../../assets/camara.png"
import './carta.scss'


const Carta = ({ name, _id, src, description }) => {
  


  return (
    <>
      <div className="col-3">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={src || imagenVacio } />
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
