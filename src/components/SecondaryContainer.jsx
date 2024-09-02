import NowPlayingContainer from "./NowPlayingContainer"
import PopularContainer from "./Popular"
import TopRatedContainer from './TopRatedContainer'
import UpCommingContainer from './UpComming'

const SecondaryContainer = () => {
    

    return (
        <div className="bg-[#131313] z-30 w-screen mt-[100vh] px-10 max-md:px-4">
           <NowPlayingContainer  /> 
           <PopularContainer  />
           <TopRatedContainer  />
           <UpCommingContainer  />
        </div>
    )
}

export default SecondaryContainer 