import { useContext } from "react"
import { Table } from "react-bootstrap"
import { AppContext } from "../context/AppContext"

const Cart = () => {
  const {cart} = useContext(AppContext)
  const totalPagar = cart.reduce((acumulador, pizza) => acumulador + pizza.price * pizza.count, 0);

  return (
    <>
      <h1>Tu pedido</h1>
      {cart.length ? (
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>Cant</th>
            <th>Pizza</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(pizza => {
            return (
              <tr key={pizza.id}>
                <td>{pizza.count}</td>
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