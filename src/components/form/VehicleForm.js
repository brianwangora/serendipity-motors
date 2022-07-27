import React, {useState}from "react";
import Header from "../header/Header";

export default function VehicleForm(){
    const [isDarkMode, setIsDarkMode] = useState(false);

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