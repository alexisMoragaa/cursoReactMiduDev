import { useEffect } from "react";
import  "./index.css";
import {useCatImage} from "./hooks/useCatImage";
import {useCatFact} from "./hooks/useCatFact";

export function App() {
    
    const {fact, refreshFact} = useCatFact();
    const {imageURL} = useCatImage({fact});

    const  handleClick = () => {
        refreshFact();
    }

    return (
        <main>
            <h1>App de Gatitos</h1>
            <button onClick={handleClick}>Get New Gatito</button>
            {fact && <p>{fact}</p>}
            {imageURL && <img className="imgGatito" src={imageURL} alt="Gatito"/>}
        </main>
    );
}