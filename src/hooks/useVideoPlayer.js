import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addYtTrailer, removeMovie } from "../redux/slices/currentMovei";

const useVideoPlayer = () => {
  const movie = useSelector((store) => store.current.movieDetail);
  const dispatch = useDispatch();

  if(!movie) return;

   const{id} = movie;

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOTYwNDJiMjRlNDkwODcxYzdhYjc1MWQ3OWFlNWY0NSIsIm5iZiI6MTcyNTI3NDA5Mi41ODE3MzcsInN1YiI6IjY2YmEwNTdkM2UyZWU5ZTdhY2I3NjFlMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3zFyrlTKtm_uItfRwI1vF7RT4iX5uGZV41NXUlueaKg'
    }
  };
  
  const movieTrailer = async () => {
    try{
      const fetchData = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos`,options);
      const json = await fetchData.json();
      const results = json.results;

      if(results && results.length>0) {
        const trailer = results.find((movie) => movie.type === 'Trailer');
         trailer ? dispatch(addYtTrailer(trailer)) : dispatch(addYtTrailer(results[0]));

      } else {
        //dispatch(removeMovie());
        secondCall()
      }  
    } 
    catch (error) { 
      secondCall();
    }    
  }

  const secondCall = async () => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/tv/${id}/videos?api_key=396042b24e490871c7ab751d79ae5f45`);
      const json = await response.json();
      const results = json.results;
      
      if (results && results.length > 0) {
        const trailer = results.find((movie) => movie.type === 'Trailer');
        trailer ? dispatch(addYtTrailer(trailer)) : dispatch(addYtTrailer(results[0]));
      } else {
        dispatch(removeMovie());
      }
    } catch (error) {
      dispatch(removeMovie());
    }
  };

  useEffect(() => {
   movieTrailer()  
  },[id])
}

export default useVideoPlayer 