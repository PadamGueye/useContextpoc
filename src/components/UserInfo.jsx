import { useContext } from "react";
import {ThemedContext, UserContext} from "../App"

function UserInfo() {
    const userName = useContext(UserContext);
    const themed = useContext(ThemedContext);


    return <span>{userName} : le theme est {themed.theme}</span>;
  
}

export default UserInfo;