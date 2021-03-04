import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalList } from "./animal/AnimalList"
import { AnimalProvider } from "./animal/AnimalProvider"
import { CustomerProvider } from "./customers/CustomerProvider"
import { CustomerList } from  "./customers/CustomerList"

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <Route exact path="/animals">
                <AnimalProvider>
                    <AnimalList />
                </AnimalProvider>
            </Route>
            {/* <Route path="/locations">
                <LocationProvider>
                    <LocationList />
                </LocationProvider>
            </Route> */}
            <Route path="/customers">
                <CustomerProvider>
                    <CustomerList />
                </CustomerProvider>
            </Route>
            {/* <Route path="/employees">
                <EmployeeProvider>
                    <EmploeeList />
                </EmployeeProvider>
            </Route> */}
        </>
    )
}