import React from "react"
import "./Locations.css"
import { Link } from "react-router-dom"

export const LocationCard = ({ location }) => (
    <section className="location">
        <h2>
            <Link to={`/location/detail/${location.id}`}>
                {location.name}
            </Link>
        </h2>
        <div className="location__employees">{location.employees.length} Employees</div>
        <div className="location__animals">{location.animals.length} Animals</div>
    </section>
)