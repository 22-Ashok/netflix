import { useSelector } from "react-redux"
import MovieList from "./MovieList";

const TopRatedContainer = () => {

    const topRated = useSelector((store) => store.allMovies.topRated);
    
    if(!topRated) return;

    return (
        <div className="w-full pt-6">
            <h1 className="text-white font-semibold text-xl py-3 px-4">Top Rated</h1>
            <div className="flex w-full overflow-x-auto flex-shrink-0 no-scrollbar">
         {
            topRated.map( (movie,idx) => <MovieList movie={movie} key={idx} /> )
         }
       </div>
        </div>
      
    )
}

export default TopRatedContainer 