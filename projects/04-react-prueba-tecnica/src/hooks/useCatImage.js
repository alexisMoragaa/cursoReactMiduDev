import { useState, useEffect } from "react";

export function useCatImage ({fact}) {
        
    const [imageURL, setImageURL] = useState(null);
    useEffect(() => {
        if (!fact) return

        const firstsWords = fact.split(" ",3).join(" ");
        setImageURL(`https://cataas.com/cat/says/${firstsWords}?size=50&color=red`)

    }, [fact]);

    return {imageURL}
}