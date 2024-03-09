import { useContext } from "react"
import { Button, Card, ListGroup } from "react-bootstrap"
import { AppContext } from "../context/AppContext"


const PizzaCard = ({pizza, from}) => {
  const {desc, img, ingredients, name, price} = pizza
  const {cart, setCart} = useContext(AppContext)

  const formatName = name => {
    const words = name.split(' ')
    const capitalized = words.map(w => w[0].toUpperCase() + w.slice(1))
    return capitalized.join(' ')
  }

  const addCart = () => {
    const pizzaIndex = cart.findIndex(item => item.id === pizza.id)
    if (pizzaIndex !== -1) {
      const updatedCart = cart.map((item, index) =>
        index === pizzaIndex ? { ...item, count: item.count + 1  } : item
      );
      setCart(updatedCart);
    } else {
      const updatedPizza = { ...pizza, count: 1 };
      const updatedCart = [...cart, updatedPizza ];
      setCart(updatedCart);
    }
  }

  return(
    from === 'home' ? (
      <Card className="h-100">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title className="m-0">{formatName(name)} - ${price}</Card.Title>
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
          <Button onClick={addCart}>Agregar</Button>
        </Card.Footer>
      </Card>
    ) : from === 'detail' ? (
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
          <Button onClick={addCart}>Agregar</Button>
        </Card.Footer>
      </Card>
    ) : null
  )
  
  
}

export default PizzaCard