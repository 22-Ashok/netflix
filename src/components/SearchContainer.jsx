import { useSelector } from "react-redux";
import MovieList from './MovieList'
const SearchContainer = () => {
    const searchMovies = useSelector((store) => store.Searchmovies);

    return (
      <div className='flex flex-wrap pt-32 items-center justify-center w-screen min-h-screen'>
       { searchMovies.length >0 && searchMovies.map((movie,idx) => <MovieList key={idx} movie={movie} /> ) }
      </div>
    )
}

export default SearchContainer; 