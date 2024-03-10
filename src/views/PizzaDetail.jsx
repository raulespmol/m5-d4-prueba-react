import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { AppContext } from "../context/AppContext"
import PizzaCard from "../components/PizzaCard"

const PizzaDetail = () => {
  const { pizzas } = useContext(AppContext)
  let { name } = useParams()

  const selectedPizza = pizzas.filter(pizza => pizza.name == name)

  return (
    // <PizzaCard pizza={selectedPizza} from='detail'/>
    <div>{selectedPizza.price}</div> 
  )
}

export default PizzaDetail