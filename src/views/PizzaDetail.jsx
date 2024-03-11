import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import PizzaCard from '../components/PizzaCard';
import { Row, Col, Card } from 'react-bootstrap';

const PizzaDetail = () => {
  const { pizzaName } = useParams();
  const { pizzas, formatName } = useContext(AppContext);
  const selectedPizza = pizzas.find(pizza => pizza.name === pizzaName);

  if (!selectedPizza) {
    return <div>No se encontró la pizza seleccionada</div>;
  }

  const {name, img, desc, ingredients, price } = selectedPizza

  return (
    <>
      <Row className='pt-3'>
        <Col lg={6} xl={5}>
          <Card>
            <Card.Img src={img}/>  
          </Card>        
        </Col>
        <Col lg={6} xl={7}>
          <h2 className='text-center mb-3'>{formatName(name)}</h2>
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
        </Col>
      </Row>
      {/* <Row>
        <Col>
          <PizzaCard pizza={selectedPizza} from={'detail'}/>
        </Col>
      </Row> */}
    </>
  );
};

export default PizzaDetail;
