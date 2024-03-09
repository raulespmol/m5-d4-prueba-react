import { useContext } from "react"
import { Button, Table } from "react-bootstrap"
import { AppContext } from "../context/AppContext"

const Cart = () => {
  const {cart, setCart} = useContext(AppContext)
  const totalPagar = cart.reduce((acumulador, pizza) => acumulador + pizza.price * pizza.count, 0);

  const cantidad = (id, mode) => {
    const pizzaIndex = cart.findIndex(item => item.id === id)
    const updatedCart = cart.map((item, index) =>
        index === pizzaIndex 
        ? {...item, count: mode == 'suma' ? item.count + 1 : item.count - 1 } 
        : item
      );
    setCart(updatedCart);
    };

  return (
    <>
      <h1>Tu pedido</h1>
      {cart.length ? (
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>Cantidad</th>
            <th>Pizza</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(pizza => {
            return (
              <tr key={pizza.id}>
                <td>
                  <Button 
                  size="sm" 
                  variant="secondary"
                  disabled={pizza.count == 1}
                  onClick={() => cantidad(pizza.id, 'resta')}>
                   - 
                  </Button>
                   {pizza.count} 
                  <Button
                  size="sm"
                  variant="secondary"
                  onClick={() => cantidad(pizza.id, 'suma')}>
                   + 
                  </Button>
                </td>
                <td>{pizza.name}</td>
                <td>${pizza.price * pizza.count}</td>
              </tr>
            )
          })}
          <tr>
            <td colSpan={3} className="text-end">
              <b>Total a pagar:</b> ${totalPagar}
            </td>
          </tr>
        </tbody>
      </Table>
      ) : (
        <p className="fs-3">No has agregado productos al carrito</p>
      )}
    </>
  )
}

export default Cart