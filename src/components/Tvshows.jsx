import { useSelector } from "react-redux"
import MovieList from "./MovieList";

const TvShows = () => {
    const tv = useSelector((store) => store.allMovies.tv);
    
    if(!tv) return;

    return (
        <div className="w-full pt-6">
            <h1 className="text-white font-semibold text-xl py-3 px-4">Tv shows</h1>
            <div className="flex w-full overflow-x-auto flex-shrink-0 no-scrollbar">
         {
            tv.map( (movie,idx) => <MovieList movie={movie} key={idx} /> )
         }
       </div>
        </div>  
    )
}

export default TvShows 