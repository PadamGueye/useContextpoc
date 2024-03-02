import { useContext } from "react";
import { ThemedContext } from "../App";

const ThemedButton = ()=> {
const themed = useContext(ThemedContext);

const handleClick =()=>{
     themed.setTheme( themed.theme === "light" ? "dark" : "light");
}


    return(
        <button onClick={handleClick}>{themed.theme}</button>
    )
}

export default ThemedButton;