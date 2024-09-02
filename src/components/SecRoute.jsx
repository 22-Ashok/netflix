import Header from './Header'
import PopularContainer from "./Popular"
import TopRatedContainer from './TopRatedContainer'
import UpCommingContainer from './UpComming'
import TvShows from './Tvshows'
import TvShows2 from './TvShows2'
import TvShows3 from './TvShows3'
import TvShows4 from './TvShows4'
import TvShows5 from './TvShows5'

const SecRoute = () => {

    return (
        <div className="bg-[#232424] w-screen min-h-screen">
          <Header />
          <div className="py-10">
          <TvShows />
          <TvShows2 />
          <TvShows3 />
          <TvShows4 />
          <TvShows5 />
          </div>
         
        </div>
    )
}

export default SecRoute