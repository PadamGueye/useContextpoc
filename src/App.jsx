import { createContext, useState } from "react";
import Layout from "./components/Layout";

export const UserContext = createContext('Unknown');
export const ThemedContext = createContext("light");

const  App = ()=> {
  const userName = "John Brown";
  const [theme, setTheme] = useState("light");

  return (
    <ThemedContext.Provider value={{theme, setTheme}} >
        <UserContext.Provider value={userName}>
        <Layout>
            Main content
        </Layout>
        </UserContext.Provider>
    </ThemedContext.Provider>
  );
}

export default App;