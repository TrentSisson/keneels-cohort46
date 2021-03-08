import { React, useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { EmployeeCard } from "./EmployeeCard"
import "./Employee.css"
import { useHistory } from "react-router-dom"

export const EmployeeList = () => {
  // This state changes when `getAnimals()` is invoked below
  const { employees, getEmployees } = useContext(EmployeeContext)

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("EmployeeList: useEffect - getemployee")
    getEmployees()

  }, [])

  const history = useHistory()

  return (
    <>
    <h2>Employees</h2>
      <button onClick={() => { history.push("/employee/create") }}>
        Add Employee
    </button>
    <div className="employees">
      {console.log("EmployeeList: Render", employees)}
      {
        employees.map(employee => {
          return <EmployeeCard key={employee.id} employee={employee} />
        })
      }
    </div>
    </>
  )
}