import { Card } from "react-bootstrap"


const PizzaCard = ({data}) => {
  const {desc, img, ingredients, name, price} = data

  return (
    <Card className="h-100">
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {desc}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Card.Text>{price}</Card.Text>
      </Card.Footer>
    </Card>
  )
}

export default PizzaCard