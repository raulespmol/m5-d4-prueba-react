import { Card } from "react-bootstrap"


const PizzaCard = ({data, from}) => {
  const {desc, img, ingredients, name, price} = data

  const formatName = name => {
    const words = name.split(' ')
    const capitalized = words.map(w => w[0].toUpperCase() + w.slice(1))
    return capitalized.join(' ')
  }

  return(
    from === 'home' ? (
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
    ) : from === 'pizzas' ? (
      <Card className="h-100">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
            <ul>
              {ingredients.map((ing, index) => <li key={index}>{formatName(ing)}</li>)}
            </ul>
        </Card.Body>
        <Card.Footer>
          <Card.Text>{price}</Card.Text>
        </Card.Footer>
      </Card>
    ) : null
  )
  
  
}

export default PizzaCard