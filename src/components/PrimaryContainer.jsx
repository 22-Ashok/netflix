// import useAllMovies from "../hooks/useAllMovies"
import { useSelector } from "react-redux";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoIcon from '@mui/icons-material/Info';

const PrimaryContainer = () => {
    // useAllMovies();
    const nowPlay = useSelector((store) => store.allMovies.nowPlaying);
    if(!nowPlay) return;

    const mainMovie = nowPlay[0];
    const{id, overview, poster_path, original_title, release_date, vote_average} = mainMovie;
    const imageUrl = `https://image.tmdb.org/t/p/original/${poster_path}`;

    return (
        <div
        className="bg-cover bg-center h-screen w-screen absolute top-0 -z-50"
        style={{  backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${imageUrl})` }}
    >
        <div className="pt-44 w-1/2 pl-10 max-lg:w-8/12 max-sm:w-11/12">
            <h1 className="text-white text-3xl font-bold py-2 max-lg:text-3xl max-sm:text-xl">{original_title}</h1>
            <p className="text-white max-lg:text-sm max-sm:text-[12px]">{overview}</p>
            <button className="text-black my-5 w-20 h-9 bg-white rounded-md mx-2 font-semibold"><PlayArrowIcon /> Play</button>
            <button className="text-white my-5 w-28 h-9 bg-[#565757] rounded-md font-semibold"> <InfoIcon />More Info</button>
        </div>
    </div>
    )
}

export default PrimaryContainer 

//https://image.tmdb.org/t/p/original/
