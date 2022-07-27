import React, { useState } from "react";
import Header from "../header/Header";

export default function Home () {
    const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

    return(
        <div>
            <div className={"App " + (isDarkMode ? "dark" : "light")}>
                <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
                <p>Welcome to Serendipity Motors,</p>
                <p>Kenya's leading luxury car dealership.</p>
                <p>Our purpose is to help you own the luxury car of your dreams.</p>
                <p>Our brands:</p>
                <div id="brands">
                    <img
                        id="mercedes"
                        src="https://www.carlogos.org/logo/Mercedes-Benz-logo-2011-1920x1080.png"
                        alt="Mercedes-Benz"
                    />
                    <img
                        id="toyota"
                        src="https://cdn.mos.cms.futurecdn.net/WpcTavg99b5XpK6STzSLZ8.jpg"
                        alt="Toyota"
                    />
                    <img
                        id="rover"
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/LandRover.svg/360px-LandRover.svg.png"
                        alt="Land Rover"
                    />
                    <img
                        id="porsche"
                        src="https://di-uploads-pod3.dealerinspire.com/porscheoffremont/uploads/2018/09/porsche-logo.jpg"
                        alt="Porsche"
                    />
                    <img
                        id="ford"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ford_logo_flat.svg/440px-Ford_logo_flat.svg.png"
                        alt="Ford"
                    />
                    <img
                        id="bmw"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/BMW_logo_%28gray%29.svg/360px-BMW_logo_%28gray%29.svg.png"
                        alt="BMW"
                    />
                    <img 
                        id="audi"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Audi-Logo_2016.svg/440px-Audi-Logo_2016.svg.png"
                        alt="Audi"
                    />
                    <img
                        id="volkswagen"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Volkswagen_logo_2019.svg/300px-Volkswagen_logo_2019.svg.png"
                        alt="Volkswagen"
                    />
                </div>
            </div>
        </div>
        
    )
}