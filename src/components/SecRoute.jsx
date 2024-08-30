import Header from './Header'
import PopularContainer from "./Popular"
import TopRatedContainer from './TopRatedContainer'
import UpCommingContainer from './UpComming'
import TvShows from './Tvshows'
const SecRoute = () => {

    return (
        <div className="bg-[#232424] w-screen min-h-screen px-8">
          <Header />
          <div className="py-10">
          <TvShows />
          <PopularContainer />
          <TopRatedContainer />
          <UpCommingContainer />
          </div>
         
        </div>
    )
}

export default SecRoute