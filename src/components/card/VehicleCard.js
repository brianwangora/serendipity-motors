import React from "react";
import { Link } from "react-router-dom";

export default function VehicleCard({carName, carImage, carId}) {
    return(
        <div className="card" style={{width: 18 + 'rem'}}>
            <img src={carImage} className="card-img-top" alt={carName} />
            <div className="card-body">
                <h5 className="card-title">{carName}</h5>
                <Link to={"/inventory/"+carId} className="btn btn-primary">DETAILS</Link>
            </div>
        </div>
    )
}