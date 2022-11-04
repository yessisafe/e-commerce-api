import { useEffect, useState } from "react"
import axios from 'axios'


const Items = () => {
    const [items, setItems] = useState ([]);

    useEffect( ()=> {
        //Incorporacion de axios para leer la Api
        axios.get('https://ecomerce-master.herokuapp.com/api/v1/item')
        .then(function (response) {
        // la llamada a la Api es correcta
         console.log(response);
         })
        .catch(function (error) {
         // Huno un error en el llamado a la Api
        console.log(error);
    });
    }, []);

}

