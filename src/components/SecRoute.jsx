import Header from './Header'
import TvShows from './Tvshows'
import TvShows2 from './TvShows2'
import TvShows3 from './TvShows3'
import TvShows4 from './TvShows4'
import TvShows5 from './TvShows5'
import { useSelector } from "react-redux"
import CommanPlayer from "./CommanPlayer"
import Footer from './Footer'


const SecRoute = () => {
  const popUp = useSelector((store) => store.current.movieDetail );
    return (
        <div className="bg-[#131313] w-screen min-h-screen">
          <Header />
          <div className="py-10">
          <TvShows />
          <TvShows2 />
          <TvShows3 />
          <TvShows4 />
          <TvShows5 />
          { popUp && <CommanPlayer /> }
          </div>
        <Footer />
        </div>
    )
}

export default SecRoute 