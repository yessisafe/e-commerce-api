import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Producto from '../pages/Producto'
import Login from '../pages/Login'


const RoutesIndex = () => {
  return (
    <Routes>
        <Route  path='/' element={<Home />} />
        <Route  path='/producto' element={<Producto />} />
        <Route  path='/login' element={<Login />} />
    </Routes>
  )
}

export default RoutesIndex