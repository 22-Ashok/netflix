import Header from './Header'
import PopularContainer from "./Popular"
import TopRatedContainer from './TopRatedContainer'
import UpCommingContainer from './UpComming'
import { useSelector } from "react-redux"
import CommanPlayer from "./CommanPlayer"

const ForthRoute = () => {
  const popUp = useSelector((store) => store.current.movieDetail )
  return (
    <div className="bg-[#232424] w-screen min-h-screen px-8">
      <Header />
      <div className="py-10">
      <PopularContainer />
      <TopRatedContainer />
      <UpCommingContainer />
      { popUp && <CommanPlayer /> }
      </div>
     
    </div>
)
}

export default ForthRoute