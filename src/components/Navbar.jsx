import { Container, Navbar as BNavbar, Nav } from "react-bootstrap"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  const setActiveClass = ({isActive}) => isActive ? 'active' : ''
  return (
    <BNavbar bg="dark" fixed="top">
      <Container>
        <Nav>
          <NavLink to="/" className={setActiveClass}>
            Home
          </NavLink>
          <NavLink to="/pizza" className={setActiveClass}>
            Pizzas
          </NavLink>
        </Nav>
        <Nav>
          <NavLink to="/cart" className={setActiveClass}>
            Cart
          </NavLink>
        </Nav>
      </Container>
    </BNavbar>
  )
}

export default Navbar