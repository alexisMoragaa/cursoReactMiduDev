// import withoutResult from '../mocks/without-result.json'
import { useState, useRef, useMemo, useCallback } from 'react'
import { searchMovies } from '../services/movies'

export function useMovies({search, sort}) {
    
    const [movies, setMovies] = useState([])
    const previousSearch = useRef('')

    const getMovies = useCallback( async ({search}) => {
            if(!search || previousSearch.current === search) return null
    
            try {
                previousSearch.current = search
                const newMovies = await searchMovies({search})
                setMovies(newMovies)
            } catch (error) {
                console.error(error)
            }   
        
    },[search])

    const sortedMovies = useMemo(() => {
        return  sort
        ? [...movies].sort((a,b) => a.title.localeCompare(b.title))
        : movies   
    }, [sort, movies])

    return { movies: sortedMovies, getMovies }
}