import { useDispatch } from "react-redux";
import { addMovie } from "../redux/slices/currentMovei";

const MovieList = ({movie}) => {
     const dispatch = useDispatch();
     const{poster_path, id} = movie;
   
     const toggle = () => {
        dispatch(addMovie(movie));
     }

    return (
        <>
        <div onClick={toggle} >
          <div className="w-60 h-40 bg-no-repeat bg-cover mx-1">
               <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt='missing' className="h-full w-full bg-cover"></img>
           </div>
        </div>
        </>
        
    )
}

export default MovieList 
