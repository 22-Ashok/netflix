import { useSelector } from "react-redux"
import MovieList from "./MovieList";

const PopularContainer = ({movies}) => {
    const popular = useSelector((store) => store.allMovies.popular);
    
    if(!popular) return;

    return (
        <div className="w-full pt-6">
            <h1 className="text-white font-semibold text-xl py-3 px-4">Popular</h1>
            <div className="flex w-full overflow-x-auto flex-shrink-0 no-scrollbar">
         {
            popular.map( (movie,idx) => <MovieList movie={movie} key={idx} /> )
         }
       </div>
        </div>
      
    )
    
}

export default PopularContainer 