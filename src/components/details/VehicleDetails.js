import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const VEHICLE_INFO = "https://salty-brook-11310.herokuapp.com/cars/"

export default function VehicleDetails(){
    const [image, setImage] = useState("")
    const [name, setName] = useState("")
    const [year, setYear] = useState("")
    const [engine, setEngine] = useState("")
    const [mileage, setMileage] = useState("")
    const [location, setLocation] = useState("")
    const [price, setPrice] = useState("")

    let {vehicleId} = useParams()

    const actualInfo = VEHICLE_INFO + vehicleId

    const vehicleFetcher = () => {
        fetch (actualInfo)
            .then((response) => response.json())
            .then((car) => {
                setImage(car.image)
                setName(`${car.make} ${car.model}`)
                setYear(car.year)
                setEngine(car.engine)
                setMileage(car.mileage)
                setLocation(car.location)
                setPrice(car.price)
            })
    }

    useEffect(
        vehicleFetcher, []
    )

    return(
        <div className="container">
            <center>
                <h2>{name}</h2>
                <img src={image} style={{height: 250 + 'px', width: 300 + 'px',}} alt={name} />
                <p>Important information about this {name};</p>
                <p>Year of Manufacture: {year},</p>
                <p>Engine: {engine},</p>
                <p>Mileage: {mileage},</p>
                <p>Location: {location},</p>
                <p>Price: {price},</p>
            </center>
        </div>
    )
}