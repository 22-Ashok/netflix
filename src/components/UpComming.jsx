import { useSelector } from "react-redux"
import MovieList from "./MovieList";


const UpCommingContainer = () => {
    const upComming = useSelector((store) => store.allMovies.upComming);
    if(!upComming) return;

    return (
        <div className="w-full pt-6">
            <h1 className="text-white font-semibold text-xl py-3 px-4">Up Comming</h1>
            <div className="flex w-full overflow-x-auto flex-shrink-0 no-scrollbar">
         {
            upComming.map( (movie,idx) => <MovieList movie={movie} key={idx} /> )
         }
       </div>
        </div>
      
    )
}

export default UpCommingContainer