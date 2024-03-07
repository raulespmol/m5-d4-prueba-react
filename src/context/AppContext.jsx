import { createContext, useEffect, useState } from "react";

export const AppContext = createContext()

const ContextProvider = ({children}) => {
  const [pizzas, setPizzas] = useState([])
  const [cart, setCart] = useState([])

  const getPizzas = async () => {
    fetch('/pizzas.json')
    .then(response => response.json())
    .then(data => data.map(item => ({...item, count: 0}) ))
    .then(newData => setPizzas(newData))
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