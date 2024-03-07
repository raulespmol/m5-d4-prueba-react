//components
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'

//views
import Home from './views/Home'
import Pizzas from './views/Pizzas'
import PizzaDetail from './views/PizzaDetail'
import Cart from './views/Cart'
import NotFound from './views/NotFound'

//context
import ContextProvider from './context/AppContext'

//styles
import './App.css'
import { Container } from 'react-bootstrap'

function App() {

  return (
    <ContextProvider>
      <Navbar />
      <Container className='bg-white'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pizza" element={<Pizzas />} />
          <Route path="/pizza/:name" element={<PizzaDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </ContextProvider>
  )
}

export default App
