import './App.css'
import { useMovies } from './hooks/useMovies.js'
import { Movies } from './components/Movies.jsx'
import { useSearch } from './hooks/search.js'
import { useState, useCallback } from 'react'
import debounce from 'just-debounce-it'

function App() {

  const [sort, setSort] = useState(false)
  const {search, updateSearch, errors} = useSearch(null)
  const {movies, getMovies} = useMovies({search, sort})
  

  const handleSubmit = (e) => {
    e.preventDefault()
    // if(errors) return  
    getMovies({search})
    
  }

  const handleChange = (e) => {
    const newQuery = e.target.value
    if(newQuery.startsWith(' ')) return
    updateSearch(newQuery)
    debouceGetMovies(newQuery)
  }

  const debouceGetMovies = useCallback( 
    debounce(search => getMovies({search}), 500)
  , [])

  const handleSort = () => {
    setSort(!sort)
  }

  

  return (
    <div className='page'>
      
      <header>
        <h1>Buscador de películas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input name="query" onChange={handleChange} value={search} type='text' className='input' placeholder='Avenger, Star Wars, The Matrix'/>
          <input type="checkbox"  value={sort} onClick={handleSort}/>
          <button  className='button'>Buscar</button>
        </form>
        {errors && <p style={{color:'red'}}>{errors}</p>}
      </header>
      
      <div className="main">
        <Movies movies={movies}/>
      </div>

    </div>
  )
}

export default App
