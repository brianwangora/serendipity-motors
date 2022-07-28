import React, {useState}from "react";
import Header from "../header/Header";

const VEHICLES = "https://salty-brook-11310.herokuapp.com/cars"

export default function VehicleForm({ onAddVehicle }){
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [id, setId] = useState("");
    const [make, setMake] = useState("");
    const [model, setModel] = useState("");
    const [year, setYear] = useState("");
    const [engine, setEngine] = useState("");
    const [mileage, setMileage] = useState("");
    const [location, setLocation] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        const vehicleData = {
            id: id,
            image: image,
            make: make,
            model: model,
            year: year,
            engine: engine,
            mileage: mileage,
            location: location,
            price: price,
        };
        fetch(VEHICLES, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(vehicleData),
        })
            .then((response) => response.json())
            .then((newVehicle) => onAddVehicle(newVehicle));
    }

    function handleDarkModeClick() {
        setIsDarkMode((isDarkMode) => !isDarkMode);
    }
    
    return(
        <div>
            <div className={"App " + (isDarkMode ? "dark" : "light")}>
                <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick}>SERENDIPITY MOTORS</Header>
            </div>
        </div>
    )
}