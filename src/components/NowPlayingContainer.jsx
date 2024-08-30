import { useSelector } from "react-redux"
import MovieList from "./MovieList";

const NowPlayingContainer = () => {
    const nowPlaying = useSelector((store) => store.allMovies.nowPlaying);
    
    if(!nowPlaying) return;

    return (
      <div className="w-full relative">
        <div className="absolute -top-[185px] w-full">
        <h1 className="text-white font-semibold text-xl py-2"> Now Playing </h1>
          <div className="flex w-full overflow-x-auto flex-shrink-0 no-scrollbar">
         {
            nowPlaying.map( (movie,idx) => <MovieList movie={movie} key={idx} /> )
         }
       </div>
        </div>
         
      </div>
       
    )
}

export default NowPlayingContainer 

//flex w-full overflow-x-auto no-scrollbar space-x-4