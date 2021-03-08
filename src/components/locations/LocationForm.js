import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "./LocationsProvider"
import "./Locations.css"
import { useHistory, useParams } from 'react-router-dom';

export const LocationForm = () => {
  const { locations, getLocations, addLocation, updateLocation, getLocationById } = useContext(LocationContext)


  /*
  With React, we do not target the DOM with `document.querySelector()`. Instead, our return (render) reacts to state or props.

  Define the intial state of the form inputs with useState()
  */

  const [location, setLocations] = useState({
    name: "",
    address: "",
  });

  const [isLoading, setIsLoading] = useState(true);
  const { locationId } = useParams();
  const history = useHistory();

  /*
  Reach out to the world and get locations state on initialization.
  */
  useEffect(() => {
    
      if (locationId) {
        getLocationById(locationId)
          .then(location => {
            setLocations(location)
            setIsLoading(false)
          })
      } else {
        setIsLoading(false)
      }
    }, [])
  //when a field changes, update state. The return will re-render and display based on the values in state
  //Controlled component
  const handleControlledInputChange = (event) => {
    /* When changing a state object or array,
    always create a copy, make changes, and then set state.*/
    const newLocation = { ...location }
    /* Employee is an object with properties.
    Set the property to the new value
    using object bracket notation. */
    newLocation[event.target.id] = event.target.value
    // update state
    setLocations(newLocation)
  }

  const handleClickSaveLocation = () => {
    if (parseInt(locationId) === 0) {
      window.alert("Please select a location")
    } else {
      setIsLoading(true);

      if (locationId) {
        updateLocation({
          id: location.id,
          name: location.name,
          address: location.address

        })
          .then( history.push(`/location/detail/${location.id}`))
      } else {

        const newLocation = {
          name: location.name,
          address: location.address,

        }
        addLocation(newLocation)
          .then(() => history.push("/locations"))
      }
    }
  }

  return (
    <form className="locationForm">
      <h2 className="employeeForm__title">{locationId ? "Edit Location" : "Add Location"}</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Location name:</label>
          <input type="text" id="name" required autoFocus className="form-control" placeholder="Location name" value={location.name} onChange={handleControlledInputChange} />
        </div>
      </fieldset>


      <fieldset>
        <div className="form-group">
          <label htmlFor="address">Location address:</label>
          <input type="text" id="address" required autoFocus className="form-control" placeholder="Location address" value={location.address} onChange={handleControlledInputChange} />
        </div>
      </fieldset>



      <button className="btn btn-primary" onClick={handleClickSaveLocation}>
        Save Location
          </button>
    </form>
  )
}