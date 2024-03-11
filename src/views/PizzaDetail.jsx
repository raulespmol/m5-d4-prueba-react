import { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { Row, Col, Card, Button } from 'react-bootstrap';

const PizzaDetail = () => {
  const { pizzaName } = useParams();
  const { pizzas, cart, setCart, formatName } = useContext(AppContext);
  const [count, setCount] = useState(1)
  const selectedPizza = pizzas.find(pizza => pizza.name === pizzaName);

  const handleCount = (operator) => {
    if(operator == 'add'){
      setCount(count + 1)
    }
    if(operator == 'sub'){
      count > 1 ? setCount(count - 1) : setCount(count)
    }
  }

  const addCart = () => {
    const pizzaIndex = cart.findIndex(item => item.id === selectedPizza.id)
    if (pizzaIndex !== -1) {
      const updatedCart = cart.map((item, index) =>
        index === pizzaIndex ? { ...item, count: item.count + count  } : item
      );
      setCart(updatedCart);
    } else {
      const updatedPizza = { ...selectedPizza, count: count };
      const updatedCart = [...cart, updatedPizza ];
      setCart(updatedCart);
    }
  }

  if (!selectedPizza) {
    return <h3 className='text-center'>No se encontró la pizza seleccionada</h3>;
  }

  const {name, img, desc, ingredients, price } = selectedPizza

  return (
      <Row className='pt-3'>
        <Col lg={6} xl={5}>
          <Card>
            <Card.Img src={img}/>  
          </Card>        
        </Col>
        <Col lg={6} xl={7}>
          <h2 className='text-center mb-3'>{formatName(name)} - ${price}</h2>
          <hr />
          <p>{desc}</p>
          <ul>
            {ingredients.map((ing, index) => {
              return (
                <li key={index}>
                  {formatName(ing)}
                </li>
              )}
            )}
          </ul>
          <div className='d-flex align-items-center justify-content-between w-100'>
            <div>
              <Button 
              size='sm'
              variant='secondary'
              onClick={() => handleCount('sub')}>
                - 
              </Button>
              <span className='px-3'>{count}</span>
              <Button 
              size='sm'
              variant='secondary'
              onClick={() => handleCount('add')}>
                + 
              </Button>
              <span className='px-3 fs-4'>${count * price}</span>
            </div>
            <Button onClick={() => addCart()}>Añadir</Button>

          </div>
        </Col>
      </Row>
  );
};

export default PizzaDetail;
