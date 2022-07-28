import React, {useState} from "react";

const VEHICLES = "https://salty-brook-11310.herokuapp.com/cars"

export default function VehicleFormDefined({ onAddVehicle }){
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

    return(
                <form className="NewVehicle" onSubmit={handleSubmit} >
                    <p>
                        <label>
                            Make:
                            <input
                                type="text"
                                name="make"
                                value={model}
                                onChange={(e) => setMake(e.target.value)}
                            /> 
                        </label>
                        <label>
                            Model:
                            <input
                                type="text"
                                name="model"
                                value={model}
                                onChange={(e) => setModel(e.target.value)}
                            /> 
                        </label>    
                    </p>
                    <p>
                        <label>
                            Year:
                            <input
                                type="text"
                                name="year"
                                value={year}
                                onChange={(e) => setYear(e.target.value)}
                            /> 
                        </label>
                        <label>
                            Engine:
                            <input
                                type="text"
                                name="engine"
                                value={engine}
                                onChange={(e) => setEngine(e.target.value)}
                            /> 
                        </label>
                    </p>   
                    <p>
                    <label>
                        Mileage:
                        <input
                            type=""
                            name=""
                            value={mileage}
                            onChange={(e) => setMileage(e.target.value)}
                        /> 
                    </label>
                    <label>
                        Location:
                        <input
                            type="text"
                            name="location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        /> 
                    </label>
                    </p>
                    <p>
                        <label>
                            Price: 
                            <input
                                type="text"
                                name="price"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            /> 
                        </label> 
                        <label>
                            Image Link: 
                            <input
                                type="text"
                                name="image"
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                            /> 
                        </label> 
                    </p>
                        <button className="button" type="submit">Add a Vehicle</button>
                </form>
    )
}