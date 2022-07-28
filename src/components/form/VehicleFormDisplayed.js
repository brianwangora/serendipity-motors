import React, {useState}from "react";
import Header from "../header/Header";
import VehicleFormDefined from "./VehicleFormDefined";

export default function VehicleFormDisplayed() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    function handleDarkModeClick() {
      setIsDarkMode((isDarkMode) => !isDarkMode);
    }

    return(
        <div className="container">
            <div className={"App " + (isDarkMode ? "dark" : "light")}>
                <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
                <VehicleFormDefined/>
            </div>
        </div>
    )
}