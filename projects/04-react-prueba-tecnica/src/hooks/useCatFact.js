import { useState, useEffect } from "react";
import {getRandomFact} from "../services/fact";

export function useCatFact () {
    const [fact, setFact] = useState(null);

    const refreshFact = () => {
        getRandomFact().then( newFact => setFact(newFact))
    }

    useEffect( refreshFact , []);

    return {fact, refreshFact}
}