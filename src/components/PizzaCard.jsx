import { Button, Card, ListGroup } from "react-bootstrap"


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
          <Card.Title>{formatName(name)} - ${price}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          {ingredients.map((ing, index) => {
            return (
            <ListGroup.Item key={index}>
              {formatName(ing)}
            </ListGroup.Item>)}
          )}
        </ListGroup>
      </Card>
    ) : from === 'pizzas' ? (
      <Card className="h-100">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{formatName(name)}</Card.Title>
            <ul>
              {ingredients.map((ing, index) => {
               return (
                <li key={index}>
                  {formatName(ing)}
                </li>)}
              )}
            </ul>
        </Card.Body>
        <Card.Footer className="text-center d-flex justify-content-between">
          <h4>${price}</h4>
          <Button>Agregar</Button>
        </Card.Footer>
      </Card>
    ) : null
  )
  
  
}

export default PizzaCard