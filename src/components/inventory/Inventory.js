import React, { useEffect, useState } from "react";
import VehicleCard from "../card/VehicleCard";

const VEHICLES = "https://salty-brook-11310.herokuapp.com/cars"

export default function Inventory(){
    const [cars, setCars] = useState([])

    //fetch from API
    const vehicleFetcher = () => {
        fetch(VEHICLES)
            .then((response) => response.json())
            .then((cars) => {
                setCars(cars)
            })
    }

    useEffect(
        vehicleFetcher, []
    )

    let vehicleCards = cars.map((car) => (<VehicleCard carName={`${car.make} ${car.model}`} carImage={car.image} carId={car.id} key={car.id}/>)) 

    return(
        <div className="container">
            <h1>SERENDIPITY MOTORS</h1>
            <p>Current Inventory Available</p>
            <div className="row">
                {vehicleCards}
            </div>
        </div>
    )

}