import { createContext, useEffect, useState } from "react";

export const AppContext = createContext()

const ContextProvider = ({children}) => {
  const [pizzas, setPizzas] = useState([])
  const [cart, setCart] = useState([])

  const getPizzas = () => {
    fetch('/pizzas.json')
    .then(response => response.json())
    .then(data => setPizzas(data))
  }

  useEffect(() => {
    getPizzas()
  }, []) 

  return (
    <AppContext.Provider value={{pizzas, cart, setCart}}>
      {children}
    </AppContext.Provider>
  )
}

export default ContextProvider