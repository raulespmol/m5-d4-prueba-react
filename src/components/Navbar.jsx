import { Container, Navbar as BNavbar, Nav } from "react-bootstrap"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  const setActiveClass = ({isActive}) => isActive ? 'active' : ''
  return (
    <BNavbar bg="dark">
      <Container>
        <div>
          <NavLink to="/" className={setActiveClass}>
            Home
          </NavLink>
          <NavLink to="/pizza" className={setActiveClass}>
            Pizzas
          </NavLink>
        </div>
        <div>
          <NavLink to="/cart" className={setActiveClass}>
            Cart
          </NavLink>
        </div>
      </Container>
    </BNavbar>
  )
}

export default Navbar