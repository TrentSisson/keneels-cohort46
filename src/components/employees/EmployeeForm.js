import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "../locations/LocationsProvider"
import { EmployeeContext } from "./EmployeeProvider"
import "./Employee.css"
import { useHistory, useParams } from 'react-router-dom';

export const EmployeeForm = () => {
    const { addEmployee, updateEmployee, getEmployeeById } = useContext(EmployeeContext)
    const { locations, getLocations } = useContext(LocationContext)


    /*
    With React, we do not target the DOM with `document.querySelector()`. Instead, our return (render) reacts to state or props.
  
    Define the intial state of the form inputs with useState()
    */

    const [employee, setEmployee] = useState({
        name: "",
        locationId: 0,
    });

    const [isLoading, setIsLoading] = useState(true);
    const { employeeId } = useParams();
    const history = useHistory();

    /*
    Reach out to the world and get customers state
    and locations state on initialization.
    */
    useEffect(() => {
        getLocations().then(() => {
            if (employeeId) {
                getEmployeeById(employeeId)
                .then(employee => {
                    setEmployee(employee)
                    setIsLoading(false)
                })
            }else{
                setIsLoading(false)
            }
        })
    }, [])

    //when a field changes, update state. The return will re-render and display based on the values in state
    //Controlled component
    const handleControlledInputChange = (event) => {
        /* When changing a state object or array,
        always create a copy, make changes, and then set state.*/
        const newEmployee = { ...employee }
        /* Employee is an object with properties.
        Set the property to the new value
        using object bracket notation. */
        newEmployee[event.target.id] = event.target.value
        // update state
        setEmployee(newEmployee)
    }

    const handleClickSaveEmployee = () => {
        if (parseInt(employee.locationId) === 0) {
            window.alert("Please select a location")
        } else {
            setIsLoading(true);

            if (employeeId) {
                updateEmployee({
                    id: employee.id,
                    name: employee.name,
                    locationId: parseInt(employee.locationId)

                })
                    .then(() => history.push(`/employees/detail/${employee.id}`))
            } else {

                const newEmployee = {
                    name: employee.name,
                    locationId: parseInt(employee.locationId),

                }
                addEmployee(newEmployee)
                    .then(() => history.push("/employees"))
            }
        }
    }
    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">{employeeId ? "Edit Employee" : "Add Employee"}</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Employee name:</label>
                    <input type="text" id="name" required autoFocus className="form-control"
                        placeholder="Employee name"
                        onChange={handleControlledInputChange}
                        value={employee.name} />

                    {console.log(employee.name)}
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Assign to location: </label>
                    <select name="locationId" id="locationId" className="form-control" value={employee.locationId} onChange={handleControlledInputChange}>
                        <option value="0">Select a location</option>
                        {locations.map(l => (
                            <option key={l.id} value={l.id}>
                                {l.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>

            <button className="btn btn-primary" onClick={handleClickSaveEmployee}>
                Save Employee
          </button>
        </form>
    )
}