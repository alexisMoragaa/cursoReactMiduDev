
const CAT_ENDOOIND_RANDOM_FACT = "https://catfact.ninja/fact";
export const getRandomFact = () => {
    
    return fetch(`${CAT_ENDOOIND_RANDOM_FACT}`)
    .then(res => res.json())
    .then((data) =>  {
        return data.fact  
    })
}