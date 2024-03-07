import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import { Col, Row, Button } from "react-bootstrap"
import PizzaCard from "../components/PizzaCard"
import { useNavigate } from "react-router-dom"

const Home = () => {
  const {pizzas} = useContext(AppContext)
  const navigate = useNavigate()

  const bestPizzas = pizzas.slice(0, 3)

  return (
    <>
      <div className="hero">
        <h1>Pizzería Mamma Mia!</h1>
        <p className="hero-sub">¡Las mejores pizzas!</p>
      </div>

      <h2 className="text-center mb-5">Las más vendidas</h2>
      <Row className="g-3">
        {bestPizzas.map(pizza => 
          <Col key={pizza.id} sm={4}>
            <PizzaCard data={pizza} from={'home'} />
          </Col>
        )}
      </Row>
      <Row className="d-flex justify-content-center">
        <Button
        variant="dark"
        className="mt-3"
        onClick={() => navigate('/pizza')}>Ver más</Button>
      </Row>
    </>
  )
}

export default Home