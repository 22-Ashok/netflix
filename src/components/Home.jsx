import Header from "./Header"
import PrimaryContainer from "./PrimaryContainer"
import SecondaryContainer from "./SecondaryContainer"
import CommanPlayer from "./CommanPlayer"
import { useSelector } from "react-redux"
import SearchContainer from "./SearchContainer"

const Home = () => {
    const popUp = useSelector((store) => store.current.movieDetail);
    const searchMovies = useSelector((store) => store.Searchmovies);

    return (
      <div className={searchMovies.length>0 && 'bg-[#131313]'}>
      <Header />
      {searchMovies && searchMovies.length > 0 ? ( 
        <>
          <SearchContainer />
          {popUp && <CommanPlayer />}
      </>

      ) : (
        <>
          <PrimaryContainer />
          <SecondaryContainer />
          {popUp && <CommanPlayer />}
        </>
      )}
    </div>
    )
}

export default Home  