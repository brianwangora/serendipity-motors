import React, {useState} from "react";
import Header from "../header/Header";

export default function Contact() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    function handleDarkModeClick() {
        setIsDarkMode((isDarkMode) => !isDarkMode);
      }
      
      return(
        <div className="container">
            <div className={"App " + (isDarkMode ? "dark" : "light")}>
                <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
                <p>You can reach us on:</p>
                <ul>
                    <li>Tel: 0721904875, 0715904875, 0734904875</li>
                    <li>Email: serendipity.motors@gmail.com</li>
                    <li>Facebook, Twitter, Instagram: @Serendipity_Motors</li>
                </ul>
                <span>Visit us at our offices located on the 2nd floor of Adlife Plaza off Ring Road Kilimani on Chania Avenue, Nairobi.</span>
                <h3>Happy Shopping</h3>
            </div>    
        </div>
      )
}