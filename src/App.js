import React, {createContext, useState} from 'react';
import './App.css';
import Counter from "./components/counter";
import Switch from "./components/switch/switch";

export const ThemeContext = createContext("light")
const App = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        setCount(count - 1);
    };
    const [theme, setTheme] = useState("light")
    const switchTheme = () => {
        setTheme((cur) => (cur === "light" ? "dark" : "light"));
    }

    return (
        <ThemeContext.Provider value={theme}>
            <div className='App' id={theme}>
                <Counter
                    count={count}
                    increment={increment}
                    decrement={decrement}
                />
                <Switch
                    onChange={switchTheme}
                />


            </div>
        </ThemeContext.Provider>
    );
};

export default App;

