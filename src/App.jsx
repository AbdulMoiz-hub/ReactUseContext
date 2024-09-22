import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import First from "./components/First";
import { TagsProvider } from "./Context/TagsContext";

function App() {
    return (
        <>
            <div>
                <TagsProvider>
                    <First />
                </TagsProvider>
            </div>
        </>
    );
}

export default App;
