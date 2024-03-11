import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import PizzaCard from '../components/PizzaCard';

const PizzaDetail = () => {
  const { name } = useParams();
  const { pizzas } = useContext(AppContext);
  const selectedPizza = pizzas.find(pizza => pizza.name === name);

  if (!selectedPizza) {
    return <div>No se encontró la pizza seleccionada</div>;
  }

  return (
    <div>
      <PizzaCard pizza={selectedPizza} from={'detail'}/>
    </div>
  );
};

export default PizzaDetail;
