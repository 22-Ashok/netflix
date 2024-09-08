import { useEffect, useState } from "react";

const useSearchMovie = (movie,delay) => {
    
   const [debouncedValue, setDebouncedValue] = useState(movie);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(movie);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [movie, delay]);

  return debouncedValue;
  
}

export default useSearchMovie 