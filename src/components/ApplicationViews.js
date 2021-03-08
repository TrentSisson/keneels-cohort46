import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalList } from "./animal/AnimalList"
import { AnimalProvider } from "./animal/AnimalProvider"
import { CustomerProvider } from "./customers/CustomerProvider"
import { CustomerList } from "./customers/CustomerList"
import { EmployeeList } from "./employees/EmployeesList"
import { EmployeeForm } from "./employees/EmployeeForm"
import { EmployeeProvider } from "./employees/EmployeeProvider"
import { LocationProvider } from "./locations/LocationsProvider"
import { LocationList } from "./locations/LocationList"
import { AnimalForm } from "./animal/AnimalForm"
import { LocationForm } from "./locations/LocationForm"


export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <AnimalProvider>
                <LocationProvider>
                    <EmployeeProvider>
                        <Route path="/employees">
                            <EmployeeList />
                        </Route>
                        <Route exact path="/location/create">
                            <LocationForm />
                        </Route>
                        <Route exact path="/employee/create">
                            <EmployeeForm />
                        </Route>
                        <CustomerProvider>
                            <Route exact path="/animals">
                                <AnimalList />
                            </Route>
                            <Route exact path="/animals/create">
                                <AnimalForm />
                            </Route>
                            <Route path="/locations">
                                <LocationList />
                            </Route>
                            <Route path="/customers">
                                <CustomerList />
                            </Route>
                        </CustomerProvider>
                    </EmployeeProvider>
                </LocationProvider>
            </AnimalProvider>
        </>
    )
}