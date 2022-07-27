import React from "react";

export default function Header({ isDarkMode, onDarkModeClick }) {
    return(
        <header>
            <h1>Serendipity Motors</h1>
            <button onClick={onDarkModeClick}>
                {isDarkMode ? "Dark" : "Light"} Mode
            </button>
        </header>
    )
}