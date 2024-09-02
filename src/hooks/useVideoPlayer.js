import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addYtTrailer } from "../redux/slices/currentMovei";

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
     const fetchData = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos`,options);
     const json = await fetchData.json();
     const results = json.results;
     dispatch(addYtTrailer(results[0]));
  }

  useEffect(() => {
     movieTrailer();
  },[id])
}

export default useVideoPlayer 