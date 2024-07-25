import { useState, useEffect, useRef } from 'react'

export function useSearch () {

    const [search, updateSearch] = useState('')
    const [errors, setErrors] = useState(null)
    const isFirstInput = useRef(true)

    useEffect(() => {
        if(isFirstInput.current){
            isFirstInput.current = search === ''
            return
        }
        if(search === ''){
            setErrors('Escribe algo para buscar')
            return
        }
        if(search.match(/^\d+$/)){
            setErrors('No se puede buscar una pelicula con numeros')
            return
        }
        if(search?.length < 3){
            setErrors('Escribe al menos 3 caracteres')
            return
        }

        setErrors(null)

    }, [search])
    return {search, updateSearch, errors}
}