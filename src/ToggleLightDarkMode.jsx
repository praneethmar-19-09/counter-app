import { useState } from "react";
import './App.css';
// A simple toggle button to switch between light mode and dark mode.

export default function ToggleLightDarkMode() {

    const [dark,setDark] = useState(false);
    
    return (
        <div className={dark ? "dark-mode" : "light-mode"}>
            <button onClick={() => setDark(!dark)}>
                Toggle to {dark ? "Light" : "Dark"} Mode
            </button>
        </div>
    );

}
