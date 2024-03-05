import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'

import './App.css'
import Home from './views/Home'
import Pizzas from './views/Pizzas'
import PizzaDetail from './views/PizzaDetail'
import Cart from './views/Cart'
import NotFound from './views/NotFound'

function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pizza" element={<Pizzas />} />
        <Route path="/pizza/:name" element={<PizzaDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
