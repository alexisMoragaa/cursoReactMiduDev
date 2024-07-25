import {API_KEY} from '../constants/apikeys'

export const  searchMovies = async  ({search}) => {
    
    try {

        const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
        const data = await response.json()
        
        const movies = data.Search

        return  movies?.map( movie => ({
            id: movie.imdbID,
            title: movie.Title,
            year: movie.Year,
            poster: movie.Poster
        }))

    } catch (error) {
        throw new Error('Error al recuperar el listado de peliculas')
    }
}