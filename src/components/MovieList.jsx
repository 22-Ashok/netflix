const MovieList = ({movie}) => {
    
     const{poster_path} = movie;

    return (
        <div>
          <div className="w-60 h-36 bg-no-repeat bg-cover mx-1" style={{backgroundImage:`url('https://image.tmdb.org/t/p/original/${poster_path}')`}}> </div>
        </div>
    )
}

export default MovieList 