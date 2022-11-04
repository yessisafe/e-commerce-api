import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'



/* Importar BrowserRouter, que dota a mi App de poder manejar rutas.
Debe estar en un componente superior, para que este disponible a toda su descendencia */
import{ BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter>
    <App />
    
    </BrowserRouter>

  </React.StrictMode>
)
