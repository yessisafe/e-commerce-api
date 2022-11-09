import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header/Header";
import Carta from "../components/Cards/Carta";

const Home = () => {
  const [items, setItems] = useState([]);
  const baseUrl = "https://ecomerce-master.herokuapp.com/api/v1";

  useEffect(() => {
    //Incorporacion de axios para leer la Api
    axios
      .get(`${baseUrl}/item`)
      .then((response) => {
        // la llamada a la Api es correcta
        const itemData = response.data;
        setItems(itemData);
        console.log(itemData);
      })
      .catch((error) => {
        // Hubo un error en el llamado a la Api
        console.log(error);
      });
  }, []);
  
  
  return (
    <>
      
      <div className="App container">
        <div className="row">
          {items.map((item) => {
            return (
              <Carta
                id={item._id}
                key={item._id}
                src={item.image}
                name={item.product_name}
                description={item.description}
              ></Carta>
            );
          })}
        </div>
      </div>

      {/* <li className="Home">
        {items.map((item) => {
          return <li key={item._id}> {item.product_name} </li>;
        })}
      </li> */}
    </>
  );
};

export default Home;
