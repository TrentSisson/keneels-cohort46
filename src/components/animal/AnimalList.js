import { React, useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import { LocationContext, LocationsContext } from "../locations/LocationsProvider"
import { CustomerContext, CustomerList } from "../customers/CustomerProvider"
import { AnimalCard } from "./AnimalCard"
import "./Animal.css"

export const AnimalList = () => {
  // This state changes when `getAnimals()` is invoked below
  const { animals, getAnimals } = useContext(AnimalContext)
  const { locations, getLocations} = useContext(LocationContext)
  const { CustomerList, getCustomers } = useContext(CustomerContext)

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("AnimalList: useEffect - getAnimals")
    getLocations()
    .then(getCustomers)
    .then(getAnimals)

  }, [])


  return (
    <div className="animals">
      {
        animals.map(animal => {
          return <AnimalCard key={animal.id} animal={animal} />
        })
      }
    </div>
  )
}