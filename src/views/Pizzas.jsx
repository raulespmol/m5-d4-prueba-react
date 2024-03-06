import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import { Col, Row } from "react-bootstrap"
import PizzaCard from "../components/PizzaCard"

const Pizzas = () => {
  const {pizzas} = useContext(AppContext)

  return (
    <Row className="g-3">
      {pizzas.map(pizza => 
        <Col key={pizza.id} sm={4}>
          <PizzaCard data={pizza} />
        </Col>
      )}
    </Row>
  )
}

export default Pizzas