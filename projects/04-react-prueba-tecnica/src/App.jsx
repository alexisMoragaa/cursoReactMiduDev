import { useEffect, useState } from "react";


export function App() {

    const [fact, setFact] = useState(null);
    const [firstsWords, setFirstsWords] = useState(null);
    const [imageURL, setImageURL] = useState(null);

    const CAT_ENDOOIND_RANDOM_FACT = "https://catfact.ninja/fact";
    const CAT_ENDOOIND_RANDOM_IMAGE = `https://cataas.com/cat/says/${firstsWords}?size=50&color=red`;
    
    useEffect( () => {

        fetch(`${CAT_ENDOOIND_RANDOM_FACT}`)
        .then(res => res.json())
        .then((data) =>  {

            const { fact } = data;
            setFact(fact);

            const firstsWords = fact.split(" ",3).join(" ");
            setFirstsWords(firstsWords);
        })


    }, []);


    useEffect(() => {

        // fetch(`${CAT_ENDOOIND_RANDOM_IMAGE}`)
        // .then(res => res.json())
        // .then(data => {
        //     console.log(data)
        // })
        setImageURL(CAT_ENDOOIND_RANDOM_IMAGE)
    }, [firstsWords]);

    return (
        <main>

            <h1>App de Gatitos</h1>
            {fact && <p>{fact}</p>}
            {imageURL && <img src={imageURL} alt="Gatito"/>}
        </main>
    );
}