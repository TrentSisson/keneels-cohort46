import React from "react"
import "./Animal.css"

export const AnimalCard = ({ animal, customer, location }) => (
    <section className="animal">
        <h2 className="animal__name">Name: {animal.name}</h2>
        <p className="animal__breed">Breed: {animal.breed}</p>
        <address className="location__address">Location: {location.name}</address>
        <h3 className="customer__name">Customer: {customer.name}</h3>
    </section>
)
