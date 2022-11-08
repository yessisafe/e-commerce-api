import { useEffect, useState } from "react"
import axios from 'axios'


const LinkBase = () => {
   
    const [items, setItems] = useState([]);
    const baseUrl = 'https://ecomerce-master.herokuapp.com/api/v1'
    
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

}

