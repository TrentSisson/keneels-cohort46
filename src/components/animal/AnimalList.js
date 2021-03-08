import { React, useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import { LocationContext } from "../locations/LocationsProvider"
import { CustomerContext } from "../customers/CustomerProvider"
import { AnimalCard } from "./AnimalCard"
import "./Animal.css"
import { useHistory } from "react-router-dom"

export const AnimalList = () => {
  // This state changes when `getAnimals()` is invoked below
  const { animals, getAnimals } = useContext(AnimalContext)
  const { locations, getLocations } = useContext(LocationContext)
  const { customers, getCustomers } = useContext(CustomerContext)

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("AnimalList: useEffect - getAnimals")
    getLocations()
      .then(getCustomers)
      .then(getAnimals)

  }, [])

  const history = useHistory()


  return (
    <>
      <h2>Animals</h2>
      <button onClick={() => { history.push("/animals/create") }}>
        Add Animal
    </button>

      <div className="animals">
        {
          animals.map(animal => {
            const owner = customers.find(customer => customer.id === animal.customerId)
            const clinic = locations.find(location => location.id === animal.locationId)

            return <AnimalCard key={animal.id}
              location={clinic}
              customer={owner}
              animal={animal}

            />
          })
        }
      </div>
    </>
  )
}