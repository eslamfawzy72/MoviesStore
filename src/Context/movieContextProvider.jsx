import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'
export const moviesContext=createContext()
 
const MoviesContextProvider = ({ children }) => {
    const [moviesArr, setMoviesArr] = useState([])
    const [filteredMovies, setFilteredMovies] = useState(null)
    const [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7")
        .then(res => setMoviesArr(res.data.results))
        .catch(() => console.log("Can't fetch data!"))
    }, [])

    const searchMovies = (term) => {
        if (term.trim() === "") {
            setFilteredMovies(null);
            return;
        }
        const filtered = moviesArr.filter(movie =>
            movie.title.toLowerCase().includes(term.toLowerCase())
        );
        setFilteredMovies(filtered);
    }

    return (
        <moviesContext.Provider value={{ 
            moviesArr, 
            setMoviesArr, 
            filteredMovies, 
            searchTerm, 
            setSearchTerm,
            searchMovies 
        }}>
            {children}
        </moviesContext.Provider>
    )
}
export default MoviesContextProvider