import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "./LocationsProvider"
import "./Locations.css"
import { useParams, useHistory } from "react-router-dom"

export const LocationDetail = () => {
    const {getLocationById} = useContext(LocationContext)
    const [locations, setLocations] = useState({})
    const {locationId} = useParams()
    const history = useHistory()

    useEffect(()=>{
        getLocationById(locationId)
        .then(res =>{
            setLocations(res)
        })
    },[])

  return (
    <section className="location">
      <h2 className="location__name">{locations.name}</h2>
      <h3>Address</h3>
      <address className="location__address">{locations.address}</address>
      <h2>Animals</h2>
       <div className="location__animals">{locations.animals?.map(animal => <li key ={animal.id}>{animal.name}</li>)}</div>
       <h2>Employees</h2>
       <div className="location__employees">{locations.employees?.map(employee => <li key ={employee.id}>{employee.name}</li>)}</div>
    </section>
  )
}