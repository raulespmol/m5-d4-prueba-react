import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import { Col, Row } from "react-bootstrap"
import PizzaCard from "../components/PizzaCard"

const Pizzas = () => {
  const {pizzas} = useContext(AppContext)

  return (
    <Row className="g-3">
      <h1>Nuestras Pizzas</h1>
      {pizzas.map(pizza => 
        <Col key={pizza.id} sm={3}>
          <PizzaCard data={pizza} from={'pizzas'} />
        </Col>
      )}
    </Row>
  )
}

export default Pizzas