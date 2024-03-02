import { useContext } from "react";
import { ThemedContext } from "../App";
import Header from "./Header";
import ThemedButton from "./ThemedButton";

function Layout({ children }) {
    const themed = useContext(ThemedContext);

    return (
      <div>
        <Header />
        <main>
          {children} theme : {themed.theme}
        </main>
        <ThemedButton />
      </div>
    );
  }

export default Layout;