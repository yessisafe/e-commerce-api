import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import imagenVacio from "../../assets/camara.png";
import "./carta.scss";

const Carta = ({ name, _id, src, precio, marca }) => {
  return (
    <>
      <div className="col-3">
        <Card border="info" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={src || imagenVacio} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              <p className="marca-item"> {marca} </p>

              <p className="precio-item"> $ {precio} </p>
            </Card.Text>
            <div className="boton-div">
              <Button variant="primary" className="boton-carta">
                  Go to Buy
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Carta;
