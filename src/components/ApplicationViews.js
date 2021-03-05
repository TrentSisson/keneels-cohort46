import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalList } from "./animal/AnimalList"
import { AnimalProvider } from "./animal/AnimalProvider"
import { CustomerProvider } from "./customers/CustomerProvider"
import { CustomerList } from  "./customers/CustomerList"
import { EmployeeList } from "./employees/EmployeesList"
import { EmployeeProvider } from "./employees/EmployeeProvider"
import { LocationProvider } from "./locations/LocationsProvider"
import { LocationList } from "./locations/LocationList"



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
                    <CustomerProvider>
                        <Route exact path="/animals">
                            <AnimalList />
                        </Route>
                    </CustomerProvider>
                </LocationProvider>
            </AnimalProvider>
            <Route path="/locations">
                <LocationProvider>
                    <LocationList />
                </LocationProvider>
            </Route>
            <Route path="/customers">
                <CustomerProvider>
                    <CustomerList />
                </CustomerProvider>
            </Route>
            <Route path="/employees">
                <EmployeeProvider>
                    <EmployeeList />
                </EmployeeProvider>
            </Route>
        </>
    )
}